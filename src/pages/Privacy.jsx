import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const Privacy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <SEO 
        title="Politique de Confidentialité - K-TECH MULTI SERVICES"
        description="Politique de confidentialité de K-TECH MULTI SERVICES. Découvrez comment nous protégeons vos données personnelles."
        keywords="confidentialité, protection données, K-TECH, Douala, Cameroun"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Politique de Confidentialité
              </h1>
              <p className="text-xl text-gray-600">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                K-TECH MULTI SERVICES ("nous", "notre", "nos") s'engage à protéger votre vie privée. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et 
                protégeons vos informations personnelles lorsque vous utilisez nos services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique 
                de confidentialité.
              </p>
            </motion.div>

            {/* Information Collection */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Informations que nous collectons
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Informations personnelles
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse e-mail</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse physique</li>
                    <li>Informations de paiement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Informations techniques
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Système d'exploitation</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* How we use information */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Comment nous utilisons vos informations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Services et support
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Fournir nos services techniques</li>
                    <li>Répondre à vos demandes</li>
                    <li>Améliorer nos services</li>
                    <li>Maintenance et réparations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Communication
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Confirmation de commandes</li>
                    <li>Mises à jour de services</li>
                    <li>Support client</li>
                    <li>Newsletters (avec consentement)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Information sharing */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Partage d'informations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. 
                Nous pouvons partager vos informations dans les cas suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter les obligations légales</li>
                <li>Avec nos partenaires de service (avec des garanties de protection)</li>
                <li>Pour protéger nos droits et notre sécurité</li>
              </ul>
            </motion.div>

            {/* Data security */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Sécurité des données
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Mesures de protection
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Chiffrement SSL/TLS</li>
                    <li>Accès restreint aux données</li>
                    <li>Surveillance de sécurité</li>
                    <li>Sauvegardes sécurisées</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Formation du personnel
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Politiques de confidentialité</li>
                    <li>Bonnes pratiques</li>
                    <li>Protection des données</li>
                    <li>Signalement d'incidents</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Your rights */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Vos droits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Accès et contrôle
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Accéder à vos données</li>
                    <li>Corriger les erreurs</li>
                    <li>Supprimer vos données</li>
                    <li>Limiter le traitement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Consentement
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Retirer le consentement</li>
                    <li>Objecter au traitement</li>
                    <li>Portabilité des données</li>
                    <li>Droit de plainte</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookies et technologies similaires
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous utilisons des cookies et des technologies similaires pour améliorer votre 
                expérience sur notre site web.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Cookies essentiels</h4>
                  <p className="text-sm text-blue-700">Fonctionnement du site</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Cookies analytiques</h4>
                  <p className="text-sm text-green-700">Statistiques d'utilisation</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Cookies marketing</h4>
                  <p className="text-sm text-purple-700">Publicités personnalisées</p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Nous contacter
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Pour toute question concernant cette politique de confidentialité ou pour 
                  exercer vos droits, contactez-nous :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email :</strong> privacy@ktech-cm.com
                  </p>
                  <p className="text-gray-700">
                    <strong>Téléphone :</strong> +237 XXX XXX XXX
                  </p>
                  <p className="text-gray-700">
                    <strong>Adresse :</strong> Douala, Cameroun
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Modifications de cette politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
                Nous vous informerons de tout changement important par email ou par un avis 
                sur notre site web. Nous vous encourageons à consulter régulièrement cette 
                politique pour rester informé de nos pratiques.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Privacy; 