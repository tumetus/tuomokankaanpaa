import { css } from "@emotion/css";
import Image from "next/image";

import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Layout from "../components/layout";
import { SMALL } from "../common/screen-sizes";

export default function Home() {
  return (
    <Layout>
      <div
        className={css(`
          display: flex;
          align-items: center;
      `)}
      >
        <div
          className={css(`
            margin-right: 2rem;

            @media (max-width: ${SMALL}px) {
              display: none;
            }
        `)}
        >
          <Image
            src="/images/tuomokankaanpaa.jpg"
            width="450"
            height="450"
            className={css(`
              border-radius: 50%;
              padding-right: 100px;
            `)}
          />
        </div>
        <div>
          <h2>Ahoy, I'm Tuomo!</h2>
          <p>
            I'm a Fullstack Web Developer and teacher. I like to work with and
            teach React and Javascript.
          </p>
          <p>I also do card magic.</p>
          <p
            className={css(`
            font-size: 2rem;
          `)}
          >
            <a
              href="https://www.youtube.com/channel/UC34UXFLKqdW3cpk5CBu2Siw"
              style={{ color: "red", marginRight: "10px" }}
              target="_blank"
            >
              <YouTubeIcon style={{ fontSize: 55 }} />
            </a>
            <a
              href="https://www.twitter.com/tumee"
              style={{ color: "#00acee", marginRight: "7px" }}
              target="_blank"
            >
              <TwitterIcon style={{ fontSize: 55 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/tuomo-kankaanp%C3%A4%C3%A4-2a0a9753/"
              style={{ color: "#0e76a8", marginRight: "12px" }}
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 55 }} />
            </a>
            <a
              href="https://www.github.com/tumetus"
              style={{ color: "black" }}
              target="_blank"
            >
              <GitHubIcon style={{ fontSize: 53 }} />
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
