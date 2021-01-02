import { GetStaticProps } from "next";
import { css } from "@emotion/css";
import Link from "next/link";
import Image from "next/image";
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

const Tag = ({ tag }: { tag: string }) => {
  return (
    <span
      className={css(`
        display: inline-block;
        border: 1px solid black;
        margin: 3px 5px 3px 0;
        padding: 3px 5px;
        font-size: 0.7em;
        white-space: nowrap;
      `)}
    >
      {tag.toLowerCase()}
    </span>
  );
};

const PostCard = ({ post }: { post: Post }) => {
  const { title, slug, date, tags, excerpt, coverImage } = post;
  const tagsArray = tags ? tags.split(",").map((s) => s.trim()) : [];
  return (
    <li
      className={css(`
      padding: 10px 0;
    `)}
    >
      <div
        className={css(`
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
      </div>
      <div
        className={css(`
          margin-bottom: 5px;
        `)}
      >
        {tagsArray.map((tag) => {
          return <Tag tag={tag} key={tag} />;
        })}
      </div>
      <div
        className={css(`
          font-size: 0.85em;
          opacity: 0.75;
      `)}
      >
        <section>{excerpt}</section>
      </div>
    </li>
  );
};

const PostCardWithImage = ({ post }: { post: Post }) => {
  const { title, slug, date, tags, excerpt, coverImage } = post;
  // const coverImageFullPath = `/blog/${slug}/images/${coverImage}`;
  return (
    <li
      className={css(`
    `)}
    >
      <div
        className={css(`
      `)}
      >
        <h2
          className={css(`
          margin-bottom: 0;
        `)}
        >
          <Link href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        </h2>
        <small
          className={css(`
          color: #999;
          font-size: 0.8rem;
        `)}
        >
          <Date dateString={date} />
        </small>
      </div>
      <div
        className={css(`
      `)}
      >
        <img
          src={coverImage}
          className={css(`
          width: 100%;
        `)}
        />
      </div>
      <div
        className={css(`
      `)}
      >
        <section>{excerpt}</section>
      </div>
    </li>
  );
};

const PostCard1 = ({ post }: { post: Post }) => {
  const { title, slug, date, tags, excerpt, coverImage } = post;
  console.log(coverImage);
  // const coverImageFullPath = `/blog/${slug}/images/${coverImage}`;
  return (
    <li
      className={css(`
      margin: 0 0 2rem;
      display: flex;
      align-items: center;
    `)}
    >
      <div
        className={css(`
          width: 30%;
          padding-right: 10px;
      `)}
      >
        {/* <img src={coverImage} /> */}
        {coverImage && <Image width={200} height={120} src={`${coverImage}`} />}
      </div>
      <div
        className={css(`
          width: 70%;
      `)}
      >
        <h3
          className={css(`
          margin-bottom: 0;
          margin-top: 0;
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
      </div>
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
