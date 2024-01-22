import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/ns1.json';
import translationPL from './locales/pl/ns1.json';

export const defaultNS = 'ns1';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    defaultNS,
    fallbackNS: 'en',
    resources: {
      en: {
        ns1: translationEN,
      },
      pl: {
        ns1: translationPL,
      },
    },
  });

// eslint-disable-next-line import/no-default-export
export default i18n;
