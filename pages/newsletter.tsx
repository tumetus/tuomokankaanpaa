import Link from "next/link";
import Layout from "../components/layout";
import NewsletterBanner from "../components/newsletter-banner";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Newsletter() {
  return (
    <Layout activePage={"newsletter"}>
      <Meta title={`Newsletter | Tuomo Kankaanpää`}></Meta>
      <h1>Newsletter</h1>
      <p>
        Subscribe to learn more about web development, React, Next.js and
        anything else I am working on. I send email once a week. You can
        unsubscribe anytime you want.
      </p>
      <p>Here is what you get when you subscribe:</p>
      <ul>
        <li>
          Exclusive React, Next.js, Javascript and web development content
          straight to your inbox
        </li>
        <li>Information about new blog posts and videos</li>
        <li>
          Earlybird access and discount codes to my{" "}
          <Link href="/courses">
            <a>courses</a>
          </Link>
        </li>
        <li>Sneak peek on what I am doing and working on weekly</li>
      </ul>
      <NewsletterBanner />
      <p>
        <i>
          I publish my emails on my blog also (using "newsletter" tag) but they
          will always be published with one week delay. So by subscribing to the
          newsletter, you get the email straight to your inbox as soon as it is
          published!
        </i>
      </p>
      <Footer />
    </Layout>
  );
}
