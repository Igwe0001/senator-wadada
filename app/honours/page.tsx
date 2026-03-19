"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { assets } from "@/assets/assets";
import CareerTable from "@/components/pages/home/CareerTable";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

const statItem = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
};

const rotateInLeft = {
  hidden: { opacity: 0, x: -40, rotate: -24 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: -18,
    transition: { duration: 0.9, ease: EASE, delay: 0.3 },
  },
};

const rotateInRight = {
  hidden: { opacity: 0, x: 40, rotate: 24 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 18,
    transition: { duration: 0.9, ease: EASE, delay: 0.3 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE, delay: 0.1 },
  },
};

const AWARDS_HEADERS = ["Year", "Award / Recognition", "Awarding Body"];
const AWARDS_ROWS = [
  // 2004 Awards
  {
    col1: "2004",
    col2: "Most Outstanding Member of the House of Representatives",
    col3: "Exclusive Magazine",
  },
  {
    col1: "2004",
    col2: "Most Distinguished Representative",
    col3: "National Association of Nigerian Students (NANS)",
  },
  {
    col1: "2004",
    col2: "Award of Excellence",
    col3: "Student Union, Federal Polytechnic Nasarawa",
  },

  // 2005 Awards
  {
    col1: "2005",
    col2: "Special Merit Award",
    col3: "PDP South West Chapter London",
  },
  {
    col1: "2005",
    col2: "Award of Excellence",
    col3: "National Association of Psychology Students, Nasarawa State University",
  },

  // 2007 Awards
  {
    col1: "2007",
    col2: "Ambassador for Peace",
    col3: "Inter-Religious and International Federation for World Peace",
  },
  {
    col1: "2007",
    col2: "Award of Endorsement",
    col3: "National Association of Public Administration, Nasarawa State University Keffi",
  },
  {
    col1: "2007",
    col2: "LEON Legislator Award",
    col3: "NYSC Keffi Chapter",
  },
  {
    col1: "2007",
    col2: "Award of Excellence in Legislation",
    col3: "National Association of Public Administration, Nasarawa State University Keffi",
  },
  {
    col1: "2007",
    col2: "Best Police Security Ambassador of the Year",
    col3: "Police Community Relation Committee, Mararaba Chapter, Nasarawa State",
  },
  {
    col1: "2007",
    col2: "Prestigious Award — Frontline Women Politicians",
    col3: "Frontline Women Politicians of Nasarawa State",
  },
  {
    col1: "2007",
    col2: "Special Merit Award — Defence of Good Leadership",
    col3: "Keffi Concern Forum",
  },
  {
    col1: "2007",
    col2: "Inspirational Youth Leadership Award",
    col3: "National Assembly Corps Members Forum (NACMF) 2006/2007",
  },

  // 2008 Awards
  {
    col1: "2008",
    col2: "True Ambassador of Nasarawa State",
    col3: "Artiste Forum, Nasarawa State Broadcasting Service",
  },

  // 2009 Awards
  {
    col1: "2009",
    col2: "Paragon Award for Excellence in Innovation Leadership",
    col3: "National Recognition",
  },
  {
    col1: "2009",
    col2: "Accolade Award of Appreciation",
    col3: "Exclusive Accolade International Magazine",
  },
  {
    col1: "2009",
    col2: "Special Merit Award — Growth & Development of Nasarawa State",
    col3: "Nasarawa State Youth Forum, Kaduna State Chapter",
  },
  {
    col1: "2009",
    col2: "Africa People's Award for Grassroots Achievement",
    col3: "African Forum Magazine (LIBRA Consults)",
  },
  {
    col1: "2009",
    col2: "Best Member: House of Representatives North Central",
    col3: "Encomiums Award for Political Leadership",
  },
  {
    col1: "2009",
    col2: "Certificate of Legislative Excellence",
    col3: "Award Media Event (AME)",
  },
  {
    col1: "2009",
    col2: "Rep-Legislative of the Year",
    col3: "Sir Abubakar Tafawa Balewa Inspiration Leadership & Good Governance",
  },

  // 2010 Awards
  {
    col1: "2010",
    col2: "Award of Excellence",
    col3: "Nasarawa State Students Association, Nasarawa State University Keffi",
  },

  // 2015/16 Awards
  {
    col1: "2015/16",
    col2: "Merit Award — NAPAS Final Year Students",
    col3: "Faculty of Administration (NAPAS), Nasarawa State University Keffi",
  },

  // 2016 Awards
  {
    col1: "2016",
    col2: "Award of Excellence — Best Philanthropist",
    col3: "National Association of Public Administration (NAPAS)",
  },
  {
    col1: "2016",
    col2: "Sir Ahmadu Bello Sardaua Platinum Leadership/Excellence Award",
    col3: "Arewa Youth Assembly (AYA)",
  },
  {
    col1: "2016",
    col2: "Award of Excellence — Polo Tournament Support of Orphans",
    col3: "President of Voters' Forum",
  },
  {
    col1: "2016",
    col2: "Award of Excellence for National Development",
    col3: "Nigerian Union of Journalists (NUJ) — 20th Anniversary, Creation of Nasarawa State",
  },

  // 2017 Awards
  {
    col1: "2017",
    col2: "Award of Excellence — Exemplary Leadership",
    col3: "Applause Global Concept",
  },

  // 2019 Awards
  {
    col1: "2019",
    col2: "Icon of Modern Democracy — Signature Award of Excellence",
    col3: "One on One with NBS TV, The Nasarawa Mind",
  },

  // 2020 Awards
  {
    col1: "2020",
    col2: "Merit Award for Humanitarian Service & Societal Development",
    col3: "NYSC Legal Aid CDS Group Keffi, Nasarawa State Chapter",
  },

  // 2021 Awards
  {
    col1: "2021",
    col2: "Award of Recognition — Exceptional and Unblemished Stewardship",
    col3: "Commonwealth Society of Nigeria",
  },
  {
    col1: "2021",
    col2: "Sustainable Development Goals Ambassador Award",
    col3: "Peace Corps of Nigeria",
  },
  {
    col1: "2021",
    col2: "Special Award — Youth Pillar of Hope",
    col3: "Peace Corps of Nigeria, Nasarawa State Chapter",
  },

  // Awards with N/A Year
  {
    col1: "N/A",
    col2: "Mentorship Award — Outstanding Performance to Community",
    col3: "Abdu Zanga Primary School Keffi, Nasarawa State",
  },
  {
    col1: "N/A",
    col2: "Merit Award of Charity and Leadership Excellence",
    col3: "Boys Brigade of Nigeria, ECWA Battalion Council Keffi, Nasarawa State",
  },
  {
    col1: "N/A",
    col2: "Certificate of Credence as Patron of Keffi Polo",
    col3: "2016/2017 Final Year Students, Federal University Lafia (FULAFIA)",
  },
  {
    col1: "N/A",
    col2: "Merit Awards for Outstanding Contribution to Education",
    col3: "Faculty of Arts, Nasarawa State University Keffi",
  },
  {
    col1: "N/A",
    col2: "Award of Excellence — Philanthropist to Community",
    col3: "Rotary Club of Keffi, Nasarawa State",
  },
  {
    col1: "N/A",
    col2: "Award of Excellence for Community Development",
    col3: "Unity Football Academy, Keffi, Nasarawa State",
  },
];

function Statistics() {
  const statsRef = useRef(null);
  const imagesRef = useRef(null);
  const bannerRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const imagesInView = useInView(imagesRef, { once: true, margin: "-60px" });
  const bannerInView = useInView(bannerRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full">
      {/* Banner */}
      <div ref={bannerRef} className="w-full h-screen relative">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={bannerInView ? { scale: 1 } : { scale: 1.05 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image src={assets.honoursHero} alt="Ahmed Wadada Aliyu" fill priority className="object-cover [object-position:0_-320px]" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-black/100 to-transparent z-10"
          variants={fadeIn}
          initial="hidden"
          animate={bannerInView ? "visible" : "hidden"}
          custom={0.2}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-black/100 to-transparent z-10"
          variants={fadeIn}
          initial="hidden"
          animate={bannerInView ? "visible" : "hidden"}
          custom={0.2}
        />

        <div className="w-full h-full relative z-50 text-white flex justify-center items-end pb-10 sm:pb-12 px-4">
          <div className="text-center">
            <motion.p
              className="bg-black/10 backdrop-blur-xl rounded-xl p-2 inline-block text-xs sm:text-sm mb-3"
              variants={fadeUp}
              initial="hidden"
              animate={bannerInView ? "visible" : "hidden"}
              custom={0.3}
            >
              Honours & Recognition
            </motion.p>
            <motion.h1
              className="text-2xl sm:text-3xl mb-4 sm:mb-6 leading-snug max-w-xs sm:max-w-lg mx-auto"
              variants={fadeUp}
              initial="hidden"
              animate={bannerInView ? "visible" : "hidden"}
              custom={0.45}
            >
              A Career Decorated With Excellence
            </motion.h1>
            <motion.span className="text-xs" variants={fadeUp} initial="hidden" animate={bannerInView ? "visible" : "hidden"} custom={0.6}>
              Senator · Entrepreneur · Community Leader
            </motion.span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-architects-daughter text-[#6A6A6A] text-3xl lg:text-4xl text-center">Awards</h1>
        <CareerTable headers={AWARDS_HEADERS} rows={AWARDS_ROWS} />
      </div>
    </section>
  );
}

export default Statistics;
