// --- Types ---
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
}

export interface SocialLink {
  href: string;
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  stars?: number;
}

export interface Experience {
  subtitle?: string;
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

export type Skill = string;

export interface Language {
  name: string;
  proficiency: string;
}
