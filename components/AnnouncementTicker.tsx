"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION — edit these to customise the ticker
// ─────────────────────────────────────────────────────────────────────────────
export interface TickerConfig {
  /** Each text item shown in the bar */
  items: string[];
  /** Tailwind bg class or arbitrary CSS color e.g. "bg-[#1a5c38]" */
  bgColor?: string;
  /** Tailwind text class e.g. "text-white" */
  textColor?: string;
  /** Tailwind dot/bullet color e.g. "bg-white" */
  dotColor?: string;
  /** Scroll speed — lower = faster (CSS animation-duration in seconds) */
  speed?: number;
}

const DEFAULT_CONFIG: Required<TickerConfig> = {
  items: [
    "30+ National & International Awards",
    "Chairman · Senate Public Accounts Committee",
    "20+ Years of Legislative Service",
    "Founder · Association for Better Nigeria",
    "Representing Nasarawa West Senatorial District",
    "2027 Nasarawa Governorship Aspirant",
  ],
  bgColor: "bg-[#1a5c38]",
  textColor: "text-white",
  dotColor: "bg-white/60",
  speed: 40,
};

// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  config?: Partial<TickerConfig>;
}

// ... config stays the same ...

export default function AnnouncementTicker({ config = {} }: Props) {
  const cfg: Required<TickerConfig> = { ...DEFAULT_CONFIG, ...config };
  const tickerRef = useRef<HTMLDivElement>(null);

  // Force animation restart after hydration
  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    el.style.animationPlayState = "paused";
    // Trigger reflow
    void el.offsetWidth;
    el.style.animationPlayState = "running";
  }, []);

  const allItems = [...cfg.items, ...cfg.items, ...cfg.items, ...cfg.items];

  return (
    <div className={`w-full overflow-hidden ${cfg.bgColor} relative`}>
      <div
        ref={tickerRef}
        className="flex items-center py-3 whitespace-nowrap"
        style={{
          animation: `ticker-scroll ${cfg.speed}s linear infinite`,
          width: "max-content",
          minWidth: "200%",
          willChange: "transform", // ← tells browser to keep this on GPU
        }}
      >
        {allItems.map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-3 px-4 text-sm font-medium tracking-wide ${cfg.textColor}`}>
            <span className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dotColor}`} />
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </div>
  );
}
