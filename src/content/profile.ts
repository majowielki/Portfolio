import { NavItem, SocialLink } from "@/types/types";

export const profile = {
  firstName: "Michał",
  lastName: "Majewski",
  name: "Michał Majewski",
  role: "Full Stack .NET Developer",
  shortRole: "Full Stack Developer",
  location: "Wrocław, Poland",
  city: "Wrocław",
  timeZone: "Europe/Warsaw",
  email: "mmajewski111@gmail.com",
  phone: "+48 537 174 960",
  experienceYears: 7,
  speciality: ".NET",
  languages: ["Polish", "English"],
  cvUrl: "/Michal-Majewski-CV.pdf",
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/micha%C5%82-majewski-/",
    icon: "ri-linkedin-box-fill",
  },
  {
    label: "GitHub",
    href: "https://github.com/majowielki",
    icon: "ri-github-fill",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/majo1337",
    icon: "ri-facebook-circle-fill",
  },
];

export const navItems: NavItem[] = [
  { label: "About", section: "AboutMe" },
  { label: "Skills", section: "Skills" },
  { label: "Projects", section: "Projects" },
  { label: "Contact", section: "Contact" },
];

export const sectionIds = ["Home", ...navItems.map((item) => item.section)];
