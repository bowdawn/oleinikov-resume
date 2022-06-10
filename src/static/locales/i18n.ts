import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  lng: localStorage.getItem('language') || userLanguage || 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})



export default i18n;