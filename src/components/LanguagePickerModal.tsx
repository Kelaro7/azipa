import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppLanguage } from "../i18n/language";

type LanguagePickerModalProps = {
  onSelect: (lang: AppLanguage) => void;
};

const LanguagePickerModal: FC<LanguagePickerModalProps> = ({ onSelect }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSelect = (lang: AppLanguage) => {
    i18n.changeLanguage(lang);
    onSelect(lang);
  };

  return (
    <div className="modal-overlay lang-picker-overlay">
      <div className="modal-content lang-picker-modal">
        <h3 className="modal-title lang-picker-title">
          Choose your language
        </h3>
        <p className="lang-picker-subtitle">Válassz nyelvet a folytatáshoz</p>

        <div className="lang-picker-options">
          <button
            type="button"
            className="lang-picker-option"
            onClick={() => handleSelect("en")}
          >
            <span className="lang-picker-flag" aria-hidden="true">
              🇬🇧
            </span>
            <span className="lang-picker-label">English</span>
          </button>

          <button
            type="button"
            className="lang-picker-option"
            onClick={() => handleSelect("hu")}
          >
            <span className="lang-picker-flag" aria-hidden="true">
              🇭🇺
            </span>
            <span className="lang-picker-label">Magyar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePickerModal;
