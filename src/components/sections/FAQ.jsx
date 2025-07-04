import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ANIMATION_VARIANTS } from '@/utils/constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Quels sont vos horaires d\'ouverture ?',
      answer: 'Nous sommes ouverts du lundi au vendredi de 8h à 18h, le samedi de 9h à 15h. Pour les urgences, nous intervenons 7j/7 sur appel.'
    },
    {
      question: 'Proposez-vous une garantie sur vos services ?',
      answer: 'Oui, tous nos services bénéficient d\'une garantie de 3 mois minimum. Pour les réparations smartphones, nous offrons également une garantie pièces et main d\'œuvre.'
    },
    {
      question: 'Combien de temps faut-il pour réparer un smartphone ?',
      answer: 'La plupart des réparations sont effectuées en 1-2 heures. Pour les cas plus complexes, nous vous donnons un délai précis lors du diagnostic.'
    },
    {
      question: 'Intervenez-vous à domicile ?',
      answer: 'Oui, nous proposons des interventions à domicile et en entreprise pour la maintenance informatique et l\'installation de systèmes de vidéosurveillance.'
    },
    {
      question: 'Acceptez-vous tous les types de smartphones ?',
      answer: 'Nous réparons toutes les marques : iPhone, Samsung, Huawei, Xiaomi, Oppo, Tecno, Infinix et bien d\'autres. Nous avons les pièces pour la plupart des modèles.'
    },
    {
      question: 'Comment obtenir un devis gratuit ?',
      answer: 'Vous pouvez nous contacter par téléphone, WhatsApp ou via notre formulaire de contact. Nous vous proposons une évaluation gratuite de vos besoins.'
    },
    {
      question: 'Proposez-vous des contrats de maintenance ?',
      answer: 'Oui, nous proposons des contrats de maintenance annuels pour les entreprises, incluant visites préventives, support technique et interventions prioritaires.'
    },
    {
      question: 'Quels sont vos délais pour la création graphique ?',
      answer: 'Les délais varient selon la complexité du projet : 24-48h pour les cartes de visite, 2-3 jours pour les logos, 1 semaine pour les projets plus complexes.'
    },
    {
      question: 'Les systèmes de vidéosurveillance fonctionnent-ils sans internet ?',
      answer: 'Oui, nous proposons des systèmes qui fonctionnent en local sans internet. Pour l\'accès à distance, une connexion internet est nécessaire.'
    },
    {
      question: 'Proposez-vous du support technique à distance ?',
      answer: 'Oui, nous offrons un support technique à distance pour la résolution de problèmes informatiques. Nous utilisons des outils sécurisés pour l\'accès distant.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6"
          >
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </motion.div>
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Questions Fréquentes
          </motion.h2>
          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Trouvez rapidement les réponses à vos questions sur nos services 
            et notre fonctionnement.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      id={`faq-answer-${index}`}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Notre équipe est là pour vous aider. Contactez-nous directement 
              et nous vous répondrons dans les plus brefs délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${import.meta.env.VITE_PHONE || '+237673164426'}`}
                className="btn-accent group"
              >
                Appeler Maintenant
              </a>
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP || '237673164426'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
