"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/faculty", label: "Faculty" },
  { href: "/societies", label: "Societies" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
];

export default function Nav({ crest, crestMono }: { crest: ReactNode; crestMono: ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Transparent-over-photo nav only makes sense on the homepage hero;
  // every other page gets the solid white bar from the start.
  const transparent = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "border-b border-pips-border bg-pips-white"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="PIPS Kassesay Campus — home">
          <span className="h-10 w-10 shrink-0">{transparent ? crestMono : crest}</span>
          <span
            className={`font-display text-lg font-semibold leading-tight ${
              transparent ? "text-white" : "text-pips-charcoal"
            }`}
          >
            PIPS <span className={transparent ? "text-pips-gold" : "text-pips-green"}>Kassesay</span>{" "}
            Campus
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-small font-medium transition-colors ${
                    transparent
                      ? active
                        ? "text-pips-gold"
                        : "text-white/90 hover:text-white"
                      : active
                        ? "text-pips-green-dark"
                        : "text-pips-charcoal hover:text-pips-green"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/admissions"
            className="hidden bg-pips-gold px-5 py-2.5 text-small font-semibold text-white transition-colors hover:bg-pips-green-dark sm:inline-block"
            style={{ borderRadius: 0 }}
          >
            Apply Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-11 w-11 items-center justify-center lg:hidden ${
              transparent ? "text-white" : "text-pips-charcoal"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[76px] z-40 flex flex-col bg-pips-green lg:hidden">
          <ul className="flex flex-1 flex-col items-center justify-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`font-display text-2xl font-semibold ${pathname === l.href ? "text-pips-gold" : "text-white"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/admissions"
                className="mt-2 inline-block bg-pips-gold px-8 py-3 font-semibold text-white"
                style={{ borderRadius: 0 }}
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
