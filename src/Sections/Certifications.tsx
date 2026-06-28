import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Trophy } from "lucide-react";

const Certifications: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications">
      <h3 className="section-title">
        <Trophy size={24} style={{ marginRight: "0.5rem" }} />
        {t("certifications.title")}
      </h3>
      <div className="section-card">
        <div className="accordion-title">{t("certifications.awsTitle")}</div>
        <div className="accordion-subtitle">{t("certifications.awsIssuer")}</div>
        <div className="accordion-date">{t("certifications.awsDate")}</div>
        <div>
          <img
            src="/cloud-aws.webp"
            alt={t("certifications.awsAlt")}
            style={{ maxWidth: "400px", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
