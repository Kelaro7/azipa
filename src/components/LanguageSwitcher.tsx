import { FC } from "react";
import { useTranslation } from "react-i18next";
import { AppLanguage } from "../i18n/language";

const FLAGS: Record<AppLanguage, string> = {
  en: "🇬🇧",
  hu: "🇭🇺",
};

const LanguageSwitcher: FC = () => {
  const { i18n, t } = useTranslation();
  const currentLang: AppLanguage = i18n.language.startsWith("hu") ? "hu" : "en";
  const nextLang: AppLanguage = currentLang === "hu" ? "en" : "hu";

  const toggleLanguage = () => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      type="button"
      className="lang-fab"
      onClick={toggleLanguage}
      aria-label={t("language.switch")}
      title={t(`language.${nextLang}`)}
    >
      <span className="lang-fab-flag" aria-hidden="true">
        {FLAGS[currentLang]}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
