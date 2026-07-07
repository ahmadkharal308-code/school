import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SmartImage from "@/components/SmartImage";
import GalleryFilter, { type GalleryItem } from "@/components/GalleryFilter";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Campus life at PIPS Kassesay — events, sports, academics, and the campus itself, in photographs.",
  alternates: { canonical: "/gallery" },
};

/**
 * Gallery slots: drop photos into /public/assets/photos/gallery/ using
 * these filenames. To add more, extend this array — categories must be
 * one of: Events, Sports, Academics, Campus.
 */
const slots: { file: string; category: string; alt: string }[] = [
  { file: "gallery-1.jpg", category: "Campus", alt: "PIPS Kassesay Campus building" },
  { file: "gallery-2.jpg", category: "Academics", alt: "Students in a classroom lesson" },
  { file: "gallery-3.jpg", category: "Events", alt: "Annual result day ceremony" },
  { file: "gallery-4.jpg", category: "Sports", alt: "Inter-house cricket match" },
  { file: "gallery-5.jpg", category: "Academics", alt: "Science practical session" },
  { file: "gallery-6.jpg", category: "Events", alt: "Milad gathering at the campus" },
  { file: "gallery-7.jpg", category: "Campus", alt: "School courtyard at morning assembly" },
  { file: "gallery-8.jpg", category: "Sports", alt: "Annual sports day races" },
  { file: "gallery-9.jpg", category: "Academics", alt: "Library and reading corner" },
  { file: "gallery-10.jpg", category: "Events", alt: "Prize distribution ceremony" },
  { file: "gallery-11.jpg", category: "Campus", alt: "Classroom block exterior" },
  { file: "gallery-12.jpg", category: "Sports", alt: "Badminton practice" },
];

export default function GalleryPage() {
  const items: GalleryItem[] = slots.map((s) => ({
    category: s.category,
    node: (
      <SmartImage
        src={`/assets/photos/gallery/${s.file}`}
        alt={s.alt}
        label={s.file}
        className="aspect-square w-full"
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
      />
    ),
  }));

  return (
    <>
      <PageHeader
        eyebrow="Campus Life"
        first="Our"
        green="Gallery"
        lede="Events, sports, academics, and everyday campus life at Kassesay."
      />
      <section className="bg-pips-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryFilter items={items} />
        </div>
      </section>
    </>
  );
}
