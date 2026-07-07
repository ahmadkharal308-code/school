/**
 * Faculty directory — edit this file to add, remove, or update staff.
 * Photos go in /public/assets/photos/faculty/ and are referenced by
 * the `photo` field (e.g. "faculty-1.jpg"). If the file is missing,
 * the site shows a graceful placeholder — never a broken image.
 *
 * The entries below are EDITABLE PLACEHOLDERS — replace names, roles,
 * and bios with the real Kassesay staff before launch.
 */
export interface FacultyMember {
  name: string;
  role: string;
  subjects: string;
  bio: string;
  photo: string;
}

export const principal: FacultyMember = {
  name: "Principal, PIPS Kassesay Campus",
  role: "Principal",
  subjects: "Campus leadership",
  bio: "Placeholder — replace with the principal's real name and a short introduction.",
  photo: "principal.jpg",
};

export const principalMessage: string[] = [
  "Assalam-o-Alaikum, and welcome to PIPS Kassesay Campus.",
  "For over thirty years, the PIPS School System has stood for a simple promise: that every child who enters to learn will go forth to lead. At our Kassesay campus, we bring that promise home to the families of Pindi Bhattian and Hafizabad District — with English-medium instruction, a curriculum aligned to BISE Punjab, and character built on Islamic values and our Honour Code.",
  "A school is a partnership between the student, the family, and the institution. We invite you to visit our campus, meet our teachers, and see that partnership at work.",
];

export const faculty: FacultyMember[] = [
  {
    name: "Faculty Member 1",
    role: "Senior Teacher",
    subjects: "English & Social Studies",
    bio: "Placeholder bio — replace with the teacher's qualifications and experience.",
    photo: "faculty-1.jpg",
  },
  {
    name: "Faculty Member 2",
    role: "Senior Teacher",
    subjects: "Mathematics",
    bio: "Placeholder bio — replace with the teacher's qualifications and experience.",
    photo: "faculty-2.jpg",
  },
  {
    name: "Faculty Member 3",
    role: "Teacher",
    subjects: "Science (Physics, Chemistry, Biology)",
    bio: "Placeholder bio — replace with the teacher's qualifications and experience.",
    photo: "faculty-3.jpg",
  },
  {
    name: "Faculty Member 4",
    role: "Teacher",
    subjects: "Islamiyat & Quran",
    bio: "Placeholder bio — replace with the teacher's qualifications and experience.",
    photo: "faculty-4.jpg",
  },
  {
    name: "Faculty Member 5",
    role: "Teacher",
    subjects: "Urdu & Pakistan Studies",
    bio: "Placeholder bio — replace with the teacher's qualifications and experience.",
    photo: "faculty-5.jpg",
  },
  {
    name: "Faculty Member 6",
    role: "Early Years Teacher",
    subjects: "Prep & Primary",
    bio: "Placeholder bio — replace with the teacher's qualifications and experience.",
    photo: "faculty-6.jpg",
  },
];
