import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news, getPost, formatDate } from "@/data/news";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return news.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default function NewsPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="bg-pips-white pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link href="/news" className="font-mono text-label uppercase text-pips-green hover:text-pips-green-dark">
          ← All news
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <time dateTime={post.date} className="font-mono text-label uppercase text-pips-green">
            {formatDate(post.date)}
          </time>
          <span className="bg-pips-mint px-2.5 py-1 font-mono text-label uppercase text-pips-green-dark">
            {post.category}
          </span>
        </div>
        <h1 className="mt-5 font-display text-h1 font-semibold text-pips-charcoal">
          {post.title}
        </h1>
        <div className="mt-10 space-y-6 border-t border-pips-border pt-10">
          {post.body.map((para) => (
            <p key={para.slice(0, 32)} className="text-body leading-relaxed text-pips-charcoal">
              {para}
            </p>
          ))}
        </div>
        <div className="mt-14 border-l-4 border-pips-gold bg-pips-off-white p-8">
          <p className="font-display text-h3 font-semibold text-pips-charcoal">
            Admissions for Session 2026–27 are open.
          </p>
          <Link
            href="/admissions"
            className="mt-4 inline-block bg-pips-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-pips-green-dark"
            style={{ borderRadius: 0 }}
          >
            Start an inquiry →
          </Link>
        </div>
      </div>
    </article>
  );
}
