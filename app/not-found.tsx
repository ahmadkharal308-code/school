import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-pips-off-white px-4 pt-24 text-center">
      <p className="font-mono text-label uppercase text-pips-green">404</p>
      <h1 className="mt-3 font-display text-h1 font-semibold text-pips-charcoal">
        Page not <span className="text-pips-green">found</span>
      </h1>
      <p className="mt-4 max-w-md text-body text-pips-mid-grey">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 bg-pips-gold px-7 py-3.5 font-semibold text-white transition-colors hover:bg-pips-green-dark"
        style={{ borderRadius: 0 }}
      >
        Back to Home
      </Link>
    </div>
  );
}
