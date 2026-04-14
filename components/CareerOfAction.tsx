"use client";

import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";

const images = [assets.image92, assets.image91, assets.image90, assets.image93];

export default function CareerOfAction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const baseVelocity = -50; // pixels per second (negative = left, positive = right)
  const x = useMotionValue(0);
  const duplicatedImages = [...images, ...images, ...images]; // Triple for seamless loop

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      const moveBy = baseVelocity * (delta / 1000);
      let newX = x.get() + moveBy;

      // Reset position for infinite loop
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const singleSetWidth = containerWidth / 3; // Because we tripled the images

      if (Math.abs(newX) >= singleSetWidth) {
        newX = newX + (newX > 0 ? -singleSetWidth : singleSetWidth);
      }
      x.set(newX);
    }
  });

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

        {/* INFINITE SLIDER */}
        <div ref={containerRef} className="relative overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div className="flex gap-4" style={{ x }} drag={isMobile ? "x" : false} dragConstraints={containerRef} dragElastic={0.2}>
            {duplicatedImages.map((src, index) => (
              <motion.div
                key={index}
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[32%] h-[240px] sm:h-[280px] md:h-[300px] relative rounded-xl overflow-hidden shadow-md flex-shrink-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={src} alt={`career-${index % images.length}`} fill className="object-cover" draggable={false} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
