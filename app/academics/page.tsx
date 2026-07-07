import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/Eyebrow";
import SplitHeading from "@/components/SplitHeading";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Stage-by-stage curriculum at PIPS Kassesay Campus — Early Years, Primary, Middle, and Matriculation. English-medium, BISE Punjab aligned, with Islamiyat and Pakistan Studies.",
  alternates: { canonical: "/academics" },
};

const stages = [
  {
    stage: "01",
    name: "Early Years",
    classes: "Prep",
    focus:
      "A gentle, structured start. Phonics-based English reading, number sense, motor skills, and Quranic basics — taught through play, routine, and care.",
    subjects: ["English phonics & reading", "Urdu foundations", "Early numeracy", "Nazra Quran & duas", "Art, rhymes & activity"],
  },
  {
    stage: "02",
    name: "Primary",
    classes: "Class 1 – Class 5",
    focus:
      "Fluency and habits. Students build strong English and Urdu literacy, core mathematics, and general science, while the Honour Code and society life begin shaping character.",
    subjects: ["English", "Urdu", "Mathematics", "General Science", "Islamiyat & Nazra", "Social Studies", "Computer basics"],
  },
  {
    stage: "03",
    name: "Middle",
    classes: "Class 6 – Class 8",
    focus:
      "Depth and discipline. Subject-specialist teaching begins, with regular assessments and notebooks marked to network standards — the runway to Matriculation.",
    subjects: ["English", "Urdu", "Mathematics", "Science (Phy/Chem/Bio)", "Islamiyat", "Pakistan Studies / History-Geography", "Computer Studies"],
  },
  {
    stage: "04",
    name: "Matriculation",
    classes: "Class 9 – Class 10 · BISE Punjab",
    focus:
      "Results that open doors. Board-focused preparation with scheduled tests, past-paper practice, and individual tracking of every candidate through the BISE Punjab examinations.",
    subjects: ["English", "Urdu", "Mathematics", "Physics", "Chemistry", "Biology / Computer Science", "Islamiyat (Compulsory)", "Pakistan Studies"],
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        first="Our"
        green="Curriculum"
        lede="English-medium from the first day of Prep to the last paper of Matric — one continuous, deliberate academic journey."
      />

      <section className="bg-pips-white py-24">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {stages.map((s) => (
            <article
              key={s.stage}
              className="grid gap-8 border border-pips-border bg-pips-white p-8 transition-shadow hover:shadow-lg lg:grid-cols-12 lg:p-10"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-h2 text-pips-gold" aria-hidden="true">
                  {s.stage}
                </span>
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-display text-h2 font-semibold text-pips-charcoal">
                  {s.name}
                </h2>
                <p className="mt-1 font-mono text-label uppercase text-pips-green">
                  {s.classes}
                </p>
                <p className="mt-4 text-body text-pips-mid-grey">{s.focus}</p>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-mono text-label uppercase text-pips-charcoal">
                  Subjects
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {s.subjects.map((sub) => (
                    <li
                      key={sub}
                      className="border border-pips-border bg-pips-off-white px-3.5 py-1.5 text-small text-pips-green-dark"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-pips-off-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Beyond the Timetable</Eyebrow>
          <SplitHeading first="How we" green="teach." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Network standards",
                body: "Syllabi, pacing, and assessment patterns follow the PIPS School System model refined across 30+ campuses — Kassesay students sit the same bar as students anywhere in the network.",
              },
              {
                title: "Faith in the curriculum",
                body: "Islamiyat and Quranic study are timetabled subjects with dedicated teachers, not an afterthought — alongside Pakistan Studies as required by the board.",
              },
              {
                title: "Parents in the loop",
                body: "Term reports, marked notebooks sent home, and open parent-teacher days each term. The mission calls it an active partnership between student and school — we schedule it.",
              },
            ].map((c) => (
              <article key={c.title} className="border border-pips-border bg-pips-white p-8">
                <h3 className="font-display text-h3 font-semibold text-pips-charcoal">{c.title}</h3>
                <p className="mt-3 text-body text-pips-mid-grey">{c.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-body text-pips-charcoal">
            Ready to see the classrooms yourself?{" "}
            <Link href="/admissions" className="font-semibold text-pips-green-dark underline underline-offset-4 hover:text-pips-green">
              Start an admissions inquiry
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-pips-green-dark underline underline-offset-4 hover:text-pips-green">
              book a campus visit
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
