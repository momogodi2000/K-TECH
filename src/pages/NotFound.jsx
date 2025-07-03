import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, Phone, MessageCircle, Search, 
  ArrowLeft, Tool, Smartphone, Monitor 
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const NotFound = () => {
  const quickLinks = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Tool },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Devis', href: '/quote', icon: MessageCircle }
  ];

  const popularServices = [
    { name: 'Réparation Smartphone', href: '/services/phone-repair', icon: Smartphone },
    { name: 'Maintenance PC', href: '/services/computer-maintenance', icon: Monitor },
    { name: 'Vidéosurveillance', href: '/services/video-surveillance', icon: Tool }
  ];

  return (
    <>
      <SEO 
        title="Page non trouvée - 404"
        description="La page que vous recherchez n'existe pas. Retrouvez tous nos services informatiques sur K-TECH MULTI SERVICES."
        noindex={true}
      />

      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.staggerContainer}
              className="mb-12"
            >
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="relative"
              >
                <h1 className="text-9xl md:text-[12rem] font-bold text-primary-100 select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="text-6xl"
                  >
                    🔧
                  </motion.div>
                </div>
              </motion.div>

              <motion.h2
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Oops! Page introuvable
              </motion.h2>

              <motion.p
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                La page que vous recherchez n'existe pas ou a été déplacée. 
                Mais ne vous inquiétez pas, notre équipe technique est là pour vous aider !
              </motion.p>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="mb-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={ANIMATION_VARIANTS.fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="block bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all group"
                    >
                      <link.icon className="w-8 h-8 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-900 font-medium">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Popular Services */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="bg-white p-8 rounded-xl shadow-card mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Services les plus populaires
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {popularServices.map((service, index) => (
                  <motion.div
                    key={service.href}
                    variants={ANIMATION_VARIANTS.fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={service.href}
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                    >
                      <service.icon className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-gray-900">{service.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">
                Besoin d'aide immédiate ?
              </h3>
              <p className="text-gray-200 mb-6">
                Notre équipe est disponible pour vous assister et répondre à toutes vos questions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('Bonjour K-TECH! Je ne trouve pas ce que je cherche sur votre site, pouvez-vous m\'aider?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Support
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

            {/* Search Suggestion */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="mt-12"
            >
              <div className="bg-gray-100 p-6 rounded-xl">
                <Search className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Vous cherchiez quelque chose de spécifique ?
                </h4>
                <p className="text-gray-600 mb-4">
                  Essayez de naviguer depuis la page d'accueil ou contactez-nous directement
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;