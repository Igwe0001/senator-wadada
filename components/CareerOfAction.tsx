"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";

const images = [assets.image92, assets.image91, assets.image90, assets.image12];

export default function CareerOfAction() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2B2B] font-fraunces">Career of Action</h2>
          <Link href="/projects">
            <button className="bg-green-700 text-white px-5 py-2 rounded-full text-sm hover:bg-green-800 transition">View More</button>
          </Link>
        </div>

        {/* SLIDER */}
        <motion.div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={sliderRef}
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}</style>

          {images.map((src, index) => (
            <motion.div
              key={index}
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[32%] h-[240px] sm:h-[280px] md:h-[300px] relative rounded-xl overflow-hidden shadow-md"
              whileHover={{ scale: 1.03 }}
            >
              <Image src={src} alt={`career-${index}`} fill className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
