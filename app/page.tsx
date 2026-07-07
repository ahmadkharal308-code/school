import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TickerBar from "@/components/TickerBar";
import StatsStrip from "@/components/StatsStrip";
import SnapshotsGrid from "@/components/SnapshotsGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SmartImage from "@/components/SmartImage";
import SplitHeading from "@/components/SplitHeading";
import Eyebrow from "@/components/Eyebrow";
import MapEmbed from "@/components/MapEmbed";
import ContactCard from "@/components/ContactCard";
import { IconGradCap, IconCrescent, IconGrowth, IconCrest } from "@/components/icons";
import { news, formatDate } from "@/data/news";
import { honourCode, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const pillars = [
  {
    icon: IconGradCap,
    title: "Academic Excellence",
    body: "English-medium instruction from Prep to Matriculation, aligned to BISE Punjab — with the standards of a 30-year national network behind every classroom.",
  },
  {
    icon: IconCrescent,
    title: "Islamic Values",
    body: "Islamiyat, Quran, and character education woven through daily school life — faith as the foundation of conduct, not a subject on the side.",
  },
  {
    icon: IconGrowth,
    title: "Holistic Development",
    body: "Seven student societies, the PIPS Honour Code, and a full co-curricular calendar — because leadership is practised, not just taught.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        photo={
          <SmartImage
            src="/assets/photos/hero-campus.jpg"
            alt="PIPS Kassesay Campus building and grounds"
            label="hero-campus.jpg"
            className="h-full w-full"
            sizes="100vw"
            priority
            variant="hero"
          />
        }
      />

      <TickerBar />

      <section className="bg-pips-off-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Our Foundation</Eyebrow>
          <SplitHeading first="What every student" green="receives at Kassesay." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="border border-pips-border bg-pips-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p.icon className="h-9 w-9 text-pips-green" />
                <h3 className="mt-5 font-display text-h3 font-semibold text-pips-charcoal">
                  {p.title}
                </h3>
                <p className="mt-3 text-body text-pips-mid-grey">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="bg-pips-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>The PIPS Pledge</Eyebrow>
            <SplitHeading first="Every student at Kassesay" green="commits to this." />
            <blockquote className="mt-8 border-l-4 border-pips-gold pl-6">
              <p className="font-display text-2xl italic leading-relaxed text-pips-green">
                {honourCode[0]} {honourCode[1]}
              </p>
            </blockquote>
            <Link
              href="/about#honour-code"
              className="mt-8 inline-block font-semibold text-pips-green-dark underline-offset-4 transition-colors hover:text-pips-green hover:underline"
            >
              Read the full Honour Code →
            </Link>
          </div>
          <div className="relative overflow-hidden bg-pips-green-dark p-10 lg:p-14">
            <IconCrest
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-64 w-64 text-white opacity-[0.08]"
            />
            <p className="font-mono text-label uppercase text-pips-gold">Our Motto</p>
            <p className="relative mt-6 font-display text-3xl italic leading-snug text-white lg:text-4xl">
              “{site.motto}”
            </p>
            <p className="mt-8 font-mono text-label uppercase text-white/60">
              PIPS School System · Since the early 1990s
            </p>
          </div>
        </div>
      </section>

      <SnapshotsGrid />

      <section className="bg-pips-green py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-h2 font-semibold text-white">
            Admissions for Session {site.session} are now open.
          </h2>
          <p className="text-body text-white/80">
            Seats are limited. Secure your child&apos;s place today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/admissions"
              className="bg-pips-gold px-8 py-3.5 font-semibold text-white transition-colors hover:bg-pips-green-deep"
              style={{ borderRadius: 0 }}
            >
              Apply Now →
            </Link>
            <span className="font-mono text-small text-white">
              or call <a href={`tel:${site.phone1}`} className="underline underline-offset-4">{site.phone1}</a>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-pips-off-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>From the Campus</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SplitHeading first="News &" green="Announcements" />
            <Link href="/news" className="font-semibold text-pips-green-dark hover:text-pips-green">
              View all →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {news.slice(0, 3).map((post) => (
              <article key={post.slug} className="flex flex-col border border-pips-border bg-pips-white p-8">
                <time dateTime={post.date} className="font-mono text-label uppercase text-pips-green">
                  {formatDate(post.date)}
                </time>
                <h3 className="mt-3 font-display text-h3 font-semibold text-pips-charcoal">
                  <Link href={`/news/${post.slug}`} className="hover:text-pips-green">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-small text-pips-mid-grey">{post.excerpt}</p>
                <Link
                  href={`/news/${post.slug}`}
                  className="mt-5 font-semibold text-pips-green-dark hover:text-pips-green"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pips-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Parents&apos; Feedback</Eyebrow>
          <SplitHeading first="What families" green="say about us." className="mb-12" />
          <TestimonialCarousel />
        </div>
      </section>

      <section className="bg-pips-white pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Find Us</Eyebrow>
          <SplitHeading first="Visit PIPS" green="Kassesay Campus." />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ContactCard />
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
