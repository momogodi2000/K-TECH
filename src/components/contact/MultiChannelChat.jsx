import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Send, 
  X, 
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { COMPANY_INFO, WHATSAPP_MESSAGES } from '@/utils/constants';
import toast from 'react-hot-toast';

const MultiChannelChat = ({ 
  variant = 'floating', 
  position = 'bottom-right',
  autoOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(autoOpen);
  const [activeChannel, setActiveChannel] = useState('whatsapp');
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const channels = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500',
      description: 'Réponse immédiate',
      action: () => {
        const message = inputMessage || WHATSAPP_MESSAGES.general;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodedMessage}`, '_blank');
        
        // Track WhatsApp click
        if (typeof gtag !== 'undefined') {
          gtag('event', 'whatsapp_click', {
            'event_category': 'engagement',
            'event_label': 'multi_channel_chat'
          });
        }
      }
    },
    {
      id: 'phone',
      name: 'Téléphone',
      icon: Phone,
      color: 'bg-blue-500',
      description: 'Appel direct',
      action: () => {
        window.location.href = `tel:${COMPANY_INFO.contact.phones[0].number}`;
        
        // Track phone call
        if (typeof gtag !== 'undefined') {
          gtag('event', 'phone_call', {
            'event_category': 'engagement',
            'event_label': 'multi_channel_chat'
          });
        }
      }
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'bg-purple-500',
      description: 'Réponse sous 24h',
      action: () => {
        const subject = encodeURIComponent('Demande d\'information - K-TECH');
        const body = encodeURIComponent(inputMessage || 'Bonjour, je souhaite avoir plus d\'informations sur vos services.');
        window.location.href = `mailto:${COMPANY_INFO.contact.email}?subject=${subject}&body=${body}`;
      }
    }
  ];

  const quickMessages = [
    'Bonjour, j\'ai besoin d\'une maintenance informatique',
    'Pouvez-vous réparer mon smartphone ?',
    'Je souhaite installer des caméras de surveillance',
    'Avez-vous des disponibilités cette semaine ?',
    'Quels sont vos tarifs ?'
  ];

  const isOpenNow = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    if (day === 0) return false; // Sunday
    if (day === 6) return hour >= 9 && hour < 15; // Saturday
    return hour >= 8 && hour < 18; // Weekdays
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate response
    setTimeout(() => {
      const response = {
        id: Date.now() + 1,
        text: 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const handleQuickMessage = (message) => {
    setInputMessage(message);
  };

  const positions = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

  const variants = {
    floating: 'shadow-2xl border border-gray-200',
    embedded: 'border border-gray-200',
    minimal: 'shadow-lg'
  };

  return (
    <div className={`fixed ${positions[position]} z-50 ${variants[variant]}`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-80 bg-white rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">K</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">K-TECH Support</h3>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className={`w-2 h-2 rounded-full ${isOpenNow() ? 'bg-green-400' : 'bg-red-400'}`} />
                      <span>{isOpenNow() ? 'En ligne' : 'Hors ligne'}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                  >
                    {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Channel Selection */}
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Choisissez votre canal :</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {channels.map((channel) => (
                        <motion.button
                          key={channel.id}
                          onClick={() => setActiveChannel(channel.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`
                            flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors text-xs
                            ${activeChannel === channel.id 
                              ? 'bg-primary-50 text-primary-600 border border-primary-200' 
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }
                          `}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${channel.color} text-white`}>
                            <channel.icon className="w-3 h-3" />
                          </div>
                          <span className="font-medium">{channel.name}</span>
                          <span className="text-xs opacity-75">{channel.description}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="h-64 overflow-y-auto p-4 space-y-3">
                    {messages.length === 0 ? (
                      <div className="text-center text-gray-500 text-sm">
                        <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>Comment pouvons-nous vous aider ?</p>
                      </div>
                    ) : (
                      messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`
                              max-w-xs px-3 py-2 rounded-lg text-sm
                              ${message.sender === 'user' 
                                ? 'bg-primary-600 text-white' 
                                : 'bg-gray-100 text-gray-800'
                              }
                            `}
                          >
                            {message.text}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Quick Messages */}
                  <div className="p-4 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Messages rapides :</h4>
                    <div className="flex flex-wrap gap-2">
                      {quickMessages.map((message, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickMessage(message)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
                        >
                          {message}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="p-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Tapez votre message..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      />
                      <motion.button
                        onClick={handleSendMessage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-4 bg-gray-50 rounded-b-2xl">
                    <motion.button
                      onClick={() => channels.find(c => c.id === activeChannel)?.action()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <channels.find(c => c.id === activeChannel)?.icon className="w-4 h-4" />
                      <span>Contacter via {channels.find(c => c.id === activeChannel)?.name}</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiChannelChat;
