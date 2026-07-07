import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LogoMark from "@/components/LogoMark";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PIPS Kassesay Campus — Enter to Learn, Go Forth to Lead",
    template: "%s — PIPS Kassesay Campus",
  },
  description:
    "PIPS Kassesay Campus, Hafizabad District — English-medium education from Prep to Matriculation, part of the 30-year PIPS School System network. Admissions open for Session 2026–27.",
  openGraph: {
    type: "website",
    siteName: "PIPS Kassesay Campus",
    locale: "en_PK",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased">
        <Nav
          crest={<LogoMark variant="primary" className="h-10 w-10" />}
          crestMono={<LogoMark variant="mono" className="h-10 w-10" />}
        />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
