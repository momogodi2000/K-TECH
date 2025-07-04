import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Image, FileText, Smartphone, Monitor, Printer,
  CheckCircle, Phone, MessageCircle, Upload, Clock, Star,
  Eye, Download, Zap, Award, Users, PenTool
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const GraphicDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les Services', icon: '🎨' },
    { id: 'logo', name: 'Logos', icon: '🔥' },
    { id: 'print', name: 'Supports Print', icon: '🖨️' },
    { id: 'digital', name: 'Supports Digitaux', icon: '💻' },
    { id: 'photo', name: 'Retouche Photo', icon: '📸' }
  ];

  const services = [
    {
      id: 'logo-creation',
      category: 'logo',
      title: 'Création de Logo',
      description: 'Logo professionnel unique pour votre entreprise',
      icon: '🎯',
      price: { min: 25000, max: 100000 },
      duration: '24-48h',
      deliverables: ['Logo vectoriel', 'Versions couleur/N&B', 'Fichiers haute résolution', 'Guide d\'utilisation'],
      popular: true
    },
    {
      id: 'business-card',
      category: 'print',
      title: 'Carte de Visite',
      description: 'Cartes de visite élégantes et professionnelles',
      icon: '💼',
      price: { min: 15000, max: 35000 },
      duration: '12-24h',
      deliverables: ['Design recto-verso', 'Fichier impression', 'Aperçu 3D', 'Formats standard'],
      popular: true
    },
    {
      id: 'flyer',
      category: 'print',
      title: 'Flyers & Brochures',
      description: 'Supports publicitaires impactants',
      icon: '📄',
      price: { min: 20000, max: 50000 },
      duration: '24-48h',
      deliverables: ['Design créatif', 'Fichier print-ready', 'Révisions incluses', 'Conseils impression'],
      popular: false
    },
    {
      id: 'banner',
      category: 'digital',
      title: 'Bannières Web',
      description: 'Bannières publicitaires pour réseaux sociaux et sites web',
      icon: '🌐',
      price: { min: 10000, max: 30000 },
      duration: '6-12h',
      deliverables: ['Formats optimisés', 'Versions animées', 'Fichiers web', 'Adaptations multi-formats'],
      popular: true
    },
    {
      id: 'photo-retouch',
      category: 'photo',
      title: 'Retouche Photo',
      description: 'Retouche professionnelle de vos photos',
      icon: '✨',
      price: { min: 5000, max: 25000 },
      duration: '2-6h',
      deliverables: ['Photo retouchée HD', 'Versions avant/après', 'Corrections couleur', 'Formats multiples'],
      popular: false
    },
    {
      id: 'social-media',
      category: 'digital',
      title: 'Visuels Réseaux Sociaux',
      description: 'Posts, stories et couvertures pour vos réseaux',
      icon: '📱',
      price: { min: 8000, max: 25000 },
      duration: '4-8h',
      deliverables: ['Pack 10 visuels', 'Formats adaptés', 'Templates réutilisables', 'Calendrier visuel'],
      popular: true
    },
    {
      id: 'menu-restaurant',
      category: 'print',
      title: 'Menu Restaurant',
      description: 'Menus élégants pour restaurants et bars',
      icon: '🍽️',
      price: { min: 30000, max: 75000 },
      duration: '48-72h',
      deliverables: ['Design premium', 'Fichier impression', 'Version digitale', 'Modifications incluses'],
      popular: false
    },
    {
      id: 'poster',
      category: 'print',
      title: 'Affiches & Posters',
      description: 'Affiches promotionnelles et événementielles',
      icon: '🎭',
      price: { min: 25000, max: 60000 },
      duration: '24-48h',
      deliverables: ['Design créatif', 'Formats A1/A2/A3', 'Fichier haute résolution', 'Conseils support'],
      popular: false
    }
  ];

  const portfolio = [
    {
      title: 'Logo Restaurant "Le Savoureux"',
      category: 'Logo',
      description: 'Identité visuelle complète pour restaurant gastronomique',
      rating: 5,
      client: 'Restaurant Le Savoureux',
      deliveryTime: '24h'
    },
    {
      title: 'Cartes de Visite Avocat',
      category: 'Print',
      description: 'Cartes élégantes avec gaufrage et dorure',
      rating: 5,
      client: 'Cabinet Juridique Mballa',
      deliveryTime: '12h'
    },
    {
      title: 'Campagne Réseaux Sociaux',
      category: 'Digital',
      description: 'Pack 20 visuels Instagram pour boutique mode',
      rating: 5,
      client: 'Boutique Fashion Style',
      deliveryTime: '48h'
    }
  ];

  const packages = [
    {
      name: 'Pack Starter',
      description: 'Parfait pour débuter',
      price: 75000,
      items: [
        'Logo simple',
        'Carte de visite',
        '3 révisions',
        'Fichiers de base'
      ],
      popular: false
    },
    {
      name: 'Pack Business',
      description: 'Solution complète PME',
      price: 150000,
      items: [
        'Logo professionnel',
        'Carte de visite premium',
        'Flyer A4',
        'Bannière web',
        'Révisions illimitées',
        'Fichiers haute résolution'
      ],
      popular: true
    },
    {
      name: 'Pack Premium',
      description: 'Identité visuelle complète',
      price: 300000,
      items: [
        'Logo + déclinaisons',
        'Charte graphique',
        'Carte de visite',
        'Flyer + brochure',
        'Pack réseaux sociaux',
        'Suivi 3 mois',
        'Formations incluses'
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Brief Créatif',
      description: 'Discussion de vos besoins et objectifs',
      icon: MessageCircle,
      duration: '15-30 min'
    },
    {
      step: 2,
      title: 'Création',
      description: 'Conception du design selon vos specifications',
      icon: PenTool,
      duration: 'Selon projet'
    },
    {
      step: 3,
      title: 'Validation',
      description: 'Présentation et révisions si nécessaire',
      icon: Eye,
      duration: '24h'
    },
    {
      step: 4,
      title: 'Livraison',
      description: 'Fichiers finaux dans tous les formats',
      icon: Download,
      duration: 'Immédiat'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Fotso',
      business: 'Boutique Mode',
      rating: 5,
      comment: 'Logo magnifique livré en 24h! Exactement ce que je voulais. Service très professionnel.',
      service: 'Création Logo'
    },
    {
      name: 'Paul Ngongang',
      business: 'Restaurant',
      rating: 5,
      comment: 'Mes menus sont superbes! Mes clients complimentent toujours le design. Merci K-TECH!',
      service: 'Menu Restaurant'
    },
    {
      name: 'Claire Mbida',
      business: 'Salon de Coiffure',
      rating: 5,
      comment: 'Pack réseaux sociaux parfait! Mes posts Instagram ont beaucoup plus d\'engagement maintenant.',
      service: 'Réseaux Sociaux'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Infographie & Design Graphique"
        description="Services d'infographie et design graphique à Douala: création logos, cartes de visite, flyers, retouche photo. Livraison rapide 24-48h, prix abordables."
        keywords={['infographie douala', 'création logo cameroun', 'carte de visite douala', 'design graphique', 'retouche photo']}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.slideInLeft}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Palette className="w-8 h-8 text-yellow-200" />
                  <span className="text-yellow-200 font-medium">Infographie & Design</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Création Graphique Professionnelle
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Donnez vie à votre image de marque avec nos créations graphiques. 
                  Logos, cartes de visite, flyers, retouche photo. Livraison rapide 24-48h.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('🎨 DESIGN GRAPHIQUE - Je souhaite créer mon logo/supports visuels')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Projet Créatif
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                    className="btn-outline text-white border-white hover:bg-white hover:text-yellow-600"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Conseil Express
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 bg-white/10 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm text-gray-300">Livraison rapide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm text-gray-300">Créations réalisées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-gray-300">Satisfaction client</div>
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
                  <div className="text-6xl mb-6">🎨</div>
                  <h3 className="text-2xl font-bold mb-4">Portfolio Créatif</h3>
                  <p className="text-gray-200 mb-6">
                    Découvrez nos créations récentes et inspirez-vous pour votre projet
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg p-3">
                      <Zap className="w-5 h-5" />
                      <span className="text-sm">Livraison Express</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg p-3">
                      <Award className="w-5 h-5" />
                      <span className="text-sm">Qualité Premium</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg p-3">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">200+ Clients Satisfaits</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="bg-white py-12">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-2xl font-bold text-center text-gray-900 mb-8"
            >
              Nos Services Créatifs
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-yellow-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Populaire
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Prix:</span>
                        <span className="font-bold text-yellow-600">
                          {service.price.min.toLocaleString()} - {service.price.max.toLocaleString()} XAF
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Délai:</span>
                        <span className="font-medium flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Livrables inclus:</h4>
                      <div className="space-y-1">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const message = `🎨 SERVICE: ${service.title}\n\nBonjour K-TECH, je souhaite:\n${service.description}\n\nPrix: ${service.price.min.toLocaleString()} - ${service.price.max.toLocaleString()} XAF\nDélai: ${service.duration}\n\nMerci de me contacter pour discuter de mon projet.`;
                        const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="w-full btn-primary"
                    >
                      Commander ce Service
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Notre Processus Créatif
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
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
                    <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-yellow-200" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <div className="text-sm text-yellow-600 font-medium">⏱️ {step.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Forfaits Design
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
                    pack.popular ? 'ring-2 ring-yellow-500' : ''
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Plus Populaire
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>
                      <p className="text-gray-600">{pack.description}</p>
                      <div className="text-3xl font-bold text-yellow-600 mt-4">
                        {pack.price.toLocaleString()} XAF
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {pack.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        const message = `📦 PACK: ${pack.name}\n\nBonjour K-TECH, je m'intéresse au pack:\n${pack.name} - ${pack.price.toLocaleString()} XAF\n\nInclus:\n${pack.items.join('\n')}\n\nMerci de me contacter pour commencer.`;
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

        {/* Portfolio/Testimonials */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Réalisations & Témoignages
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
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
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                    <div className="text-sm text-yellow-600 font-medium">{testimonial.service}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upload Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="bg-white rounded-xl shadow-card p-8 text-center"
              >
                <Upload className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Partagez Votre Vision
                </h3>
                <p className="text-gray-600 mb-8">
                  Envoyez-nous vos idées, références, ou éléments existants via WhatsApp 
                  pour un brief créatif personnalisé
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3">📋 Brief Créatif</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Objectif du projet</li>
                      <li>• Public cible</li>
                      <li>• Style souhaité</li>
                      <li>• Couleurs préférées</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3">📎 Fichiers Utiles</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Logo/éléments existants</li>
                      <li>• Photos à retoucher</li>
                      <li>• Références inspirantes</li>
                      <li>• Textes à intégrer</li>
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('🎨 BRIEF CRÉATIF - Voici mon projet design avec tous les détails:')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Envoyer Mon Brief
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Créer Votre Identité Visuelle ?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Transformez vos idées en créations professionnelles. 
                Commencez votre projet design dès maintenant !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('🎨 NOUVEAU PROJET - Je veux créer mes supports visuels avec K-TECH!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Commencer Mon Projet
                </a>
                <a
                  href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                  className="btn-outline text-white border-white hover:bg-white hover:text-yellow-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Conseil Créatif
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GraphicDesign;