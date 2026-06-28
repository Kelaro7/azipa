import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import hu from "../locales/hu.json";
import {
  applyLanguage,
  resolveInitialLanguage,
  type AppLanguage,
} from "./language";

const fallback: AppLanguage = "en";

function getBootstrapLanguage(): AppLanguage {
  return resolveInitialLanguage() ?? fallback;
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hu: { translation: hu },
  },
  lng: getBootstrapLanguage(),
  fallbackLng: fallback,
  interpolation: {
    escapeValue: false,
  },
});

const bootstrapLang = resolveInitialLanguage();
if (bootstrapLang) {
  applyLanguage(bootstrapLang);
} else {
  document.documentElement.lang = fallback;
}

i18n.on("languageChanged", (lng) => {
  const lang: AppLanguage = lng.startsWith("hu") ? "hu" : "en";
  applyLanguage(lang);
});

export default i18n;
