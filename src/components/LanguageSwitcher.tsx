import { FC } from "react";
import { useTranslation } from "react-i18next";

const FLAGS = {
  en: "🇬🇧",
  hu: "🇭🇺",
} as const;

const LanguageSwitcher: FC = () => {
  const { i18n, t } = useTranslation();
  const isHu = i18n.language.startsWith("hu");
  const currentLang = isHu ? "hu" : "en";
  const nextLang = isHu ? "en" : "hu";

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
