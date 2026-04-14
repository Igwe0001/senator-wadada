"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/", section: "hero" },
  { name: "About", href: "/", section: "about" },
  { name: "Career", href: "/", section: "career" },
  { name: "Legislature", href: "/", section: "legislature" },
  { name: "Honours", href: "/honours", isPage: true },
  { name: "Media", href: "/media", isPage: true },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Calculate hash during rendering, not in an Effect
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  const isActive = (href: string) => pathname === href;

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof navLinks)[0]) => {
    if (item.isPage) {
      return;
    }

    e.preventDefault();

    if (pathname !== "/") {
      router.push(`/${item.section ? `#${item.section}` : ""}`);
    } else {
      const element = document.getElementById(item.section || "");
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleJoinClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/#join");
    } else {
      const element = document.getElementById("join");
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="w-full px-3 py-8">
      <div className=" rounded-xl px-6 py-5 flex flex-col gap-3">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link href="/">
            <span className=" text-white text-base cursor-pointer font-anton transition-colors duration-150">
              Sen. Ahmed Wadada Aliyu
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.isPage ? (
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors duration-150 ${
                      isActive(link.href) ? "text-primary font-medium" : "text-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={`/#${link.section}`}
                    onClick={(e) => handleNavigation(e, link)}
                    className={`text-sm transition-colors duration-150 cursor-pointer ${
                      pathname === "/" && hash === `#${link.section}` ? "text-primary font-medium" : "text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            {/* Join Link in Footer Navigation */}
            <Link
              href="/#join"
              onClick={handleJoinClick}
              className="text-sm transition-colors duration-150 cursor-pointer text-white"
            >
              Join
            </Link>
          </nav>
        </div>


        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-gray-400">
          <p>© 2025 Senator Ahmed Wadada Aliyu. All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://talkstuff.social"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#375DFB] transition-colors duration-150"
            >
              Talkstuff
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
