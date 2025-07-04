import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';
import QuickContact from '@/components/contact/QuickContact';

const Contact = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Contactez-nous
          </motion.h2>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Une question, un projet ou besoin d'un devis ? Notre équipe est à votre écoute !
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <QuickContact variant="default" />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary-50 rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Coordonnées</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span>{COMPANY_INFO.contact.phones[0].formatted}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span>{COMPANY_INFO.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>{COMPANY_INFO.location.fullAddress}</span>
                </div>
              </div>
            </div>
            <div className="bg-secondary-50 rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Horaires</h3>
              <div className="text-gray-700 space-y-2">
                <div>Lundi - Vendredi: 8h - 18h</div>
                <div>Samedi: 9h - 15h</div>
                <div>Dimanche: Urgences uniquement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
