"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
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
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE, delay },
  }),
};

export default function LegislativeRecord() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const recordsRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const recordsInView = useInView(recordsRef, { once: true, margin: "-50px" });

  const records = [
    {
      image: assets.image2,
      title: "House of Representatives (2003–2010)",
      subtitle: "Pioneer Chairman & Key Committee Assignments",
      committees: [
        "Pioneer Chairman: House Committee on Capital Market & Institutions",
        "Member — House Committee on Gas",
        "Member — House Committee on National Security & Intelligence",
        "Member — House Committee on Commerce",
        "Member — House Committee on Media & Publicity",
      ],
    },
    {
      image: assets.image9,
      title: "House of Representatives (2010–2011)",
      subtitle: "Chairman — Information & National Orientation",
      committees: [
        "Chairman: House Committee on Information & National Orientation",
        "Member — House Committee on Federal Capital Territory",
        "Member — House Committee on Sport",
        "Member — House Committee on Police Affairs",
      ],
    },
    {
      image: assets.image10,
      title: "Senate of the Federal Republic (2023–Present)",
      subtitle: "Chairman — Senate Public Accounts Committee (SPAC)",
      committees: [
        "Chairman: Senate Public Accounts Committee (SPAC)",
        "Member — Senate Committee on Marine Transport",
        "Member — Senate Committee on Ecology & Climate Change",
        "Member — Senate Committee on Agriculture Production, Services & Rural Development",
        "Member — Senate Committee on Employment & Productivity",
        "Member — Senate Committee on Foreign Affairs",
        "Member — Senate Committee on Youth & Sports",
        "Member — Senate Committee on Navy",
        "Member — Senate Committee on Oil & Gas Host Community",
        "Member — Senate Committee on Trade & Investments",
        "Member — Senate Committee on Women Affairs",
        "Member — Senate Committee on Media & Public Affairs",
      ],
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      <div id="legislature" className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <motion.p
            variants={scaleIn}
            custom={0.1}
            className=" text-[#057AF0] bg-[#057AF00D] rounded-2xl inline-block px-3 py-1.5 sm:px-4 sm:py-2 font-medium mb-2 sm:mb-3"
          >
            Legislative Record
          </motion.p>

          <motion.h2 variants={fadeInUp} custom={0.2} className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            A <span className="text-blue-600">Proven</span> Lawmaker
          </motion.h2>
        </motion.div>

        {/* Records */}
        <motion.div
          ref={recordsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={recordsInView ? "visible" : "hidden"}
          className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
        >
          {records.map((record, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              custom={index * 0.15}
              className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-10 bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <motion.div variants={index % 2 === 0 ? slideInLeft : slideInRight} custom={0.2} className="w-full md:w-[200px] lg:w-[240px] shrink-0">
                <div className="relative w-full h-[380px] sm:h-[200px] md:h-[220px] overflow-hidden rounded-xl">
                  <Image
                    src={record.image}
                    alt={record.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 200px, 240px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div variants={index % 2 === 0 ? slideInRight : slideInLeft} custom={0.3} className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{record.title}</h3>

                <p className="text-[#212121] font-semibold  mt-1 sm:mt-2">{record.subtitle}</p>
                <p className="text-[#6A6A6A] py-2  mt-1 sm:mt-2">Committees</p>

                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {record.committees.map((committee, i) => (
                    <motion.span
                      key={i}
                      variants={scaleIn}
                      custom={0.4 + i * 0.05}
                      whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                      className="bg-[#F6F6F8] text-[#6A6A6A]  p-4 lg:p-2 text-md  rounded-full transition-all duration-200 cursor-default"
                    >
                      {committee}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
