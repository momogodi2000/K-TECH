import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Battery, Shield, Camera, Volume2, Wifi,
  CheckCircle, Phone, MessageCircle, Upload, Star
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const PhoneRepair = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const brands = [
    { id: 'all', name: 'Toutes marques', logo: '📱' },
    { id: 'iphone', name: 'iPhone', logo: '🍎' },
    { id: 'samsung', name: 'Samsung', logo: '📱' },
    { id: 'huawei', name: 'Huawei', logo: '📱' },
    { id: 'xiaomi', name: 'Xiaomi', logo: '📱' },
    { id: 'oppo', name: 'Oppo', logo: '📱' },
    { id: 'tecno', name: 'Tecno', logo: '📱' },
    { id: 'infinix', name: 'Infinix', logo: '📱' }
  ];

  const repairTypes = [
    {
      icon: Smartphone,
      title: 'Écran Cassé',
      description: 'Remplacement d\'écran toutes marques',
      price: 'À partir de 15 000 XAF',
      duration: '30-60 min',
      warranty: '3 mois'
    },
    {
      icon: Battery,
      title: 'Batterie Défaillante',
      description: 'Changement de batterie originale',
      price: 'À partir de 8 000 XAF',
      duration: '20-30 min',
      warranty: '6 mois'
    },
    {
      icon: Volume2,
      title: 'Problème Audio',
      description: 'Réparation haut-parleur, micro',
      price: 'À partir de 5 000 XAF',
      duration: '30-45 min',
      warranty: '3 mois'
    },
    {
      icon: Camera,
      title: 'Caméra Défectueuse',
      description: 'Réparation/remplacement caméra',
      price: 'À partir de 12 000 XAF',
      duration: '45-60 min',
      warranty: '3 mois'
    },
    {
      icon: Wifi,
      title: 'Connectivité',
      description: 'WiFi, Bluetooth, réseau mobile',
      price: 'À partir de 6 000 XAF',
      duration: '30-90 min',
      warranty: '3 mois'
    },
    {
      icon: Shield,
      title: 'Déblocage Opérateur',
      description: 'Tous opérateurs (MTN, Orange, Camtel)',
      price: 'À partir de 3 000 XAF',
      duration: '15-30 min',
      warranty: 'Définitif'
    }
  ];

  const testimonials = [
    {
      name: 'Achille Mbongo',
      phone: 'iPhone 12',
      problem: 'Écran cassé',
      rating: 5,
      comment: 'Réparation rapide et écran de qualité. Très satisfait du service!'
    },
    {
      name: 'Sarah Kameni',
      phone: 'Samsung S21',
      problem: 'Batterie',
      rating: 5,
      comment: 'Batterie changée en 20 minutes, maintenant mon téléphone tient toute la journée!'
    },
    {
      name: 'Paul Nkomo',
      phone: 'Huawei P30',
      problem: 'Déblocage',
      rating: 5,
      comment: 'Déblocage réussi en 10 minutes, je peux maintenant utiliser toutes les puces!'
    }
  ];

  const diagnosticSteps = [
    'Examen visuel complet',
    'Test de toutes les fonctions',
    'Diagnostic électronique',
    'Devis détaillé gratuit'
  ];

  return (
    <>
      <SEO 
        title="Réparation Smartphone"
        description="Réparation professionnelle de smartphones à Douala: écran cassé, batterie, déblocage. Toutes marques: iPhone, Samsung, Huawei. Diagnostic gratuit, garantie 3 mois."
        keywords={['réparation smartphone douala', 'écran cassé iphone', 'batterie samsung', 'déblocage téléphone cameroun']}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary-900 to-secondary-700 text-white py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.slideInLeft}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Smartphone className="w-8 h-8 text-secondary-300" />
                  <span className="text-secondary-300 font-medium">Réparation Smartphone</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Réparation & Déblocage Smartphones
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Experts en réparation toutes marques. Écran cassé, batterie défaillante, 
                  déblocage opérateur. Diagnostic gratuit, garantie 3 mois.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('📱 RÉPARATION SMARTPHONE - J\'ai besoin de réparer mon téléphone')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Diagnostic WhatsApp
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                    className="btn-outline text-white border-white hover:bg-white hover:text-secondary-600"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Appel Express
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 bg-white/10 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-300">Téléphones réparés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">15min</div>
                    <div className="text-sm text-gray-300">Diagnostic gratuit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3mois</div>
                    <div className="text-sm text-gray-300">Garantie</div>
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
                  <div className="text-6xl mb-6">📱</div>
                  <h3 className="text-2xl font-bold mb-4">Diagnostic Express</h3>
                  <p className="text-gray-200 mb-6">
                    Amenez votre téléphone, diagnostic complet en 15 minutes
                  </p>
                  
                  {/* Upload option */}
                  <div className="bg-white/20 rounded-lg p-4 mb-4">
                    <Upload className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Envoyez une photo via WhatsApp pour un pré-diagnostic</p>
                  </div>
                  
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                    Gratuit & Sans Engagement
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="bg-white py-12">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-2xl font-bold text-center text-gray-900 mb-8"
            >
              Marques Supportées
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4">
              {brands.map((brand, index) => (
                <motion.button
                  key={brand.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedBrand(brand.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedBrand === brand.id
                      ? 'bg-secondary-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <span className="text-xl">{brand.logo}</span>
                  <span className="font-medium">{brand.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Types */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Types de Réparations
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repairTypes.map((repair, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center group-hover:bg-secondary-200 transition-colors">
                      <repair.icon className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{repair.title}</h3>
                      <p className="text-sm text-gray-600">{repair.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prix:</span>
                      <span className="font-bold text-secondary-600">{repair.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">{repair.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Garantie:</span>
                      <span className="font-medium text-green-600">{repair.warranty}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const message = `📱 RÉPARATION: ${repair.title}\n\nBonjour K-TECH, je souhaite réparer: ${repair.description}\n\nMerci de me confirmer le prix et la disponibilité.`;
                      const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="w-full btn-secondary text-sm"
                  >
                    Demander ce Service
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Process */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.slideInLeft}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Diagnostic Professionnel Gratuit
                </h2>
                <p className="text-gray-600 mb-8">
                  Avant toute réparation, nous effectuons un diagnostic complet 
                  de votre appareil pour identifier précisément le problème et 
                  vous proposer la meilleure solution.
                </p>

                <div className="space-y-4">
                  {diagnosticSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={ANIMATION_VARIANTS.fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Diagnostic gratuit même si vous ne réparez pas</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.slideInRight}
                className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Envoyez une Photo pour Pré-diagnostic
                </h3>
                
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-12 h-12 text-secondary-600" />
                  </div>
                  <p className="text-gray-600">
                    Prenez une photo de votre téléphone endommagé et envoyez-la nous 
                    via WhatsApp pour un pré-diagnostic express
                  </p>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('📷 PRÉ-DIAGNOSTIC - Voici une photo de mon téléphone endommagé:')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary flex items-center justify-center"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Envoyer Photo WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Témoignages Clients
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
                  className="bg-white p-6 rounded-xl shadow-card"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.phone} - {testimonial.problem}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-secondary-600 to-primary-600 text-white section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre Smartphone est Cassé ?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Ne restez pas sans téléphone ! Amenez-le nous maintenant 
                pour un diagnostic gratuit et une réparation express.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('📱 URGENT - Mon téléphone est cassé, j\'ai besoin d\'une réparation rapide!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Réparation Express
                </a>
                <a
                  href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                  className="btn-outline text-white border-white hover:bg-white hover:text-secondary-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler Maintenant
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PhoneRepair;