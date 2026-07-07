import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SmartImage from "@/components/SmartImage";
import {
  IconPen, IconFlask, IconTrophy, IconPalette,
  IconCrescent, IconHands, IconPodium,
} from "@/components/icons";
import { societies, type Society } from "@/data/societies";

export const metadata: Metadata = {
  title: "Student Societies",
  description:
    "Seven student societies for Session 2026–27 at PIPS Kassesay Campus — debating, STEAM, sports, arts, Islamic studies, community service, and leadership.",
  alternates: { canonical: "/societies" },
};

const icons: Record<Society["icon"], typeof IconPen> = {
  pen: IconPen,
  flask: IconFlask,
  trophy: IconTrophy,
  palette: IconPalette,
  crescent: IconCrescent,
  hands: IconHands,
  podium: IconPodium,
};

export default function SocietiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Session 2026–27"
        first="Our"
        green="Societies"
        lede="Every student joins at least one of seven societies. This is where the Honour Code leaves the wall and enters the week."
      />

      <section className="bg-pips-white py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          {societies.map((s, i) => {
            const Icon = icons[s.icon];
            const reversed = i % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className={`grid items-center gap-8 border border-pips-border bg-pips-white lg:grid-cols-2 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <SmartImage
                  src={`/assets/photos/societies/${s.photo}`}
                  alt={`${s.name} at PIPS Kassesay Campus`}
                  label={s.photo}
                  className="aspect-[16/10] w-full"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="p-8 lg:p-12">
                  <Icon className="h-9 w-9 text-pips-green" />
                  <h2 className="mt-5 font-display text-h2 font-semibold text-pips-charcoal">
                    {s.name}
                  </h2>
                  <p className="mt-1 font-mono text-label uppercase text-pips-gold">
                    {s.tagline}
                  </p>
                  <p className="mt-4 text-body text-pips-mid-grey">{s.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {s.activities.map((a) => (
                      <li
                        key={a}
                        className="border border-pips-border bg-pips-off-white px-3.5 py-1.5 text-small text-pips-green-dark"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
