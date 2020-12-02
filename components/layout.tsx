import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = "Tuomo Kankaanpää";

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode,
    home?: boolean
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/facicon.ico" />
                <meta
                    name="description"
                    content="Personal website for Tuomo Kankaanpää. All things related to web development."
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image" />
                <title>{siteTitle}</title>
            </Head>

            <header className={styles.header}>
                <nav>
                    <Link href="/"><a>Tuomo Kankaanpää</a></Link>
                    <br/>
                    <Link href="/blog"><a>Blog</a></Link>
                    &nbsp;-&nbsp;
                    <Link href="/courses"><a>Courses</a></Link>
                </nav>
            </header>

            <main>{children}</main>
        </div>
    )
}