"use client";

import { useState, type ReactNode } from "react";

export interface GalleryItem {
  category: string;
  node: ReactNode;
}

const categories = ["All", "Events", "Sports", "Academics", "Campus"];

/** Client-side category filter over server-rendered photo slots. */
export default function GalleryFilter({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState("All");
  const shown = items.filter((i) => active === "All" || i.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter gallery by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`px-5 py-2 font-mono text-label uppercase transition-colors ${
              active === c
                ? "bg-pips-green text-white"
                : "border border-pips-border bg-pips-white text-pips-charcoal hover:border-pips-green"
            }`}
            style={{ borderRadius: 0 }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((item, i) => (
          <div key={`${item.category}-${i}`} className="relative">
            {item.node}
            <span className="absolute bottom-2 left-2 bg-pips-green-deep/80 px-2.5 py-1 font-mono text-label uppercase text-white">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
