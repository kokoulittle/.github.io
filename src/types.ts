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
  name: string;
  title: string;
  aboutMe: string;
  accentColor: string;
  skills: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  social: SocialLinks;
}
