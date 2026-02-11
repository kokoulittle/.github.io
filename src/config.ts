import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  /** Personal Info */
  name: "Jacques Wemegan",
  title: "Finance & Data Analyst",
  aboutMe:
    "I am a finance and data enthusiast with expertise in financial modelling, forecasting, and data-driven insights. I leverage Python, Excel, and BI tools to deliver actionable analysis for investment and business decisions.",

  /** UI Theme */
  accentColor: "#051a54", // Blue accent
  skills: ["Python", "Excel", "SQL", "Tableau", "Power BI", "Forecasting"],

  /** Portfolio Sections */
  education: [
    {
      degree: "BSc in Business Administration",
      school: "University XYZ",
      dateRange: "2016 - 2020",
      achievements: [
        "Graduated with honours",
        "Dean's list for 3 consecutive years",
        "Relevant coursework: Financial Analysis, Econometrics, Accounting"
      ]
    }
  ],

  experience: [
    {
      title: "Data Analyst",
      company: "Company ABC",
      dateRange: "2021 - Present",
      bullets: [
        "Developed automated dashboards for sales and financial forecasting",
        "Designed and maintained ETL pipelines for financial datasets",
        "Conducted scenario-based analysis for management reports"
      ]
    },
    {
      title: "Finance Intern",
      company: "Company DEF",
      dateRange: "2020 - 2021",
      bullets: [
        "Assisted in budget planning and variance analysis",
        "Prepared monthly financial statements and KPI reports"
      ]
    }
  ],

  projects: [
    {
      name: "Stock Price Prediction",
      description: "Machine learning project predicting stock prices using historical data and LSTM models.",
      skills: ["Python", "LSTM", "scikit-learn", "pandas"],
      link: "https://github.com/kokoulittle/stock-prediction"
    },
    {
      name: "Sales Dashboard",
      description: "Interactive BI dashboard for visualising sales trends and KPIs across multiple regions.",
      skills: ["Tableau", "Excel", "Power BI"],
      link: "https://github.com/kokoulittle/sales-dashboard"
    }
  ],

  /** Contact & Social Links */
  social: {
    email: "jacques@example.com",
    linkedin: "https://linkedin.com/in/jacques",
    twitter: "https://twitter.com/jacques",
    github: "https://github.com/kokoulittle"
  }
};
