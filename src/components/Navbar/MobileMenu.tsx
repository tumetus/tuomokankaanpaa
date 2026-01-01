"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  links: Array<{ name: string; href: string }>;
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden text-foreground flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-background border-b border-white/5 z-40">
          <div className="flex flex-col p-6 space-y-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium ${
                    isActive ? "text-accent" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

