import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, Clock, CheckCircle, Phone, MessageCircle,
  Monitor, Smartphone, Camera, Palette, Upload,
  User, Mail, MapPin, FileText, ArrowRight
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { COMPANY_INFO, SERVICES, ANIMATION_VARIANTS } from '@/utils/constants';

const Quote = () => {
  const [selectedService, setSelectedService] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    location: '',
    description: '',
    urgency: 'normal',
    budget: '',
    files: []
  });

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgent (24h)', color: 'red', extra: '+20%' },
    { value: 'normal', label: 'Normal (2-3 jours)', color: 'blue', extra: '' },
    { value: 'flexible', label: 'Flexible (1 semaine)', color: 'green', extra: '-10%' }
  ];

  const serviceIcons = {
    'computer-maintenance': Monitor,
    'phone-repair': Smartphone,
    'video-surveillance': Camera,
    'graphic-design': Palette
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setFormData({ ...formData, service: serviceId });
    setStep(2);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setFormData({ ...formData, files: [...formData.files, ...files] });
  };

  const generateQuote = () => {
    const service = SERVICES.find(s => s.id === formData.service);
    const basePrice = service?.pricing?.min || 10000;
    const urgencyMultiplier = formData.urgency === 'urgent' ? 1.2 : 
                            formData.urgency === 'flexible' ? 0.9 : 1;
    
    return Math.round(basePrice * urgencyMultiplier);
  };

  const sendQuoteRequest = () => {
    const service = SERVICES.find(s => s.id === formData.service);
    const estimatedPrice = generateQuote();
    
    const message = `
🔧 DEMANDE DE DEVIS K-TECH

👨‍💼 Client: ${formData.name}
📱 Téléphone: ${formData.phone}
📧 Email: ${formData.email}
📍 Localisation: ${formData.location}

🛠️ Service: ${service?.title}
⚡ Urgence: ${urgencyOptions.find(u => u.value === formData.urgency)?.label}
💰 Budget indicatif: ${formData.budget ? formData.budget + ' XAF' : 'Non spécifié'}

📝 Description:
${formData.description}

💵 Estimation: ${estimatedPrice.toLocaleString()} XAF

Merci de me confirmer ce devis et la disponibilité.
    `.trim();

    const phoneNumber = COMPANY_INFO.contact.whatsapp;
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <SEO 
        title="Demande de Devis"
        description="Obtenez un devis gratuit et personnalisé pour vos besoins informatiques. Devis en ligne rapide pour maintenance PC, réparation smartphone, vidéosurveillance."
        keywords={['devis informatique douala', 'devis réparation smartphone', 'devis vidéosurveillance', 'prix maintenance pc']}
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
                Demande de Devis
              </motion.h1>
              <motion.p
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-xl text-gray-200 mb-8"
              >
                Obtenez un devis personnalisé en quelques minutes
              </motion.p>
              
              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="flex flex-wrap justify-center gap-6"
              >
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Devis Gratuit</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Réponse Rapide</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Calculator className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">Prix Transparent</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="bg-white py-6 border-b">
          <div className="container-custom">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNumber 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-primary-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Étape {step} sur 3 - {
                  step === 1 ? 'Choisissez votre service' :
                  step === 2 ? 'Détails du projet' :
                  'Récapitulatif et envoi'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <section className="section-padding">
            <div className="container-custom">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-3xl font-bold text-center text-gray-900 mb-12"
              >
                Sélectionnez votre service
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service, index) => {
                  const ServiceIcon = serviceIcons[service.id];
                  return (
                    <motion.div
                      key={service.id}
                      initial="hidden"
                      animate="visible"
                      variants={ANIMATION_VARIANTS.fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all cursor-pointer border-2 border-transparent hover:border-primary-500"
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                        service.color === 'primary' ? 'bg-primary-100' :
                        service.color === 'secondary' ? 'bg-secondary-100' :
                        service.color === 'accent' ? 'bg-accent-100' : 'bg-yellow-100'
                      }`}>
                        <ServiceIcon className={`w-6 h-6 ${
                          service.color === 'primary' ? 'text-primary-600' :
                          service.color === 'secondary' ? 'text-secondary-600' :
                          service.color === 'accent' ? 'text-accent-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {service.description}
                      </p>
                      
                      {service.pricing && (
                        <div className="text-sm text-primary-600 font-medium">
                          À partir de {service.pricing.min?.toLocaleString()} XAF
                        </div>
                      )}
                      
                      <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                        <span>Choisir ce service</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Step 2: Project Details */}
        {step === 2 && (
          <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-3xl font-bold text-center text-gray-900 mb-12"
              >
                Détails de votre projet
              </motion.h2>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="bg-white p-8 rounded-xl shadow-card"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Informations personnelles
                    </h3>
                    
                    <div>
                      <label className="form-label">
                        <User className="w-4 h-4 inline mr-2" />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Votre nom complet"
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+237 6XX XXX XXX"
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="form-label">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Localisation *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="Quartier, ville"
                        required
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Détails du projet
                    </h3>

                    <div>
                      <label className="form-label">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Urgence *
                      </label>
                      <div className="space-y-3">
                        {urgencyOptions.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              type="radio"
                              id={option.value}
                              name="urgency"
                              value={option.value}
                              checked={formData.urgency === option.value}
                              onChange={(e) => handleInputChange('urgency', e.target.value)}
                              className="mr-3"
                            />
                            <label htmlFor={option.value} className="flex-1">
                              <span className="font-medium">{option.label}</span>
                              {option.extra && (
                                <span className={`ml-2 text-sm ${
                                  option.color === 'red' ? 'text-red-600' : 
                                  option.color === 'green' ? 'text-green-600' : 'text-blue-600'
                                }`}>
                                  {option.extra}
                                </span>
                              )}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="form-label">
                        <Calculator className="w-4 h-4 inline mr-2" />
                        Budget approximatif (XAF)
                      </label>
                      <select
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        <option value="< 25000">Moins de 25 000 XAF</option>
                        <option value="25000-50000">25 000 - 50 000 XAF</option>
                        <option value="50000-100000">50 000 - 100 000 XAF</option>
                        <option value="100000-200000">100 000 - 200 000 XAF</option>
                        <option value="> 200000">Plus de 200 000 XAF</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">
                        <Upload className="w-4 h-4 inline mr-2" />
                        Photos/Documents
                      </label>
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf,.doc,.docx"
                        className="form-input"
                        onChange={handleFileUpload}
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Images, PDF, Word (max 5MB par fichier)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="form-label">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Description détaillée *
                  </label>
                  <textarea
                    className="form-textarea"
                    rows="4"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Décrivez votre problème ou besoin en détail..."
                    required
                  />
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="btn-ghost"
                  >
                    Retour
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-primary"
                    disabled={!formData.name || !formData.phone || !formData.location || !formData.description}
                  >
                    Continuer
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Step 3: Summary and Send */}
        {step === 3 && (
          <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="text-3xl font-bold text-center text-gray-900 mb-12"
              >
                Récapitulatif de votre demande
              </motion.h2>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={ANIMATION_VARIANTS.fadeInUp}
                className="bg-white p-8 rounded-xl shadow-card"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Informations client
                    </h3>
                    <div className="space-y-3">
                      <p><strong>Nom:</strong> {formData.name}</p>
                      <p><strong>Téléphone:</strong> {formData.phone}</p>
                      {formData.email && <p><strong>Email:</strong> {formData.email}</p>}
                      <p><strong>Localisation:</strong> {formData.location}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Détails du projet
                    </h3>
                    <div className="space-y-3">
                      <p><strong>Service:</strong> {SERVICES.find(s => s.id === formData.service)?.title}</p>
                      <p><strong>Urgence:</strong> {urgencyOptions.find(u => u.value === formData.urgency)?.label}</p>
                      {formData.budget && <p><strong>Budget:</strong> {formData.budget} XAF</p>}
                      <p><strong>Fichiers:</strong> {formData.files.length} fichier(s)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-2">Description:</h4>
                  <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                    {formData.description}
                  </p>
                </div>

                {/* Price Estimation */}
                <div className="mt-8 bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary-900 mb-4">
                    Estimation de prix
                  </h4>
                  <div className="text-3xl font-bold text-primary-600">
                    {generateQuote().toLocaleString()} XAF
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    * Prix indicatif, le devis final sera établi après évaluation complète
                  </p>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-ghost"
                  >
                    Modifier
                  </button>
                  <div className="space-x-4">
                    <button
                      onClick={sendQuoteRequest}
                      className="btn-primary"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Envoyer via WhatsApp
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                      className="btn-accent"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler directement
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section className="bg-primary-900 text-white section-padding">
          <div className="container-custom text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-3xl font-bold mb-12"
            >
              Pourquoi choisir K-TECH ?
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Devis Gratuit</h3>
                <p className="text-gray-300">
                  Évaluation complète et devis détaillé sans engagement
                </p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Réponse Rapide</h3>
                <p className="text-gray-300">
                  Réponse garantie sous 2h pendant les heures ouvrables
                </p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <Calculator className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Prix Transparent</h3>
                <p className="text-gray-300">
                  Tarification claire sans coûts cachés
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Quote;