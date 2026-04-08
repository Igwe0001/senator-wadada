"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { assets } from "@/assets/assets";

// ── Animated counter ──────────────────────────────────────────────────────────
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

// ── Stagger helpers ───────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// ── Stats data ────────────────────────────────────────────────────────────────
const stats = [
  { value: 20, suffix: "+", label: "Years in Legislature" },
  { value: 3,  suffix: "",  label: "Election Victories"  },
  { value: 30, suffix: "+", label: "National Awards"     },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, ##EFEFF3 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center pt-28 pb-10 md:pt-32 md:pb-0">
        {/* ── LEFT ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 md:gap-6 order-2 md:order-1 pb-10 md:pb-20"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex font-sn-pro items-center gap-2 text-xs font-semibold text-[#1a5c38] border border-[#1a5c38]/30 bg-[#1a5c38]/5 px-4 py-1.5 rounded-full tracking-wide">
              Nasarawa State
              <span className="w-1 h-1 rounded-full bg-[#1a5c38]/50 inline-block" />
              2027 Governorship
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-sn-pro text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight"
          >
            Ahmed <span className="text-primary">Wadada</span>
            <br />
            Aliyu
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
            <em>Sarkin Yakin Keffi</em> — Senator, Statesman, and tireless servant of the people of Nasarawa State.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#vision"
              className="bg-primary text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#14472c] transition-all duration-200 shadow-md shadow-[#1a5c38]/20"
            >
              Our Vision
            </a>
            <a
              href="/media"
              className="border border-gray-300 text-gray-700 px-7 py-3 rounded-full font-semibold text-sm hover:border-[#1a5c38] hover:text-[#1a5c38] transition-all duration-200"
            >
              View Media
            </a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — Photo ── */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center md:justify-end order-1 md:order-2"
        >
          {/* Decorative card behind photo */}
          <div className="absolute top-6 right-0 md:-right-4 w-[88%] h-[92%] bg-[#EFEFF3] rounded-2xl" />

          {/* Photo */}
          <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute w-full h-full bg-gray-700/30 to-transparent z-10"></div>
            <Image src={assets.hero} alt="Senator Ahmed Wadada Aliyu" fill className="object-cover object-top" priority />
          </div>
        </motion.div>
      </div>

      {/* ── STATS BAR ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full"
      >
        <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-3 gap-4 text-center">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-primary">
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}