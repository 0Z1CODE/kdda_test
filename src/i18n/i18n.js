import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATIONS_EN } from './translations/en/translation';
import { TRANSLATIONS_DE } from './translations/de/translation';
import { TRANSLATIONS_FR } from './translations/fr/translation';
import { TRANSLATIONS_IT } from './translations/it/translation';
import { TRANSLATIONS_JA } from './translations/ja/translation';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
      it: {
        translation: TRANSLATIONS_IT,
      },
      ja: {
        translation: TRANSLATIONS_JA,
      },
    },
  });

i18n.changeLanguage('en');
