import Link from "next/link";
import Layout from "../components/layout";
import NewsletterBanner from "../components/newsletter-banner";
import Footer from "../components/footer";

export default function Newsletter() {
  return (
    <Layout activePage={"newsletter"}>
      <h1>Newsletter</h1>
      <p>
        Subscribe to learn more about web development including React and
        Javascript. I usually send email once or twice a month. You can
        unsubscribe anytime you want.
      </p>
      <p>Here is what you get when you subscribe:</p>
      <ul>
        <li>
          Exclusive React, Javascript and web development content straight to
          your inbox
        </li>
        <li>Information about new blog posts and videos</li>
        <li>
          Earlybird access and discount codes to my{" "}
          <Link href="/courses">
            <a>courses</a>
          </Link>
        </li>
        <li>Developer soft skill tips</li>
      </ul>
      <NewsletterBanner />
      <Footer />
    </Layout>
  );
}
