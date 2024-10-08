import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './assets/locales/en/tranlation.json';
import ru from './assets/locales/ru/tranlation.json';

// i18n.use(initReactI18next).init({
//     resources: {
//         en: { translation: en },
//         ru: { translation: ru },
//     },
//     fallbackLng: 'en',
//     intarpolation: {
//         escapeValue: false
//     }
// })

const resources = {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Set the default language
    keySeparator: false, // Allow for nested translations without using dots
    interpolation: {
      escapeValue: false,
    },
});

export default i18n;