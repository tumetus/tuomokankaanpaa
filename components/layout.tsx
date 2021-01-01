import Link from "next/link";
import { css } from "@emotion/css";
import Navigation from "./navigation";
import { ActivePage } from "../common/types";

export default function Layout({
  children,
  activePage,
}: {
  children: React.ReactNode;
  activePage?: ActivePage;
}) {
  return (
    <div
      className={css(`
        max-width: 36rem;
        padding: 0 1rem;
        margin: 3rem auto 6rem;
      `)}
    >
      <header
        className={css(`
          display: flex;
          flex-direction: column;
          align-items: left;
          margin-bottom: 2rem;
        `)}
      >
        <nav>
          <h1
            className={css(`
              font-size: 3.25rem;
              margin-bottom: 0;
            `)}
          >
            <Link href="/">
              <a
                className={css(`
                color: #000;
                &:hover {
                  text-decoration: none;
                }
              `)}
              >
                Tuomo Kankaanpää
              </a>
            </Link>
          </h1>
          <Navigation activePage={activePage} />
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
