import { css } from "@emotion/css";
import Image from "next/image";
import Layout from "../components/layout";

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
            I'm a Fullstack Web Developer and teacher. I work a lot with
            Javascript and React so if those are your poisons too, do browser
            around!
          </p>
          <p>PS. I also do card magic.</p>
        </div>
      </div>
    </Layout>
  );
}
