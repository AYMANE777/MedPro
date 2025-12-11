"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "fr" | "en"

interface I18nContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof translations["fr"]
}

const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "Qui sommes-nous ?",
      gmbInvest: "G.M.B Invest",
      services: "Nos Services",
      certifications: "Certifications",
      blog: "Blog",
      contact: "Contact",
      getQuote: "Demander un Devis",
    },
    // Homepage
    home: {
      badge: "Votre partenaire logistique au cœur de Tanger Med",
      title1: "Tangier",
      title2: "Logistics Center",
      subtitle: "Une plateforme logistique moderne qui optimise vos flux de marchandises. Avec TLC, votre logistique devient",
      simple: "simple",
      fast: "rapide",
      reliable: "fiable",
      cta: "Demander un devis",
      ourServices: "Nos services",
      location: "Zone Franche Logistique",
      locationDetail: "Ksar el Majaz, Tanger Med",
      // KPIs
      kpi1Label: "d'espace logistique",
      kpi2Label: "clients internationaux",
      kpi3Label: "précision de stock",
      kpi4Label: "surveillance sécurisée",
      // Why choose us
      whyChooseUs: "Pourquoi nous choisir ?",
      competitiveAdvantage: "Votre avantage compétitif",
      strategicPosition: "Position stratégique",
      strategicPositionDesc: "Au cœur de Tanger Med, le plus grand port d'Afrique",
      maxSecurity: "Sécurité maximale",
      maxSecurityDesc: "Surveillance 24/7 et systèmes de protection avancés",
      reactivity: "Réactivité",
      reactivityDesc: "Traitement rapide de vos demandes et expéditions",
      internationalNetwork: "Réseau international",
      internationalNetworkDesc: "Connexions avec les marchés mondiaux",
      modernTech: "Technologie moderne",
      modernTechDesc: "Systèmes WMS et traçabilité en temps réel",
      onssaCertified: "Certifié ONSSA",
      onssaCertifiedDesc: "Conformité aux normes sanitaires les plus strictes",
      // Services
      ourServicesTitle: "Nos Services",
      logisticsSolutions: "Solutions Logistiques",
      warehousing: "Entreposage",
      warehousingDesc: "Stockage sécurisé et organisation optimale",
      handling: "Manutention",
      handlingDesc: "Déplacement efficace de vos marchandises",
      labeling: "Étiquetage",
      labelingDesc: "Identification et suivi précis",
      customLogistics: "Logistique sur mesure",
      customLogisticsDesc: "Solutions personnalisées",
      contractLogistics: "Logistique contractuelle",
      contractLogisticsDesc: "Gestion complète de votre chaîne",
      additionalServices: "Prestations complémentaires",
      additionalServicesDesc: "Services additionnels",
      viewAllServices: "Voir tous nos services",
      // Process
      ourProcess: "Notre processus",
      howItWorks: "Comment ça marche",
      reception: "Réception",
      receptionDesc: "Vos marchandises arrivent à notre plateforme",
      control: "Contrôle",
      controlDesc: "Vérification qualité et quantité",
      storage: "Stockage",
      storageDesc: "Entreposage sécurisé et organisé",
      preparation: "Préparation",
      preparationDesc: "Picking et emballage sur mesure",
      shipping: "Expédition",
      shippingDesc: "Livraison rapide et fiable",
      // Infrastructure
      ourFacilities: "Nos installations",
      ourInfrastructure: "Notre infrastructure",
      mainWarehouse: "Entrepôt principal",
      storageZone: "Zone de stockage",
      racking: "Rayonnages",
      shippingZone: "Zone d'expédition",
      equipment: "Équipements",
      technology: "Technologie",
      // Partners
      theyTrustUs: "Ils nous font confiance",
      ourPartners: "Nos partenaires",
      // Certifications
      certifications: "Certifications",
      certifiedQuality: "Qualité certifiée",
      onssa: "ONSSA",
      onssaDesc: "Office National de Sécurité Sanitaire",
      iso: "ISO 9001",
      isoDesc: "Management de la qualité",
      haccp: "HACCP",
      haccpDesc: "Sécurité alimentaire",
      // Director
      direction: "Direction",
      directorWord: "Mot du Directeur Général",
      directorTitle: "Directeur Général",
      directorCompany: "TLC - Tangier Logistics Center",
      directorWelcome: "Bienvenue au",
      directorMessage1: "Chez TLC, nous croyons que la logistique ne doit pas seulement être fiable et performante, mais aussi simple et accessible pour tous nos clients. Notre équipe est dédiée à faciliter vos échanges commerciaux, optimiser vos flux et assurer la sécurité de vos marchandises.",
      directorMessage2: "Nous serions ravis de vous accompagner dans vos projets.",
      // CTA
      readyToOptimize: "Prêt à optimiser votre logistique ?",
      ctaSubtitle: "Contactez notre équipe pour discuter de vos besoins et découvrir comment TLC peut vous accompagner.",
    },
    // Footer
    footer: {
      description: "Votre partenaire logistique de confiance au cœur de Tanger Med. Solutions d'entreposage, manutention et logistique sur mesure.",
      quickLinks: "Liens Rapides",
      services: "Services",
      contact: "Contact",
      address: "Entrepôt N1-A, Lot N°110, Zone franche logistique Ksar el Majaz, Tanger Med",
      rights: "Tous droits réservés.",
      partOf: "Fait partie de",
    },
    // About page
    about: {
      title: "Qui sommes-nous ?",
      subtitle: "Découvrez TLC, votre partenaire logistique au cœur de Tanger Med",
      intro: "Le Tangier Logistics Center (TLC) est une plateforme logistique moderne qui optimise vos flux de marchandises.",
      weEnsure: "Nous assurons :",
      activity1: "Réception rapide et sécurisée",
      activity2: "Stockage intelligent et organisé",
      activity3: "Manutention efficace et professionnelle",
      activity4: "Étiquetage et traçabilité précise",
      activity5: "Préparation des expéditions sur mesure",
      conclusion: "Avec TLC, votre logistique devient simple, rapide et fiable.",
    },
    // GMB Invest page
    gmb: {
      title: "G.M.B Invest Holding",
      subtitle: "À qui nous appartenons ?",
      intro: "TLC fait partie de G.M.B Invest, un groupe marocain visionnaire depuis 1962.",
      description: "Présent dans le bâtiment, l'immobilier, l'agroalimentaire, le textile et la logistique, G.M.B Invest est un acteur fiable et innovant, qui accompagne ses clients avec des solutions performantes et adaptées.",
      support: "Un soutien solide pour garantir l'excellence opérationnelle de TLC.",
      building: "Bâtiment",
      realEstate: "Immobilier",
      foodIndustry: "Agroalimentaire",
      textile: "Textile",
      logistics: "Logistique",
      since: "Depuis",
      sectors: "Secteurs d'activité",
      employees: "Collaborateurs",
      experience: "Années d'expérience",
    },
    // Services page
    services: {
      title: "Nos Services",
      subtitle: "Découvrez l'ensemble des solutions logistiques que nous proposons pour répondre à vos besoins.",
      warehousing: "Entreposage",
      warehousingShort: "Stockage sécurisé et organisation optimale de vos marchandises.",
      warehousingFull: "Nous assurons la réception, le contrôle, le stockage et la préparation des expéditions de vos produits. Nos entrepôts permettent une gestion fluide et sécurisée des stocks, adaptée à tous types de marchandises.",
      handling: "Manutention",
      handlingShort: "Déplacement et manipulation efficace de toutes vos marchandises.",
      handlingFull: "Notre équipe et nos équipements spécialisés assurent le chargement, le déchargement, le tri et le déplacement interne des produits, garantissant rapidité et sécurité à chaque étape.",
      labeling: "Étiquetage & Traçabilité",
      labelingShort: "Identification et suivi précis des produits.",
      labelingFull: "Chaque produit est étiqueté avec précision pour permettre une traçabilité complète. Vous pouvez suivre vos marchandises du dépôt jusqu'à l'expédition, avec un contrôle permanent et des informations fiables.",
      customLogistics: "Logistique sur mesure",
      customLogisticsShort: "Solutions personnalisées selon vos besoins.",
      customLogisticsFull: "Nous adaptons nos opérations à vos exigences : stockage dans des zones dédiées, conditionnement spécifique, procédures sur mesure, suivi et reporting personnalisés. Une logistique flexible conçue pour vous.",
      contractLogistics: "Logistique contractuelle",
      contractLogisticsShort: "Gestion complète de votre chaîne logistique.",
      contractLogisticsFull: "Nous prenons en charge tous vos besoins logistiques sur le long terme, incluant : entreposage, manutention, traçabilité, suivi, reporting et optimisation des flux. Une solution clé en main pour une logistique performante et fiable.",
      additionalServices: "Prestations complémentaires",
      additionalServicesShort: "Services additionnels pour un soutien complet.",
      additionalServicesFull: "Nous offrons également : contrôle qualité, emballage et reconditionnement, gestion documentaire, support douanier et administratif. Tout ce dont vous avez besoin pour que vos opérations soient fluides et conformes.",
      learnMore: "En savoir plus",
    },
    // Certifications page
    certifications: {
      title: "Certifications",
      subtitle: "La garantie qualité",
      intro: "TLC est certifié ONSSA, assurant que toutes nos opérations respectent les normes de sécurité et de qualité, notamment pour les produits alimentaires et sensibles.",
      trust: "Votre confiance, notre priorité.",
    },
    // Contact page
    contact: {
      title: "Contact",
      subtitle: "Entrons en relation",
      intro: "Pour toute demande ou collaboration :",
      form: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        phone: "Téléphone",
        message: "Description de votre demande",
        messagePlaceholder: "Décrivez votre besoin...",
        submit: "Envoyer",
        required: "(obligatoire)",
      },
      info: {
        email: "Email",
        phone: "Téléphone",
        address: "Adresse",
        linkedin: "LinkedIn",
      },
    },
    // Blog page
    blog: {
      title: "Blog",
      subtitle: "Nos conseils et actualités",
      intro: "Découvrez nos actualités logistiques, innovations et bonnes pratiques pour optimiser vos flux et suivre les tendances du secteur.",
      tagline: "Le blog TLC : expertise, innovation et conseils pour vos projets logistiques.",
      readMore: "Lire la suite",
      comingSoon: "Articles à venir",
      comingSoonDesc: "Notre équipe prépare des articles passionnants sur la logistique, les innovations du secteur et les meilleures pratiques.",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      gmbInvest: "G.M.B Invest",
      services: "Services",
      certifications: "Certifications",
      blog: "Blog",
      contact: "Contact",
      getQuote: "Get Quote",
    },
    // Homepage
    home: {
      badge: "Your logistics partner at the heart of Tanger Med",
      title1: "Tangier",
      title2: "Logistics Center",
      subtitle: "A modern logistics platform that optimizes your goods flow. With TLC, your logistics becomes",
      simple: "simple",
      fast: "fast",
      reliable: "reliable",
      cta: "Request a quote",
      ourServices: "Our services",
      location: "Logistics Free Zone",
      locationDetail: "Ksar el Majaz, Tanger Med",
      // KPIs
      kpi1Label: "of logistics space",
      kpi2Label: "international clients",
      kpi3Label: "stock accuracy",
      kpi4Label: "secured surveillance",
      // Why choose us
      whyChooseUs: "Why choose us?",
      competitiveAdvantage: "Your competitive advantage",
      strategicPosition: "Strategic position",
      strategicPositionDesc: "At the heart of Tanger Med, Africa's largest port",
      maxSecurity: "Maximum security",
      maxSecurityDesc: "24/7 surveillance and advanced protection systems",
      reactivity: "Reactivity",
      reactivityDesc: "Fast processing of your requests and shipments",
      internationalNetwork: "International network",
      internationalNetworkDesc: "Connections with global markets",
      modernTech: "Modern technology",
      modernTechDesc: "WMS systems and real-time traceability",
      onssaCertified: "ONSSA certified",
      onssaCertifiedDesc: "Compliance with the strictest health standards",
      // Services
      ourServicesTitle: "Our Services",
      logisticsSolutions: "Logistics Solutions",
      warehousing: "Warehousing",
      warehousingDesc: "Secure storage and optimal organization",
      handling: "Handling",
      handlingDesc: "Efficient movement of your goods",
      labeling: "Labeling",
      labelingDesc: "Precise identification and tracking",
      customLogistics: "Custom logistics",
      customLogisticsDesc: "Personalized solutions",
      contractLogistics: "Contract logistics",
      contractLogisticsDesc: "Complete supply chain management",
      additionalServices: "Additional services",
      additionalServicesDesc: "Supplementary services",
      viewAllServices: "View all our services",
      // Process
      ourProcess: "Our process",
      howItWorks: "How it works",
      reception: "Reception",
      receptionDesc: "Your goods arrive at our platform",
      control: "Control",
      controlDesc: "Quality and quantity verification",
      storage: "Storage",
      storageDesc: "Secure and organized warehousing",
      preparation: "Preparation",
      preparationDesc: "Custom picking and packaging",
      shipping: "Shipping",
      shippingDesc: "Fast and reliable delivery",
      // Infrastructure
      ourFacilities: "Our facilities",
      ourInfrastructure: "Our infrastructure",
      mainWarehouse: "Main warehouse",
      storageZone: "Storage zone",
      racking: "Racking",
      shippingZone: "Shipping zone",
      equipment: "Equipment",
      technology: "Technology",
      // Partners
      theyTrustUs: "They trust us",
      ourPartners: "Our partners",
      // Certifications
      certifications: "Certifications",
      certifiedQuality: "Certified quality",
      onssa: "ONSSA",
      onssaDesc: "National Food Safety Office",
      iso: "ISO 9001",
      isoDesc: "Quality management",
      haccp: "HACCP",
      haccpDesc: "Food safety",
      // Director
      direction: "Management",
      directorWord: "Word from the General Manager",
      directorTitle: "General Manager",
      directorCompany: "TLC - Tangier Logistics Center",
      directorWelcome: "Welcome to",
      directorMessage1: "At TLC, we believe that logistics should not only be reliable and efficient, but also simple and accessible for all our clients. Our team is dedicated to facilitating your commercial exchanges, optimizing your flows and ensuring the safety of your goods.",
      directorMessage2: "We would be delighted to support you in your projects.",
      // CTA
      readyToOptimize: "Ready to optimize your logistics?",
      ctaSubtitle: "Contact our team to discuss your needs and discover how TLC can support you.",
    },
    // Footer
    footer: {
      description: "Your trusted logistics partner at the heart of Tanger Med. Warehousing, handling and custom logistics solutions.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      address: "Warehouse N1-A, Lot N°110, Logistics Free Zone Ksar el Majaz, Tanger Med",
      rights: "All rights reserved.",
      partOf: "Part of",
    },
    // About page
    about: {
      title: "About Us",
      subtitle: "Discover TLC, your logistics partner at the heart of Tanger Med",
      intro: "The Tangier Logistics Center (TLC) is a modern logistics platform that optimizes your goods flow.",
      weEnsure: "We ensure:",
      activity1: "Fast and secure reception",
      activity2: "Intelligent and organized storage",
      activity3: "Efficient and professional handling",
      activity4: "Precise labeling and traceability",
      activity5: "Custom shipment preparation",
      conclusion: "With TLC, your logistics becomes simple, fast and reliable.",
    },
    // GMB Invest page
    gmb: {
      title: "G.M.B Invest Holding",
      subtitle: "Who we belong to?",
      intro: "TLC is part of G.M.B Invest, a visionary Moroccan group since 1962.",
      description: "Present in construction, real estate, food industry, textile and logistics, G.M.B Invest is a reliable and innovative player, supporting its clients with efficient and adapted solutions.",
      support: "Solid support to guarantee TLC's operational excellence.",
      building: "Construction",
      realEstate: "Real Estate",
      foodIndustry: "Food Industry",
      textile: "Textile",
      logistics: "Logistics",
      since: "Since",
      sectors: "Business sectors",
      employees: "Employees",
      experience: "Years of experience",
    },
    // Services page
    services: {
      title: "Our Services",
      subtitle: "Discover all the logistics solutions we offer to meet your needs.",
      warehousing: "Warehousing",
      warehousingShort: "Secure storage and optimal organization of your goods.",
      warehousingFull: "We ensure the reception, control, storage and preparation of shipments for your products. Our warehouses allow for smooth and secure stock management, adapted to all types of goods.",
      handling: "Handling",
      handlingShort: "Efficient movement and manipulation of all your goods.",
      handlingFull: "Our team and specialized equipment ensure loading, unloading, sorting and internal movement of products, guaranteeing speed and safety at every step.",
      labeling: "Labeling & Traceability",
      labelingShort: "Precise identification and tracking of products.",
      labelingFull: "Each product is precisely labeled to allow complete traceability. You can track your goods from deposit to shipment, with permanent control and reliable information.",
      customLogistics: "Custom Logistics",
      customLogisticsShort: "Personalized solutions according to your needs.",
      customLogisticsFull: "We adapt our operations to your requirements: storage in dedicated areas, specific packaging, custom procedures, personalized tracking and reporting. Flexible logistics designed for you.",
      contractLogistics: "Contract Logistics",
      contractLogisticsShort: "Complete management of your supply chain.",
      contractLogisticsFull: "We handle all your long-term logistics needs, including: warehousing, handling, traceability, tracking, reporting and flow optimization. A turnkey solution for efficient and reliable logistics.",
      additionalServices: "Additional Services",
      additionalServicesShort: "Additional services for complete support.",
      additionalServicesFull: "We also offer: quality control, packaging and reconditioning, document management, customs and administrative support. Everything you need for smooth and compliant operations.",
      learnMore: "Learn more",
    },
    // Certifications page
    certifications: {
      title: "Certifications",
      subtitle: "Quality guarantee",
      intro: "TLC is ONSSA certified, ensuring that all our operations meet safety and quality standards, especially for food and sensitive products.",
      trust: "Your trust, our priority.",
    },
    // Contact page
    contact: {
      title: "Contact",
      subtitle: "Let's get in touch",
      intro: "For any request or collaboration:",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        message: "Description of your request",
        messagePlaceholder: "Describe your needs...",
        submit: "Send",
        required: "(required)",
      },
      info: {
        email: "Email",
        phone: "Phone",
        address: "Address",
        linkedin: "LinkedIn",
      },
    },
    // Blog page
    blog: {
      title: "Blog",
      subtitle: "Our tips and news",
      intro: "Discover our logistics news, innovations and best practices to optimize your flows and follow industry trends.",
      tagline: "The TLC blog: expertise, innovation and advice for your logistics projects.",
      readMore: "Read more",
      comingSoon: "Articles coming soon",
      comingSoonDesc: "Our team is preparing exciting articles about logistics, industry innovations and best practices.",
    },
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr")

  useEffect(() => {
    const saved = localStorage.getItem("tlc-lang") as Language | null
    if (saved) setLangState(saved)
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("tlc-lang", newLang)
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export { translations }
