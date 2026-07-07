import fs from "fs";
import path from "path";
import Image from "next/image";
import { IconCrest } from "./icons";

/**
 * Renders the real PIPS logo when it has been dropped into
 * /public/assets/logo/, otherwise a crest line-mark fallback.
 * variant "mono" uses the white logo for dark backgrounds.
 */
export default function LogoMark({
  variant = "primary",
  className = "h-10 w-10",
}: {
  variant?: "primary" | "mono";
  className?: string;
}) {
  const file =
    variant === "mono" ? "pips-logo-mono-white.png" : "pips-logo-primary.png";
  const src = `/assets/logo/${file}`;
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (exists) {
    return (
      <span className={`relative block ${className}`}>
        <Image src={src} alt="PIPS School System crest" fill sizes="48px" className="object-contain" />
      </span>
    );
  }

  return (
    <IconCrest
      className={`${className} ${variant === "mono" ? "text-white" : "text-pips-green"}`}
      aria-label="PIPS School System crest"
      role="img"
    />
  );
}
