"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Link from "next/link";

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

const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.6 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.8 },
  },
};

const scrollToVision = () => {
  const el = document.getElementById("vision");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function Hero() {
  return (
    <section id="hero" className="relative p-2">
      <div className="relative h-[100svh] min-h-[580px] overflow-hidden rounded-xl w-full">
        {/* Background Image */}
        <motion.div className="absolute inset-0" initial={{ scale: 1.06 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: EASE }}>
          <Image src={assets.newHero} alt="Ahmed Wadada Aliyu" fill priority className="object-cover lg:[object-position:0_-120px]" />
        </motion.div>

        {/* Top gradient */}
        <motion.div
          className="absolute w-full h-full bg-black/30 to-transparent z-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.2}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end px-4 sm:px-6 pb-24 sm:pb-20 text-white">
          <div className="max-w-xl w-full">
            <motion.p
              className="text-xs sm:text-sm inline-block mb-3 opacity-90 bg-black/30 backdrop-blur-xl rounded-xl px-3 py-1.5 sm:p-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              Nasarawa State • 2027 Governorship
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
            >
              Ahmed Wadada Aliyu
            </motion.h1>

            <motion.p className="opacity-90 leading-relaxed max-w-sm sm:max-w-none" variants={fadeUp} initial="hidden" animate="visible" custom={0.4}>
              Decades of service. A lifetime of commitment. A vision to transform Nasarawa State.
            </motion.p>

            {/* Vision Button — visible on mobile only, sits under the text */}
            <motion.div className="mt-5 sm:hidden" variants={slideInRight} initial="hidden" animate="visible">
              <button
                onClick={scrollToVision}
                className="bg-white text-black text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-100 active:scale-95 transition-all duration-200"
              >
                Our Vision
                <Image src={assets.arrowDown} alt="arrow down" width={16} height={16} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Vision Button — visible on sm+ only, absolutely positioned bottom-right */}
        <motion.div className="absolute right-6 bottom-20 z-10 hidden sm:block" variants={slideInRight} initial="hidden" animate="visible">
          <button
            onClick={scrollToVision}
            className="bg-white text-black text-sm px-5 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            Our Vision
            <Image src={assets.arrowDown} alt="arrow down" width={16} height={16} />
          </button>
        </motion.div>

        {/* Statistics Bar Tab */}
        <motion.div
          className="w-[160px] sm:w-[200px] h-[44px] sm:h-[50px] rounded-t-md flex items-center font-medium justify-center bg-white text-[#212121] absolute bottom-0 z-20 left-1/2 -translate-x-1/2 text-sm sm:text-base"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <p>Statistics Bar</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
