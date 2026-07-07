import Eyebrow from "./Eyebrow";

/** Consistent inner-page header band with the two-tone heading. */
export default function PageHeader({
  eyebrow,
  first,
  green,
  lede,
}: {
  eyebrow: string;
  first: string;
  green: string;
  lede?: string;
}) {
  return (
    <div className="border-b border-pips-border bg-pips-off-white pb-14 pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display text-h1 font-semibold text-pips-charcoal">
          {first} <span className="text-pips-green">{green}</span>
        </h1>
        {lede && (
          <p className="mt-4 max-w-2xl text-body text-pips-mid-grey">{lede}</p>
        )}
      </div>
    </div>
  );
}
