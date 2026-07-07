/**
 * The PIPS signature two-tone heading: first word(s) in charcoal,
 * the key word in brand green. e.g. <SplitHeading first="Our" green="Vision" />
 */
export default function SplitHeading({
  first,
  green,
  as: Tag = "h2",
  className = "",
}: {
  first: string;
  green: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`font-display text-h2 font-semibold text-pips-charcoal ${className}`}>
      {first} <span className="text-pips-green">{green}</span>
    </Tag>
  );
}
