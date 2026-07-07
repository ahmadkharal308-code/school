"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Fires once when the element scrolls into view. Uses a plain scroll
 * position check rather than IntersectionObserver so scroll-revealed
 * content can never silently stay hidden in environments where IO
 * doesn't fire.
 */
export default function useEnteredView(
  ref: RefObject<HTMLElement>,
  offset = 60,
): boolean {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered) return;
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - offset && rect.bottom > 0) {
        setEntered(true);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const interval = window.setInterval(check, 400);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.clearInterval(interval);
    };
  }, [entered, ref, offset]);

  return entered;
}
