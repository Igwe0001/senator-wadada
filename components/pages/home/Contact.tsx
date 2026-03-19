"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const slideInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
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

function Contact() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const contactInfoInView = useInView(contactInfoRef, { once: true, margin: "-50px" });
  const formInView = useInView(formRef, { once: true, margin: "-50px" });

  const contactDetails = [
    {
      icon: assets.image13,
      label: "Office Address",
      value: "No. 40 Chuba Okadigbo Street, Apo Legislative Quarters Zone B, Abuja, Nigeria",
      href: "https://maps.google.com/?q=No.+40+Chuba+Okadigbo+Street,+Apo+Legislative+Quarters+Zone+B,+Abuja,+Nigeria",
      target: "_blank",
      rel: "noopener noreferrer",
      delay: 0.1,
    },
    {
      icon: assets.image14,
      label: "Phone",
      value: "+234 803 325 4856",
      href: "tel:+2348033254856",
      delay: 0.25,
    },
    {
      icon: assets.image15,
      label: "Email",
      value: "wadadaahmed@gmail.com",
      href: "mailto:wadadaahmed@gmail.com",
      delay: 0.4,
    },
  ];

  return (
    <motion.section ref={sectionRef} initial="hidden" animate={sectionInView ? "visible" : "hidden"} className="w-full overflow-hidden">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        variants={heroZoom}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="w-full h-[700px] relative"
      >
        <Image src={assets.hero} alt="Ahmed Wadada Aliyu" fill priority className="object-cover lg:[object-position:0_-120px] grayscale" />

        {/* Gradients - original */}
        <motion.div
          variants={fadeIn}
          custom={0.2}
          className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-black/100 to-transparent z-10"
        />
        <motion.div
          variants={fadeIn}
          custom={0.2}
          className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-black/100 to-transparent z-10"
        />

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="w-full h-full relative z-50 text-white flex justify-center items-end pb-12 px-4"
        >
          <motion.div variants={fadeInUp} custom={0.3} className="text-center w-[90%] max-w-[500px]">
            <motion.span variants={scaleIn} custom={0.1} className="bg-white/20 backdrop-blur-xl rounded-xl p-2 inline-block text-xs sm:text-sm">
              Get in Touch
            </motion.span>
            <motion.h1 variants={fadeInUp} custom={0.2} className="text-3xl my-4">
              Join the Movement
            </motion.h1>
            <motion.span variants={fadeInUp} custom={0.3} className="text-xs">
              Whether you are a constituent, partner, journalist, or fellow citizen who believes in a better Nasarawa — we want to hear from you.
              Together, we will build the state our children deserve.
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Contact Details Section */}
      <motion.div
        id="join"
        ref={contactInfoRef}
        variants={staggerContainer}
        initial="hidden"
        animate={contactInfoInView ? "visible" : "hidden"}
        className="relative max-w-5xl mx-auto text-center py-8 px-4"
      >
        {/* Title - original color */}
        <motion.h2 variants={fadeInUp} custom={0.1} className="text-xl font-medium font-architects-daughter text-[#6A6A6A] mb-12">
          Contact Details
        </motion.h2>

        {/* Contact Info Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={contactInfoInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-10 mb-16"
        >
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              variants={slideInBottom}
              custom={detail.delay}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center space-y-3"
            >
              {/* Icon container - original */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="bg-white p-4 rounded-xl">
                <div className="relative w-[100px] h-[100px]">
                  <Image src={detail.icon} alt={detail.label} fill className="object-contain" />
                </div>
              </motion.div>

              {/* Label - original */}
              <p className="text-sm text-[#6A6A6A] p-2 rounded-xl bg-[#F6F6F8]">{detail.label}</p>

              {/* Link - original */}
              <a
                href={detail.href}
                target={detail.target}
                rel={detail.rel}
                className="text-sm text-[#212121] font-semibold leading-relaxed hover:underline"
              >
                {detail.value}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Card */}
        <motion.div
          ref={formRef}
          variants={slideInBottom}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          custom={0.2}
          className="bg-white rounded-2xl shadow-sm p-8 max-w-2xl mx-auto text-left"
        >
          <motion.form variants={staggerContainer} initial="hidden" animate={formInView ? "visible" : "hidden"} className="space-y-5">
            {/* Name Fields */}
            <motion.div variants={fadeInUp} custom={0.1} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Last name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </motion.div>

            {/* Email + Phone */}
            <motion.div variants={fadeInUp} custom={0.2} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </motion.div>

            {/* Subject */}
            <motion.div variants={fadeInUp} custom={0.3}>
              <label className="text-sm text-gray-600">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeInUp} custom={0.4}>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows={5}
                placeholder="Enter message"
                className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-300 resize-none"
              ></textarea>
            </motion.div>

            {/* Button - original black */}
            <motion.div variants={fadeInUp} custom={0.5}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
