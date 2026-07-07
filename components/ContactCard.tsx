import { site } from "@/lib/site";
import { IconPin, IconPhone, IconClock, IconWhatsApp } from "./icons";

/** Contact details card used in the homepage map section and on /contact. */
export default function ContactCard() {
  return (
    <div className="border-l-4 border-pips-green bg-pips-off-white p-8">
      <ul className="space-y-5">
        <li className="flex gap-3.5">
          <IconPin className="mt-1 h-5 w-5 shrink-0 text-pips-green" />
          <p className="text-body text-pips-charcoal">{site.addressShort}</p>
        </li>
        <li className="flex gap-3.5">
          <IconPhone className="mt-1 h-5 w-5 shrink-0 text-pips-green" />
          <p className="font-mono text-body text-pips-charcoal">
            <a href={`tel:${site.phone1}`} className="hover:text-pips-green">{site.phone1}</a>
            {" / "}
            <a href={`tel:${site.phone2}`} className="hover:text-pips-green">{site.phone2}</a>
          </p>
        </li>
        <li className="flex gap-3.5">
          <IconClock className="mt-1 h-5 w-5 shrink-0 text-pips-green" />
          <p className="text-body text-pips-charcoal">{site.hours}</p>
        </li>
      </ul>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`https://wa.me/${site.whatsapp}`}
          className="inline-flex items-center gap-2 bg-pips-green px-5 py-3 text-small font-semibold text-white transition-colors hover:bg-pips-green-dark"
          style={{ borderRadius: 0 }}
        >
          <IconWhatsApp className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={site.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-pips-green px-5 py-3 text-small font-semibold text-pips-green-dark transition-colors hover:bg-pips-green hover:text-white"
          style={{ borderRadius: 0 }}
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
