import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, Smartphone, Camera, Palette, 
  ArrowRight, CheckCircle, Clock, Shield,
  Zap, Users, Star
} from 'lucide-react';
import { SERVICES, ANIMATION_VARIANTS } from '@/utils/constants';
import Scene3D from '@/components/3d/Scene3D';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const serviceIcons = {
    'computer-maintenance': Monitor,
    'phone-repair': Smartphone,
    'video-surveillance': Camera,
    'graphic-design': Palette
  };

  const serviceModels = {
    'computer-maintenance': 'computer',
    'phone-repair': 'phone',
    'video-surveillance': 'camera',
    'graphic-design': 'tech'
  };

  const features = [
    { icon: Zap, text: 'Service Rapide', color: 'text-yellow-500' },
    { icon: Shield, text: 'Garantie 3 Mois', color: 'text-green-500' },
    { icon: Users, text: 'Expert Certifié', color: 'text-blue-500' },
    { icon: Star, text: 'Satisfaction Garantie', color: 'text-purple-500' }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
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
            Nos Services Professionnels
          </motion.h2>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Solutions technologiques complètes adaptées à vos besoins. 
            Expertise certifiée et service de qualité garantie.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="flex flex-wrap justify-center gap-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const IconComponent = serviceIcons[service.id];
            
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeInUp}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative"
              >
                <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="grid lg:grid-cols-2 gap-6 p-8">
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">À partir de</span>
                            <div className="text-2xl font-bold text-primary-600">
                              {service.pricing.min?.toLocaleString()} XAF
                            </div>
                          </div>
                          <Link
                            to={`/services/${service.id}`}
                            className="btn-primary group"
                          >
                            En savoir plus
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* 3D Model */}
                    <div className="relative h-64 lg:h-full min-h-[200px]">
                      <div className="absolute inset-0 bg-gradient-radial-light rounded-xl" />
                      <Scene3D 
                        modelType={serviceModels[service.id]} 
                        autoRotate={hoveredService === service.id}
                        enableZoom={false}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'un Devis Personnalisé ?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour une évaluation gratuite de vos besoins et recevez un devis détaillé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="btn-accent group"
              >
                Demander un Devis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline-white"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
