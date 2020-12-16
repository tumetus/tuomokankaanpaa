import Layout from "../components/layout";
import NewsletterBanner from "../components/newsletter-banner";

export default function Newsletter() {
  return (
    <Layout activePage={"newsletter"}>
      <NewsletterBanner />
    </Layout>
  );
}
