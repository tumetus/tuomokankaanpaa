import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export const siteTitle = "Tuomo Kankaanpää";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const theme = useTheme();
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/facicon.ico" />
        <meta
          name="description"
          content="Personal website for Tuomo Kankaanpää. All things related to web development."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>

      <header className={styles.header}>
        <nav>
          <h1>
            <Link href="/">
              <a
                className={css(`
                color: ${theme.colors.primary};
                &:hover {
                  text-decoration: none;
                }
              `)}
              >
                Tuomo Kankaanpää
              </a>
            </Link>
          </h1>
          <br />
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          &nbsp;-&nbsp;
          <Link href="/courses">
            <a>Courses</a>
          </Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
