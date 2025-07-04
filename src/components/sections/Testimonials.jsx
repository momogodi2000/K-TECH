import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Quote, ChevronLeft, ChevronRight, 
  User, Building, Smartphone, Monitor
} from 'lucide-react';
import { ANIMATION_VARIANTS } from '@/utils/constants';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Marie Nguemo',
      role: 'Gérante, Boutique Fashion',
      avatar: 'MN',
      rating: 5,
      content: 'K-TECH a sauvé mon ordinateur en urgence. Service rapide et professionnel. Je recommande vivement !',
      service: 'Maintenance Informatique',
      serviceIcon: Monitor,
      date: 'Il y a 2 semaines'
    },
    {
      id: 2,
      name: 'Jean-Pierre Mbarga',
      role: 'Entrepreneur',
      avatar: 'JM',
      rating: 5,
      content: 'Réparation de mon iPhone en moins d\'une heure. Prix correct et garantie incluse. Très satisfait !',
      service: 'Réparation Smartphone',
      serviceIcon: Smartphone,
      date: 'Il y a 1 mois'
    },
    {
      id: 3,
      name: 'Sarah Etoa',
      role: 'Propriétaire, Résidence Etoa',
      avatar: 'SE',
      rating: 5,
      content: 'Installation de caméras de surveillance impeccable. Système fonctionne parfaitement. Merci K-TECH !',
      service: 'Vidéosurveillance',
      serviceIcon: Monitor,
      date: 'Il y a 3 semaines'
    },
    {
      id: 4,
      name: 'David Kamga',
      role: 'Directeur Marketing',
      avatar: 'DK',
      rating: 5,
      content: 'Design de notre logo et cartes de visite magnifique. Créativité et professionnalisme au rendez-vous.',
      service: 'Design Graphique',
      serviceIcon: Building,
      date: 'Il y a 2 mois'
    },
    {
      id: 5,
      name: 'Fatou Diallo',
      role: 'Étudiante',
      avatar: 'FD',
      rating: 5,
      content: 'Configuration de mon réseau WiFi à la maison. Service impeccable et explications claires.',
      service: 'Maintenance Réseau',
      serviceIcon: Monitor,
      date: 'Il y a 1 semaine'
    },
    {
      id: 6,
      name: 'Pierre Abega',
      role: 'Chef d\'Entreprise',
      avatar: 'PA',
      rating: 5,
      content: 'Support technique à distance excellent. Problème résolu rapidement. Équipe très compétente.',
      service: 'Support Technique',
      serviceIcon: Monitor,
      date: 'Il y a 5 jours'
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
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
            Ce que disent nos clients
          </motion.h2>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez les témoignages de nos clients satisfaits qui nous font confiance 
            pour leurs besoins technologiques.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ 
                  opacity: 0, 
                  x: direction > 0 ? 300 : -300 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction > 0 ? -300 : 300 
                }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="bg-white rounded-2xl shadow-card p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-primary-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {currentTestimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {currentTestimonial.role}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <currentTestimonial.serviceIcon className="w-4 h-4" />
                      <span>{currentTestimonial.service}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {currentTestimonial.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-primary-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Note Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Taux de Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
            <div className="text-sm text-gray-600">Temps de Réponse</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
