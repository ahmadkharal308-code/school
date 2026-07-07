import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/Eyebrow";
import SplitHeading from "@/components/SplitHeading";
import AdmissionsForm from "@/components/AdmissionsForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions 2026–27",
  description:
    "Apply to PIPS Kassesay Campus for Session 2026–27 — Prep through Class 10, English medium. Four simple steps from inquiry to first day.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  {
    title: "Send an inquiry",
    body: "Fill the form below or call the campus office. Tell us your child's age and the class you're applying for — we'll confirm seat availability the same day.",
  },
  {
    title: "Visit the campus",
    body: "Bring your child for a walk-through during office hours. Meet the teachers, see the classrooms, and ask anything — no appointment needed, though calling ahead helps.",
  },
  {
    title: "Assessment & documents",
    body: "A short, friendly placement assessment for the applied class (nothing to fear for Prep). Bring the B-Form, previous school record if transferring, and two photographs.",
  },
  {
    title: "Confirm the seat",
    body: "On selection, deposit the admission fee at the campus office to confirm the seat. Fee structure for each class is available at the office and shared at your visit.",
  },
];

const reasons = [
  {
    title: "A national name, in your village",
    body: "PIPS is a 30-year, 30+ campus system with a published curriculum, teacher standards, and an Honour Code. That backing is the difference between a school and a setup.",
  },
  {
    title: "English medium that's real",
    body: "English is the working language of the classroom from Prep, not a label on the signboard — because Matric is only the first exam your child will face in English.",
  },
  {
    title: "Faith and character, on the timetable",
    body: "Islamiyat, Quran, and the Honour Code are scheduled, taught, and lived. You should not have to choose between a modern school and your values.",
  },
  {
    title: "No city commute",
    body: "City-standard schooling in Kassesay itself — your children stay close, you stay involved, and the daily travel cost and risk disappear.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Session ${site.session} — Seats Limited`}
        first="Join"
        green="PIPS Kassesay"
        lede="Four steps from inquiry to first day. Prep through Class 10, English medium, BISE Punjab."
      />

      <section className="bg-pips-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>The Process</Eyebrow>
            <SplitHeading first="Four" green="Steps" />
            <ol className="relative mt-12 space-y-12 border-l-2 border-pips-border pl-10">
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span
                    className="absolute -left-[3.35rem] flex h-11 w-11 items-center justify-center bg-pips-gold font-mono text-lg text-white"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-display text-h3 font-semibold text-pips-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-body text-pips-mid-grey">{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 border-l-4 border-pips-green bg-pips-off-white p-6">
              <p className="text-body text-pips-charcoal">
                Prefer to talk? Call{" "}
                <a href={`tel:${site.phone1}`} className="font-mono font-semibold text-pips-green-dark">
                  {site.phone1}
                </a>{" "}
                or{" "}
                <a href={`tel:${site.phone2}`} className="font-mono font-semibold text-pips-green-dark">
                  {site.phone2}
                </a>{" "}
                during office hours.
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>Inquiry Form</Eyebrow>
            <SplitHeading first="Start" green="Here" />
            <div className="mt-12 border border-pips-border bg-pips-off-white p-8">
              <AdmissionsForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pips-off-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>The Honest Question</Eyebrow>
          <SplitHeading first="Why PIPS" green="Kassesay?" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((r) => (
              <article key={r.title} className="border border-pips-border bg-pips-white p-8">
                <h3 className="font-display text-h3 font-semibold text-pips-charcoal">{r.title}</h3>
                <p className="mt-3 text-body text-pips-mid-grey">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
