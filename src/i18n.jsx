import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../public/locales/en.json";
import ptTranslation from "../public/locales/pt.json";

i18n
    .use(initReactI18next)
    .init({
        lng: 'pt', // Linguagem Inicial
        fallbacklng: 'en', // Linguagem Reserva
        resources: {
            en: {
                translation: enTranslation
            },
            pt: {
                translation: ptTranslation
            },
        },
        interpolation: {
            escapeValue: false //Evitar necessidade de escapar da sequência de traduções
        }
    });

export default i18n;