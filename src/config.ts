import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Jacques Wemegan",
  title: "Finance & Data Enthusiast",
  aboutMe: "I am passionate about financial analysis and data-driven decision making...",
  accentColor: "#1D4ED8",
  skills: ["Excel", "Python", "SQL", "Tableau", "Power BI"],
  education: [
    {
      degree: "BSc Business Administration",
      school: "Ashesi University",
      dateRange: "2016 - 2020",
      achievements: [""]
    }
  ],
  experience: [
    {
      title: "Data Analyst",
      company: "Company ABC",
      dateRange: "2021 - Present",
      bullets: ["Built dashboards for sales forecasting", "Automated reporting pipelines"]
    }
  ],
  projects: [
    {
      name: "Stock Price Prediction",
      description: "Predicting stock prices using machine learning models",
      skills: ["Python", "scikit-learn", "LSTM"],
      link: "https://github.com/kokoulittle/stock-prediction"
    }
  ],
  social: {
    email: "jacques@example.com",
    linkedin: "https://linkedin.com/in/jacques",
    twitter: "https://twitter.com/jacques",
    github: "https://github.com/kokoulittle"
  }
};
