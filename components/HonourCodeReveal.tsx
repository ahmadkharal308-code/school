"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import useEnteredView from "./useEnteredView";
import { honourCode } from "@/lib/site";

/**
 * The site's signature cinematic moment: each line of the Honour Code
 * reveals one by one as it scrolls into view. Sits on the mint-tinted
 * background inherited from the main PIPS site, deepened with a radial
 * gradient. Fully static when reduced motion is preferred.
 */
export default function HonourCodeReveal() {
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const entered = useEnteredView(listRef, 120);

  return (
    <section
      id="honour-code"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 40%, var(--pips-mint) 0%, var(--pips-white) 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center font-mono text-label uppercase text-pips-green">
          The PIPS Pledge
        </p>
        <h2 className="mt-3 text-center font-display text-h2 font-semibold text-pips-charcoal">
          Our <span className="text-pips-green">Honour Code</span>
        </h2>
        <p className="mt-4 text-center text-small text-pips-mid-grey">
          Recited by every PIPS student. Lived at Kassesay every day.
        </p>

        <motion.ol
          ref={listRef}
          className="mt-14 space-y-7"
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : entered ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {honourCode.map((line, i) => (
            <motion.li
              key={line}
              className="flex items-baseline gap-5"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: "easeOut" },
                },
              }}
            >
              <span className="font-mono text-small text-pips-gold" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl italic leading-relaxed text-pips-green-dark sm:text-2xl">
                {line}
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
