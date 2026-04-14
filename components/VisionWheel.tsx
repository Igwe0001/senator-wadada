"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const PILLARS = [
  {
    id: "energy",
    angleDeg: 0,
    title: "Energy & Mineral\nResources",
    subtitle: "Powering Industries Growth",
  },
  {
    id: "agri",
    angleDeg: 60,
    title: "Agriculture &\nGreen Economy",
    subtitle: "Food Security &\nSustainability",
  },
  {
    id: "rural",
    angleDeg: 120,
    title: "Rural & Urban\nDevelopment",
    subtitle: "Infrastructure across\nCommunities",
  },
  {
    id: "trade",
    angleDeg: 180,
    title: "Trade, Invest\n& Industry",
    subtitle: "Jobs, Business, and\nEconomic Expansion",
  },
  {
    id: "human",
    angleDeg: 240,
    title: "Human Capital\nDevelopment",
    subtitle: "Education, Health, Youth\nWomen & Children",
  },
  {
    id: "security",
    angleDeg: 300,
    title: "Security",
    subtitle: "Men, Women\n& Children",
  },
];

// ── SVG Icons ────────────────────────────────────────────────────────────────
function PillarIcon({ id, size = 24 }: { id: string; size?: number }) {
  const p = {
    fill: "none",
    stroke: "white",
    strokeWidth: "1.6",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const cls = `w-[${size}px] h-[${size}px]`;
  switch (id) {
    case "energy":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} {...p}>
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "agri":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} {...p}>
          <path d="M12 22V12" />
          <path d="M5 3s0 9 7 9" />
          <path d="M19 3s0 9-7 9" />
        </svg>
      );
    case "rural":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} {...p}>
          <rect x="2" y="11" width="5" height="10" />
          <rect x="9" y="7" width="6" height="14" />
          <rect x="17" y="13" width="5" height="8" />
          <path d="M1 21h22" />
        </svg>
      );
    case "trade":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} {...p}>
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="18" y1="20" x2="18" y2="10" />
          <circle cx="20" cy="7" r="2.5" />
          <path d="M19 5.5l1.5 1.5-1.5 1.5" />
        </svg>
      );
    case "human":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} {...p}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "security":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} {...p}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

// Helper — convert angle (0=top, clockwise) to x,y on circle of radius r
function polarToXY(angleDeg: number, r: number, cx = 300, cy = 300) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// Determine label alignment relative to node
function getLabelStyle(angleDeg: number): React.CSSProperties {
  const norm = ((angleDeg % 360) + 360) % 360;
  if (norm === 0 || norm > 330 || norm < 30) return { bottom: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)", textAlign: "center" };
  if (norm === 180 || (norm > 150 && norm < 210))
    return { top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)", textAlign: "center" };
  if (norm > 0 && norm < 180) return { left: "calc(100% + 16px)", top: "50%", transform: "translateY(-50%)", textAlign: "left" };
  return { right: "calc(100% + 16px)", top: "50%", transform: "translateY(-50%)", textAlign: "right" };
}

// ── Main component ────────────────────────────────────────────────────────────
export default function VisionWheel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const NODE_R = 220;
  const RING_R = 200;
  const CENTER_R = 84;

  return (
    <section ref={ref} className="w-full py-8 px-4 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="border-2 border-[#1a5c38]/25 rounded-[36px] p-4 sm:p-6 md:p-8">
          {/* ── DESKTOP WHEEL (sm and above) ── */}
          <div className="hidden sm:block">
            <div className="relative w-full" style={{ paddingBottom: "100%", maxHeight: "420px" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative" style={{ width: "min(600px, 100%)", aspectRatio: "1" }}>
                  {/* SVG: rings + spokes */}
                  <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    <circle cx="300" cy="300" r={RING_R} fill="none" stroke="#1a5c38" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.4" />
                    <circle cx="300" cy="300" r={CENTER_R + 2} fill="none" stroke="#1a5c38" strokeWidth="2.5" />
                    {PILLARS.map((p, i) => {
                      const { x, y } = polarToXY(p.angleDeg, NODE_R);
                      return (
                        <motion.line
                          key={i}
                          x1="300"
                          y1="300"
                          x2={x}
                          y2={y}
                          stroke="#1a5c38"
                          strokeWidth="1.5"
                          opacity="0.3"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 0.3 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                        />
                      );
                    })}
                  </svg>

                  {/* Center portrait */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                    className="absolute"
                    style={{
                      left: "36%",
                      top: "36%",
                      transform: "translate(-36%, -36%)",
                      zIndex: 10,
                    }}
                  >
                    <div
                      className="relative rounded-full overflow-hidden border-[3px] border-[#1a5c38] shadow-xl"
                      style={{ width: `${CENTER_R * 2}px`, height: `${CENTER_R * 2}px` }}
                    >
                      <Image src={assets.hero} alt="Sen. Ahmed Aliyu Wadada" fill className="object-cover object-top" sizes="168px" />
                    </div>
                  </motion.div>

                  {/* Pillar nodes */}
                  {PILLARS.map((p, i) => {
                    const { x, y } = polarToXY(p.angleDeg, NODE_R);
                    const leftPct = (x / 650) * 100;
                    const topPct = (y / 630) * 100;
                    return (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.45, ease: EASE, delay: 0.45 + i * 0.1 }}
                        className="absolute"
                        style={{
                          left: `${leftPct}%`,
                          top: `${topPct}%`,
                          transform: "translate(-50%,-50%)",
                          zIndex: 20,
                        }}
                      >
                        <div className="w-14 h-14 rounded-full bg-[#1a5c38] flex items-center justify-center shadow-lg hover:bg-[#14472c] hover:scale-110 transition-all duration-200 cursor-default relative group">
                          <PillarIcon id={p.id} size={24} />
                          <div className="absolute pointer-events-none" style={{ ...getLabelStyle(p.angleDeg), minWidth: "160px" }}>
                            <p className="font-bold text-gray-900 text-sm leading-tight whitespace-pre-line">{p.title}</p>
                            <p className="text-gray-500 text-xs mt-1 leading-relaxed whitespace-pre-line">{p.subtitle}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE LAYOUT (below sm) ── */}
          <div className="sm:hidden">
            {/* Portrait + name header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-3 mb-5 pb-5 border-b border-[#1a5c38]/15"
            >
              <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-[3px] border-[#1a5c38] shadow-md">
                <Image src={assets.hero} alt="Sen. Ahmed Aliyu Wadada" fill className="object-cover object-top" sizes="64px" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-[15px] leading-snug">Sen. Ahmed Aliyu Wadada</p>
                <p className="text-[#1a5c38]  mt-0.5 italic">Vision &amp; Strategic Pillars</p>
              </div>
            </motion.div>

            {/* 2-column card grid */}
            <div className="grid grid-cols-2 gap-3">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.1 + i * 0.07 }}
                  className="flex flex-col gap-2.5 border border-[#1a5c38]/20 rounded-2xl p-3 bg-white hover:border-[#1a5c38]/60 hover:bg-[#f0f8f4] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-full bg-[#1a5c38] flex items-center justify-center shadow-sm flex-shrink-0">
                    <PillarIcon id={p.id} size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900  leading-tight whitespace-pre-line">{p.title}</p>
                    <p className="text-gray-500  mt-1 leading-snug whitespace-pre-line">{p.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
