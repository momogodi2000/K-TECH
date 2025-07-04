import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield } from 'lucide-react';
import { ANIMATION_VARIANTS } from '@/utils/constants';

const Stats = () => {
  const stats = [
    {
      id: 1,
      icon: Users,
      number: '500+',
      label: 'Clients Satisfaits',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      icon: Award,
      number: '5+',
      label: 'Années d\'Expérience',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      id: 3,
      icon: Clock,
      number: '24/7',
      label: 'Support Disponible',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 4,
      icon: Shield,
      number: '100%',
      label: 'Satisfaction Garantie',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Résultats en Chiffres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La confiance de nos clients se mesure par nos performances
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
              >
                {stat.number}
              </motion.div>
              
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pourquoi Nous Faire Confiance ?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold text-gray-900 mb-2">Expertise Reconnue</h4>
                <p className="text-gray-600 text-sm">
                  Techniciens certifiés et formation continue
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-gray-900 mb-2">Intervention Rapide</h4>
                <p className="text-gray-600 text-sm">
                  Réponse sous 2h, intervention sous 24h
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-bold text-gray-900 mb-2">Garantie Totale</h4>
                <p className="text-gray-600 text-sm">
                  3 mois de garantie sur toutes nos interventions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;