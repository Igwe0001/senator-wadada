"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CareerTable from "./CareerTable";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
    transition: { duration: 0.5, ease: EASE, delay },
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
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

const heroZoom = {
  hidden: { scale: 1.1, opacity: 0.8 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: EASE },
  },
};

const PILLAR_HEADERS = ["No.", "Pillar Title", "Description"];
const PILLAR_ROWS = [
  {
    col1: "01",
    col2: "Infrastructure & Development",
    col3: "Delivering world-class roads, bridges, housing, and public utilities across Nasarawa's three senatorial zones. Leveraging his federal legislative network to attract investment to every local government area.",
  },
  {
    col1: "02",
    col2: "Education & Youth Empowerment",
    col3: "Transforming schools, creating scholarships, and building a robust skills economy for Nasarawa's youth. Senator Wadada founded the Association for Better Keffi and the Association of Under-40s in the House — his commitment to youth is foundational.",
  },
  {
    col1: "03",
    col2: "Accountability & Transparency",
    col3: "As Chairman of the Senate Public Accounts Committee, Senator Wadada has championed fiscal discipline. As Governor, he will institutionalise open governance, zero-tolerance for corruption, and independent oversight of public funds.",
  },
  {
    col1: "04",
    col2: "Agriculture & Food Security",
    col3: "Harnessing Nasarawa's extraordinary agrarian potential through modern farming, rural credit schemes, and value-chain development. Drawing on his membership of the Senate Agriculture Committee to attract federal and international support.",
  },
  {
    col1: "05",
    col2: "Economic Growth & Investment",
    col3: "Attracting investors across sectors — solid minerals, manufacturing, tourism, and technology. Senator Wadada's track record with Nigeria's capital markets, commodity exchanges, and investment roadshows positions Nasarawa for unprecedented economic growth.",
  },
  {
    col1: "06",
    col2: "Environment & Climate Action",
    col3: "Protecting Nasarawa's natural resources and advancing climate-resilient development. As a member of the Senate Committee on Ecology & Climate Change, Senator Wadada brings a global perspective to local environmental governance.",
  },
];

function Vision() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const pillarsRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-50px" });

  return (
    <motion.section ref={sectionRef} initial="hidden" animate={sectionInView ? "visible" : "hidden"} className="w-full overflow-hidden">
      {/* Hero Image Section */}
      <motion.div
        ref={heroRef}
        variants={heroZoom}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="w-full relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden"
      >
        <Image src={assets.image11} alt="Ahmed Wadada Aliyu" fill priority className="object-cover" />
        <motion.div variants={fadeIn} custom={0.3} className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-blue-600/40"></motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        ref={contentRef}
        variants={staggerContainer}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16"
      >
        <div className="flex flex-col gap-3 sm:gap-4 items-start max-w-3xl">
          <motion.span
            variants={scaleIn}
            custom={0.1}
            className="text-xs sm:text-sm text-[#057AF0] bg-[#057AF00D] px-3 py-1.5 sm:px-4 sm:py-2 inline-block rounded-xl font-medium"
          >
            Our Vision for Nasarawa
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            custom={0.2}
            className="text-[#212121] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
          >
            A New Dawn for <span className="text-[#057AF0]">Nasarawa</span> State
          </motion.h1>

          <motion.p variants={fadeInUp} custom={0.3} className="text-[#6A6A6A] text-sm sm:text-base md:text-lg leading-relaxed">
            Senator Wadada Aliyu&apos;s governorship aspiration is grounded in his decades of legislative experience, grassroots activism, and an
            intimate understanding of Nasarawa&apos;s challenges and potential. His platform rests on transformative pillars designed to deliver real,
            measurable change for every citizen.
          </motion.p>
        </div>
      </motion.div>

      {/* Pillars Section */}
      <motion.div
        ref={pillarsRef}
        variants={staggerContainer}
        initial="hidden"
        animate={pillarsInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Vision Pillars Image - Top on mobile, Right side centered on desktop */}
          <motion.div variants={slideInLeft} custom={0.2} className="w-full lg:w-auto lg:order-2 flex justify-center">
            <div className="text-center flex flex-col items-center gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              >
                <Image
                  src={assets.image12}
                  alt="Vision Pillars"
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                  className="object-contain"
                />
              </motion.div>
              <motion.h1 variants={fadeInUp} custom={0.3} className="text-lg sm:text-xl md:text-2xl font-bold text-[#212121]">
                Vision Pillars
              </motion.h1>
              <motion.p variants={fadeInUp} custom={0.4} className="text-xs sm:text-sm text-[#6A6A6A] max-w-[250px] sm:max-w-[300px]">
                Six transformative pillars to build a prosperous Nasarawa
              </motion.p>
            </div>
          </motion.div>

          {/* Table Section - Bottom on mobile, Left side on desktop */}
          <motion.div variants={slideInRight} custom={0.3} className="w-full lg:flex-1 lg:order-1 overflow-x-auto">
            <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-0">
              <CareerTable headers={PILLAR_HEADERS} rows={PILLAR_ROWS} gridClassName="grid-cols-4" gridSpan3="col-span-2" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Vision;
