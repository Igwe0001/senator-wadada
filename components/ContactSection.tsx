"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Input field ───────────────────────────────────────────────────────────────
function Field({
  label,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c38]/30 focus:border-[#1a5c38] transition-all duration-200";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-gray-700 tracking-wide">{label}</label>
      {textarea ? (
        <textarea placeholder={placeholder} rows={5} value={value} onChange={(e) => onChange(e.target.value)} className={`${base} resize-none`} />
      ) : (
        <div className="relative">
          {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${base} ${icon ? "pl-9" : ""}`}
          />
        </div>
      )}
    </div>
  );
}

// ── Contact info row ──────────────────────────────────────────────────────────
function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-3 py-4 border-b border-gray-200 last:border-0">
      <span className=" font-semibold text-gray-500 bg-white rounded-lg px-2.5 py-1.5 h-fit self-start text-center leading-tight">
        {label}
      </span>
      <span className=" text-gray-800 leading-relaxed self-center">{value}</span>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof typeof form) => (v: string) => setForm((prev) => ({ ...prev, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your actual form submission logic
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="w-full bg-[#F9F4ED] px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── LEFT — Info ── */}
          <div className="flex flex-col gap-8">
            <FadeUp>
              <div className="flex flex-col gap-4">
                <span className="inline-block self-start text-[10px] sm:text-xs border border-[#1a5c38]/30 text-[#3F6E52] rounded-full px-3 py-1 bg-[#CBE1D4] font-mono">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  Join the <span className="text-[#1a5c38] block">Movement</span>
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border-l-4 border-[#AE8B0E] pl-4">
                <p className=" text-gray-600 leading-relaxed">
                  Together we will build the Nasarawa State our children deserve — and our generation will be proud to have built.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="py-2">
                <ContactRow label="Office Address" value="No. 40 Chuba Okadigbo Street, Apo Legislative Quarters Zone B, Abuja, Nigeria" />
                <ContactRow label="Phone" value="+234 803 325 4856" />
                <ContactRow label="Email" value="wadadaahmed@gmail.com" />
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT — Form ── */}
          <FadeUp delay={0.15} className="w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/60">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1a5c38]/10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-7 h-7 stroke-[#1a5c38] fill-none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-lg font-bold text-gray-900">Message Sent!</p>
                  <p className="text-sm text-gray-500">We&apos;ll be in touch shortly.</p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-2 text-xs text-[#1a5c38] underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Row 1 — First + Last name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="First name" placeholder="Enter first name" value={form.firstName} onChange={set("firstName")} />
                    <Field label="Last name" placeholder="Enter last name" value={form.lastName} onChange={set("lastName")} />
                  </div>

                  {/* Row 2 — Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Email Address"
                      type="email"
                      placeholder="Enter email address"
                      value={form.email}
                      onChange={set("email")}
                      icon={
                        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M2.5 5.5l7.5 5 7.5-5" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="1.5" y="4" width="17" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      }
                    />
                    <Field
                      label="Phone Number"
                      type="tel"
                      placeholder="Enter phone number"
                      value={form.phone}
                      onChange={set("phone")}
                      icon={
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 2h3.5l1.5 4-2 1.5c.9 1.8 2.5 3.4 4.2 4.2L12.5 10l4 1.5v3.5a1 1 0 01-1 1C6.5 17.5 2.5 8 2.5 4a1 1 0 011-1h.5z" />
                        </svg>
                      }
                    />
                  </div>

                  {/* Subject */}
                  <Field label="Subject" placeholder="Enter subject" value={form.subject} onChange={set("subject")} />

                  {/* Message */}
                  <Field label="Message" placeholder="Enter message" value={form.message} onChange={set("message")} textarea />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1a5c38] hover:bg-[#14472c] active:scale-[0.98] text-white font-semibold text-sm rounded-xl py-3.5 mt-1 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray="40"
                            strokeDashoffset="10"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
