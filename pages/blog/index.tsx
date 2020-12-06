import { GetStaticProps } from "next";
import { css } from "@emotion/css";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getSortedPostsData } from "../../lib/posts";
import { Post } from "../../common/types";

export default function Blog({ allPostsData }) {
  let [searchText, setSearchText] = useState("");
  return (
    <Layout activePage={"blog"}>
      <div>
        <input
          className={css(`
            width: 100%;
            margin: 5px 0;
            padding: 10px;
            font-size: 1.25rem;
            ::placeholder {
              opacity: 0.4;
            }
          `)}
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search..."
        />
      </div>
      <ul
        className={css(`
        list-style: none;
        padding: 0;
        margin: 0;
      `)}
      >
        {allPostsData.map(
          (p) =>
            getIncludePost(searchText, p) && <PostCard key={p.slug} post={p} />
        )}
      </ul>
    </Layout>
  );
}

const PostCard = ({ post }: { post: Post }) => {
  const { title, slug, date, tags, excerpt } = post;
  return (
    <li
      className={css(`
      margin: 0 0 2rem;
    `)}
    >
      <h3
        className={css(`
          margin-bottom: 0;
        `)}
      >
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <small
        className={css(`
          color: #999;
          font-size: 0.8rem;
        `)}
      >
        <Date dateString={date} />
      </small>
      <section>{excerpt}</section>
    </li>
  );
};

const getIncludePost = (searchText: string, post: Post) => {
  const title =
    post.title.toLowerCase().indexOf(searchText.toLowerCase()) == -1
      ? false
      : true;
  const content =
    post.contentHtml.toLowerCase().indexOf(searchText.toLowerCase()) == -1
      ? false
      : true;
  return title || content;
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
