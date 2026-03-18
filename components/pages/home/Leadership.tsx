"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CareerTable from "./CareerTable";
import Image from "next/image";
import { assets } from "@/assets/assets";

const EASE = [0.22, 1, 0.36, 1] as const;

// Animation variants
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

// Leadership data
const LEADERSHIP_HEADERS = ["Period", "Role", "Description"];
const LEADERSHIP_ROWS = [
  {
    col1: "2015 – Present",
    col2: "Convener — Northern Reawakening Forum",
    col3: "A platform for the political, economic, and cultural renaissance of Northern Nigeria — championing dialogue, unity, and progressive leadership.",
  },
  {
    col1: "2003",
    col2: "Founder — Association of the Under 40s in the House of Representatives",
    col3: "Pioneered a youth-led caucus within the National Assembly to amplify the voice of young legislators.",
  },
  {
    col1: "1991 – Present",
    col2: "Founder & Coordinator — Association for Better Keffi",
    col3: "Over three decades of community development, civic education, and grassroots advocacy for the people of Keffi.",
  },
  {
    col1: "2004–2011",
    col2: "Member, National Executive Committee (NEC) — Peoples Democratic Party (PDP)",
    col3: "Served at the highest party executive level nationally.",
  },
  {
    col1: "2013–2014",
    col2: "National Financial Secretary — New People's Democratic Party (N-PDP)",
    col3: "Managed national financial affairs of the party.",
  },
  {
    col1: "2018",
    col2: "Chairman — APC Campaign Council, Nasarawa State",
    col3: "Led the All Progressives Congress state campaign council and served as first runner-up in the gubernatorial election.",
  },
];

// Assignment data
const ASSIGNMENT_HEADERS = ["Year", "Assignment"];
const ASSIGNMENT_ROWS = [
  {
    col1: "2004",
    col2: "Member — Presidential Monitoring Committee to study Commodity Exchange operations in Singapore, Malaysia & India, towards the establishment of the Abuja Securities & Commodity Exchange (ASEA).",
  },
  {
    col1: "2005",
    col2: "Chairman — Technical Committee on Review of the Securities Act (ISA No. 1991).",
  },
  {
    col1: "N/A",
    col2: "Member — Bond Market Resuscitation Committee of Nigeria.",
  },
  {
    col1: "2006–2011",
    col2: "Core Member — Nigerian Economic Summit Group (NESG) Policy Commission, Non-Oil & Non-Agriculture Sectors.",
  },
];

const QUALIFICATION_HEADERS = ["Year", "Qualification", "Institution"];
const QUALIFICATION_ROWS = [
  {
    col1: "1993",
    col2: "Higher National Diploma (HND) — Business Administration & Management",
    col3: "Federal Polytechnic Nasarawa, Nasarawa State",
  },
  {
    col1: "1987",
    col2: "National Diploma (ND) — Business Administration & Management",
    col3: "Federal Polytechnic Nasarawa, Nasarawa State",
  },
  {
    col1: "1984",
    col2: "General Certificate of Education (GCE)",
    col3: "School of Preliminary Studies Keffi, Nasarawa State",
  },
  {
    col1: "1983",
    col2: "General Certificate of Education (GCE)",
    col3: "Government Secondary School Miango, Plateau State",
  },
  {
    col1: "1978",
    col2: "First School Leaving Certificate",
    col3: "Abdu Zanga Primary School Keffi, Nasarawa State",
  },
];

const HONOURS_HEADERS = ["Period", "Role & Institution"];
const HONOURS_ROWS = [
  {
    col1: "1972–1977",
    col2: "Class Monitor — Abdu Zanga Primary School",
  },
  {
    col1: "1977–1978",
    col2: "Senior Prefect — Abdu Zanga Primary School",
  },
  {
    col1: "1982–1983",
    col2: "Social Prefect — Government Secondary School Miango",
  },
  {
    col1: "1982–1984",
    col2: "Social Director — Keffi Students Association",
  },
  {
    col1: "1991–Present",
    col2: "Coordinator — Association for Better Keffi",
  },
];

const ENGAGEMENTS_HEADERS = ["Year", "Event", "Location"];
const ENGAGEMENTS_ROWS = [
  {
    col1: "2003",
    col2: "Annual Parliamentary Conference",
    col3: "Canada",
  },
  {
    col1: "2004",
    col2: "Conference of the World Stock Exchange",
    col3: "New York, USA",
  },
  {
    col1: "2004",
    col2: "29th Annual Conference — International Organisation of Securities & Exchange Commissions (IOSCO)",
    col3: "Amman, Jordan · 17–20 May 2004",
  },
  {
    col1: "2004",
    col2: "Securities Summit on Juvenile Delinquency, Crime & Community Policy — Federal House of Representatives Special Security Committee",
    col3: "Nigeria · 10–11 August 2004",
  },
  {
    col1: "2004",
    col2: "Association of Stock Exchanges in Africa (ASEA)",
    col3: "Nairobi, Kenya · 23–26 November 2004",
  },
  {
    col1: "2005",
    col2: "30th Annual Conference — International Organisation of Securities Commissions (IOSCO)",
    col3: "Colombo, Sri Lanka · 4–7 April 2005",
  },
  {
    col1: "2005",
    col2: "Investment Road Show — Nigerian Stock Exchange (NSE)",
    col3: "New York, USA · June 2005",
  },
];

function Leadership() {
  const sectionRef = useRef(null);
  const communityRef = useRef(null);
  const assignmentsRef = useRef(null);
  const academicRef = useRef(null);
  const honoursRef = useRef(null);
  const engagementsRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const communityInView = useInView(communityRef, { once: true, margin: "-50px" });
  const assignmentsInView = useInView(assignmentsRef, { once: true, margin: "-50px" });
  const academicInView = useInView(academicRef, { once: true, margin: "-50px" });
  const honoursInView = useInView(honoursRef, { once: true, margin: "-50px" });
  const engagementsInView = useInView(engagementsRef, { once: true, margin: "-50px" });

  const tableColors = {
    sectionBg: "#011428",
    headerBg: "#FFFFFF1A",
    headerText: "#fff",
    col1Text: "#fff",
    col2Text: "#fff",
    col3Text: "#fff",
  };

  const twoColColors = {
    sectionBg: "#011428",
    headerBg: "#FFFFFF1A",
    headerText: "#fff",
    col1Text: "#fff",
    col2Text: "#fff",
  };

  return (
    <motion.section ref={sectionRef} initial="hidden" animate={sectionInView ? "visible" : "hidden"} className="w-full overflow-hidden">
      {/* Community Leadership Section */}
      <motion.div
        ref={communityRef}
        variants={staggerContainer}
        initial="hidden"
        animate={communityInView ? "visible" : "hidden"}
        className="bg-[#011428] py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div variants={fadeInUp} custom={0.1} className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.span
              variants={scaleIn}
              custom={0.1}
              className="text-white bg-white/15 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl inline-block text-xs sm:text-sm font-medium"
            >
              Voluntary & Community Leadership
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              custom={0.2}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 font-semibold leading-tight"
            >
              Leading <span className="text-[#057AF0]">Beyond</span> the Chamber
            </motion.h1>
          </motion.div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Table - Full width on mobile, 2/3 on desktop */}
            <motion.div variants={slideInRight} custom={0.3} className="w-full lg:flex-1 order-2 lg:order-1 overflow-x-auto">
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-0">
                <CareerTable headers={LEADERSHIP_HEADERS} rows={LEADERSHIP_ROWS} colors={tableColors} />
              </div>
            </motion.div>

            {/* Title - Top on mobile, Right side on desktop */}
            <motion.div variants={slideInLeft} custom={0.2} className="w-full lg:w-auto lg:order-2 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center flex flex-col items-center gap-3 sm:gap-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">Community Leadership</h2>
                <div className="w-20 h-1 bg-[#057AF0] rounded-full"></div>
                <p className="text-white/70 text-sm sm:text-base max-w-[300px]">Building bridges, empowering communities</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* National Assignments Section */}
      <motion.div
        ref={assignmentsRef}
        variants={staggerContainer}
        initial="hidden"
        animate={assignmentsInView ? "visible" : "hidden"}
        className="bg-[#011428] py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div variants={fadeInUp} custom={0.1} className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.span
              variants={scaleIn}
              custom={0.1}
              className="text-white bg-white/15 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl inline-block text-xs sm:text-sm font-medium"
            >
              National Service
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              custom={0.2}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 font-semibold leading-tight"
            >
              Key <span className="text-[#057AF0]">National</span> Assignments
            </motion.h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Title - Top on mobile, Left side on desktop */}
            <motion.div variants={slideInLeft} custom={0.2} className="w-full lg:w-auto order-1 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center flex flex-col items-center gap-3 sm:gap-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">National Assignments</h2>
                <div className="w-20 h-1 bg-[#057AF0] rounded-full"></div>
                <p className="text-white/70 text-sm sm:text-base max-w-[300px]">Shaping policy at the highest level</p>
              </motion.div>
            </motion.div>

            {/* Table - Full width on mobile, 2/3 on desktop */}
            <motion.div variants={slideInRight} custom={0.3} className="w-full lg:flex-1 order-2 overflow-x-auto">
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-0">
                <CareerTable headers={ASSIGNMENT_HEADERS} rows={ASSIGNMENT_ROWS} colors={twoColColors} gridSpan2="col-span-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Academic Background Section */}
      <motion.div
        ref={academicRef}
        variants={staggerContainer}
        initial="hidden"
        animate={academicInView ? "visible" : "hidden"}
        className="bg-[#011428] py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div variants={fadeInUp} custom={0.1} className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.span
              variants={scaleIn}
              custom={0.1}
              className="text-white bg-white/15 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl inline-block text-xs sm:text-sm font-medium"
            >
              Academic Background
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              custom={0.2}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 font-semibold leading-tight"
            >
              Foundation of <span className="text-[#057AF0]">Knowledge</span>
            </motion.h1>
          </motion.div>

          {/* Qualifications */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
            {/* Table - Full width on mobile, 2/3 on desktop */}
            <motion.div variants={slideInRight} custom={0.3} className="w-full lg:flex-1 order-2 lg:order-1 overflow-x-auto">
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-0">
                <CareerTable headers={QUALIFICATION_HEADERS} rows={QUALIFICATION_ROWS} colors={tableColors} />
              </div>
            </motion.div>

            {/* Title - Top on mobile, Right side on desktop */}
            <motion.div variants={slideInLeft} custom={0.2} className="w-full lg:w-auto lg:order-2 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center flex flex-col items-center gap-3 sm:gap-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">Qualifications</h2>
                <div className="w-20 h-1 bg-[#057AF0] rounded-full"></div>
                <p className="text-white/70 text-sm sm:text-base max-w-[300px]">Excellence in education and training</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scholastic Honors */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Title - Top on mobile, Left side on desktop */}
            <motion.div variants={slideInLeft} custom={0.2} className="w-full lg:w-auto order-1 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center flex flex-col items-center gap-3 sm:gap-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">Scholastic Honors</h2>
                <div className="w-20 h-1 bg-[#057AF0] rounded-full"></div>
                <p className="text-white/70 text-sm sm:text-base max-w-[300px]">Recognition of academic excellence</p>
              </motion.div>
            </motion.div>

            {/* Table - Full width on mobile, 2/3 on desktop */}
            <motion.div variants={slideInRight} custom={0.3} className="w-full lg:flex-1 order-2 overflow-x-auto">
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-0">
                <CareerTable headers={HONOURS_HEADERS} rows={HONOURS_ROWS} colors={twoColColors} gridSpan2="col-span-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Global Engagements Section */}
      <motion.div
        ref={engagementsRef}
        variants={staggerContainer}
        initial="hidden"
        animate={engagementsInView ? "visible" : "hidden"}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div variants={fadeInUp} custom={0.1} className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.span
              variants={scaleIn}
              custom={0.1}
              className="bg-[#057AF00D] text-[#057AF0] px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl inline-block text-xs sm:text-sm font-medium"
            >
              Global Engagements
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              custom={0.2}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 font-semibold leading-tight"
            >
              International <span className="text-[#057AF0]">Conferences</span> & Delegations
            </motion.h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Title - Top on mobile, Left side on desktop */}
            <motion.div variants={slideInLeft} custom={0.2} className="w-full lg:w-auto order-1 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center flex flex-col items-center gap-3 sm:gap-4"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121]">Global Presence</h2>
                <div className="w-20 h-1 bg-[#057AF0] rounded-full"></div>
                <p className="text-[#6A6A6A] text-sm sm:text-base max-w-[300px]">Representing Nigeria on the world stage</p>
              </motion.div>
            </motion.div>

            {/* Table - Full width on mobile, 2/3 on desktop */}
            <motion.div variants={slideInRight} custom={0.3} className="w-full lg:flex-1 order-2 overflow-x-auto">
              <div className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-0">
                <CareerTable headers={ENGAGEMENTS_HEADERS} rows={ENGAGEMENTS_ROWS} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Leadership;
