"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMediaPage = pathname === "/media";
  const isHonoursPage = pathname === "/honours";
  const isDarkPage = isMediaPage || isHonoursPage;

  // ✅ Calculate hash during rendering, not in an Effect
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  const navLinks = [
    { name: "Home", href: "/", section: "hero" },
    { name: "About", href: "/", section: "about" },
    { name: "Career", href: "/", section: "career" },
    { name: "Legislature", href: "/", section: "legislature" },
    { name: "Honours", href: "/honours", isPage: true },
    { name: "Media", href: "/media", isPage: true },
  ];

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

    setMobileMenuOpen(false);
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

    setMobileMenuOpen(false);
  };

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []); // ✅ Empty dependency array - only runs once on mount

  /* Lock scroll when mobile menu open */
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    }
  }, [mobileMenuOpen]); // ✅ Depends on mobileMenuOpen, runs when it changes

  /* Handle hash scrolling when coming from another page */
  useEffect(() => {
    if (pathname === "/" && hash) {
      const sectionId = hash.replace("#", "");
      // Use setTimeout to ensure DOM is ready
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);

      return () => clearTimeout(timeoutId); // Clean up timeout
    }
  }, [pathname, hash]); // ✅ Depends on pathname and hash

  // Get link text color based on page
  const getLinkTextColor = (isPageLink: boolean = false) => {
    if (isDarkPage) {
      return isPageLink ? "text-black/70 hover:bg-black/10 hover:text-black" : "text-black/70 hover:bg-black/10 hover:text-black";
    }
    return "text-white/80 hover:bg-white/10 hover:text-white";
  };

  const getActiveLinkClass = () => {
    return "bg-white text-black shadow";
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-[1000] transition-all duration-300 px-6 py-4
        ${isDarkPage ? "bg-white shadow" : isScrolled ? "bg-black/30 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <h1
              className={`anton tracking-wider font-semibold text-lg transition-colors duration-300
                ${isDarkPage ? "text-black" : "text-white"}`}
            >
              Sen. Ahmed Wadada Aliyu
            </h1>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full">
            {navLinks.map((item) => (
              <li key={item.name}>
                {item.isPage ? (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm rounded-full transition-all
                      ${isActive(item.href) ? getActiveLinkClass() : getLinkTextColor(true)}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={`/#${item.section}`}
                    onClick={(e) => handleNavigation(e, item)}
                    className={`px-4 py-2 text-sm rounded-full transition-all cursor-pointer
                      ${pathname === "/" && hash === `#${item.section}` ? getActiveLinkClass() : getLinkTextColor()}`}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <Link
            href="/#join"
            onClick={handleJoinClick}
            className="hidden md:flex bg-[#375DFB] hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm transition cursor-pointer"
          >
            Join the Movement
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-3 rounded-full transition-colors
              ${isDarkPage ? "bg-[#375DFB]" : "bg-white"}`}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition ${mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`} />
              <span className={`block w-5 h-0.5 bg-white transition ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-5 h-0.5 bg-white transition ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition
        ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-[#031B2B] backdrop-blur-2xl border-l border-white/20 z-50 transition-transform duration-300 md:hidden
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col pt-24 px-6 gap-2">
          {navLinks.map((item) => (
            <React.Fragment key={item.name}>
              {item.isPage ? (
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg px-5 py-4 rounded-2xl transition text-white hover:bg-white/10
                  ${isActive(item.href) ? "bg-white/20 text-white" : ""}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={`/#${item.section}`}
                  onClick={(e) => handleNavigation(e, item)}
                  className={`text-lg px-5 py-4 rounded-2xl transition cursor-pointer text-white hover:bg-white/10
                  ${pathname === "/" && hash === `#${item.section}` ? "bg-white/20 text-white" : ""}`}
                >
                  {item.name}
                </a>
              )}
            </React.Fragment>
          ))}

          {/* Mobile Join Button */}
          <Link
            href="/#join"
            onClick={handleJoinClick}
            className="mt-6 bg-[#375DFB] text-white py-4 rounded-2xl text-center hover:bg-blue-700 transition"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </>
  );
}
