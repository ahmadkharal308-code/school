/**
 * News & announcements — the ONLY source of news on this site.
 * No external feed, no CMS. To publish a post, add an entry to the
 * top of this array. Newest first.
 */
export interface NewsPost {
  slug: string;
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  excerpt: string;
  body: string[];
  category: "Admissions" | "Events" | "Academics" | "Announcements";
}

export const news: NewsPost[] = [
  {
    slug: "admissions-open-2026-27",
    title: "Admissions open for Session 2026–27",
    date: "2026-06-15",
    category: "Admissions",
    excerpt:
      "PIPS Kassesay Campus is now accepting applications for the 2026–27 academic session, from Prep through Class 10. Seats in every class are limited.",
    body: [
      "PIPS Kassesay Campus is pleased to announce that admissions for the 2026–27 academic session are now open. We welcome applications for all classes, from Prep through Class 10 (Matriculation).",
      "As an English-medium campus of the PIPS School System, we combine a BISE Punjab–aligned curriculum with Islamic values and a full co-curricular programme of seven student societies.",
      "Parents may visit the campus during office hours, call us at 0345-6657057 or 0308-6657057, or submit an inquiry through the admissions page of this website. Early applications are encouraged as seats in each class are limited.",
    ],
  },
  {
    slug: "seven-societies-2026-27",
    title: "Seven student societies announced for 2026–27",
    date: "2026-06-01",
    category: "Announcements",
    excerpt:
      "From debating to STEAM to community service, every student at Kassesay will join at least one of seven societies this session.",
    body: [
      "For the 2026–27 session, PIPS Kassesay Campus will run seven student societies: Literary & Debating, Science & STEAM, Sports, Arts & Media, Islamic Studies, Community Service, and Leadership & MUN.",
      "Every enrolled student joins at least one society. Societies meet weekly and hold termly showcases where parents are invited to see their children's work.",
      "Society allocations for new students take place in the first two weeks of the session, guided by each child's interests.",
    ],
  },
  {
    slug: "campus-website-launch",
    title: "PIPS Kassesay Campus launches its official website",
    date: "2026-05-20",
    category: "Announcements",
    excerpt:
      "Families in Kassesay and across Hafizabad District can now explore academics, societies, faculty, and admissions online.",
    body: [
      "PIPS Kassesay Campus is proud to launch its official website, giving families across Hafizabad District a single place to explore our academics, student societies, faculty, and campus life.",
      "The site includes a step-by-step admissions guide and an online inquiry form. All official announcements from the campus will be published on the news page.",
      "We thank the PIPS School System network for three decades of guidance, and we look forward to serving our community with the same standard of excellence.",
    ],
  },
];

export function getPost(slug: string): NewsPost | undefined {
  return news.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
