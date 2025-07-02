import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, Mail, MapPin, Clock, 
  Monitor, Smartphone, Camera, Palette,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';
import WhatsAppButton from '@/components/contact/WhatsAppButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Maintenance Informatique', href: '/services/computer-maintenance', icon: Monitor },
        { name: 'Réparation Smartphones', href: '/services/phone-repair', icon: Smartphone },
        { name: 'Vidéosurveillance', href: '/services/video-surveillance', icon: Camera },
        { name: 'Infographie & Design', href: '/services/graphic-design', icon: Palette },
      ]
    },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Devis', href: '/quote', isSpecial: true },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href={`tel:${COMPANY_INFO.contact.phones[0].number}`} 
                 className="flex items-center hover:text-accent-400 transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                {COMPANY_INFO.contact.phones[0].formatted}
              </a>
              <a href={`mailto:${COMPANY_INFO.contact.email}`} 
                 className="flex items-center hover:text-accent-400 transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                {COMPANY_INFO.contact.email}
              </a>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {COMPANY_INFO.location.fullAddress}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Lun-Ven: {COMPANY_INFO.hours.weekdays.open} - {COMPANY_INFO.hours.weekdays.close}
              </span>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}>
        <nav className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isScrolled ? 360 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
              >
                K
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-primary-900">
                  K-TECH
                </h1>
                <p className="text-xs text-gray-600">Multi Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 font-medium transition-colors ${
                          isActive(item.href) || location.pathname.startsWith('/services/')
                            ? 'text-primary-600'
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-64 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                          >
                            {item.dropdownItems.map((dropItem) => (
                              <Link
                                key={dropItem.href}
                                to={dropItem.href}
                                className="flex items-center px-4 py-3 hover:bg-primary-50 transition-colors"
                              >
                                <dropItem.icon className="w-5 h-5 mr-3 text-primary-600" />
                                <span className="text-gray-700 hover:text-primary-600">
                                  {dropItem.name}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors ${
                        item.isSpecial
                          ? 'bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 active-scale'
                          : isActive(item.href)
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <nav className="container-custom py-4">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <>
                          <Link
                            to={item.href}
                            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                              isActive(item.href)
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {item.name}
                          </Link>
                          <div className="ml-4 mt-2 space-y-1">
                            {item.dropdownItems.map((dropItem) => (
                              <Link
                                key={dropItem.href}
                                to={dropItem.href}
                                className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                <dropItem.icon className="w-4 h-4 mr-2" />
                                {dropItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                            item.isSpecial
                              ? 'bg-accent-500 text-white text-center hover:bg-accent-600'
                              : isActive(item.href)
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a href={`tel:${COMPANY_INFO.contact.phones[0].number}`} 
                     className="flex items-center justify-center bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors mb-3">
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler Maintenant
                  </a>
                  <div className="text-center text-sm text-gray-600">
                    <p>{COMPANY_INFO.contact.phones[0].formatted}</p>
                    <p>{COMPANY_INFO.contact.email}</p>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;