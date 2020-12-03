import fs, { readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { Post } from "../common/types";

const postsDirectory = path.join(process.cwd(), "posts");

const getFolderNames = (source: string) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export async function getSortedPostsData() {
  let allPostsData: Array<Post> = [];
  getFolderNames(postsDirectory).forEach(async (dirName: string) => {
    const postData = await getPostData(dirName);
    allPostsData.push(postData);
  });

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

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
