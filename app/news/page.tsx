import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { news, formatDate } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Announcements",
  description:
    "Official news and announcements from PIPS Kassesay Campus — admissions, events, and academic updates.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="From the Campus"
        first="News &"
        green="Announcements"
        lede="Every announcement here is published by the campus itself — this is the only official channel."
      />
      <section className="bg-pips-white py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          {news.map((post) => (
            <article
              key={post.slug}
              className="border border-pips-border bg-pips-white p-8 transition-shadow hover:shadow-lg lg:p-10"
            >
              <div className="flex flex-wrap items-center gap-4">
                <time dateTime={post.date} className="font-mono text-label uppercase text-pips-green">
                  {formatDate(post.date)}
                </time>
                <span className="bg-pips-mint px-2.5 py-1 font-mono text-label uppercase text-pips-green-dark">
                  {post.category}
                </span>
              </div>
              <h2 className="mt-4 font-display text-h2 font-semibold text-pips-charcoal">
                <Link href={`/news/${post.slug}`} className="hover:text-pips-green">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-body text-pips-mid-grey">{post.excerpt}</p>
              <Link
                href={`/news/${post.slug}`}
                className="mt-5 inline-block font-semibold text-pips-green-dark hover:text-pips-green"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
