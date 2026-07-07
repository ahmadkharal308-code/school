"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion, animate } from "framer-motion";
import useEnteredView from "./useEnteredView";
import { IconCalendar, IconBuilding, IconGradCap, IconBookOpen } from "./icons";

interface Stat {
  icon: ReactNode;
  /** numeric part that counts up; null renders `text` statically */
  target: number | null;
  suffix?: string;
  text?: string;
  label: string;
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useEnteredView(ref);
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    const settle = window.setTimeout(() => setValue(target), 2000);
    return () => {
      controls.stop();
      window.clearTimeout(settle);
    };
  }, [inView, target, reduced]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const iconClass = "mx-auto h-9 w-9 text-pips-gold";

const stats: Stat[] = [
  { icon: <IconCalendar className={iconClass} />, target: 30, suffix: "+", label: "Years of Excellence" },
  { icon: <IconBuilding className={iconClass} />, target: 30, suffix: "+", label: "Campus Network" },
  { icon: <IconGradCap className={iconClass} />, target: 7, label: "Student Societies" },
  { icon: <IconBookOpen className={iconClass} />, target: 100, suffix: "%", label: "English Medium" },
];

/** Icon + number + label stats — the main-site format, upgraded with a
 *  count-up that fires once on scroll entry. */
export default function StatsStrip() {
  return (
    <section aria-label="Campus statistics" className="bg-pips-green-deep py-16">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label}>
            {s.icon}
            <dd className="mt-4 font-display text-[3.2rem] font-semibold leading-none text-pips-gold sm:text-[5rem]">
              {s.target !== null ? <CountUp target={s.target} suffix={s.suffix} /> : s.text}
            </dd>
            <dt className="mt-3 font-mono text-label uppercase text-white/70">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
