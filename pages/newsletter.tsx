import Link from "next/link";
import Layout from "../components/layout";
import NewsletterBanner from "../components/newsletter-banner";

export default function Newsletter() {
  return (
    <Layout activePage={"newsletter"}>
      <h1>Newsletter</h1>
      <p>
        Subscribe to stay learn more about web development. I usually send email
        once or twice a month. You can unsubscribe anytime you want.
      </p>
      <p>Here is what you get when you subscribe:</p>
      <ul>
        <li>
          Exclusive React, Javascript and web development content straight to
          your inbox
        </li>
        <li>Information about new CodePulse blog posts and videos</li>
        <li>
          Earlybird access and discount codes to new CodePulse{" "}
          <Link href="/courses">
            <a>courses</a>
          </Link>
        </li>
        <li>Be part of CodePulse community</li>
      </ul>
      <NewsletterBanner />
    </Layout>
  );
}
