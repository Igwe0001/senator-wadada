"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE, delay },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

function Facts() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const factsRef = useRef(null);
  const bioRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const factsInView = useInView(factsRef, { once: true, margin: "-50px" });
  const bioInView = useInView(bioRef, { once: true, margin: "-50px" });

  const facts = [
    {
      image: assets.crown,
      label: "Traditional Title",
      value: "Sarkin Yakin Keffi",
      alt: "Traditional Title",
      delay: 0.1,
    },
    {
      image: assets.map,
      label: "Senatorial District",
      value: "Nasarawa West",
      alt: "Senatorial District",
      delay: 0.25,
    },
    {
      image: assets.people,
      label: "Current Party",
      value: "All Progressive Congress (APC)",
      alt: "Current Party",
      delay: 0.4,
    },
    {
      image: assets.biggerMap,
      label: "Constituency",
      value: "Keffi, Karu & Kokona",
      alt: "Constituency",
      delay: 0.55,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="overflow-hidden">
      {/* ── Hero Banner ── */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative w-full h-[600px]"
      >
        {/* Background image — swap assets.heroBanner with your actual image key */}
        <Image
          src={assets.image86}
          alt="Senator Ahmed Wadada Aliyu"
          fill
          priority
          className="object-cover lg:[object-position:0_-130px] grayscale"
          sizes="100vw"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Overlay text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-14 md:pb-26 px-4 text-center"
        >
          {/* Pill badge */}
          <motion.span
            variants={fadeInUp}
            custom={0.1}
            className="inline-block text-xl sm:text-sm text-white/80 border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-3 sm:mb-4 tracking-wide"
          >
            Who He Is
          </motion.span>

          {/* Heading */}
          <motion.h2 variants={fadeInUp} custom={0.25} className="text-2xl sm:text-3xl font-fraunces md:text-4xl font-bold text-white leading-tight max-w-2xl">
            A Life of Purpose &amp; Service
          </motion.h2>

          {/* Tagline */}
          <motion.p variants={fadeInUp} custom={0.4} className="mt-3 text-xl relative z-20 text-white/70">
            Senator · Entrepreneur · Community Leader
          </motion.p>
          <motion.div
            className="absolute hidden md:block bottom-0 left-0 w-full h-56 bg-gradient-to-t from-black/100 to-transparent z-10"
            variants={fadeInUp}
            initial="hidden"
            animate={factsInView ? "visible" : "hidden"}
            custom={0.2}
          />
        </motion.div>
      </motion.div>

      {/* ── Facts + Bio ── */}
      <div className="bg-white py-8 md:py-10 lg:py-12 px-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Title */}
          <motion.h1
            ref={titleRef}
            className="text-2xl font-bold sm:text-2xl text-[#6A6A6A] md:text-3xl font-architects-daughter text-center mb-6 md:mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            custom={0.1}
          >
            Key Facts
          </motion.h1>

          {/* Key Facts Grid */}
          <motion.div
            ref={factsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={factsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-4 md:mt-8"
          >
            {facts.map((fact, index) => (
              <motion.div key={index} variants={scaleIn} custom={fact.delay} className="flex flex-col items-center text-center group">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-2 md:mb-3">
                  <Image
                    src={fact.image}
                    alt={fact.alt}
                    fill
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="md:text-base text-primary font-semibold p-1.5 sm:p-2 rounded-xl bg-[#EDF3F0] mt-1 sm:mt-2 whitespace-nowrap">
                  {fact.label}
                </p>
                <span className="font-semibold text-[#212121] md:text-base mt-1 leading-tight max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
                  {fact.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio Text */}
          <motion.div
            ref={bioRef}
            variants={staggerContainer}
            initial="hidden"
            animate={bioInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-[#6A6A6A]"
          >
            <motion.div variants={slideInLeft} custom={0.2} className="flex flex-col gap-3 sm:gap-4">
              <p className=" md:text-base leading-relaxed">
                Senator Ahmed Wadada Aliyu is a distinguished Nigerian statesman, legislator, and community champion whose career spans over three
                decades of dedicated public service. Born and raised in Keffi, Nasarawa State, he embodies the aspirations of his people — their
                hunger for good governance, economic opportunity, and a dignified future.
              </p>
              <p className=" md:text-base leading-relaxed">
                As the Chairman of the Senate Public Accounts Committee (SPAC) since June 2023, he continues his lifelong commitment to transparency,
                accountability, and fiscal responsibility in governance. His journey is one of an eloquent communicator, an effective negotiator, and
                an indefatigable champion of the common man.
              </p>
            </motion.div>
            <motion.div variants={slideInRight} custom={0.4} className="flex flex-col gap-3 sm:gap-4">
              <p className="md:text-base leading-relaxed">
                From his early days as a Senior Clerk at the United Bank for Africa to serving as Pioneer Chairman of the House Committee on Capital
                Market and Institutions, Senator Wadada has consistently demonstrated an ability to lead, negotiate, and deliver results in the most
                demanding arenas of public life.
              </p>
              <p className=" md:text-base leading-relaxed">
                The honour of Sarkin Yakin Keffi — conferred by HRH Alh. Dr. Shehu Usman Yamusa III, the Emir of Keffi — is a testament to the esteem
                in which his community holds him. It is not merely a title; it is a mandate.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Facts;
