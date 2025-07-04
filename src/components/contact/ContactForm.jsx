import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, WHATSAPP_MESSAGES } from '@/utils/constants';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Maintenance Informatique',
    'Réparation Smartphone',
    'Vidéosurveillance',
    'Infographie & Design',
    'Autre'
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Create WhatsApp message
      const message = `
🔧 NOUVEAU CONTACT K-TECH

👤 Nom: ${formData.name}
📧 Email: ${formData.email}
📱 Téléphone: ${formData.phone}
🛠️ Service: ${formData.service}

💬 Message:
${formData.message}

---
Envoyé depuis le site web K-TECH
      `.trim();

      const phoneNumber = COMPANY_INFO.contact.whatsapp;
      const encodedMessage = encodeURIComponent(message);
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      const whatsappUrl = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="form-label">
            <User className="w-4 h-4 inline mr-2" />
            Nom complet *
          </label>
          <input
            type="text"
            required
            className="form-input"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Votre nom complet"
          />
        </div>

        {/* Email */}
        <div>
          <label className="form-label">
            <Mail className="w-4 h-4 inline mr-2" />
            Email *
          </label>
          <input
            type="email"
            required
            className="form-input"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="votre@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="form-label">
            <Phone className="w-4 h-4 inline mr-2" />
            Téléphone *
          </label>
          <input
            type="tel"
            required
            className="form-input"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+237 6XX XXX XXX"
          />
        </div>

        {/* Service */}
        <div>
          <label className="form-label">
            Service souhaité
          </label>
          <select
            className="form-select"
            value={formData.service}
            onChange={(e) => handleInputChange('service', e.target.value)}
          >
            <option value="">Sélectionnez un service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="form-label">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Message *
          </label>
          <textarea
            required
            rows="4"
            className="form-textarea"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Décrivez votre besoin ou problème..."
          />
        </div>

        {/* Submit Status */}
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg flex items-center space-x-2 ${
              submitStatus === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600" />
            )}
            <span>
              {submitStatus === 'success' 
                ? 'Message envoyé avec succès! Nous vous contacterons bientôt.' 
                : 'Erreur lors de l\'envoi. Veuillez réessayer ou nous appeler directement.'
              }
            </span>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Envoi en cours...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Envoyer le Message</span>
            </div>
          )}
        </button>

        {/* Alternative Contact Info */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-3">
            Vous préférez nous contacter directement ?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {COMPANY_INFO.contact.phones[0].formatted}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;