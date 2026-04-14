"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Data ─────────────────────────────────────────────────────────────────────
const PROFESSIONAL_JOURNEY = [
  {
    period: "2015 – Present",
    role: "Convener — Northern Reawakening Forum",
    description:
      "A platform for the political, economic, and cultural renaissance of Northern Nigeria — championing dialogue, unity, and progressive leadership.",
  },
  {
    period: "2003",
    role: "Founder — Association of the Under 40s in the House of Representatives",
    description: "Pioneered a youth-led caucus within the National Assembly to amplify the voice of young legislators.",
  },
  {
    period: "1991 – Present",
    role: "Founder & Coordinator — Association for Better Keffi",
    description: "Over three decades of community development, civic education, and grassroots advocacy for the people of Keffi.",
  },
  {
    period: "2004–2011",
    role: "Member, National Executive Committee (NEC) — Peoples Democratic Party (PDP)",
    description: "Served at the highest party executive level nationally.",
  },
  {
    period: "2013–2014",
    role: "National Financial Secretary — New People's Democratic Party (N-PDP)",
    description: "Managed national financial affairs of the party.",
  },
  {
    period: "2018",
    role: "Chairman — APC Campaign Council, Nasarawa State",
    description: "Led the All Progressives Congress state campaign council and served as first runner-up in the gubernatorial election.",
  },
];

const NATIONAL_ASSIGNMENTS = [
  {
    year: "2004",
    role: "Member",
    description:
      "Presidential Monitoring Committee to study Commodity Exchange operations in Singapore, Malaysia & India, towards the establishment of the Abuja Securities & Commodity Exchange (ASEA).",
  },
  {
    year: "2005",
    role: "Chairman",
    description: "Technical Committee on Review of the Securities Act (ISA No. 1991).",
  },
  {
    year: "N/A",
    role: "Member",
    description: "Bond Market Resuscitation Committee of Nigeria.",
  },
  {
    year: "2006–2011",
    role: "Core Member",
    description: "Nigerian Economic Summit Group (NESG) Policy Commission, Non-Oil & Non-Agriculture Sectors.",
  },
];

// ── Stagger wrapper ───────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Timeline row ─────────────────────────────────────────────────────────────
function TimelineRow({ period, role, description, delay }: { period: string; role: string; description: string; delay: number }) {
  return (
    <FadeUp delay={delay} className="group">
      <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] gap-x-4 sm:gap-x-6 py-5 border-b border-white/[0.07] last:border-0">
        {/* Period */}
        <p className=" text-white/40 font-mono pt-0.5 leading-relaxed">{period}</p>
        {/* Content */}
        <div>
          <p className=" text-white/50 mb-1 leading-relaxed">{role}</p>
          <p className=" text-white font-semibold leading-snug">{description}</p>
        </div>
      </div>
    </FadeUp>
  );
}

// ── Assignment row ────────────────────────────────────────────────────────────
function AssignmentRow({ year, role, description, delay }: { year: string; role: string; description: string; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[90px_1fr] gap-x-4 sm:gap-x-8 py-5 border-b border-white/[0.07] last:border-0">
        {/* Year */}
        <p className=" text-white/40 font-mono pt-0.5">{year}</p>
        {/* Content */}
        <div>
          <p className=" text-white/50 mb-1">{role}</p>
          <p className=" text-white font-semibold leading-snug">{description}</p>
        </div>
      </div>
    </FadeUp>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Professionalsjourney() {
  return (
    <section className="w-full bg-[#011428] font-fraunces text-white px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto space-y-20 sm:space-y-28">
        {/* ══ SECTION 1 — Professional Journey ══ */}
        <div>
          {/* Header */}
          <FadeUp>
            <div className="mb-8 sm:mb-12">
              <span className="inline-block text-[10px] sm:text-xs border bg-[#CBE1D4] text-primary rounded-full px-3 py-1 mb-4 tracking-widest uppercase font-mono">
                Professional Journey
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-fraunces leading-tight tracking-tight">
                Leading Beyond the <span className="text-[#3ddc84] italic">Chamber</span>
              </h2>
            </div>
          </FadeUp>

          {/* Desktop: two-column | Mobile: image first, then table */}
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-8 sm:gap-10">
            {/* LEFT — Timeline (on mobile, comes AFTER image) */}
            <div className="order-2 sm:order-1">
              {PROFESSIONAL_JOURNEY.map((item, i) => (
                <TimelineRow key={i} period={item.period} role={item.role} description={item.description} delay={0.1 + i * 0.06} />
              ))}
            </div>

            {/* RIGHT — Community Leadership image (on mobile, comes FIRST) */}
            <div className="order-1 sm:order-2 flex flex-col gap-3">
              <FadeUp delay={0.15}>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Community
                  <br className="hidden sm:block" /> Leadership
                </h3>
              </FadeUp>
              <FadeUp delay={0.25}>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={assets.image93}
                    alt="Community Leadership"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                  {/* subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* ══ SECTION 2 — National Assignments ══ */}
        <div>
          {/* Desktop: two-column | Mobile: image first, then table */}
          <div className="flex flex-col sm:grid sm:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 sm:gap-14">
            {/* LEFT — Title + image (on mobile, comes FIRST) */}
            <div className="order-1 flex flex-col gap-5">
              <FadeUp>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  National
                  <br />
                  Assignments
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                  style={{ aspectRatio: "3/4", maxHeight: "320px" }}
                >
                  <Image
                    src={assets.image94}
                    alt="National Assignments"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
            </div>

            {/* RIGHT — Assignment rows (on mobile, comes AFTER image) */}
            <div className="order-2">
              {NATIONAL_ASSIGNMENTS.map((item, i) => (
                <AssignmentRow key={i} year={item.year} role={item.role} description={item.description} delay={0.1 + i * 0.07} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
