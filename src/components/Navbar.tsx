import Link from "next/link";
import { MobileMenu } from "./Navbar/MobileMenu";
import { NavLink } from "./Navbar/NavLink";

export default function Navbar() {
  const links = [
    { name: "For Dev Tool Companies", href: "/for-dev-tool-companies" },
    { name: "For Developers", href: "/for-developers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-heading tracking-tighter text-gradient cursor-pointer">
          TUOMO KANKAANPÄÄ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu - aligned to top right */}
        <div className="md:hidden flex items-center">
          <MobileMenu links={links} />
        </div>
      </div>
    </nav>
  );
}

