import { useState } from "react";

const NewsletterBanner = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  // return <div>Newsletter subscription form will be here.</div>;
  return (
    <>
      <form method="post" action="https://www.aweber.com/scripts/addlead.pl">
        <input type="hidden" name="listname" value="awlist5344567" />
        <input
          type="hidden"
          name="redirect"
          value="https://www.codepulse.blog"
        />
        <input type="hidden" name="meta_message" value="1" />
        <input type="hidden" name="meta_required" value="email" />
        <input type="hidden" name="meta_forward_vars" value="1" />
        <input
          type="hidden"
          id="aweber_tags"
          name="aweber_tags"
          value="ebook-subscriber"
        ></input>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        Name
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        Email
        <input type="submit" name="submit" value="Subscribe" />
      </form>
    </>
  );
};

export default NewsletterBanner;
