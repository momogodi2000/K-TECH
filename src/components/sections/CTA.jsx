import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const CTA = () => {
  const benefits = [
    'Devis gratuit et sans engagement',
    'Intervention rapide sous 24h',
    'Garantie 3 mois sur nos services',
    'Support technique inclus'
  ];

  return (
    <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Résoudre Vos Problèmes Tech ?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Ne laissez plus les problèmes techniques ralentir votre quotidien ou votre entreprise. 
              Contactez K-TECH dès maintenant pour une solution rapide et efficace.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                className="btn-accent group"
              >
                Demander un Devis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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

          {/* Visual Element */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.slideInRight}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-4">
                  Intervention Express
                </h3>
                <p className="text-gray-200 mb-6">
                  Service d'urgence disponible 24h/24 pour vos besoins critiques
                </p>
                
                {/* Quick Contact */}
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm text-gray-200 mb-3">Contact direct WhatsApp:</p>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('🚨 URGENCE - J\'ai besoin d\'une intervention immédiate!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Urgence
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white font-bold">24h</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;