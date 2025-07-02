import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Send, CheckCircle, AlertCircle, Facebook,
  Star, Shield, Zap
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import ContactForm from '@/components/contact/ContactForm';
import WhatsAppButton from '@/components/contact/WhatsAppButton';
import { COMPANY_INFO, ANIMATION_VARIANTS, WHATSAPP_MESSAGES } from '@/utils/constants';

const Contact = () => {
  const [selectedContact, setSelectedContact] = useState('whatsapp');

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      primary: true,
      description: 'Réponse immédiate garantie',
      action: () => {
        const phoneNumber = COMPANY_INFO.contact.whatsapp;
        const text = encodeURIComponent(WHATSAPP_MESSAGES.general);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        const whatsappUrl = isMobile
          ? `whatsapp://send?phone=${phoneNumber}&text=${text}`
          : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
        
        window.open(whatsappUrl, '_blank');
      },
      available: true,
      color: 'green'
    },
    {
      id: 'phone',
      name: 'Téléphone',
      icon: Phone,
      primary: true,
      description: 'Appel direct immédiat',
      action: () => window.location.href = `tel:${COMPANY_INFO.contact.phones[0].number}`,
      available: true,
      color: 'blue'
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      primary: false,
      description: 'Réponse sous 24h',
      action: () => window.location.href = `mailto:${COMPANY_INFO.contact.email}`,
      available: true,
      color: 'red'
    }
  ];

  const businessHours = [
    { day: 'Lundi - Vendredi', hours: `${COMPANY_INFO.hours.weekdays.open} - ${COMPANY_INFO.hours.weekdays.close}` },
    { day: 'Samedi', hours: `${COMPANY_INFO.hours.saturday.open} - ${COMPANY_INFO.hours.saturday.close}` },
    { day: 'Dimanche', hours: COMPANY_INFO.hours.sunday.open }
  ];

  const features = [
    { icon: Zap, text: 'Réponse Rapide', color: 'text-yellow-500' },
    { icon: Shield, text: 'Devis Gratuit', color: 'text-green-500' },
    { icon: Star, text: 'Service Premium', color: 'text-blue-500' }
  ];

  const quickServices = [
    'Maintenance PC urgent',
    'Réparation smartphone',
    'Installation surveillance',
    'Support technique',
    'Devis personnalisé'
  ];

  return (
    <>
      <SEO 
        title="Contact"
        description="Contactez K-TECH MULTI SERVICES à Douala. Téléphone: +237 673 164 426, WhatsApp disponible, devis gratuit. Intervention rapide en informatique."
        keywords={['contact k-tech', 'téléphone k-tech douala', 'whatsapp k-tech', 'adresse k-tech bepanda']}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-600 text-white py-16">
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
                Contactez-Nous
              </motion.h1>
              <motion.p
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-xl text-gray-200 mb-8"
              >
                Besoin d'aide ? Notre équipe est là pour vous accompagner
              </motion.p>
              
              {/* Features */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="flex flex-wrap justify-center gap-6"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Choisissez Votre Mode de Contact
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all cursor-pointer ${
                    method.primary ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={method.action}
                >
                  {method.primary && (
                    <div className="absolute -top-3 left-6 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Recommandé
                    </div>
                  )}
                  
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    method.color === 'green' ? 'bg-green-100' :
                    method.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'
                  }`}>
                    <method.icon className={`w-6 h-6 ${
                      method.color === 'green' ? 'text-green-600' :
                      method.color === 'blue' ? 'text-blue-600' : 'text-red-600'
                    }`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-4 py-2 rounded-lg text-white ${
                    method.color === 'green' ? 'bg-green-500 hover:bg-green-600' :
                    method.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'
                  } transition-colors`}>
                    <span className="text-sm font-medium">
                      {method.id === 'whatsapp' ? 'Chatter' :
                       method.id === 'phone' ? 'Appeler' : 'Écrire'}
                    </span>
                  </div>

                  {method.available && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.slideInLeft}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Informations de Contact
                </h3>

                {/* Phone Numbers */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Téléphones</h4>
                      {COMPANY_INFO.contact.phones.map((phone, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-1">
                          <a
                            href={`tel:${phone.number}`}
                            className="text-primary-600 hover:text-primary-700 font-medium"
                          >
                            {phone.formatted}
                          </a>
                          {phone.primary && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Principal
                            </span>
                          )}
                          {phone.whatsapp && (
                            <MessageCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Email</h4>
                      <a
                        href={`mailto:${COMPANY_INFO.contact.email}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Adresse</h4>
                      <p className="text-gray-600">
                        {COMPANY_INFO.location.fullAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <h4 className="font-medium text-gray-900">Horaires d'Ouverture</h4>
                  </div>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-accent-50 rounded-lg">
                    <p className="text-sm text-accent-800 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Service d'urgence disponible 24/7
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.slideInRight}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Envoyez-nous un Message
                </h3>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Services */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Services les Plus Demandés
              </h3>
              <p className="text-gray-600">
                Besoin d'aide rapidement ? Voici nos services les plus populaires
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
                  onClick={() => {
                    const phoneNumber = COMPANY_INFO.contact.whatsapp;
                    const text = encodeURIComponent(`Bonjour K-TECH, je souhaiterais obtenir des informations sur: ${service}`);
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    
                    const whatsappUrl = isMobile
                      ? `whatsapp://send?phone=${phoneNumber}&text=${text}`
                      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
                    
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{service}</span>
                    <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Cliquez pour une consultation rapide
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-900 text-white section-padding">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-bold mb-6">
                Prêt à Démarrer Votre Projet ?
              </h3>
              <p className="text-xl text-gray-200 mb-8">
                Contactez-nous dès maintenant pour un devis gratuit et personnalisé
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const phoneNumber = COMPANY_INFO.contact.whatsapp;
                    const text = encodeURIComponent(WHATSAPP_MESSAGES.quote || 'Bonjour, je souhaiterais obtenir un devis gratuit.');
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    
                    const whatsappUrl = isMobile
                      ? `whatsapp://send?phone=${phoneNumber}&text=${text}`
                      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
                    
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Maintenant</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = `tel:${COMPANY_INFO.contact.phones[0].number}`}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appeler Directement</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Contact;