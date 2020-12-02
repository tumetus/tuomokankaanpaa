import { GetStaticProps } from 'next';
import { css } from '@emotion/css';
import Link from 'next/link';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getSortedPostsData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      Blog frontpage here!
      <ul className={utilStyles.list}>
        {allPostsData.map(p => <PostCard key={p.slug} post={p} />)}
      </ul>
    </Layout>
    );
  }
  
  const PostCard = ({
    post
  }: {
    post: {
      title: string,
      slug: string,
      date: string
    }
  }) => {
    const { title, slug, date } = post;
    return (
      <li className={utilStyles.listItem}>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
      );
    }
    
    export const getStaticProps: GetStaticProps = async () => {
      const allPostsData = getSortedPostsData();
      return {
        props: {
          allPostsData
        }
      };
    }