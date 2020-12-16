import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { css } from "@emotion/css";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { Post } from "../../common/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as codeSyntaxTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function BlogPost({ postData }: { postData: Post }) {
  const renderers = {
    link: (linkProps) => {
      return (
        <a {...linkProps} target="_blank">
          {linkProps.children}
        </a>
      );
    },
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={codeSyntaxTheme}
          language={language}
          children={value}
          wrapLines={true}
          showLineNumbers={true}
          startingLineNumber={1}
        />
      );
    },
  };
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1
          className={css(`
          margin-bottom: 0;
        `)}
        >
          {postData.title}
        </h1>
        <div
          className={css(`
          color: #999;
          font-size: 0.8rem;
        `)}
        >
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          children={postData.contentMarkdown}
          renderers={renderers}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug as string);
  return {
    props: {
      postData,
    },
  };
};
