import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, Wifi, HardDrive, Settings, Shield, Clock,
  CheckCircle, Phone, MessageCircle, ArrowRight, Star
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const ComputerMaintenance = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Dépannage PC & Mac',
      description: 'Diagnostic et réparation de tous types d\'ordinateurs',
      details: ['Problèmes de démarrage', 'Écrans bleus/noirs', 'Lenteurs système', 'Virus et malware']
    },
    {
      icon: Wifi,
      title: 'Configuration Réseau',
      description: 'Installation et maintenance de réseaux locaux',
      details: ['Réseaux WiFi', 'Réseaux câblés', 'Serveurs', 'Partage de fichiers']
    },
    {
      icon: HardDrive,
      title: 'Sauvegarde & Récupération',
      description: 'Protection et récupération de vos données précieuses',
      details: ['Sauvegarde automatique', 'Récupération de données', 'Migration système', 'Clonage disque']
    },
    {
      icon: Settings,
      title: 'Installation Logiciels',
      description: 'Installation et configuration de logiciels professionnels',
      details: ['Suite Office', 'Logiciels métiers', 'Antivirus', 'Mises à jour système']
    }
  ];

  const pricing = [
    { service: 'Diagnostic gratuit', price: 'Gratuit', duration: '30 min' },
    { service: 'Dépannage standard', price: '15 000 XAF', duration: '1-2h' },
    { service: 'Installation système', price: '20 000 XAF', duration: '2-3h' },
    { service: 'Configuration réseau', price: '25 000 XAF', duration: '2-4h' },
    { service: 'Contrat maintenance', price: 'Sur devis', duration: 'Mensuel' }
  ];

  const testimonials = [
    {
      name: 'Marie Dupont',
      role: 'Directrice PME',
      content: 'K-TECH a résolu nos problèmes réseau en moins de 24h. Service professionnel et rapide!',
      rating: 5
    },
    {
      name: 'Jean Mballa',
      role: 'Particulier',
      content: 'Mon PC était complètement planté, ils ont tout récupéré et réparé. Excellent travail!',
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Maintenance Informatique"
        description="Services de maintenance informatique à Douala: dépannage PC/Mac, configuration réseau, récupération de données. Intervention rapide, diagnostic gratuit."
        keywords={['maintenance informatique douala', 'dépannage pc cameroun', 'configuration réseau douala', 'récupération données']}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.slideInLeft}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Monitor className="w-8 h-8 text-primary-300" />
                  <span className="text-primary-300 font-medium">Maintenance Informatique</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Maintenance & Dépannage Informatique
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Solutions complètes pour vos problèmes informatiques. 
                  Intervention rapide, diagnostic gratuit, garantie 3 mois.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('Bonjour K-TECH! J\'ai besoin d\'une maintenance informatique.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Devis WhatsApp
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                    className="btn-outline text-white border-white hover:bg-white hover:text-primary-600"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Appel Urgent
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.slideInRight}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-6">💻</div>
                  <h3 className="text-2xl font-bold mb-4">Diagnostic Gratuit</h3>
                  <p className="text-gray-200 mb-6">
                    Évaluation complète de votre équipement sans engagement
                  </p>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                    Réponse sous 2h
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Services de Maintenance
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Tarification Transparente
            </motion.h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
                  <div className="bg-primary-600 text-white p-4 text-center font-bold">Service</div>
                  <div className="bg-primary-600 text-white p-4 text-center font-bold">Prix</div>
                  <div className="bg-primary-600 text-white p-4 text-center font-bold">Durée</div>
                </div>
                
                {pricing.map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200"
                  >
                    <div className="bg-white p-4 font-medium">{item.service}</div>
                    <div className="bg-white p-4 text-center font-bold text-primary-600">{item.price}</div>
                    <div className="bg-white p-4 text-center text-gray-600">{item.duration}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  * Tarifs indicatifs - Devis personnalisé après diagnostic
                </p>
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Garantie 3 mois sur toutes nos interventions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Notre Processus d'Intervention
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Contact', description: 'Vous nous contactez pour décrire le problème' },
                { step: 2, title: 'Diagnostic', description: 'Évaluation gratuite de votre équipement' },
                { step: 3, title: 'Devis', description: 'Proposition de solution avec prix fixe' },
                { step: 4, title: 'Réparation', description: 'Intervention avec garantie 3 mois' }
              ].map((process, index) => (
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
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                      {process.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white section-padding">
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

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre PC a un Problème ?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Ne laissez pas les problèmes techniques vous ralentir. 
                Contactez-nous maintenant pour un diagnostic gratuit !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('🖥️ PROBLÈME PC - J\'ai besoin d\'aide pour mon ordinateur')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Diagnostic WhatsApp
                </a>
                <a
                  href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                  className="btn-outline text-white border-white hover:bg-white hover:text-primary-600"
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

export default ComputerMaintenance;