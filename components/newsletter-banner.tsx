import { useState } from "react";
import { css } from "@emotion/css";
import Button from "@material-ui/core/Button";

const NewsletterBanner = () => {
  // let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  // return <div>Newsletter subscription form will be here.</div>;
  return (
    <div
      className={css(`
        border: 1px solid gray;
        padding: 25px;
        opacity: 0.85;
      `)}
    >
      <h3 className={css(`margin:0;`)}>Subscribe to the newsletter</h3>
      <form method="post" action="https://www.aweber.com/scripts/addlead.pl">
        <input type="hidden" name="listname" value="awlist5344567" />
        <input
          type="hidden"
          name="redirect"
          value="https://www.tuomokankaanpaa.com/newsletter-confirmation-email"
        />
        <input type="hidden" name="meta_message" value="1" />
        <input type="hidden" name="meta_required" value="email" />
        <input type="hidden" name="meta_forward_vars" value="1" />
        <input
          type="hidden"
          id="aweber_tags"
          name="aweber_tags"
          value="newsletter-subscriber"
        ></input>
        {/* <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        Name */}
        <input
          className={css(`
            width: 100%;
            margin: 5px 0;
            padding: 10px;
            font-size: 1.25rem;
            ::placeholder {
              opacity: 0.4;
            }
          `)}
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email here"
        />
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
      </form>
    </div>
  );
};

export default NewsletterBanner;
