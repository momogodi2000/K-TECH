import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';

const CallButton = ({ 
  variant = 'primary', 
  size = 'default', 
  showInfo = false,
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white shadow-lg hover:shadow-xl',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    emergency: 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl animate-pulse'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const handleCall = () => {
    // Track call event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'phone_call', {
        'event_category': 'engagement',
        'event_label': 'call_button_click'
      });
    }
    
    // Open phone dialer
    window.location.href = `tel:${COMPANY_INFO.contact.phones[0].number}`;
  };

  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    if (day === 0) { // Sunday
      return false; // Closed on Sunday (emergency only)
    } else if (day === 6) { // Saturday
      return hour >= 9 && hour < 15;
    } else { // Weekdays
      return hour >= 8 && hour < 18;
    }
  };

  const getStatusText = () => {
    if (isOpen()) {
      return 'Ouvert maintenant';
    } else {
      return 'Fermé - Urgences uniquement';
    }
  };

  const getStatusColor = () => {
    return isOpen() ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="relative">
      <motion.button
        onClick={handleCall}
        onMouseEnter={() => {
          setIsHovered(true);
          if (showInfo) setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (showInfo) setShowTooltip(false);
        }}
        onFocus={() => {
          if (showInfo) setShowTooltip(true);
        }}
        onBlur={() => {
          if (showInfo) setShowTooltip(false);
        }}
        className={`
          inline-flex items-center justify-center space-x-2 rounded-lg font-medium transition-all duration-300
          ${variants[variant]}
          ${sizes[size]}
          ${className}
          focus:outline-none focus:ring-4 focus:ring-primary-300
          transform hover:scale-105 active:scale-95
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Appeler ${COMPANY_INFO.contact.phones[0].formatted}`}
      >
        <Phone className={`${size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-6 h-6' : 'w-5 h-5'}`} />
        <span>{COMPANY_INFO.contact.phones[0].formatted}</span>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"
          >
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
            
            <div className="space-y-3">
              {/* Status */}
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isOpen() ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`text-sm font-medium ${getStatusColor()}`}>
                  {getStatusText()}
                </span>
              </div>

              {/* Hours */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Horaires d'ouverture</span>
                </div>
                <div className="ml-6 text-xs text-gray-500 space-y-1">
                  <div>Lundi - Vendredi: 8h - 18h</div>
                  <div>Samedi: 9h - 15h</div>
                  <div>Dimanche: Urgences uniquement</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.location.fullAddress}</span>
              </div>

              {/* Emergency Note */}
              {!isOpen() && (
                <div className="bg-red-50 border border-red-200 rounded p-2">
                  <p className="text-xs text-red-700">
                    Pour les urgences, appelez-nous directement. 
                    Nous intervenons 7j/7 en cas d'urgence.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ripple Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-lg bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CallButton;
