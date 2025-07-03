import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Monitor, Smartphone, Camera, Palette, 
  ArrowRight, CheckCircle, Clock, Shield, 
  Star, Phone, MessageCircle
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { SERVICES, COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const ServicesIndex = () => {
  const serviceIcons = {
    'computer-maintenance': Monitor,
    'phone-repair': Smartphone,
    'video-surveillance': Camera,
    'graphic-design': Palette
  };

  const features = [
    { icon: Clock, text: 'Intervention Rapide', color: 'text-blue-500' },
    { icon: Shield, text: 'Garantie 3 Mois', color: 'text-green-500' },
    { icon: Star, text: 'Expertise Certifiée', color: 'text-yellow-500' },
    { icon: CheckCircle, text: 'Satisfaction Garantie', color: 'text-purple-500' }
  ];

  const stats = [
    { number: '500+', label: 'Clients Satisfaits' },
    { number: '5+', label: 'Années d\'Expérience' },
    { number: '24/7', label: 'Support Disponible' },
    { number: '100%', label: 'Taux de Satisfaction' }
  ];

  return (
    <>
      <SEO 
        title="Nos Services"
        description="Découvrez tous les services informatiques de K-TECH MULTI SERVICES à Douala: maintenance PC, réparation smartphones, vidéosurveillance, infographie."
        keywords={['services informatiques douala', 'maintenance pc cameroun', 'réparation smartphone douala', 'vidéosurveillance bepanda']}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-600 text-white py-20">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Nos Services Professionnels
              </motion.h1>
              <motion.p
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-xl text-gray-200 mb-8"
              >
                Solutions technologiques complètes pour particuliers et entreprises
              </motion.p>
              
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 px-4 py-3 rounded-lg">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nos Domaines d'Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De la maintenance informatique à la création graphique, 
                nous couvrons tous vos besoins technologiques avec professionnalisme
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {SERVICES.map((service, index) => {
                const ServiceIcon = serviceIcons[service.id];
                return (
                  <motion.div
                    key={service.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeInUp}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all group overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                          service.color === 'primary' ? 'bg-primary-100' :
                          service.color === 'secondary' ? 'bg-secondary-100' :
                          service.color === 'accent' ? 'bg-accent-100' : 'bg-yellow-100'
                        }`}>
                          <ServiceIcon className={`w-8 h-8 ${
                            service.color === 'primary' ? 'text-primary-600' :
                            service.color === 'secondary' ? 'text-secondary-600' :
                            service.color === 'accent' ? 'text-accent-600' : 'text-yellow-600'
                          }`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {service.description}
                          </p>

                          {/* Features List */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Pricing */}
                          {service.pricing && (
                            <div className="mb-6">
                              <div className="text-sm text-gray-500 mb-1">À partir de</div>
                              <div className="text-2xl font-bold text-primary-600">
                                {service.pricing.min?.toLocaleString()} XAF
                              </div>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                              to={`/services/${service.id}`}
                              className="btn-primary flex-1 text-center"
                            >
                              Voir Détails
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <a
                              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(`Bonjour K-TECH! Je souhaite avoir plus d'informations sur: ${service.title}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline text-center"
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Devis Rapide
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Image/Pattern */}
                    <div className={`h-2 ${
                      service.color === 'primary' ? 'bg-gradient-to-r from-primary-500 to-primary-600' :
                      service.color === 'secondary' ? 'bg-gradient-to-r from-secondary-500 to-secondary-600' :
                      service.color === 'accent' ? 'bg-gradient-to-r from-accent-500 to-accent-600' : 
                      'bg-gradient-to-r from-yellow-500 to-yellow-600'
                    }`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Performances
            </motion.h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Méthode de Travail
              </h2>
              <p className="text-xl text-gray-600">
                Un processus éprouvé pour garantir votre satisfaction
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Contact', description: 'Vous nous contactez via WhatsApp, téléphone ou notre site' },
                { step: '02', title: 'Diagnostic', description: 'Évaluation gratuite de vos besoins et diagnostic complet' },
                { step: '03', title: 'Devis', description: 'Devis détaillé et transparent sans engagement' },
                { step: '04', title: 'Intervention', description: 'Réalisation du service avec suivi et garantie' }
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Commencer ?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour discuter de vos besoins 
                et obtenir un devis personnalisé gratuit
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quote"
                  className="btn-accent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Demander un Devis
                </Link>
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

export default ServicesIndex;