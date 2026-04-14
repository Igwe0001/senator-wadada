"use client";

import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface TimelineEntry {
  period: string;
  organisation?: string;
  role: string;
}

export interface ProfessionalJourneyProps {
  /** Small pill label above the heading */
  badge?: string;
  /** First line of the heading (plain white) */
  headingLine1: string;
  /** Second line — italic gold word + plain white word */
  headingAccent: string;
  /** The word inside headingAccent that should be gold + italic */
  accentWord: string;
  /** Timeline rows */
  entries: TimelineEntry[];
  /** Path or imported asset for the side image */
  image: string | StaticImageData;
  /** Alt text for the image */
  imageAlt?: string;
  /** Put image on the left, timeline on the right (desktop only) */
  imageLeft?: boolean;
  /** Background color (Tailwind class) — default dark navy */
  bgClass?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

const slideIn = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: EASE, delay },
  }),
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

function AnimatedEntry({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.07}
      className="grid grid-cols-[140px_1fr] gap-6 py-5 border-b border-white/10 last:border-0"
    >
      {/* Period */}
      <span className="  text-white/50 pt-0.5 leading-snug">{entry.period}</span>

      {/* Role block */}
      <div className="flex flex-col gap-0.5">
        {entry.organisation && <span className=" text-white/50">{entry.organisation}</span>}
        <span className=" sm:text-base font-semibold text-white leading-snug">{entry.role}</span>
      </div>
    </motion.div>
  );
}

export default function ProfessionalJourney({
  badge = "Professional Journey",
  headingLine1,
  headingAccent,
  accentWord,
  entries,
  image,
  imageAlt = "Image",
  imageLeft = false,
  bgClass = "bg-[#0d1b2a]",
}: ProfessionalJourneyProps) {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-40px" });

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-40px" });

  // Build the second heading line — replace accentWord with styled span
  const parts = headingAccent.split(accentWord);

  const imageSlide = slideIn(imageLeft ? "left" : "right");
  const contentSlide = slideIn(imageLeft ? "right" : "left");

  const ImageColumn = (
    <motion.div
      ref={imageRef}
      variants={imageSlide}
      initial="hidden"
      animate={imageInView ? "visible" : "hidden"}
      custom={0.15}
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
      style={{ aspectRatio: "4/3", maxWidth: "100%" }}
    >
      <Image 
        src={image} 
        alt={imageAlt} 
        fill 
        className="object-cover object-center" 
        sizes="(max-width: 768px) 100vw, 45vw" 
      />
      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none" />
    </motion.div>
  );

  const ContentColumn = (
    <div className="flex flex-col">
      {/* Timeline entries - no title above */}
      <div className="flex flex-col">
        {entries.map((entry, i) => (
          <AnimatedEntry key={i} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );

  return (
    <section className={`${bgClass} py-16 md:py-20 lg:py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        {/* Title section - spans full width above both columns */}
        <motion.div
          ref={headingRef}
          variants={fadeIn}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          custom={0}
          className="mb-12 text-center md:text-left"
        >
          {/* Badge pill */}
          <span className="inline-block text-primary font-fraunces bg-[#CBE1D4]  px-3 py-1 rounded-full mb-4 tracking-wide">
            {badge}
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-fraunces leading-tight">
            {headingLine1}
            <br />
            {parts[0]}
            <span className="italic font-inter text-[#c9922a]">{accentWord}</span>
            {parts[1]}
          </h2>
        </motion.div>

        {/* Two columns below the title */}
        {/* Mobile: image always first, then timeline */}
        {/* Desktop: based on imageLeft prop with vertical centering */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-16 md:items-center">
          {imageLeft ? (
            <>
              {/* Desktop: Image on left, Timeline on right */}
              {/* Mobile: Image first, Timeline second */}
              <div className="order-1 md:order-none">{ImageColumn}</div>
              <div className="order-2 md:order-none">{ContentColumn}</div>
            </>
          ) : (
            <>
              {/* Desktop: Timeline on left, Image on right */}
              {/* Mobile: Image first, Timeline second */}
              <div className="order-2 md:order-none">{ContentColumn}</div>
              <div className="order-1 md:order-none">{ImageColumn}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}