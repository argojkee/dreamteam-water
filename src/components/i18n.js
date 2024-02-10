import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          learn: 'Learn React',
          description: 'Edit and save to React',
        },
      },
      ua: {
        translation: {
          learn: 'Вивчаємо React',
          description: 'Редагуємо та зберігаємо в React',
        },
      },
    },
  });
