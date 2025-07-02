import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Shield, Users, Zap, Clock, 
  CheckCircle, Star, Phone, Mail, MapPin 
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { COMPANY_INFO, ANIMATION_VARIANTS } from '@/utils/constants';

const About = () => {
  const achievements = [
    { number: '500+', label: 'Clients Satisfaits', icon: Users },
    { number: '5+', label: 'Années d\'Expérience', icon: Award },
    { number: '24/7', label: 'Support Disponible', icon: Clock },
    { number: '100%', label: 'Satisfaction Garantie', icon: Shield }
  ];

  const certifications = [
    'Technicien Certifié Microsoft',
    'Spécialiste Réparation Smartphones',
    'Expert en Systèmes de Surveillance',
    'Designer Graphique Professionnel'
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

  return (
    <>
      <SEO 
        title="À Propos"
        description="Découvrez K-TECH MULTI SERVICES, votre expert informatique à Douala. Thierry TANGUETSOP et son équipe vous accompagnent depuis plus de 5 ans."
        keywords={['à propos k-tech', 'thierry tanguetsop', 'expert informatique douala', 'histoire k-tech']}
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
                À Propos de <span className="text-accent-400">K-TECH</span>
              </motion.h1>
              <motion.p
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-xl md:text-2xl text-gray-200 mb-8"
              >
                Votre partenaire technologique de confiance depuis plus de 5 ans
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.slideInLeft}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Notre Histoire
                </h2>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Thierry TANGUETSOP
                    </h3>
                    <p className="text-gray-600">Fondateur & CEO</p>
                    <p className="text-sm text-gray-500 mt-2">Informaticien Certifié</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Réalisations
            </motion.h2>

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
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Nos Valeurs
            </motion.h2>

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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.slideInLeft}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Expertise & Certifications
                </h2>
                <p className="text-gray-600 mb-8">
                  Notre équipe maintient un niveau d'expertise élevé grâce à 
                  des formations continues et des certifications reconnues 
                  dans l'industrie technologique.
                </p>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={ANIMATION_VARIANTS.fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.slideInRight}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Zone d'Intervention
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Douala & Environs</p>
                      <p className="text-sm text-gray-600">Zone principale d'intervention</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Tout le Cameroun</p>
                      <p className="text-sm text-gray-600">Pour projets importants</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Support à Distance</p>
                      <p className="text-sm text-gray-600">Assistance technique 24/7</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Collaborer ?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet 
                et découvrir comment nous pouvons vous aider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                  className="btn-accent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appelez Maintenant
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="btn-outline text-white border-white hover:bg-white hover:text-primary-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyez un Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;