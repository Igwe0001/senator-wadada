"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";

type Conference = {
  year: string;
  title: string;
  location: string;
};

const DATA: Conference[] = [
  {
    year: "2003",
    title: "Annual Parliamentary Conference",
    location: "Canada",
  },
  {
    year: "2004",
    title: "Conference of the World Stock Exchange",
    location: "New York, USA",
  },
  {
    year: "2004",
    title: "29th Annual Conference — International Organisation of Securities & Exchange Commissions (IOSCO)",
    location: "Amman, Jordan · 17–20 May 2004",
  },
  {
    year: "2004",
    title: "Securities Summit on Juvenile Delinquency, Crime & Community Policy — Federal House of Representatives Special Security Committee",
    location: "Nigeria · 10–11 August 2004",
  },
  {
    year: "2004",
    title: "Association of Stock Exchanges in Africa (ASEA)",
    location: "Nairobi, Kenya · 23–26 November 2004",
  },
  {
    year: "2005",
    title: "30th Annual Conference — International Organisation of Securities Commissions (IOSCO)",
    location: "Colombo, Sri Lanka · 4–7 April 2005",
  },
  {
    year: "2005",
    title: "Investment Road Show — Nigerian Stock Exchange (NSE)",
    location: "New York, USA · June 2005",
  },
];

export default function InternationalSection() {
  return (
    <section className="w-full font-fraunces bg-white">
      {/* TOP CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div className="text-black">
          <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full mb-4">Global Engagements</span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            International
            <br />
            <span className="text-yellow-600">Conferences</span>
            <br />& Delegations
          </h2>
        </div>

        {/* RIGHT LIST */}
        <div className="space-y-6">
          {DATA.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 flex gap-6">
              {/* YEAR */}
              <div className="text-green-700 font-semibold min-w-[50px]">{item.year}</div>

              {/* CONTENT */}
              <div>
                <p className="font-medium text-gray-900 leading-snug">{item.title}</p>
                <p className="text-sm text-gray-500 mt-1">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM IMAGE */}
      <div className="w-full h-[320px] md:h-[520px] relative">
        <Image
          src={assets.image97} // replace with your actual image
          alt="Conference"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
