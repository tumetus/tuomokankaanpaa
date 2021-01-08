import { css } from "@emotion/css";
import Link from "next/link";
import { ActivePage } from "../common/types";

const Navigation = ({ activePage }: { activePage: ActivePage }) => {
  return (
    <>
      <NavLink
        href="/blog"
        text="Blog"
        isActive={activePage == "blog" ? true : false}
      />
      <NavLink
        href="/courses"
        text="Courses"
        isActive={activePage == "courses" ? true : false}
      />
      <NavLink
        href="/newsletter"
        text="Newsletter"
        isActive={activePage == "newsletter" ? true : false}
      />
    </>
  );
};

const NavLink = ({
  href,
  text,
  isActive,
}: {
  href: string;
  text: string;
  isActive: boolean;
}) => {
  return (
    <Link href={href}>
      <a
        className={css(`
          color: gray;
          text-transform: uppercase;
          font-size: 0.95rem;
          margin-right: 1rem;
          border-bottom: ${isActive ? "3px solid rgba(0,0,0,0.5)" : "none"};
          padding-bottom: ${isActive ? "3px" : "none"};
        `)}
      >
        {text}
      </a>
    </Link>
  );
};

export default Navigation;
