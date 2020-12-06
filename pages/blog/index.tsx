import { GetStaticProps } from "next";
import { css } from "@emotion/css";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import { Post } from "../../common/types";

export default function Blog({ allPostsData }) {
  const includePost = (searchText: string, post: Post) => {
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

  let [searchText, setSearchText] = useState("");
  return (
    <Layout>
      <div>
        <input
          className={css(`
            width: 100%;
            margin: 5px 0;
            padding: 10px;
            font-size: 1.25rem;
          `)}
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </div>
      <ul className={utilStyles.list}>
        {allPostsData.map(
          (p) =>
            includePost(searchText, p) && <PostCard key={p.slug} post={p} />
        )}
      </ul>
    </Layout>
  );
}

const PostCard = ({ post }: { post: Post }) => {
  const { title, slug, date, tags, excerpt } = post;
  return (
    <li className={utilStyles.listItem}>
      <h3
        className={css(`
        margin-bottom: 0;
      `)}
      >
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
      <section>{excerpt}</section>
    </li>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
