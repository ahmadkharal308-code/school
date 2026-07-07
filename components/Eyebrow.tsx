export default function Eyebrow({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "gold" | "white";
}) {
  const color =
    tone === "gold"
      ? "text-pips-gold"
      : tone === "white"
        ? "text-white/70"
        : "text-pips-green";
  return (
    <p className={`font-mono text-label uppercase ${color} mb-3`}>{children}</p>
  );
}
