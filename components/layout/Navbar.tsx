"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type NavTheme = "default" | "media" | "honours";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Legislature", href: "/legislature" },
  { label: "Honours", href: "/honours" },
  { label: "Media", href: "/media" },
];

const themeConfig: Record<NavTheme, { bg: string; linkColor: string; ctaBg: string; ctaText: string; logoFilter: string }> = {
  default: {
    bg: "bg-white/95 backdrop-blur-md shadow-sm",
    linkColor: "text-gray-700 hover:text-[#1a5c38]",
    ctaBg: "bg-[#1a5c38] hover:bg-[#14472c]",
    ctaText: "text-white",
    logoFilter: "",
  },
  media: {
    bg: "bg-black/95 backdrop-blur-md",
    linkColor: "text-white/80 hover:text-white",
    ctaBg: "bg-white hover:bg-gray-100",
    ctaText: "text-black",
    logoFilter: "brightness-0 invert",
  },
  honours: {
    bg: "bg-transparent",
    linkColor: "text-white/90 hover:text-white",
    ctaBg: "bg-white/20 hover:bg-white/30 border border-white/40",
    ctaText: "text-white",
    logoFilter: "brightness-0 invert",
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);

  // Determine theme from pathname
  const theme: NavTheme = pathname === "/media" ? "media" : pathname === "/honours" ? "honours" : "default";

  const t = themeConfig[theme];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 10);
      setShowNav(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        if (window.scrollY > window.innerHeight * 0.5) setShowNav(false);
      }, 1500);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparentTheme = theme === "honours";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: showNav ? 0 : -80, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isTransparentTheme && !scrolled ? t.bg : scrolled && theme === "default" ? "bg-white/95 backdrop-blur-md shadow-sm" : t.bg}
          ${scrolled && !isTransparentTheme ? "py-3" : "py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className={`w-10 h-10 relative ${t.logoFilter}`}>
              {/* Placeholder — swap with your actual logo */}
              <div className="w-10 h-10 rounded-full border-2 border-[#1a5c38] flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#1a5c38]" />
              </div>
            </div>
            <span className={`anton text-md leading-tight hidden sm:block ${theme !== "default" ? "text-white" : "text-gray-900"}`}>
              Sen. Ahmed Wadada Aliyu
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-sn-pro font-medium transition-colors duration-200 relative group ${t.linkColor}
                  ${pathname === link.href ? "font-semibold" : ""}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-primary rounded transition-all duration-300
                  ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/join" className="bg-primary text-sm px-5 py-3 rounded-full transition-all duration-200">
              Join the Movement
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden flex flex-col gap-[5px] p-1 ${theme !== "default" ? "text-white" : "text-gray-900"}`}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-current rounded" />
            <span className="block w-6 h-[2px] bg-current rounded" />
            <span className="block w-4 h-[2px] bg-current rounded self-end" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 z-[70] h-full w-[78%] max-w-sm bg-white flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <span className="font-semibold text-sm text-gray-900">Sen. Ahmed Wadada Aliyu</span>
                <button onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-gray-900 transition p-1" aria-label="Close menu">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col px-6 pt-4 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.label} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.06 }}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3.5 text-base font-medium border-b border-gray-100 transition-colors
                        ${pathname === link.href ? "text-[#1a5c38]" : "text-gray-700 hover:text-[#1a5c38]"}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="px-6 pb-10">
                <Link
                  href="/join"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-[#1a5c38] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-[#14472c] transition"
                >
                  Join the Movement
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
