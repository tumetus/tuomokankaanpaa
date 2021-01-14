import { css } from "@emotion/css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <footer
      className={css(`
        text-align:center;
        margin-top: 40px;
      `)}
    >
      <hr
        className={css(`
        
      `)}
      ></hr>
      <div
        className={css(`
          `)}
      >
        <span
          className={css(`
          font-size: 0.9em;
          opacity: 0.9;
        `)}
        >
          Follow me
        </span>
        <br />
        <a
          href="https://www.youtube.com/channel/UC34UXFLKqdW3cpk5CBu2Siw"
          style={{ color: "red", marginRight: "10px" }}
          target="_blank"
        >
          <YouTubeIcon style={{ fontSize: 35 }} />
        </a>
        <a
          href="https://www.twitter.com/tumee"
          style={{ color: "#00acee", marginRight: "7px" }}
          target="_blank"
        >
          <TwitterIcon style={{ fontSize: 35 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/tuomo-kankaanp%C3%A4%C3%A4-2a0a9753/"
          style={{ color: "#0e76a8", marginRight: "12px" }}
          target="_blank"
        >
          <LinkedInIcon style={{ fontSize: 35 }} />
        </a>
        <a
          href="https://www.github.com/tumetus"
          style={{ color: "black" }}
          target="_blank"
        >
          <GitHubIcon style={{ fontSize: 33 }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
