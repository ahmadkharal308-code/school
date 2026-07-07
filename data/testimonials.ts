/**
 * Parent testimonials shown in the homepage carousel.
 * These are EDITABLE PLACEHOLDERS written in a realistic voice —
 * replace with real parent feedback (with permission) before launch.
 */
export interface Testimonial {
  quote: string;
  name: string;
  relation: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We moved our son from another local school and the difference showed within one term — his English improved and, more importantly, his manners did too.",
    name: "Parent of a Class 6 student",
    relation: "Kassesay",
    },
  {
    quote:
      "The teachers actually know my daughters by name and call us when anything needs attention. That is what we wanted from a school.",
    name: "Parent of Class 3 & Class 8 students",
    relation: "Jalal Pur Bhattian",
  },
  {
    quote:
      "PIPS is a known name. Having a real PIPS campus near our village means our children get a city-standard education without the daily travel.",
    name: "Parent of a Prep student",
    relation: "Pindi Bhattian",
  },
  {
    quote:
      "The Honour Code is not just words on a wall — my son recites it and, believe me, he quotes it at home when his cousins misbehave.",
    name: "Parent of a Class 5 student",
    relation: "Kassesay",
  },
  {
    quote:
      "Matric preparation is taken seriously here. Regular tests, marked notebooks, and the results speak for themselves.",
    name: "Parent of a Class 10 student",
    relation: "Hafizabad District",
  },
];
