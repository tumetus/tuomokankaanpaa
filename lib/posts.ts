import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { Post } from "../common/types";

interface Repository {
  username: string;
  name: string;
}

interface ImageToReplace {
  localImage: string;
  remoteImage: string;
}

const ghRepo: Repository = {
  username: "tumetus",
  name: "tuomokankaanpaa-blog",
};

export async function getSortedPostsData() {
  const res = await fetch(
    `https://raw.githubusercontent.com/${ghRepo.username}/${ghRepo.name}/main/index.json`
  );
  const data: Array<{ path: string }> = await res.json();

  let promises = [];
  data.forEach(async (obj) => {
    promises.push(getPostData(obj.path));
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

export async function getPostData(slug: string): Promise<Post> {
  const postUrl = `https://raw.githubusercontent.com/${ghRepo.username}/${ghRepo.name}/main/${slug}/index.md`;
  const res = await fetch(postUrl);
  const fileContents: string = await res.text();

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

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    contentMarkdown,
    ...(matterResult.data as Post),
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
        remoteImage: `![${alt || ""}](https://raw.githubusercontent.com/${
          ghRepo.username
        }\/${ghRepo.name}/master/${slug}/${assetPath}${
          title ? ` '${title}'` : ``
        })`,
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

const getAllPostPaths = async (): Promise<string[]> => {
  const res = await fetch(
    `https://raw.githubusercontent.com/${ghRepo.username}/${ghRepo.name}/main/index.json`
  );
  const data: Array<{ path: string }> = await res.json();

  return data.map((obj) => {
    return obj.path;
  });
};

export async function getAllPostSlugs() {
  const slugs: Array<string> = await getAllPostPaths();
  return slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });
}
