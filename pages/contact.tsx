import Layout from "../components/layout";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Contact() {
  return (
    <Layout activePage="contact">
      <Meta title={`Contact | Tuomo Kankaanpää`}></Meta>
      <h1>Contact</h1>
      <p>
        Best way to contact me is on{" "}
        <a href="https://www.twitter.com/tumee" target="_blank">
          Twitter
        </a>{" "}
        or by email tuomo(a)tuomokankaanpaa.com.
      </p>
      <Footer />
    </Layout>
  );
}
