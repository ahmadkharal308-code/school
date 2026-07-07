import { site } from "@/lib/site";

/** Shared Google Maps embed — used on the homepage map section and /contact. */
export default function MapEmbed({ height = 480 }: { height?: number }) {
  return (
    <iframe
      title="PIPS Kassesay Campus Location"
      src={site.mapsEmbed}
      width="100%"
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
