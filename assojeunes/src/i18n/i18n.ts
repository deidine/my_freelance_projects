import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from 'i18next-http-backend';

// Import translation files
import arTranslation from './dictionaries/ar.json';
import frTranslation from './dictionaries/fr.json'; 
 

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,  
    },
    resources: {
      ar: {
        common: arTranslation.common,
        navigation: arTranslation.navigation,
        welcome: arTranslation.welcome,
      },
      fr: {
        common: frTranslation.common,
        navigation: frTranslation.navigation,
        welcome: frTranslation.welcome,
      },
    },
    
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  }).then(() => {
    console.log("i18n initialized")
  }).catch((error) => {
    console.error("i18n initialization failed", error)
  })

export default i18n
