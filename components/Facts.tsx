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
  const titleRef = useRef(null);
  const factsRef = useRef(null);
  const bioRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const factsInView = useInView(factsRef, { once: true, margin: "-50px" });
  const bioInView = useInView(bioRef, { once: true, margin: "-50px" });

  const facts = [
    {
      image: assets.image5,
      label: "Traditional Title",
      value: "Sarkin Yakin Keffi",
      alt: "Traditional Title",
      delay: 0.1,
    },
    {
      image: assets.image6,
      label: "Senatorial District",
      value: "Nasarawa West",
      alt: "Senatorial District",
      delay: 0.25,
    },
    {
      image: assets.image7,
      label: "Current Party",
      value: "Social Democratic Party (SDP)",
      alt: "Current Party",
      delay: 0.4,
    },
    {
      image: assets.image8,
      label: "Constituency",
      value: "Keffi, Karu & Kokona",
      alt: "Constituency",
      delay: 0.55,
    },
  ];

  return (
    <section id="career" ref={sectionRef} className="py-8 md:py-10 lg:py-12 px-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          ref={titleRef}
          className="text-xl sm:text-2xl md:text-3xl font-architects-daughter text-center mb-6 md:mb-8"
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
              <p className="text-xs sm:text-sm md:text-base text-[#6A6A6A] p-1.5 sm:p-2 rounded-xl bg-[#F6F6F8] mt-1 sm:mt-2 whitespace-nowrap">
                {fact.label}
              </p>
              <span className="font-semibold text-[#212121] text-xs sm:text-sm md:text-base mt-1 leading-tight max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
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
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Senator Ahmed Wadada Aliyu is a distinguished Nigerian statesman, legislator, and community champion whose career spans over three
              decades of dedicated public service. Born and raised in Keffi, Nasarawa State, he embodies the aspirations of his people — their hunger
              for good governance, economic opportunity, and a dignified future.
            </p>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              As the Chairman of the Senate Public Accounts Committee (SPAC) since June 2023, he continues his lifelong commitment to transparency,
              accountability, and fiscal responsibility in governance. His journey is one of an eloquent communicator, an effective negotiator, and an
              indefatigable champion of the common man.
            </p>
          </motion.div>
          <motion.div variants={slideInRight} custom={0.4} className="flex flex-col gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              From his early days as a Senior Clerk at the United Bank for Africa to serving as Pioneer Chairman of the House Committee on Capital
              Market and Institutions, Senator Wadada has consistently demonstrated an ability to lead, negotiate, and deliver results in the most
              demanding arenas of public life.
            </p>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              The honour of Sarkin Yakin Keffi — conferred by HRH Alh. Dr. Shehu Usman Yamusa III, the Emir of Keffi — is a testament to the esteem in
              which his community holds him. It is not merely a title; it is a mandate.
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* <ProfessionalJourney /> */}
    </section>
  );
}

export default Facts;
