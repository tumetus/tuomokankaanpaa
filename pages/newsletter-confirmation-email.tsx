import Layout from "../components/layout";

export default function NewsletterConfirmationEmail() {
  return (
    <Layout activePage={"newsletter"}>
      <h1>You are almost done!</h1>
      <p>
        You've just been sent an email that contains a{" "}
        <strong>confirm link</strong>.
      </p>
      <p>
        In order to activate your subscription, check your email and click on
        the link in that email. You will not receive your emails until you click
        that link in the email.
      </p>
    </Layout>
  );
}
