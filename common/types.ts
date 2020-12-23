export interface Post {
  date: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  seoTitle: string;
  tags: string;
  slug: string;
  contentHtml: string;
  contentMarkdown: string;
  coverImage: string;
}

export type ActivePage = "blog" | "courses" | "newsletter";
