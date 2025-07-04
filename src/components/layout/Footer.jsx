import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Facebook, Instagram, Linkedin,
  Monitor, Smartphone, Camera, Palette, Clock, MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Devis', href: '/quote' }
  ];

  const services = [
    { name: 'Maintenance Informatique', href: '/services/computer-maintenance', icon: Monitor },
    { name: 'Réparation Smartphones', href: '/services/phone-repair', icon: Smartphone },
    { name: 'Vidéosurveillance', href: '/services/video-surveillance', icon: Camera },
    { name: 'Infographie & Design', href: '/services/graphic-design', icon: Palette }
  ];

  const socialLinks = [
    { name: 'Facebook', href: COMPANY_INFO.social.facebook, icon: Facebook },
    { name: 'Instagram', href: COMPANY_INFO.social.instagram, icon: Instagram },
    { name: 'LinkedIn', href: COMPANY_INFO.social.linkedin, icon: Linkedin }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Contact rapide */}
      <div className="bg-primary-600 text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-1">Besoin d'aide immédiate ?</h3>
              <p className="text-primary-100">Notre équipe est disponible pour vous assister</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent('Bonjour K-TECH! J\'ai besoin d\'aide.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_INFO.contact.phones[0].number}`}
                className="btn-outline text-white border-white hover:bg-white hover:text-primary-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal du footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold">
                K
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{COMPANY_INFO.name}</h3>
                <p className="text-sm text-gray-400">{COMPANY_INFO.slogan}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Votre partenaire technologique de confiance à Douala. 
              Solutions informatiques professionnelles depuis plus de 5 ans.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    <service.icon className="w-4 h-4 mr-2 group-hover:text-primary-400" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  {COMPANY_INFO.contact.phones.map((phone, index) => (
                    <div key={index}>
                      <a
                        href={`tel:${phone.number}`}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {phone.formatted}
                      </a>
                      {phone.primary && (
                        <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">
                          Principal
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  {COMPANY_INFO.location.fullAddress}
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Lun-Ven: {COMPANY_INFO.hours.weekdays.open} - {COMPANY_INFO.hours.weekdays.close}</p>
                  <p>Sam: {COMPANY_INFO.hours.saturday.open} - {COMPANY_INFO.hours.saturday.close}</p>
                  <p>Dim: {COMPANY_INFO.hours.sunday.open}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>Développé avec ❤️ à Douala</span>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Confidentialité
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;