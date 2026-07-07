import fs from "fs";
import path from "path";
import Image from "next/image";
import { IconUpload } from "./icons";

/**
 * Server component: renders the real photo via next/image when the file
 * exists under /public, otherwise a graceful green-tinted placeholder.
 * Drop the real file into /public/assets/... (see README-ASSETS.md) and
 * the placeholder disappears on the next build — no code changes needed.
 */
export default function SmartImage({
  src,
  alt,
  label,
  className = "",
  sizes = "100vw",
  priority = false,
  variant = "default",
}: {
  src: string; // path under /public, starting with /assets/...
  alt: string;
  label: string; // short slot name shown on the placeholder
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "hero" renders a dark green gradient with a subtle grid and no
   *  label — used behind overlay text where a label would bleed through. */
  variant?: "default" | "hero";
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (!exists && variant === "hero") {
    return (
      <div
        role="img"
        aria-label={`${alt} (photo coming soon)`}
        className={`relative ${className}`}
        style={{
          background:
            "linear-gradient(135deg, var(--pips-green-dark) 0%, var(--pips-green-deep) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>
    );
  }

  if (!exists) {
    return (
      <div
        role="img"
        aria-label={`${alt} (photo coming soon)`}
        className={`relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-pips-mint to-pips-border ${className}`}
      >
        <IconUpload className="h-8 w-8 text-pips-green" />
        <span className="font-mono text-label uppercase text-pips-green-dark px-4 text-center">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
