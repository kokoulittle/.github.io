// src/config.ts
import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  /** Personal Info */
  name: "Jacques Wemegan",
  title: "Data Scientist | Financial Intelligence Expert",
  aboutMe:
    "Data Scientist certifié par Cambridge, avec une solide expertise en Finance et en Climat. Je me spécialise dans la transformation de données non structurées en insights stratégiques grâce à l'IA, au Machine Learning et à l'automatisation avancée (Python, VBA). Mon approche combine rigueur analytique et compréhension approfondie des enjeux de stabilité financière mondiale.",

  /** UI Theme */
  accentColor: "#1D4ED8", // Blue accent
  skills: ["Python (Pandas, NumPy)", "Machine Learning", "VBA & Automation", "Financial Modelling", "Data Visualisation", "Natural Language Processing (NLP)"],

  /** Portfolio Sections */
  education: [
    {
      degree: "Professionnel certifié en Science des Données",
      school: "Cambridge Institute of Continuing Education (ICE)",
      dateRange: "2024 - 2025",
      achievements: [
        "Spécialisation en analyse prédictive et modèles de Machine Learning",
        "Projet de fin d'études en collaboration avec la Banque d'Angleterre",
        "Expertise en traitement de données massives et non structurées"
      ]
    },
    {
      degree: "Expert certifié en Financement de l'Adaptation au Climat",
      school: "Frankfurt School of Finance and Management",
      dateRange: "2022 - 2023",
      achievements: [
        "Analyse de données climatiques et évaluation des risques environnementaux",
        "Modélisation de scénarios de résilience pour les infrastructures"
      ]
    },
    {
      degree: "B.Sc. in Business Administration",
      school: "Ashesi University, Ghana",
      dateRange: "2016 - 2020",
      achievements: [
        "Focus sur l'analyse quantitative et la gestion stratégique",
        "Coordination de projets entrepreneuriaux avec analyse de rentabilité (Healthful project)"
      ]
    }
  ],

  experience: [
    {
      title: "Assistant de Recherche",
      company: "New Dimension Consulting",
      dateRange: "2023 - 2024",
      bullets: [
        "Supervision de collectes de données d'enquêtes à grande échelle et formation d'enquêteurs",
        "Analyse comparative de données qualitatives et quantitatives pour des études d'impact international",
        "Traduction technique et analyse de rapports bilingues (Anglais/Français)"
      ]
    },
    {
      title: "Project Finance Officer",
      company: "Sustainable Solutions for Africa (SSA)",
      dateRange: "2020 - 2022",
      bullets: [
        "Conception d'un outil d'automatisation VBA/Excel pour la gestion de flux de données sur 12 pays, optimisant l'approbation du projet ICRF par le GCF",
        "Élaboration et suivi de budgets complexes de ±10M USD via des tableaux de bord financiers en temps réel",
        "Nettoyage et analyse statistique des profils d'émissions de GES pour la région CEDEAO"
      ]
    },
    
  ],

  projects: [
    {
      name: "AI Financial Surveillance Pipeline (Bank of England)",
      description: "Développement d'un pipeline d'IA transformant les données non structurées des G-SIB en insights exploitables pour l'évaluation proactive des risques financiers.",
      skills: ["Python", "NLP", "Machine Learning", "Financial Stability"],
      link: "https://github.com/kokoulittle/BankofEngland_EP"
    }

  ],

  /** Contact & Social Links */
  social: {
    email: "jacquesk.wemegan@outlook.com",
    linkedin: "https://linkedin.com/in/jacques-kokouvi-wemegan/",
    //twitter: "https://twitter.com/jacques",
    github: "https://github.com/kokoulittle"
  }
};
