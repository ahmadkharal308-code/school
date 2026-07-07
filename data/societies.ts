/**
 * Student societies for Session 2026–27.
 * Society names are EDITABLE PLACEHOLDERS agreed for the session —
 * rename or reorder here and the whole site updates.
 * Photos: /public/assets/photos/societies/<photo>.
 */
export interface Society {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  activities: string[];
  photo: string;
  icon: "pen" | "flask" | "trophy" | "palette" | "crescent" | "hands" | "podium";
}

export const societies: Society[] = [
  {
    slug: "literary-debating",
    name: "Literary & Debating Society",
    tagline: "Finding every student's voice",
    description:
      "Urdu and English declamation, essay writing, and inter-house debates. Students learn to build an argument, hold a stage, and listen as well as they speak — a direct expression of the Honour Code.",
    activities: ["Weekly debate practice", "Declamation contests", "Creative writing workshops", "Inter-campus competitions"],
    photo: "literary-debating.jpg",
    icon: "pen",
  },
  {
    slug: "science-steam",
    name: "Science & STEAM Society",
    tagline: "Curiosity, built by hand",
    description:
      "Hands-on experiments, model-making, and project exhibitions that take science beyond the textbook and prepare students for Matric practicals and beyond.",
    activities: ["Science fair projects", "Model & robotics building", "Math olympiad practice", "Lab demonstration days"],
    photo: "science-steam.jpg",
    icon: "flask",
  },
  {
    slug: "sports",
    name: "Sports Society",
    tagline: "Discipline in motion",
    description:
      "Cricket, football, badminton, and athletics with inter-house tournaments each term. Sport at PIPS teaches self-control, teamwork, and fair play.",
    activities: ["Inter-house tournaments", "Morning fitness drills", "Annual sports day", "District-level participation"],
    photo: "sports.jpg",
    icon: "trophy",
  },
  {
    slug: "arts-media",
    name: "Arts & Media Society",
    tagline: "Making ideas visible",
    description:
      "Drawing, calligraphy, stagecraft, and the campus notice-board and newsletter — students produce the visual life of the school themselves.",
    activities: ["Art & calligraphy classes", "Stage & event design", "Campus newsletter", "Annual exhibition"],
    photo: "arts-media.jpg",
    icon: "palette",
  },
  {
    slug: "islamic-studies",
    name: "Islamic Studies Society",
    tagline: "Character rooted in faith",
    description:
      "Quran recitation and memorisation circles, seerah study, and naat competitions — deepening the Islamic values that anchor a PIPS education.",
    activities: ["Qirat & naat competitions", "Seerah study circles", "Ramadan programme", "Character workshops"],
    photo: "islamic-studies.jpg",
    icon: "crescent",
  },
  {
    slug: "community-service",
    name: "Community Service Society",
    tagline: "Leading by serving",
    description:
      "Cleanliness drives, tree plantation, and welfare projects in Kassesay and surrounding villages — students practise responsibility to the community that the vision statement promises.",
    activities: ["Village cleanliness drives", "Tree plantation weeks", "Welfare collections", "Awareness campaigns"],
    photo: "community-service.jpg",
    icon: "hands",
  },
  {
    slug: "leadership-mun",
    name: "Leadership & MUN Society",
    tagline: "Go forth to lead",
    description:
      "Student council, event management, and Model United Nations–style assemblies where senior students research, represent, and resolve — leadership practised, not just praised.",
    activities: ["Student council", "MUN-style assemblies", "Event management teams", "Prefect training"],
    photo: "leadership-mun.jpg",
    icon: "podium",
  },
];

export function getSociety(slug: string): Society | undefined {
  return societies.find((s) => s.slug === slug);
}
