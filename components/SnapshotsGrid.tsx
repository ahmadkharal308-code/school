import Link from "next/link";
import SmartImage from "./SmartImage";
import { IconPlus } from "./icons";

/**
 * Full-bleed 4-column "Snapshots" photo grid (2 rows). Photos live at
 * /public/assets/photos/gallery/snap-01.jpg … snap-08.jpg, cropped 1:1.
 */
export default function SnapshotsGrid() {
  const slots = Array.from({ length: 8 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return { src: `/assets/photos/gallery/snap-${n}.jpg`, label: `snap-${n}` };
  });

  return (
    <section aria-label="Campus snapshots" className="bg-pips-white">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {slots.map((s, i) => (
          <Link
            key={s.src}
            href="/gallery"
            aria-label={`Campus snapshot ${i + 1} — view the full gallery`}
            className="group relative block aspect-square overflow-hidden"
          >
            <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
              <SmartImage
                src={s.src}
                alt={`Campus life at PIPS Kassesay — snapshot ${i + 1}`}
                label={s.label}
                className="h-full w-full"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-pips-green/0 opacity-0 transition-all duration-300 group-hover:bg-pips-green/60 group-hover:opacity-100"
            >
              <IconPlus className="h-9 w-9 text-white" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
