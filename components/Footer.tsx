import Link from "next/link";
import { site } from "@/lib/site";
import LogoMark from "./LogoMark";
import { IconPin, IconPhone, IconClock, IconWhatsApp } from "./icons";

const quickLinks = [
  { href: "/about", label: "About the Campus" },
  { href: "/academics", label: "Academics" },
  { href: "/societies", label: "Student Societies" },
  { href: "/admissions", label: "Admissions 2026–27" },
  { href: "/news", label: "News & Announcements" },
  { href: "/contact", label: "Contact & Visit" },
];

export default function Footer() {
  return (
    <footer className="bg-pips-green-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark variant="mono" className="h-11 w-11" />
            <p className="font-display text-lg font-semibold leading-tight">
              PIPS <span className="text-pips-gold">Kassesay</span> Campus
            </p>
          </div>
          <p className="mt-4 font-display italic text-white/70">
            “{site.motto}”
          </p>
          <p className="mt-3 text-small text-white/70">
            A franchise campus of the PIPS School System — 30+ campuses, 30+
            years of excellence across Pakistan.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-mono text-label uppercase text-pips-gold">Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-small text-white/70 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-label uppercase text-pips-gold">Contact</h2>
          <ul className="mt-4 space-y-3 text-small text-white/70">
            <li className="flex gap-2.5">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-pips-gold" />
              <span>{site.addressShort}</span>
            </li>
            <li className="flex gap-2.5">
              <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-pips-gold" />
              <span className="font-mono">
                <a href={`tel:${site.phone1}`} className="hover:text-white">{site.phone1}</a>
                {" / "}
                <a href={`tel:${site.phone2}`} className="hover:text-white">{site.phone2}</a>
              </span>
            </li>
            <li className="flex gap-2.5">
              <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-pips-gold" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-label uppercase text-pips-gold">Connect</h2>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            className="mt-4 inline-flex items-center gap-2 bg-pips-green px-4 py-2.5 text-small font-semibold text-white transition-colors hover:bg-pips-green-dark"
            style={{ borderRadius: 0 }}
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp the Campus
          </a>
          <p className="mt-4 text-small text-white/70">
            Office hours only. For admissions, the fastest route is the{" "}
            <Link href="/admissions" className="underline hover:text-white">
              inquiry form
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center font-mono text-label uppercase text-white/50 sm:px-6 lg:px-8">
          © 2026 PIPS Kassesay Campus. Part of the PIPS School System Network.
        </p>
      </div>
    </footer>
  );
}
