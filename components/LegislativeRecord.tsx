"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Animations ──────────────────────────────────────────────────────────────

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
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const slideIn = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -50 : 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
});

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE, delay },
  }),
};

// ─── Data ────────────────────────────────────────────────────────────────────

const records = [
  {
    image: assets.imageLeft,
    title: "House of Representatives (2003–2010)",
    subtitle: "Pioneer Chairman & Key Committee Assignments",
    imageOnLeft: true,
    committees: [
      "Pioneer Chairman: House Committee on Capital Market & Institutions",
      "Member — House Committee on Gas",
      "Member — House Committee on National Security & Intelligence",
      "Member — House Committee on Commerce",
      "Member — House Committee on Media & Publicity",
    ],
  },
  {
    image: assets.image88,
    title: "House of Representatives (2010–2011)",
    subtitle: "Chairman — Information & National Orientation",
    imageOnLeft: false,
    committees: [
      "Chairman: House Committee on Information & National Orientation",
      "Member — House Committee on Federal Capital Territory",
      "Member — House Committee on Sport",
      "Member — House Committee on Police Affairs",
    ],
  },
  {
    image: assets.image89,
    title: "Senator of the Federal Republic (2023–Present)",
    subtitle: "Chairman — Senate Public Accounts Committee (SPAC)",
    imageOnLeft: true,
    committees: [
      "Chairman: Senate Public Accounts Committee (SPAC)",
      "Member — Senate Committee on Marine Transport",
      "Member — Senate Committee on Ecology & Climate Change",
      "Member — Senate Committee on Agriculture Production, Services & Rural Development",
      "Member — Senate Committee on Employment & Productivity",
      "Member — Senate Committee on Foreign Affairs",
      "Member — Senate Committee on Agriculture Colleges & Institutions",
      "Member — Senate Committee on Solid Minerals",
      "Member — Senate Committee on Youth & Sports",
      "Member — Senate Committee on Navy",
      "Member — Senate Committee on Oil & Gas Host Community",
      "Member — Senate Committee on Trade & Investments",
      "Member — Senate Committee on Women Affairs",
      "Member — Senate Committee on Media & Public Affairs",
    ],
  },
];

// ─── Card ────────────────────────────────────────────────────────────────────

function RecordCard({ record, index }: { record: (typeof records)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.1}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
      id="legislature"
    >
      {/* IMAGE */}
      <motion.div
        variants={slideIn(record.imageOnLeft ? "left" : "right")}
        custom={0.1}
        className={`${record.imageOnLeft ? "md:order-1" : "md:order-2"} order-1`}
      >
        <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={record.image}
            alt={record.title}
            fill
            className="object-cover object-[center_30%] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={slideIn(record.imageOnLeft ? "right" : "left")}
        custom={0.2}
        className={`${record.imageOnLeft ? "md:order-2" : "md:order-1"} order-2 flex flex-col gap-4`}
      >
        <h3 className="text-2xl md:text-3xl font-semibold font-fraunces text-[#2B2B2B] leading-snug">{record.title}</h3>

        <p className=" text-[#212121] font-semibold">{record.subtitle}</p>

        <p className="text-xl text-[#6A6A6A]">Committees</p>

        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-wrap gap-2">
          {record.committees.map((committee, i) => (
            <motion.span
              key={i}
              variants={scaleIn}
              custom={i * 0.03}
              className="bg-[#EDF3F0] text-primary font-bold  px-3 py-1.5 rounded-full "
            >
              {committee}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

export default function LegislativeRecord() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div ref={headerRef} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeIn} className="text-center mb-14 md:mb-20">
          <motion.p variants={scaleIn} custom={0.1} className="inline-block text-sm text-[#3F6E52] bg-[#CBE1D4] px-4 py-1 rounded-full mb-4">
            Legislative Record
          </motion.p>

          <motion.h2 variants={fadeInUp} custom={0.2} className="text-3xl font-fraunces sm:text-4xl md:text-5xl font-semibold text-gray-900">
            A <span className="text-[#C9922A] italic font-inter">Proven</span> Lawmaker
          </motion.h2>
        </motion.div>

        {/* RECORDS */}
        <div className="flex flex-col divide-y divide-gray-200">
          {records.map((record, index) => (
            <div key={index} className="py-12 md:py-16 first:pt-0 last:pb-0">
              <RecordCard record={record} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
