export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  link: string;
  technologies: string[];
  highlights?: string[];
}

export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dateRange: string;
  details?: string[];
}

export interface SiteConfig {
  personal: {
    name: string;
    title: string;
    description: string;
  };
  branding: {
    accentColor: string;
  };
  social: SocialLinks;
  about: string;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}
