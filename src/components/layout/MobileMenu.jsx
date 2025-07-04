import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Home, 
  Monitor, 
  Smartphone, 
  Camera, 
  Palette,
  Users,
  Phone,
  FileText,
  ChevronRight,
  Clock,
  MapPin,
  Mail
} from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  const services = [
    {
      id: 'computer-maintenance',
      title: 'Maintenance Informatique',
      description: 'Dépannage et maintenance PC/Mac',
      icon: Monitor,
      href: '/services/computer-maintenance',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'phone-repair',
      title: 'Réparation Smartphones',
      description: 'Réparation toutes marques',
      icon: Smartphone,
      href: '/services/phone-repair',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'video-surveillance',
      title: 'Vidéosurveillance',
      description: 'Installation caméras',
      icon: Camera,
      href: '/services/video-surveillance',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'graphic-design',
      title: 'Design Graphique',
      description: 'Création graphique',
      icon: Palette,
      href: '/services/graphic-design',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const navItems = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Monitor, hasSubmenu: true },
    { name: 'À Propos', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Devis', href: '/quote', icon: FileText }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleLinkClick = () => {
    onClose();
    setActiveSection(null);
  };

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="font-bold text-lg text-gray-900">
                  {COMPANY_INFO.name}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-6">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasSubmenu ? (
                        <div>
                          <button
                            onClick={() => handleSectionToggle(item.name)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                              isActive(item.href)
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="w-5 h-5" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform ${
                              activeSection === item.name ? 'rotate-90' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeSection === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-2"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    to={service.href}
                                    onClick={handleLinkClick}
                                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${service.color}`}>
                                      <service.icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-900 text-sm">
                                        {service.title}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {service.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={handleLinkClick}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                            isActive(item.href)
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Contact Rapide</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <div>
                        <div className="font-medium">Appeler</div>
                        <div className="text-sm">{COMPANY_INFO.contact.phones[0].formatted}</div>
                      </div>
                    </a>
                    
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <span className="text-lg">💬</span>
                      </div>
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm">Message rapide</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Business Info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4" />
                      <span>Lun-Ven: 8h-18h, Sam: 9h-15h</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4" />
                      <span>{COMPANY_INFO.location.fullAddress}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4" />
                      <span>{COMPANY_INFO.contact.email}</span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
