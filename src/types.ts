// src/types.ts

export interface EducationItem {
  degree: string;
  school: string;
  dateRange: string;
  achievements: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  skills?: string[];
  link?: string;
}

export interface SocialLinks {
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface SiteConfig {
  /** Personal Info */
  name: string;
  title: string;
  aboutMe: string;

  /** UI Theme */
  accentColor: string;
  skills: string[];

  /** Portfolio Sections */
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];

  /** Contact & Socials */
  social: SocialLinks;
}
