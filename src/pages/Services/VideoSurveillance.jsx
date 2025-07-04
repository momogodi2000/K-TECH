import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, Shield, Smartphone, Monitor, Eye, Clock,
  CheckCircle, Phone, MessageCircle, MapPin, Star,
  Home, Building, Factory, Wifi, Cloud, HardDrive
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const VideoSurveillance = () => {
  const [selectedType, setSelectedType] = useState('residential');

  const surveillanceTypes = [
    {
      id: 'residential',
      name: 'Résidentiel',
      icon: Home,
      description: 'Sécurité pour maisons et villas',
      color: 'bg-blue-500',
      features: [
        'Caméras extérieures étanches',
        'Vision nocturne jusqu\'à 30m',
        'Détection de mouvement',
        'Alertes smartphone',
        'Enregistrement local/cloud',
        'Installation discrète'
      ]
    },
    {
      id: 'commercial',
      name: 'Commercial',
      icon: Building,
      description: 'Magasins, bureaux, restaurants',
      color: 'bg-green-500',
      features: [
        'Caméras haute résolution',
        'Surveillance 24h/24',
        'Accès multi-utilisateurs',
        'Comptage de personnes',
        'Intégration alarme',
        'Sauvegarde sécurisée'
      ]
    },
    {
      id: 'industrial',
      name: 'Industriel',
      icon: Factory,
      description: 'Entrepôts, usines, chantiers',
      color: 'bg-purple-500',
      features: [
        'Caméras anti-vandalisme',
        'Surveillance périmétrique',
        'Détection d\'intrusion',
        'Analyse comportementale',
        'Redondance système',
        'Maintenance préventive'
      ]
    }
  ];

  const cameraTypes = [
    {
      name: 'Caméra Dôme IP',
      image: '🎥',
      resolution: '4K Ultra HD',
      vision: 'Jour/Nuit',
      price: 'À partir de 85 000 XAF',
      features: ['Zoom optique 4x', 'Audio bidirectionnel', 'Étanche IP67']
    },
    {
      name: 'Caméra Bullet',
      image: '📹',
      resolution: '1080p Full HD',
      vision: 'Vision nocturne 40m',
      price: 'À partir de 55 000 XAF',
      features: ['Angle large 90°', 'Détection PIR', 'Installation facile']
    },
    {
      name: 'Caméra PTZ',
      image: '🎬',
      resolution: '4K avec zoom 20x',
      vision: 'Vision nocturne 100m',
      price: 'À partir de 150 000 XAF',
      features: ['Rotation 360°', 'Auto-tracking', 'Contrôle à distance']
    },
    {
      name: 'Caméra Analogique',
      image: '📺',
      resolution: '1080p AHD',
      vision: 'Vision nocturne 25m',
      price: 'À partir de 25 000 XAF',
      features: ['Installation simple', 'Économique', 'Fiable']
    }
  ];

  const packages = [
    {
      name: 'Pack Starter',
      type: 'Résidentiel',
      cameras: 2,
      price: 180000,
      features: [
        '2 caméras HD 1080p',
        'Enregistreur 4 canaux',
        'Disque dur 1To',
        'Câblage inclus',
        'Installation complète',
        'Formation de base'
      ],
      popular: false
    },
    {
      name: 'Pack Famille',
      type: 'Résidentiel',
      cameras: 4,
      price: 320000,
      features: [
        '4 caméras HD 1080p',
        'Enregistreur 8 canaux',
        'Disque dur 2To',
        'App mobile incluse',
        'Vision nocturne',
        'Support 6 mois'
      ],
      popular: true
    },
    {
      name: 'Pack Business',
      type: 'Commercial',
      cameras: 8,
      price: 650000,
      features: [
        '8 caméras 4K',
        'Enregistreur 16 canaux',
        'Disque dur 4To',
        'Accès cloud',
        'Monitoring 24h',
        'Maintenance 1 an'
      ],
      popular: false
    }
  ];

  const installations = [
    {
      type: 'Villa Bonamoussadi',
      cameras: 6,
      client: 'Famille Mballa',
      description: 'Surveillance complète avec vision nocturne',
      rating: 5
    },
    {
      type: 'Magasin Akwa',
      cameras: 12,
      client: 'Supermarché Express',
      description: 'Système anti-vol avec comptage clients',
      rating: 5
    },
    {
      type: 'Entrepôt Logistique',
      cameras: 20,
      client: 'SARL Transport Plus',
      description: 'Surveillance périmétrique complète',
      rating: 5
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Étude Gratuite',
      description: 'Visite des lieux et analyse des besoins',
      icon: Eye,
      duration: '1-2h'
    },
    {
      number: 2,
      title: 'Devis Personnalisé',
      description: 'Proposition technique et financière détaillée',
      icon: CheckCircle,
      duration: '24h'
    },
    {
      number: 3,
      title: 'Installation',
      description: 'Pose des caméras et configuration système',
      icon: Camera,
      duration: '1-2 jours'
    },
    {
      number: 4,
      title: 'Formation',
      description: 'Formation à l\'utilisation et maintenance',
      icon: Monitor,
      duration: '1h'
    }
  ];

  const selectedTypeData = surveillanceTypes.find(type => type.id === selectedType);

  return (
    <>
      <SEO 
        title="Vidéosurveillance"
        description="Installation de systèmes de vidéosurveillance à Douala: caméras IP, analogiques, surveillance mobile. Devis gratuit, installation professionnelle, maintenance."
        keywords={['vidéosurveillance douala', 'caméras sécurité cameroun', 'installation surveillance', 'caméras ip douala']}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent-900 to-accent-700 text-white py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.slideInLeft}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Camera className="w-8 h-8 text-accent-300" />
                  <span className="text-accent-300 font-medium">Vidéosurveillance</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Systèmes de Vidéosurveillance Professionnels
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Protégez votre propriété avec nos solutions de surveillance haute technologie. 
                  Caméras IP, vision nocturne, accès mobile, installation clé en main.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('🎥 VIDÉOSURVEILLANCE - Je souhaite une étude gratuite pour installer des caméras')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Étude Gratuite
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                    className="btn-outline text-white border-white hover:bg-white hover:text-accent-600"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Consultation Urgente
                  </a>
                </div>

                {/* Quick Benefits */}
                <div className="grid grid-cols-3 gap-4 bg-white/10 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-gray-300">Surveillance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4K</div>
                    <div className="text-sm text-gray-300">Ultra HD</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">📱</div>
                    <div className="text-sm text-gray-300">App Mobile</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.slideInRight}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-6">🎥</div>
                  <h3 className="text-2xl font-bold mb-4">Installation Clé en Main</h3>
                  <p className="text-gray-200 mb-6">
                    Étude gratuite → Devis personnalisé → Installation → Formation
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg p-3">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm">Garantie 2 ans</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg p-3">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">Installation sous 48h</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types de Surveillance */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Types de Surveillance
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {surveillanceTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`cursor-pointer transition-all ${
                    selectedType === type.id ? 'ring-2 ring-accent-500' : ''
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center text-white`}>
                        <type.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features du type sélectionné */}
            {selectedTypeData && (
              <motion.div
                key={selectedType}
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="bg-accent-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Fonctionnalités {selectedTypeData.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedTypeData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Types de Caméras */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Caméras de Surveillance
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cameraTypes.map((camera, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{camera.image}</div>
                    <h3 className="text-lg font-bold text-gray-900">{camera.name}</h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Résolution:</span>
                      <span className="font-medium">{camera.resolution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vision:</span>
                      <span className="font-medium">{camera.vision}</span>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-lg font-bold text-accent-600">{camera.price}</div>
                  </div>

                  <div className="space-y-2">
                    {camera.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      const message = `🎥 CAMÉRA: ${camera.name}\n\nBonjour K-TECH, je m'intéresse à cette caméra:\n${camera.name} - ${camera.price}\n\nMerci de me contacter pour plus d'informations.`;
                      const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="w-full mt-4 btn-accent text-sm"
                  >
                    Plus d'Infos
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packs/Forfaits */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Forfaits Installation
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pack, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow ${
                    pack.popular ? 'ring-2 ring-accent-500' : ''
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Plus Populaire
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>
                      <p className="text-gray-600">{pack.type}</p>
                      <div className="text-3xl font-bold text-accent-600 mt-4">
                        {pack.price.toLocaleString()} XAF
                      </div>
                      <p className="text-sm text-gray-500">Installation comprise</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {pack.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        const message = `📦 PACK: ${pack.name}\n\nBonjour K-TECH, je m'intéresse au pack:\n${pack.name} - ${pack.price.toLocaleString()} XAF\n\nMerci de me contacter pour programmer l'installation.`;
                        const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className={`w-full ${pack.popular ? 'btn-accent' : 'btn-primary'}`}
                    >
                      Choisir ce Pack
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus d'Installation */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Processus d'Installation
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-accent-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-6 h-6 text-accent-600" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent-200" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <div className="text-sm text-accent-600 font-medium">Durée: {step.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Réalisations
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {installations.map((installation, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(installation.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{installation.type}</h3>
                  <p className="text-gray-600 mb-3">{installation.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500">Client:</div>
                      <div className="font-medium">{installation.client}</div>
                    </div>
                    <div className="text-accent-600 font-bold">
                      {installation.cameras} caméras
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-accent-600 to-primary-600 text-white section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Sécuriser Votre Propriété ?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Demandez votre étude gratuite dès maintenant. 
                Nos experts vous conseilleront la meilleure solution adaptée à vos besoins.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('🎥 ÉTUDE GRATUITE - Je souhaite une étude gratuite pour l\'installation de caméras de surveillance')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Étude Gratuite
                </a>
                <a
                  href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                  className="btn-outline text-white border-white hover:bg-white hover:text-accent-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appelez Maintenant
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoSurveillance;