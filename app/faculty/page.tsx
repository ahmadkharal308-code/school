import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SmartImage from "@/components/SmartImage";
import { faculty } from "@/data/faculty";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the teaching staff of PIPS Kassesay Campus — qualified, dedicated teachers delivering English-medium education from Prep to Matriculation.",
  alternates: { canonical: "/faculty" },
};

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        eyebrow="The People"
        first="Our"
        green="Faculty"
        lede="Small enough that every teacher knows every child by name. Trained to the standards of a 30-campus network."
      />

      <section className="bg-pips-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {faculty.map((member) => (
            <article
              key={member.name}
              className="border border-pips-border bg-pips-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <SmartImage
                src={`/assets/photos/faculty/${member.photo}`}
                alt={`${member.name}, ${member.role} at PIPS Kassesay Campus`}
                label={member.photo}
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-6">
                <h2 className="font-display text-h3 font-semibold text-pips-charcoal">
                  {member.name}
                </h2>
                <p className="mt-1 font-mono text-label uppercase text-pips-green">
                  {member.role} · {member.subjects}
                </p>
                <p className="mt-3 text-small text-pips-mid-grey">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
