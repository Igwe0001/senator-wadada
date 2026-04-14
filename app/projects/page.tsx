"use client";

import { assets } from "@/assets/assets";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface GridInterface {
  image: string | StaticImageData;
}

// ---------------- YOUR ORIGINAL DATA ----------------

const firstGridData: GridInterface[] = [
  { image: assets.image98 },
  { image: assets.image99 },
  { image: assets.image100 },
  { image: assets.image101 },
  { image: assets.image102 },
  { image: assets.image103 },
  { image: assets.image104 },
  { image: assets.image105 },
];

const secondGridData: GridInterface[] = [
  { image: assets.image106 },
  { image: assets.image107 },
  { image: assets.image108 },
  { image: assets.image109 },
  { image: assets.image110 },
  { image: assets.image111 },
  { image: assets.image112 },
  { image: assets.image113 },
  { image: assets.image114 },
];

const thirdGridData: GridInterface[] = [
  { image: assets.image115 },
  { image: assets.image116 },
  { image: assets.image117 },
  { image: assets.image118 },
  { image: assets.image119 },
  { image: assets.image120 },
  { image: assets.image121 },
  { image: assets.image122 },
];

const fourthGridData: GridInterface[] = [
  { image: assets.image123 },
  { image: assets.image124 },
  { image: assets.image125 },
  { image: assets.image126 },
  { image: assets.image127 },
  { image: assets.image128 },
  { image: assets.image129 },
  { image: assets.image130 },
  { image: assets.image131 },
  { image: assets.image132 },
  { image: assets.image133 },
  { image: assets.image134 },
  { image: assets.image135 },
];

const fifthGridData: GridInterface[] = [
  { image: assets.image136 },
  { image: assets.image137 },
  { image: assets.image138 },
  { image: assets.image139 },
  { image: assets.image140 },
  { image: assets.image141 },
  { image: assets.image142 },
  { image: assets.image143 },
];

const sixthGridData: GridInterface[] = [
  { image: assets.image145 },
  { image: assets.image146 },
  { image: assets.image147 },
  { image: assets.image148 },
];

const personalProjectsData: GridInterface[] = [
  { image: assets.image150 },
  { image: assets.image151 },
  { image: assets.image152 },
  { image: assets.image153 },
];

// ---------------- YOUR ORIGINAL GRIDS ----------------

function FirstGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6">
      {firstGridData.map((item, i) => (
        <div key={i} className="relative w-full overflow-hidden">
          <Image src={item.image} alt="image" className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
}

function SecondGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6">
      {secondGridData.map((item, i) => (
        <Image key={i} src={item.image} alt="image" className="w-full h-auto" />
      ))}
    </div>
  );
}

function ThirdGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-6">
      {thirdGridData.map((item, i) => (
        <Image key={i} src={item.image} alt="image" className="w-full h-auto" />
      ))}
    </div>
  );
}

function FourthGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6">
      {fourthGridData.map((item, i) => (
        <Image key={i} src={item.image} alt="image" className="w-full h-auto" />
      ))}
    </div>
  );
}

function FifthGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-6">
      {fifthGridData.map((item, i) => (
        <Image key={i} src={item.image} alt="image" className="w-full h-auto" />
      ))}
    </div>
  );
}

function SixthGrid() {
  return (
    <div className="grid grid-cols-1 gap-2 px-6">
      {sixthGridData.map((item, i) => (
        <Image key={i} src={item.image} alt="image" className="w-full h-auto" />
      ))}
    </div>
  );
}

// ---------------- PAGE ----------------

function Page() {
  const [activeTab, setActiveTab] = useState("constituency");

  return (
    <div className="bg-black pt-24 py-10 w-full">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap px-4">
        {["constituency", "personal", "public"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full capitalize transition ${activeTab === tab ? "bg-green-600 text-white" : "bg-white/10 text-white"}`}
          >
            {tab === "constituency" ? "Constituency Projects" : tab === "personal" ? "Personal Projects" : "Public Appearance"}
          </button>
        ))}
      </div>

      {/* ---------------- CONSTITUENCY (UNCHANGED) ---------------- */}
      {activeTab === "constituency" && (
        <>
          <div className="text-center mx-auto max-w-3xl mb-10">
            <span className="inline-block bg-white/10 p-2 text-white mb-5 rounded-md">Constituency Projects</span>
            <h1 className="text-white text-3xl font-bold">
              Constituency Projects Executed by Sen. Ahmed Wadada Aliyu Across His Senatorial District
            </h1>
          </div>

          <FirstGrid />
          <SecondGrid />
          <ThirdGrid />
          <FourthGrid />
          <FifthGrid />
          <SixthGrid />
        </>
      )}

      {/* ---------------- PERSONAL ---------------- */}
      {activeTab === "personal" && (
        <div className="text-center text-white">
          <Image src={assets.image171} alt="image" />
          <Image src={assets.image150} alt="image" />
          <Image src={assets.image151} alt="image" />
          <Image src={assets.image152} alt="image" />
          <Image src={assets.image153} alt="image" />
          <Image src={assets.image172} alt="image" />
        </div>
      )}

      {/* ---------------- PUBLIC ---------------- */}
      {activeTab === "public" && (
        <div className="text-center text-white">
          <h2 className="text-2xl font-fraunces font-bold mb-4">Public Appearance & Events</h2>
         <Image src={assets.image160} alt="image" />
          <Image src={assets.image161} alt="image" />
          <Image src={assets.image162} alt="image" />
          <Image src={assets.image163} alt="image" />
          <Image src={assets.image165} alt="image" />
          <Image src={assets.image166} alt="image" />
          <Image src={assets.image167} alt="image" />
          <Image src={assets.image168} alt="image" />
          <Image src={assets.image170} alt="image" />
        </div>
      )}
    </div>
  );
}

export default Page;
