import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pips-green": "var(--pips-green)",
        "pips-green-dark": "var(--pips-green-dark)",
        "pips-green-deep": "var(--pips-green-deep)",
        "pips-white": "var(--pips-white)",
        "pips-off-white": "var(--pips-off-white)",
        "pips-mint": "var(--pips-mint)",
        "pips-gold": "var(--pips-gold)",
        "pips-charcoal": "var(--pips-charcoal)",
        "pips-mid-grey": "var(--pips-mid-grey)",
        "pips-border": "var(--pips-border)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.8rem, 6vw, 5rem)", { lineHeight: "1.08" }],
        h1: ["clamp(2rem, 4vw, 3.2rem)", { lineHeight: "1.15" }],
        h2: ["clamp(1.5rem, 3vw, 2.2rem)", { lineHeight: "1.2" }],
        h3: ["1.25rem", { lineHeight: "1.35" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.15em" }],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
