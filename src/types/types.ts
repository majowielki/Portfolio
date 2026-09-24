export interface NavItem {
  label: string;
  section: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface Tag {
  label: string;
  color: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  tags: Tag[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
