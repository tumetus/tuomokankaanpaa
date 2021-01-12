export interface Post {
  date: string;
  title: string; // post title. Used also as og:title and page title
  excerpt: string;
  tags: string;
  slug: string;
  contentHtml: string;
  contentMarkdown: string;
  coverImage: string;
  description: string; // used for meta and og descriptions
}

export type ActivePage = "blog" | "courses" | "newsletter" | "contact";
