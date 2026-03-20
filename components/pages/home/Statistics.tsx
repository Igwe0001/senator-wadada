"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { assets } from "@/assets/assets";

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

function Statistics() {
  const statsRef = useRef(null);
  const imagesRef = useRef(null);
  const bannerRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const imagesInView = useInView(imagesRef, { once: true, margin: "-60px" });
  const bannerInView = useInView(bannerRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="w-full">
      <div className="w-full flex flex-col items-center justify-center pt-4">
        {/* Stats Row */}
        <div ref={statsRef} className="w-[90%] max-w-[500px] justify-between py-3 flex">
          {[
            { value: "20+", label: "Years in Legislature", delay: 0.1 },
            { value: "3", label: "Election Victories", delay: 0.25 },
            { value: "30+", label: "National Awards", delay: 0.4 },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center"
              variants={statItem}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              custom={stat.delay}
            >
              <h1 className="font-bold text-[#212121] text-xl sm:text-2xl">{stat.value}</h1>
              <span className="font-medium text-[#6A6A6A] text-xs sm:text-sm text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Images */}
        <div ref={imagesRef} className="w-full flex justify-center py-8">
          {/* Mobile — center image only */}
          <motion.div className="flex sm:hidden" variants={scaleIn} initial="hidden" animate={imagesInView ? "visible" : "hidden"}>
            <Image
              src={assets.image2}
              alt="portrait"
              width={260}
              height={340}
              className="rounded-3xl border border-[#EFEFF3] shadow-2xl object-cover"
            />
          </motion.div>

          {/* Desktop — all three images */}
          <div className="relative hidden sm:flex w-[700px] h-[420px] items-center justify-center">
            {/* Left Image */}
            <motion.div className="absolute left-0 z-10" variants={rotateInLeft} initial="hidden" animate={imagesInView ? "visible" : "hidden"}>
              <Image src={assets.imageLeft} alt="portrait" width={260} height={360} className="rounded-3xl shadow-xl object-cover" />
            </motion.div>

            {/* Center Image */}
            <motion.div className="absolute z-20" variants={scaleIn} initial="hidden" animate={imagesInView ? "visible" : "hidden"}>
              <Image
                src={assets.image53}
                alt="portrait"
                width={300}
                height={400}
                className="rounded-3xl border border-[#EFEFF3] shadow-2xl object-cover"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div className="absolute right-0 z-10" variants={rotateInRight} initial="hidden" animate={imagesInView ? "visible" : "hidden"}>
              <Image src={assets.imageRight} alt="portrait" width={260} height={360} className="rounded-3xl shadow-xl object-cover" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div ref={bannerRef} className="w-full h-[500px] sm:h-[700px] relative">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={bannerInView ? { scale: 1 } : { scale: 1.05 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image src={assets.image4} alt="Ahmed Wadada Aliyu" fill priority className="object-cover lg:[object-position:0_-120px] grayscale" />
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
              Who He Is
            </motion.p>
            <motion.h1
              className="text-2xl sm:text-3xl mb-4 sm:mb-6 leading-snug max-w-xs sm:max-w-lg mx-auto"
              variants={fadeUp}
              initial="hidden"
              animate={bannerInView ? "visible" : "hidden"}
              custom={0.45}
            >
              A Life Dedicated to Service & Nation-Building
            </motion.h1>
            <motion.span className="text-xs" variants={fadeUp} initial="hidden" animate={bannerInView ? "visible" : "hidden"} custom={0.6}>
              Senator · Entrepreneur · Community Leader
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
