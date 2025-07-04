import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './locales/fr.json';
import enTranslations from './locales/en.json';

const resources = {
  fr: {
    translation: frTranslations
  },
  en: {
    translation: enTranslations
  }
};

// Get saved language or detect browser language
const savedLanguage = localStorage.getItem('k-tech-language');
const browserLanguage = navigator.language || navigator.userLanguage;
const defaultLanguage = savedLanguage || (browserLanguage.startsWith('en') ? 'en' : 'fr');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;