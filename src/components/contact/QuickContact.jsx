import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  Clock, 
  MapPin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO, WHATSAPP_MESSAGES } from '@/utils/constants';
import toast from 'react-hot-toast';

const QuickContact = ({ variant = 'default', className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState('phone');

  const contactMethods = [
    {
      id: 'phone',
      label: 'Téléphone',
      icon: Phone,
      color: 'bg-green-100 text-green-600',
      action: () => window.location.href = `tel:${COMPANY_INFO.contact.phones[0].number}`
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-100 text-green-600',
      action: () => {
        const message = encodeURIComponent(WHATSAPP_MESSAGES.general);
        window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${message}`, '_blank');
      }
    },
    {
      id: 'email',
      label: 'Email',
      icon: Mail,
      color: 'bg-blue-100 text-blue-600',
      action: () => window.location.href = `mailto:${COMPANY_INFO.contact.email}`
    }
  ];

  const services = [
    { value: '', label: 'Sélectionner un service' },
    { value: 'computer-maintenance', label: 'Maintenance Informatique' },
    { value: 'phone-repair', label: 'Réparation Smartphones' },
    { value: 'video-surveillance', label: 'Vidéosurveillance' },
    { value: 'graphic-design', label: 'Design Graphique' },
    { value: 'other', label: 'Autre' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track form submission
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          'event_category': 'engagement',
          'event_label': 'quick_contact_form'
        });
      }

      toast.success('Message envoyé avec succès ! Nous vous contacterons bientôt.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    default: 'bg-white shadow-card rounded-2xl p-6',
    compact: 'bg-gray-50 rounded-xl p-4',
    floating: 'bg-white shadow-xl rounded-2xl p-6 border border-gray-100'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Contact Rapide
        </h3>
        <p className="text-gray-600 text-sm">
          Choisissez votre méthode de contact préférée
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {contactMethods.map((method) => (
          <motion.button
            key={method.id}
            onClick={method.action}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex flex-col items-center space-y-2 p-3 rounded-lg transition-colors
              ${contactMethod === method.id 
                ? 'bg-primary-50 border-2 border-primary-200' 
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }
            `}
            onClick={() => setContactMethod(method.id)}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${method.color}`}>
              <method.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-gray-700">
              {method.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Quick Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Votre nom"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Votre téléphone"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service souhaité *
          </label>
          <select
            value={formData.service}
            onChange={(e) => handleInputChange('service', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Décrivez brièvement votre besoin..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Envoyer le message</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Contact Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Lun-Ven: 8h-18h, Sam: 9h-15h</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{COMPANY_INFO.location.fullAddress}</span>
          </div>
        </div>
      </div>

      {/* Success/Error Messages */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2 text-sm text-green-600">
          <CheckCircle className="w-4 h-4" />
          <span>Réponse garantie sous 24h</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-blue-600">
          <AlertCircle className="w-4 h-4" />
          <span>Devis gratuit et sans engagement</span>
        </div>
      </div>
    </div>
  );
};

export default QuickContact;
