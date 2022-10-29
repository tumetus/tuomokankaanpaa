import Link from "next/link";
import Layout from "../components/layout";
import NewsletterBanner from "../components/newsletter-banner";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Button from "@material-ui/core/Button";

const SubscribeLink = () => {
  return (
    <a
      href="https://www.getrevue.co/profile/tuomokankaanpaa"
      style={{ color: "#fff" }}
      target="_blank"
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: "#0070f3",
          color: "#fff",
          marginTop: "15px",
        }}
        type="submit"
      >
        Subscribe
      </Button>
    </a>
  );
};

export default function Newsletter() {
  return (
    <Layout activePage={"newsletter"}>
      <Meta title={`Newsletter | Tuomo Kankaanpää`}></Meta>
      <h1>Newsletter</h1>
      <p>
        Subscribe to learn more about web development, React, Next.js and
        anything else I am working on. I am sending emails occasionally and I
        won't spam you. You can unsubscribe anytime you want.
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
        <li>Sneak peek on what I am doing and working on</li>
      </ul>
      <div>
        <SubscribeLink />
      </div>
      <Footer />
    </Layout>
  );
}
