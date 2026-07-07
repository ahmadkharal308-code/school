"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { IconArrowDown } from "./icons";
import { site } from "@/lib/site";

const stats = [
  { value: "30+", label: "Years" },
  { value: "Prep–10", label: "Class Range" },
  { value: "7", label: "Societies" },
  { value: "EN", label: "English Medium" },
];

/**
 * 100vh hero. The photo parallax is the site's ONE animation flourish —
 * a scroll-linked spring on the background only. Disabled entirely when
 * the visitor prefers reduced motion.
 */
export default function Hero({ photo }: { photo: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const y = useSpring(raw, { stiffness: 90, damping: 28 });

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-pips-green-deep">
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y }}
        className="absolute inset-0 scale-110"
      >
        {photo}
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,90,50,0.85) 0%, rgba(20,90,50,0.6) 60%, rgba(20,90,50,0.2) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-5 lg:items-center lg:px-8">
        <div className="lg:col-span-3">
          <p className="font-mono text-label uppercase text-pips-gold">
            PIPS School System — Kassesay Campus
          </p>
          <h1 className="mt-5 font-display text-display font-semibold text-white">
            Enter to Learn,
            <br />
            Go Forth to Lead.
          </h1>
          <p className="mt-6 max-w-xl text-body text-white/85">
            A franchise campus of Pakistan&apos;s PIPS School System —
            delivering 30 years of academic excellence, Islamic values, and
            holistic education to Kassesay and Hafizabad District.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="bg-pips-gold px-7 py-3.5 font-semibold text-white transition-colors hover:bg-pips-green"
              style={{ borderRadius: 0 }}
            >
              Apply for 2026–27
            </Link>
            <Link
              href="/contact"
              className="border border-white px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-pips-green-deep"
              style={{ borderRadius: 0 }}
            >
              Book a Campus Visit
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-pips-green p-8 text-white shadow-2xl">
            <p className="font-mono text-label uppercase text-pips-gold">
              Admissions Open — Session {site.session}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="order-2 mt-1 block font-mono text-label uppercase text-white/70">
                    {s.label}
                  </dt>
                  <dd className="font-display text-4xl font-semibold">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80"
        animate={reduced ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <IconArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
