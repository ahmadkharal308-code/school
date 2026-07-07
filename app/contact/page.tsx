import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactCard from "@/components/ContactCard";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Contact PIPS Kassesay Campus — Village Kassesay, Jalal Pur Bhattian, Pindi Bhattian, Hafizabad. Phone 0345-6657057 / 0308-6657057.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Find Us"
        first="Contact &"
        green="Visit"
        lede="The gate is open during office hours — parents are always welcome to see the campus before applying."
      />

      <section className="bg-pips-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <ContactCard />
              <div className="border border-pips-border bg-pips-white p-8">
                <h2 className="font-mono text-label uppercase text-pips-green">Full Address</h2>
                <address className="mt-4 text-body not-italic leading-relaxed text-pips-charcoal">
                  {site.address}
                </address>
              </div>
            </div>
            <div className="lg:col-span-3">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
