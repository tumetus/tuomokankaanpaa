import { FunctionComponent } from "react";
import Head from "next/head";

type MetaProps = {
  canonicalUrl?: string;
  siteDescription?: string;
  title?: string;
  keywords?: string;
  icon?: string;
  description?: string;
  ogTitle?: string;
  ogType?: string;
  ogLocale?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogImage?: string;
};

export const SITE_URL = "https://www.tuomokankaanpaa.com";

const Meta: FunctionComponent<MetaProps> = ({
  canonicalUrl = SITE_URL,
  title = "Tuomo Kankaanpää",
  keywords = "webdevelopment, webdev, javascript, vscode, react, coding",
  icon = "/favico.ico",
  description = "Personal website for Tuomo Kankaanpää. All things related to web development.",
  ogTitle = "Tuomo Kankaanpää",
  ogType = "website",
  ogLocale = "en_US",
  ogDescription = "Personal website for Tuomo Kankaanpää. All things related to web development.",
  ogUrl = SITE_URL,
  ogSiteName = "Tuomo Kankaanpää",
  ogImage = "/images/tuomokankaanpaa.jpg",
  children,
}) => {
  ogImage = ogImage != null ? ogImage : "/images/tuomokankaanpaa.jpg";
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} key="metakeywords" />

      <link rel="icon" href={icon} key="metaicon" />
      <link rel="canonical" href={canonicalUrl} key="metacanonical" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        key="metarobots"
      />
      <meta name="description" content={description} key="metadescription" />

      <meta property="og:title" content={ogTitle} key="ogtitle" />
      <meta property="og:type" content={ogType} key="ogtype" />
      <meta property="og:locale" content={ogLocale} key="oglocale" />
      <meta
        property="og:description"
        content={ogDescription}
        key="ogdescription"
      />
      <meta property="og:url" content={ogUrl} key="ogurl" />
      <meta property="og:site_name" content={ogSiteName} key="ogsitename" />
      <meta
        property="og:image"
        content={`${SITE_URL}${ogImage}`}
        key="ogimage"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twittercard"
      />
      <meta name="twitter:site" content="@tumee" key="twittersite" />
      <meta name="twitter:creator" content="@tumee" key="twittercreator" />

      {children}
    </Head>
  );
};

export default Meta;
