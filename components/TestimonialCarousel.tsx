"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { IconStar } from "./icons";

const INTERVAL = 5000;

/** Auto-playing testimonial carousel — Framer Motion only, no carousel
 *  library. 2 cards visible on desktop, 1 on mobile. Pauses on hover
 *  and focus; auto-play disabled under reduced motion. */
export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, reduced, next]);

  const visible = [testimonials[index], testimonials[(index + 1) % count]];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Parent testimonials"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((t, slot) => (
            <motion.figure
              key={`${t.name}-${t.quote.slice(0, 16)}`}
              initial={reduced ? false : { opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -32 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`border border-pips-border bg-pips-white p-8 ${slot === 1 ? "hidden md:block" : ""}`}
            >
              <div className="flex gap-1 text-pips-gold" aria-label="5 out of 5 stars" role="img">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-lg italic leading-relaxed text-pips-charcoal">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 font-mono text-label uppercase text-pips-mid-grey">
                {t.name} · {t.relation}
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2.5">
        {testimonials.map((t, i) => (
          <button
            key={t.quote.slice(0, 16)}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-pips-green" : "bg-pips-border hover:bg-pips-green-dark"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
