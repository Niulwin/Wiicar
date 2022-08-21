import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

export enum LanguagesSupport {
  'Spanish' = 'es',
  'English' = 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: LanguagesSupport.Spanish,
  fallbackLng: LanguagesSupport.Spanish,

  interpolation: {
    escapeValue: false
  }
});

export { i18n };
