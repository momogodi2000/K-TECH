import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/utils/constants';

const ContactBar = () => {
  const handleCall = () => {
    window.location.href = `tel:${COMPANY_INFO.contact.phones[0].number}`;
  };

  const handleWhatsApp = () => {
    const phoneNumber = COMPANY_INFO.contact.whatsapp;
    const text = encodeURIComponent('Bonjour K-TECH! Je souhaite avoir plus d\'informations.');
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${text}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${COMPANY_INFO.contact.email}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
      <div className="grid grid-cols-4 h-16">
        {/* Call Button */}
        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
          aria-label="Appeler"
        >
          <Phone className="w-5 h-5 call-ring" />
          <span className="text-xs">Appeler</span>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs">WhatsApp</span>
        </button>

        {/* Email Button */}
        <button
          onClick={handleEmail}
          className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
          <span className="text-xs">Email</span>
        </button>

        {/* Location Button */}
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center space-y-1 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
          aria-label="Localisation"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-xs">Localisation</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactBar;