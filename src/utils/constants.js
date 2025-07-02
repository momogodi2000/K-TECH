// Company Information
export const COMPANY_INFO = {
  name: 'K-TECH MULTI SERVICES',
  slogan: 'Votre Partenaire Technologique de Confiance',
  sloganEn: 'Your Trusted Tech Partner',
  tagline: 'Solutions Innovantes, Service d\'Excellence',
  taglineEn: 'Innovative Solutions, Excellence in Service',
  owner: 'Thierry TANGUETSOP',
  title: 'Informaticien Certifié',
  location: {
    city: 'Douala',
    district: 'Bepanda',
    country: 'Cameroun',
    fullAddress: 'Douala - Bepanda, Cameroun',
    coordinates: {
      lat: 4.0733,
      lng: 9.7465
    }
  },
  contact: {
    phones: [
      {
        number: '+237673164426',
        formatted: '+237 673 164 426',
        whatsapp: true,
        primary: true
      },
      {
        number: '+237697806196',
        formatted: '+237 697 806 196',
        whatsapp: false,
        primary: false
      }
    ],
    email: 'kamdoumtanguetsop@gmail.com',
    whatsapp: '237673164426'
  },
  social: {
    facebook: 'https://facebook.com/ktechmultiservices',
    instagram: 'https://instagram.com/ktechmultiservices',
    linkedin: 'https://linkedin.com/company/ktechmultiservices',
    twitter: 'https://twitter.com/ktechmulti'
  },
  hours: {
    weekdays: {
      open: '08:00',
      close: '18:00'
    },
    saturday: {
      open: '09:00',
      close: '15:00'
    },
    sunday: {
      open: 'Urgences uniquement',
      close: ''
    }
  }
};

// Services Information
export const SERVICES = [
  {
    id: 'computer-maintenance',
    title: 'Maintenance Informatique et Réseau',
    titleEn: 'Computer and Network Maintenance',
    icon: 'Monitor',
    color: 'primary',
    description: 'Dépannage, configuration et maintenance de vos systèmes informatiques',
    descriptionEn: 'Troubleshooting, configuration and maintenance of your IT systems',
    features: [
      'Dépannage ordinateurs (PC/Mac)',
      'Configuration réseaux locaux',
      'Installation logiciels',
      'Sauvegarde et récupération données',
      'Support technique à distance',
      'Contrats de maintenance'
    ],
    featuresEn: [
      'Computer troubleshooting (PC/Mac)',
      'Local network configuration',
      'Software installation',
      'Data backup and recovery',
      'Remote technical support',
      'Maintenance contracts'
    ],
    pricing: {
      type: 'hourly',
      currency: 'XAF',
      min: 5000,
      max: 25000
    }
  },
  {
    id: 'phone-repair',
    title: 'Réparation et Déblocage Smartphones',
    titleEn: 'Smartphone Repair and Unlocking',
    icon: 'Smartphone',
    color: 'secondary',
    description: 'Réparation professionnelle toutes marques avec garantie',
    descriptionEn: 'Professional repair all brands with warranty',
    features: [
      'Réparation écrans',
      'Changement batteries',
      'Déblocage opérateur',
      'Récupération données',
      'Diagnostic gratuit',
      'Garantie 3 mois'
    ],
    featuresEn: [
      'Screen repair',
      'Battery replacement',
      'Carrier unlocking',
      'Data recovery',
      'Free diagnosis',
      '3 months warranty'
    ],
    brands: ['iPhone', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Tecno', 'Infinix'],
    pricing: {
      type: 'fixed',
      currency: 'XAF',
      examples: {
        screenRepair: { min: 15000, max: 75000 },
        batteryChange: { min: 10000, max: 35000 },
        unlock: { min: 5000, max: 15000 }
      }
    }
  },
  {
    id: 'video-surveillance',
    title: 'Installation Caméras de Vidéosurveillance',
    titleEn: 'Video Surveillance Camera Installation',
    icon: 'Camera',
    color: 'accent',
    description: 'Systèmes de surveillance professionnels avec accès à distance',
    descriptionEn: 'Professional surveillance systems with remote access',
    features: [
      'Caméras IP haute définition',
      'Systèmes analogiques',
      'Surveillance mobile',
      'Vision nocturne',
      'Installation complète',
      'Formation utilisateurs'
    ],
    featuresEn: [
      'High definition IP cameras',
      'Analog systems',
      'Mobile surveillance',
      'Night vision',
      'Complete installation',
      'User training'
    ],
    types: ['Résidentiel', 'Commercial', 'Industriel'],
    pricing: {
      type: 'project',
      currency: 'XAF',
      min: 150000,
      consultation: 'Gratuite'
    }
  },
  {
    id: 'graphic-design',
    title: 'Services Infographie et Design',
    titleEn: 'Graphics and Design Services',
    icon: 'Palette',
    color: 'warning',
    description: 'Création graphique professionnelle pour votre image de marque',
    descriptionEn: 'Professional graphic creation for your brand image',
    features: [
      'Création logos',
      'Cartes de visite',
      'Flyers et brochures',
      'Retouche photo',
      'Supports digitaux',
      'Bannières publicitaires'
    ],
    featuresEn: [
      'Logo creation',
      'Business cards',
      'Flyers and brochures',
      'Photo retouching',
      'Digital media',
      'Advertising banners'
    ],
    deliveryTime: '24-72h',
    pricing: {
      type: 'project',
      currency: 'XAF',
      examples: {
        logo: { min: 25000, max: 100000 },
        businessCard: { min: 15000, max: 35000 },
        flyer: { min: 20000, max: 50000 }
      }
    }
  }
];

// WhatsApp Messages Templates
export const WHATSAPP_MESSAGES = {
  general: 'Bonjour K-TECH! Je souhaite avoir plus d\'informations sur vos services.',
  computerMaintenance: 'Bonjour, j\'ai besoin d\'une maintenance informatique pour mon équipement.',
  phoneRepair: 'Salut, j\'ai un smartphone à réparer. Pouvez-vous m\'aider?',
  videoSurveillance: 'Bonjour, je suis intéressé par l\'installation de caméras de surveillance.',
  graphicDesign: 'Bonjour, j\'ai besoin de services de design graphique.',
  urgent: '🚨 URGENT: J\'ai besoin d\'aide immédiatement!',
  quote: 'Bonjour, je souhaite obtenir un devis pour: '
};

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'K-TECH MULTI SERVICES - Services Informatiques Douala',
  titleTemplate: '%s | K-TECH MULTI SERVICES',
  defaultDescription: 'Services informatiques professionnels à Douala: maintenance PC, réparation smartphones, vidéosurveillance, infographie. Contact: +237 673 164 426',
  siteUrl: 'https://www.k-tech-services.cm',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@ktechmulti',
  keywords: [
    'réparation smartphone douala',
    'maintenance informatique cameroun',
    'vidéosurveillance bepanda',
    'infographie douala',
    'déblocage téléphone cameroun',
    'réparation ordinateur douala',
    'installation caméra surveillance',
    'k-tech multi services',
    'thierry tanguetsop'
  ]
};

// Animation Variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, type: 'spring' }
    }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, type: 'spring' }
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, type: 'spring' }
    }
  },
  staggerContainer: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// API Endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  quote: '/api/quote',
  newsletter: '/api/newsletter',
  analytics: '/api/analytics'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: 'k-tech-theme',
  language: 'k-tech-language',
  formData: 'k-tech-form-data',
  consent: 'k-tech-cookie-consent',
  visits: 'k-tech-visits'
};

// Breakpoints
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Status Messages
export const STATUS_MESSAGES = {
  success: {
    contact: 'Message envoyé avec succès! Nous vous contacterons bientôt.',
    quote: 'Demande de devis envoyée! Nous vous répondrons dans les 24h.',
    newsletter: 'Inscription réussie! Bienvenue dans notre communauté.'
  },
  error: {
    general: 'Une erreur est survenue. Veuillez réessayer.',
    network: 'Erreur de connexion. Vérifiez votre connexion internet.',
    validation: 'Veuillez vérifier les informations saisies.'
  }
};