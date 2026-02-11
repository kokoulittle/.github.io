import type { SiteConfig } from "./types";
export const siteConfig: SiteConfig = {
  personal: {
    name: "Jacques Wemegan",
    title: "Data Analyst | Financial Data & AI Enthusiast",
    description: "Portfolio of Jacques Wemegan – Data & Finance Professional",
  },

  branding: {
    accentColor: "#13328f",
  },

  social: {
    email: "jacquesk.wemegan@outlook.com",
    linkedin: "https://www.linkedin.com/in/jacques-kokouvi-wemegan/",
    github: "https://github.com/kokoulittle",
  },

  about:
    "Data professional with a strong interest in financial analytics, business intelligence, and applied machine learning. I specialize in transforming complex datasets into structured insights that support strategic decision-making. My work spans time-series forecasting, sentiment analysis, and financial data modeling using Python and modern analytics tools. I am particularly interested in leveraging data science to improve financial performance analysis, risk evaluation, and investment research.",

  skills: [
    {
      category: "Programming & Query Languages",
      items: ["Python", "SQL", "VBA"],
    },
    {
      category: "Data Analysis & Machine Learning",
      items: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Keras"],
    },
    {
      category: "Data Visualization",
      items: ["Matplotlib", "Seaborn", "Plotly", "Excel"],
    },
    {
      category: "Finance & Analytics",
      items: ["Time Series Forecasting", "Financial Modeling", "Sentiment Analysis"],
    },
  ],

  projects: [
    {
      name: "Book Sales Time Series Forecasting",
      description:
        "Forecasted weekly sales using classical time-series models (ARIMA) and machine learning approaches (XGBoost, LSTM) with model comparison and performance evaluation.",
      link: "https://github.com/kokoulittle",
      technologies: ["Python", "ARIMA", "XGBoost", "LSTM", "Pandas"],
      highlights: [
        "Stationarity testing and decomposition",
        "Model performance comparison",
        "Hybrid forecasting experimentation",
      ],
    },
    {
      name: "Sentiment Analysis on Customer Reviews",
      description:
        "Applied NLP techniques and topic modeling (BERTopic) to extract insights from online reviews and measure sentiment trends.",
      link: "https://github.com/kokoulittle",
      technologies: ["Python", "BERTopic", "NLTK", "Scikit-Learn"],
      highlights: [
        "Text preprocessing pipeline",
        "Topic extraction and clustering",
        "Sentiment-driven insights",
      ],
    },
  ],

  experience: [
    {
      company: "Independent Projects",
      role: "Data Analyst / Data Science Practitioner",
      dateRange: "2024 – Present",
      achievements: [
        "Developed forecasting models for time-series sales data",
        "Built NLP pipelines for sentiment and topic modeling",
        "Produced analytical reports combining statistical and ML approaches",
      ],
    },
  ],

  education: [
    {
      institution: "Bachelor of Science in Business Administration",
      degree: "BSc. Business Administration",
      dateRange: "2020",
      details: [
        "Strong foundation in finance, accounting, and business strategy",
      ],
    },
    {
      institution: "Data Science Training",
      degree: "Data Science & Machine Learning",
      dateRange: "Ongoing",
      details: [
        "Supervised learning, deep learning, and time-series modeling",
      ],
    },
  ],
};
