import fs, { readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { Post } from "../common/types";

interface ImageToReplace {
  localImage: string;
  remoteImage: string;
}

interface BlogPostFolder {
  fullPath: string;
  folderName: string;
}

const blogPostFolder: BlogPostFolder = {
  fullPath: "public/blog-posts",
  folderName: "blog-posts",
};

const postsDirectory = path.join(process.cwd(), blogPostFolder.fullPath);

const getFolderNames = (source: string) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export async function getSortedPostsData() {
  const data: Array<string> = getFolderNames(postsDirectory);

  let promises = [];
  data.forEach(async (dirName) => {
    promises.push(getPostData(dirName));
  });

  let allPostsData: Post[] = await Promise.all(promises);

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const slugs: Array<string> = getFolderNames(postsDirectory);
  return slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath: string = path.join(postsDirectory, slug, `index.md`);
  const fileContents: string = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const contentMarkdown = convertLocalImagesToRemoteImages(
    matterResult.content,
    slug
  );

  const coverImage = matterResult.data.coverImage
    ? `/${blogPostFolder.folderName}/${slug}/images/${matterResult.data.coverImage}`
    : null;

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    contentMarkdown,
    ...(matterResult.data as Post),
    coverImage,
  };
}

const convertLocalImagesToRemoteImages = (
  article: string,
  slug: string
): string => {
  const imagesRe: RegExp = /\!\[.*\]\(\.\/.*\)/g;
  const imageRe: RegExp = /\!\[(.*)\]\(([^ \)]*)(?: '(.*)')?\)/;
  let searchImageResult;
  let localImagesToReplace: ImageToReplace[] = [];

  // tslint:disable-next-line: no-conditional-assignment
  while ((searchImageResult = imagesRe.exec(article))) {
    const [image] = searchImageResult;

    const [_, alt = null, path, title = null] = imageRe.exec(image) || [
      null,
      null,
      null,
      null,
    ];

    if (path) {
      const assetPath = path.substr(2); // Remove "./" infornt of the image url

      localImagesToReplace.push({
        localImage: image,
        remoteImage: `![${alt || ""}](/${
          blogPostFolder.folderName
        }/${slug}/${assetPath}${title ? ` '${title}'` : ``})`,
      });
    }
  }

  return localImagesToReplace.reduce(
    (articleTemp, imageToReplace) =>
      articleTemp.replace(
        imageToReplace.localImage,
        imageToReplace.remoteImage
      ),
    article
  );
};
