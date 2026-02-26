// src/config.ts
import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  /** Personal Info */
  name: "Jacques Wemegan",
  title: "Data Scientist | Financial Intelligence Expert",
  aboutMe:
    [
      "Bonjour, je m'appelle Jacques Wemegan. Je suis passionné par la science des données et je développe actuellement un portefeuille de projets à la croisée de l'analyse et de la finance. J'ai récemment suivi une formation officielle en science des données à Cambridge ICE, où j'ai acquis une expérience pratique dans le domaine de l'apprentissage automatique, du traitement du langage naturel et de l'analyse de données. Mon travail couvre l'analyse des sentiments dans les prévisions de séries chronologiques, l'exploration de textes financiers, avec un accent particulier sur l'extraction d'informations exploitables pour les secteurs bancaire et financier.",
      "Actuellement, je travaille comme formateur MS Office chez Deezpro, où j'aide les professionnels à améliorer leur productivité tout en approfondissant mon expertise technique. Fort d'une formation en administration des affaires et d'un vif intérêt pour la finance, je suis passionné par le rapprochement entre les données et la prise de décision, transformant les chiffres en récits qui orientent la stratégie.",
      "Lorsque je ne suis pas plongé dans des ensembles de données ou des tableaux de bord, vous me trouverez en train de rattraper mon retard sur One Piece, de faire des paniers ou d'explorer le monde à travers l'objectif de mon appareil photo. Je crois que la curiosité alimente la créativité, que ce soit dans le domaine du code, du sport ou de la narration."
    ],

  /** UI Theme */
  accentColor: "#051a54", // Blue accent
  skills: ["Python (Pandas, NumPy)", "Machine Learning", "VBA & Automation", "Financial Modelling", "Data Visualisation", "Natural Language Processing (NLP)", "SQL", "Tableau", "Excel"],

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
    },

    {
      name: "maritime-engine-anomaly-detection",
      description: "Conception d'un système de détection d'anomalies pour moteurs maritimes afin d'identifier précocement les défaillances et d'améliorer la maintenance prédictive.",
      skills: ["Python", "Anomaly Detection", "Feature Engineering", "Unsupervised Learning", "Predictive Maintenance"],
      link: "https://github.com/kokoulittle/maritime-engine-anomaly-detection"
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
