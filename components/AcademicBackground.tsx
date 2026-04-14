"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Data ─────────────────────────────────────────────────────────────────────
const QUALIFICATIONS = [
  {
    year: "1993",
    institution: "Federal Polytechnic Nasarawa, Nasarawa State",
    award: "Higher National Diploma (HND) — Business Administration & Management",
  },
  {
    year: "1987",
    institution: "Federal Polytechnic Nasarawa, Nasarawa State",
    award: "National Diploma (ND) — Business Administration & Management",
  },
  {
    year: "1984",
    institution: "School of Preliminary Studies Keffi, Nasarawa State",
    award: "General Certificate of Education (GCE)",
  },
  {
    year: "1983",
    institution: "Government Secondary School Miango, Plateau State",
    award: "General Certificate of Education (GCE)",
  },
  {
    year: "1978",
    institution: "First School Leaving Certificate",
    award: "Abdu Zanga Primary School Keffi, Nasarawa State",
  },
];

const SCHOLASTIC_HONORS = [
  {
    period: "1972–1977",
    role: "Class Monitor",
    institution: "Abdu Zanga Primary School",
  },
  {
    period: "1977–1978",
    role: "Senior Prefect",
    institution: "Abdu Zanga Primary School",
  },
  {
    period: "1982–1983",
    role: "Social Prefect",
    institution: "Government Secondary School Miango",
  },
  {
    period: "1982–1984",
    role: "Social Director",
    institution: "Keffi Students Association",
  },
  {
    period: "1991–Present",
    role: "Coordinator",
    institution: "Association for Better Keffi",
  },
];

// ── Fade-up wrapper ───────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Qualification card ────────────────────────────────────────────────────────
function QualCard({ year, institution, award, delay }: { year: string; institution: string; award: string; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <div className="bg-white p-4 sm:p-5 h-full border border-white/10 hover:shadow-lg hover:shadow-black/20 transition-shadow duration-200">
        {/* Green dot */}
        <span className="block w-2.5 h-2.5 rounded-full bg-[#1a5c38] mb-3" />
        {/* Year */}
        <p className="text-2xl sm:text-3xl font-extrabold text-[#b0bfba] leading-none mb-2 tracking-tight">{year}</p>
        {/* Institution */}
        <p className=" font-bold text-primary leading-snug mb-2">{institution}</p>
        {/* Award */}
        <p className=" text-gray-500 leading-relaxed">{award}</p>
      </div>
    </FadeUp>
  );
}

// ── Honors card ───────────────────────────────────────────────────────────────
function HonorCard({ period, role, institution, delay }: { period: string; role: string; institution: string; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <div className="bg-white p-4 sm:p-5 h-full transition-colors duration-200">
        {/* Green dot */}
        <span className="block w-2.5 h-2.5 rounded-full bg-[#1a5c38] mb-3" />
        {/* Period */}
        <p className="text-xl sm:text-2xl font-extrabold text-[#7a9a8a] leading-none mb-2 tracking-tight">{period}</p>
        {/* Role */}
        <p className=" font-bold text-primary leading-snug mb-1.5">{role}</p>
        {/* Institution */}
        <p className=" text-black leading-relaxed">{institution}</p>
      </div>
    </FadeUp>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function AcademicBackground() {
  return (
    <section className="w-full bg-[#011428] font-fraunces text-white px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24">
        {/* ══ SECTION 1 — Qualifications ══ */}
        <div>
          {/* Header */}
          <FadeUp>
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block text-[10px] sm:text-xs border bg-[#CBE1D4] text-primary rounded-full px-3 py-1 mb-4 tracking-widest uppercase font-mono">
                Academic Background
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Foundation of <span className="text-[#3ddc84] italic font-extrabold">Knowledge</span>
              </h2>
            </div>
          </FadeUp>

          {/* Desktop: cards left + image right | Mobile: image first, then cards */}
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px] gap-5 sm:gap-6">
            {/* LEFT — Qualification cards grid (mobile: order 2) */}
            <div className="order-2 sm:order-1">
              {/* Top row — 3 cards */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {QUALIFICATIONS.slice(0, 3).map((q, i) => (
                  <QualCard key={i} {...q} delay={0.1 + i * 0.07} />
                ))}
              </div>
              {/* Bottom row — 2 cards */}
              <div className="grid grid-cols md:grid-cols-2 gap-3 sm:gap-4">
                {QUALIFICATIONS.slice(3).map((q, i) => (
                  <QualCard key={i} {...q} delay={0.3 + i * 0.07} />
                ))}
              </div>
            </div>

            {/* RIGHT — Qualifications image + label (mobile: order 1 = comes first) */}
            <div className="order-1 sm:order-2 flex flex-col gap-3">
              <FadeUp delay={0.12}>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">Qualifications</h3>
              </FadeUp>
              <FadeUp delay={0.22}>
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                  style={{ aspectRatio: "3/4", maxHeight: "360px" }}
                >
                  <Image
                    src={assets.image95}
                    alt="Qualifications — graduation photo"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* ══ SECTION 2 — Scholastic Honors ══ */}
        <div>
          {/* Desktop: image left + honors grid right | Mobile: image first, then grid */}
          <div className="flex flex-col sm:grid sm:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] gap-6 sm:gap-10">
            {/* LEFT — Title + image (mobile: order 1 = comes first) */}
            <div className="order-1 flex flex-col gap-5">
              <FadeUp>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight tracking-tight">
                  Scholastic
                  <br />
                  Honors
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                  style={{ aspectRatio: "3/4", maxHeight: "320px" }}
                >
                  <Image
                    src={assets.image96}
                    alt="Scholastic Honors"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
            </div>

            {/* RIGHT — Honors cards grid (mobile: order 2) */}
            <div className="order-2">
              {/* Top row — 3 cards */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {SCHOLASTIC_HONORS.slice(0, 3).map((h, i) => (
                  <HonorCard key={i} {...h} delay={0.1 + i * 0.07} />
                ))}
              </div>
              {/* Bottom row — 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {SCHOLASTIC_HONORS.slice(3).map((h, i) => (
                  <HonorCard key={i} {...h} delay={0.31 + i * 0.07} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
