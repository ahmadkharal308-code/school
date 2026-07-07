const items = [
  "ADMISSIONS OPEN 2026–27",
  "ENTER TO LEARN, GO FORTH TO LEAD",
  "30+ CAMPUS NETWORK",
  "ENGLISH MEDIUM · PREP TO CLASS 10",
];

/** Pure-CSS marquee — the track holds the sequence twice so the
 *  -50% translate loops seamlessly. Respects prefers-reduced-motion. */
export default function TickerBar() {
  const sequence = items.map((t) => `${t}  ·  `).join("");
  return (
    <div
      className="overflow-hidden bg-pips-green py-3"
      aria-label="Announcements ticker"
    >
      <div className="flex w-max animate-marquee whitespace-pre font-mono text-label uppercase text-white">
        <span>{sequence}</span>
        <span aria-hidden="true">{sequence}</span>
      </div>
    </div>
  );
}
