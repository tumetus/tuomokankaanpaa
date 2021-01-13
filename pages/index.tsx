import { css } from "@emotion/css";
import Image from "next/image";
import Link from "next/link";

import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Layout from "../components/layout";
import Footer from "../components/footer";
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

      <section>
        <h2>I do Youtube videos</h2>
        <p>
          I do programming and web development videos on{" "}
          <a
            href="https://www.youtube.com/channel/UC34UXFLKqdW3cpk5CBu2Siw"
            target="_blank"
          >
            Youtube
          </a>
          . This is currently my main focus when it comes to teaching new
          things.
        </p>
        <div>
          <a href="https://www.youtube.com/watch?v=uuXxomVFbC8" target="_blank">
            <YtImage src="images/code-fast-vs-code-thumbnail.jpg" />
          </a>
          <a href="https://www.youtube.com/watch?v=mqP_qNViGUQ" target="_blank">
            <YtImage src="images/focus-element-in-react-thumbnail.jpg" />
          </a>
          <a href="https://www.youtube.com/watch?v=9Jo084i0Dzs" target="_blank">
            <YtImage src="images/best-vs-code-shortcuts-thumbnail.jpg" />
          </a>
        </div>
      </section>

      <section>
        <h2>I teach web development courses</h2>
        <p>
          I am a teacher at Udemy and Skillshare. I am currently teaching
          courses on React, Draft.js, web development.
        </p>
        <p>
          Check out the{" "}
          <Link href="/courses">
            <a>courses</a>
          </Link>{" "}
          page for more.
        </p>
      </section>

      <section>
        <h2>I write blog posts</h2>
        <p>
          I have written blog posts for past couple of years. I enjoy teaching
          things I have learned through blog posts. Most of my posts are about
          web development, React, Javascript and Draft.js.
        </p>
        <p>
          Check out the{" "}
          <Link href="/blog">
            <a>blog</a>
          </Link>{" "}
          page for more.
        </p>
      </section>

      <section>
        <h2>I do mentoring</h2>
        <p>
          I am passionate about teaching and honestly just want to help people
          out. Having someone give you constructive feedback or having someone
          to spar your ideas with can really help you reach new levels on your
          craft. That is why I also offer 1on1 mentoring sessions.
        </p>
        <p>Send me email at tuomo(a)tuomokankaanpaa.com and let's talk!</p>
      </section>

      <section>
        <h2>I do freelance work</h2>
        <p>
          I am available for freelance work. If you need e.g. help or consulting
          on a project, debugging help, React components or tutorial video on
          specific topic, I am able to help.
        </p>
        <p>Send me email at tuomo(a)tuomokankaanpaa.com and let's talk!</p>
      </section>

      <Footer />
    </Layout>
  );
}

const YtImage = ({ src }: { src: string }) => {
  return (
    <img
      className={css(`
        display: inline-block;
        margin: 10px 10px 0 0;
        width: 30%;

        cursor: pointer;
        opacity: 0.8;

        :hover {
          opacity: 1;
        }

        @media (max-width: ${SMALL}px) {
          width: 48%;
          margin: 0px 5px 0 0;
        }
      `)}
      src={src}
    />
  );
};
