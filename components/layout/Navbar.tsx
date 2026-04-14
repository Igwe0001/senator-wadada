"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

type NavTheme = "default" | "projects" | "honours";

const navLinks = [
  { label: "Home", href: "/#home", section: true },
  { label: "About", href: "/#about", section: true },
  { label: "Career", href: "/#career", section: true },
  { label: "Legislature", href: "/#legislature", section: true },
  { label: "Honours", href: "/honours", section: false },
  { label: "Projects", href: "/projects", section: false },
];

const themeConfig: Record<NavTheme, { bg: string; linkColor: string; activeColor: string; logoFilter: string }> = {
  default: {
    bg: "bg-white/95 backdrop-blur-md shadow-sm",
    linkColor: "text-gray-700 hover:text-[#1a5c38]",
    activeColor: "text-[#1a5c38]",
    logoFilter: "",
  },
  projects: {
    bg: "bg-black/95 backdrop-blur-md",
    linkColor: "text-white/70 hover:text-white",
    activeColor: "text-white",
    logoFilter: "brightness-0 invert",
  },
  honours: {
    bg: "bg-transparent",
    linkColor: "text-white/80 hover:text-white",
    activeColor: "text-white",
    logoFilter: "brightness-0 invert",
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  // ── Theme ──────────────────────────────────────────────────────────────────
  const theme: NavTheme = pathname === "/projects" ? "projects" : pathname === "/honours" ? "honours" : "default";

  const t = themeConfig[theme];
    const isOnHomePage = pathname === "/";
    const prevPathname = useRef(pathname);

  // ── Close mobile menu on route change ────────────────────────────────────────
useEffect(() => {
  if (prevPathname.current !== pathname && menuOpen) {
    setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    prevPathname.current = pathname;
  }
}, [pathname, menuOpen]);
  // ── Body lock when drawer open ─────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // ── Hide nav on idle scroll ────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 10);
      setShowNav(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        if (window.scrollY > window.innerHeight * 0.5) setShowNav(false);
      }, 1500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Track active section via IntersectionObserver (home page only) ─────────
  useEffect(() => {
    if (!isOnHomePage) return;
    const sectionIds = ["home", "about", "career", "legislature"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isOnHomePage]);

  // ── Smooth-scroll to section (handles cross-page navigation too) ───────────
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, link: (typeof navLinks)[number]) => {
    if (!link.section) return; // let Next.js handle page links normally

    e.preventDefault();
    setMenuOpen(false);
    const sectionId = link.href.replace("/#", "");

    if (isOnHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home, then scroll after mount
      router.push(`/#${sectionId}`);
    }
  };

  // ── Is a link "active"? ────────────────────────────────────────────────────
  const isActive = (link: (typeof navLinks)[number]) => {
    if (!link.section) return pathname === link.href;
    if (!isOnHomePage) return false;
    return activeSection === link.href.replace("/#", "");
  };

  // ── Nav background ─────────────────────────────────────────────────────────
  const navBg = theme === "honours" ? (scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent") : t.bg;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: showNav ? 0 : -80, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-200 transition-all duration-500
          ${navBg} ${scrolled ? "py-3" : "py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src={assets.logo} alt="logo" width={40} />
            <span
              className={` font-anton tracking-wider text-sm leading-tight hidden sm:block
                ${theme !== "default" ? "text-white" : "text-gray-900"}`}
            >
              Sen. Ahmed Wadada Aliyu
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link)}
                  className={`text-sm font-medium transition-colors duration-200 relative group
                    ${active ? t.activeColor + " font-semibold" : t.linkColor}`}
                >
                  {link.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#1a5c38] rounded transition-all duration-300
                      ${theme !== "default" ? "bg-white" : "bg-[#1a5c38]"}
                      ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              onClick={(e) => handleSectionClick(e, { label: "Contact", href: "/#contact", section: true })}
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200
                ${
                  theme === "default"
                    ? "bg-[#1a5c38] text-white hover:bg-[#14472c]"
                    : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
                }`}
            >
              Join the Movement
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden flex flex-col gap-[5px] p-1
              ${theme !== "default" ? "text-white" : "text-gray-900"}`}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-current rounded" />
            <span className="block w-6 h-[2px] bg-current rounded" />
            <span className="block w-4 h-[2px] bg-current rounded self-end" />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 z-[70] h-full w-[78%] max-w-sm bg-white flex flex-col md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <span className="font-semibold text-sm text-gray-900">Sen. Ahmed Wadada Aliyu</span>
                <button onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-gray-900 transition p-1" aria-label="Close menu">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-6 pt-4 gap-1 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const active = isActive(link);
                  return (
                    <motion.div key={link.label} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.06 }}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleSectionClick(e, link)}
                        className={`flex items-center justify-between py-3.5 text-base font-medium border-b border-gray-100 transition-colors
                          ${active ? "text-[#1a5c38]" : "text-gray-700 hover:text-[#1a5c38]"}`}
                      >
                        {link.label}
                        {/* Page links get a small arrow; section links get none */}
                        {!link.section && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="px-6 pb-10 pt-4">
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    handleSectionClick(e, { label: "Contact", href: "/#contact", section: true });
                    setMenuOpen(false);
                  }}
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
