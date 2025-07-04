import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, Shield, Users, Zap, Clock, 
  CheckCircle, Star, Phone, Mail, MapPin,
  ArrowRight, TrendingUp, Heart, Target
} from 'lucide-react';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const About = () => {
  const achievements = [
    { number: '500+', label: 'Clients Satisfaits', icon: Users },
    { number: '5+', label: 'Années d\'Expérience', icon: Award },
    { number: '24/7', label: 'Support Disponible', icon: Clock },
    { number: '100%', label: 'Satisfaction Garantie', icon: Shield }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Rapidité',
      description: 'Intervention rapide et efficace pour minimiser vos temps d\'arrêt'
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Solutions durables avec garantie et support technique continu'
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Service personnalisé et relation de confiance avec nos clients'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Expertise technique et qualité de service reconnues'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Fondation', description: 'Création de K-TECH MULTI SERVICES' },
    { year: '2020', title: 'Expansion', description: 'Ouverture du service réparation smartphones' },
    { year: '2021', title: 'Innovation', description: 'Lancement des systèmes de vidéosurveillance' },
    { year: '2022', title: 'Certification', description: 'Obtention des certifications Microsoft' },
    { year: '2023', title: 'Croissance', description: 'Plus de 500 clients satisfaits' },
    { year: '2024', title: 'Avenir', description: 'Expansion vers de nouveaux marchés' }
  ];

  return (
    <section className="section-padding bg-gray-50">
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
            À Propos de <span className="text-primary-600">K-TECH</span>
          </motion.h2>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Votre partenaire technologique de confiance depuis plus de 5 ans. 
            Nous combinons expertise technique et service client d'excellence.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.slideInLeft}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                K-TECH MULTI SERVICES a été fondée par <strong>Thierry TANGUETSOP</strong>, 
                informaticien passionné et certifié, avec une vision claire : 
                démocratiser l'accès aux services technologiques de qualité au Cameroun.
              </p>
              <p>
                Depuis nos débuts à Douala-Bepanda, nous avons accompagné des centaines 
                d'entreprises et de particuliers dans leur transformation numérique, 
                en proposant des solutions adaptées aux réalités locales.
              </p>
              <p>
                Notre approche combine expertise technique internationale et 
                compréhension approfondie du marché camerounais, nous permettant 
                d'offrir des services personnalisés et accessibles.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.slideInRight}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 mx-auto">
                  TT
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Thierry TANGUETSOP
                </h4>
                <p className="text-gray-600">Fondateur & CEO</p>
                <p className="text-sm text-gray-500 mt-2">Informaticien Certifié</p>
                
                {/* Contact Info */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{COMPANY_INFO.contact.phones[0].formatted}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{COMPANY_INFO.contact.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{COMPANY_INFO.location.fullAddress}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Réalisations
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Notre Parcours
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-card">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {milestone.year}
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {milestone.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {milestone.description}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Travailler Ensemble ?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Découvrez comment K-TECH peut transformer votre expérience technologique 
              et vous accompagner vers le succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-accent group"
              >
                Nous Contacter
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="btn-outline-white"
              >
                Nos Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
