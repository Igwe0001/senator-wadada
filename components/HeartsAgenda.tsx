"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import VisionWheel from "./VisionWheel";

const items = [
  {
    title: "Energy & Mineral Resources",
    desc: "Powering Industries Growth",
    position: "top",
  },
  {
    title: "Agriculture & Green Economy",
    desc: "Food Security & Sustainability",
    position: "right",
  },
  {
    title: "Rural & urban Development",
    desc: "Infrastructure across Communities",
    position: "bottom-right",
  },
  {
    title: "Trade, Invest & Industry",
    desc: "Jobs, Business, and Economic Expansion",
    position: "bottom",
  },
  {
    title: "Human Capital Development",
    desc: "Education, Health, Youth Women & Children",
    position: "bottom-left",
  },
  {
    title: "Security",
    desc: "Men, Women & Children",
    position: "left",
  },
];

export default function HeartsAgenda() {
  return (
    <section id="vision" className="py-16 bg-white md:py-20 px-4">
      <div className="max-w-6xl  mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
          <div>
            <span className="text-xl font-fraunces bg-green-100 text-green-700 px-3 py-1 rounded-full">Our Vision for Nasarawa</span>

            <h2 className="text-3xl md:text-5xl text-black font-fraunces font-bold mt-4">
              The <span className="text-green-700">Hearts</span> Agenda
            </h2>
          </div>

          <p className=" text-gray-500 max-w-md">
            Senator Ahmed Wadada Aliyu&apos;s HEARTS Agenda highlights six strategic areas essential for Nasarawa&apos;s development. This plan aims
            to transform the state by focusing on human capital, resource utilization, sustainable agriculture, infrastructure development, economic
            growth, and ensuring security.
          </p>
        </div>

        {/* MAIN BOX */}
        <VisionWheel />
      </div>
    </section>
  );
}
