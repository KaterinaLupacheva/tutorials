import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, be, fr, de, es } from "./translations";
const { languageDetectorPlugin } = require("./utils/languageDetectorPlugin");

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  es: {
    translation: es,
  },
  be: {
    translation: be,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    //language to use if translations in user language are not available
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
