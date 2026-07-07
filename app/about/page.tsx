import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SplitHeading from "@/components/SplitHeading";
import Eyebrow from "@/components/Eyebrow";
import SmartImage from "@/components/SmartImage";
import HonourCodeReveal from "@/components/HonourCodeReveal";
import { vision, mission, site } from "@/lib/site";
import { principalMessage } from "@/data/faculty";

export const metadata: Metadata = {
  title: "About",
  description:
    "The vision, mission, Honour Code, and story of PIPS Kassesay Campus — a franchise campus of the 30-year PIPS School System in Hafizabad District, Punjab.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Campus"
        first="Our"
        green="Story"
        lede="A 30-year national school system, brought home to the families of Kassesay and Hafizabad District."
      />

      <section className="bg-pips-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Our Vision</Eyebrow>
            <SplitHeading first="Our" green="Vision" as="h2" />
            <p className="mt-6 border-l-4 border-pips-green pl-6 font-display text-xl italic leading-relaxed text-pips-charcoal">
              “{vision}”
            </p>
          </div>
          <div>
            <Eyebrow>Our Mission</Eyebrow>
            <SplitHeading first="Our" green="Mission" as="h2" />
            <p className="mt-6 border-l-4 border-pips-gold pl-6 font-display text-xl italic leading-relaxed text-pips-charcoal">
              “{mission}”
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pips-off-white py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <div className="border-4 border-pips-green">
              <SmartImage
                src="/assets/photos/principal.jpg"
                alt="Principal of PIPS Kassesay Campus"
                label="principal.jpg"
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <Eyebrow>From the Principal&apos;s Desk</Eyebrow>
            <SplitHeading first="Principal's" green="Message" as="h2" />
            <blockquote className="mt-8 space-y-5">
              {principalMessage.map((para) => (
                <p key={para.slice(0, 24)} className="text-body leading-relaxed text-pips-charcoal">
                  {para}
                </p>
              ))}
            </blockquote>
            <p className="mt-8 font-mono text-label uppercase text-pips-mid-grey">
              Principal · PIPS Kassesay Campus
            </p>
          </div>
        </div>
      </section>

      <HonourCodeReveal />

      <section className="bg-pips-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Legacy</Eyebrow>
          <SplitHeading first="Our" green="Legacy" as="h2" />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-body leading-relaxed text-pips-charcoal">
              <p>
                The PIPS School System began over three decades ago with a
                simple conviction: that Pakistani students deserve schooling
                that is academically rigorous, rooted in Islamic values, and
                rich in life beyond the classroom. Today the network spans more
                than 30 campuses across Punjab, all working under one motto —{" "}
                <em>{site.motto}</em>.
              </p>
              <p>
                PIPS Kassesay Campus brings that legacy to Village Kassesay,
                near Jalal Pur Bhattian in Tehsil Pindi Bhattian. As a
                family-operated franchise campus, we combine the standards,
                curriculum, and Honour Code of the national network with the
                closeness of a community school — teachers who know every
                child, and a gate that parents can reach without sending their
                children to the city.
              </p>
            </div>
            <div className="border border-pips-border bg-pips-off-white p-8">
              <h3 className="font-display text-h3 font-semibold text-pips-charcoal">
                Campus at a glance
              </h3>
              <dl className="mt-6 space-y-4">
                {[
                  ["Network", "PIPS School System — 30+ campuses"],
                  ["Medium", "English-medium instruction"],
                  ["Classes", "Prep through Class 10 (Matriculation)"],
                  ["Board", "BISE Punjab"],
                  ["Curriculum", "Includes Islamiyat & Pakistan Studies"],
                  ["Societies", "7 student societies (2026–27)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-pips-border pb-3">
                    <dt className="w-28 shrink-0 font-mono text-label uppercase text-pips-green">{k}</dt>
                    <dd className="text-small text-pips-charcoal">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
