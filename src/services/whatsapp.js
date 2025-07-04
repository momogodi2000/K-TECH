import { COMPANY_INFO } from '@/utils/constants';

export const generateWhatsAppURL = (message, phoneNumber = COMPANY_INFO.contact.whatsapp) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const encodedMessage = encodeURIComponent(message);
  
  return isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
};

export const sendWhatsAppMessage = (message, phoneNumber) => {
  const url = generateWhatsAppURL(message, phoneNumber);
  window.open(url, '_blank');
};

export const generateServiceQuoteMessage = (service, clientInfo) => {
  return `
🔧 DEMANDE DE DEVIS K-TECH

👨‍💼 Client: ${clientInfo.name}
📱 Téléphone: ${clientInfo.phone}
📧 Email: ${clientInfo.email || 'Non renseigné'}
📍 Localisation: ${clientInfo.location || 'Douala'}

🛠️ Service demandé: ${service.title}
📝 Description: ${clientInfo.description || 'À préciser'}

Merci de me contacter pour discuter des détails et obtenir un devis personnalisé.
  `.trim();
};