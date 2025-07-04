import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO, WHATSAPP_MESSAGES } from '@/utils/constants';

const WhatsAppButton = ({ position = 'fixed', showLabel = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check if it's business hours
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      
      // Monday to Friday: 8:00 - 18:00
      if (day >= 1 && day <= 5) {
        setIsOnline(hour >= 8 && hour < 18);
      }
      // Saturday: 9:00 - 15:00
      else if (day === 6) {
        setIsOnline(hour >= 9 && hour < 15);
      }
      // Sunday: Closed
      else {
        setIsOnline(false);
      }
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = (message = '') => {
    const phoneNumber = COMPANY_INFO.contact.whatsapp;
    const text = encodeURIComponent(message || WHATSAPP_MESSAGES.general);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${text}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  if (position === 'fixed') {
    return (
      <>
        {/* Floating WhatsApp Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          className="fixed bottom-24 right-6 z-50"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center whatsapp-pulse"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-7 h-7" fill="currentColor" />
            {isOnline && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            )}
          </button>
          
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
            >
              <span>Discuter sur WhatsApp</span>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="border-8 border-transparent border-l-gray-800" />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* WhatsApp Quick Messages Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed bottom-44 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-green-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">K-TECH Support</h3>
                    <p className="text-xs opacity-90">
                      {isOnline ? 'En ligne' : 'Hors ligne'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
                <p className="text-sm text-gray-600 mb-3">
                  Bonjour! Comment pouvons-nous vous aider aujourd'hui?
                </p>
                
                {Object.entries(WHATSAPP_MESSAGES).map(([key, message]) => (
                  <button
                    key={key}
                    onClick={() => handleWhatsAppClick(message)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <p className="text-sm text-gray-700">
                      {key === 'general' && '💬 Discussion générale'}
                      {key === 'computerMaintenance' && '💻 Maintenance informatique'}
                      {key === 'phoneRepair' && '📱 Réparation smartphone'}
                      {key === 'videoSurveillance' && '📹 Vidéosurveillance'}
                      {key === 'graphicDesign' && '🎨 Design graphique'}
                      {key === 'urgent' && '🚨 Urgence'}
                      {key === 'quote' && '📋 Demande de devis'}
                    </p>
                  </button>
                ))}

                {/* Custom Message */}
                <div className="pt-3 border-t border-gray-200">
                  <input
                    type="text"
                    placeholder="Tapez votre message..."
                    value={selectedMessage}
                    onChange={(e) => setSelectedMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && selectedMessage.trim()) {
                        handleWhatsAppClick(selectedMessage);
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <button
                    onClick={() => selectedMessage.trim() && handleWhatsAppClick(selectedMessage)}
                    disabled={!selectedMessage.trim()}
                    className="w-full mt-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Envoyer
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-4 py-3 text-center">
                <p className="text-xs text-gray-600">
                  Réponse rapide garantie pendant les heures d'ouverture
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Inline WhatsApp Button (for header, etc.)
  return (
    <button
      onClick={() => handleWhatsAppClick()}
      className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
      <span>WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;