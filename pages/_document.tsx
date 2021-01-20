import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID as PROD_GA_TRACKING_ID } from "../utils/gtag";

export default class MyDocument extends Document {
  render() {
    // Use dummy ga id if not in production. Not sure if this is best way but works for now.
    const GA_TRACKING_ID =
      process.env.NODE_ENV === "production"
        ? PROD_GA_TRACKING_ID
        : "G-0000000001";

    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
