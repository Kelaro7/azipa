import React, { FC } from "react";
import { Trans, useTranslation } from "react-i18next";
import { User } from "lucide-react";

const techHighlight = <span style={{ color: "#00b4b6" }} />;

const paragraphStyle = {
  color: "#fff",
  fontSize: "1.08rem",
  lineHeight: 1.8,
  marginBottom: 18,
  textAlign: "center" as const,
};

const AboutMe: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h3 className="section-title">
        <User size={24} style={{ marginRight: "0.5rem" }} />
        {t("about.title")}
      </h3>
      <div className="section-card">
        <p style={paragraphStyle}>
          <Trans i18nKey="about.p1" components={{ 1: techHighlight, strong: <strong /> }} />
        </p>
        <p style={paragraphStyle}>
          <Trans i18nKey="about.p2" components={{ 1: techHighlight }} />
        </p>
        <p style={paragraphStyle}>
          <Trans i18nKey="about.p3" components={{ 1: techHighlight }} />
        </p>
        <p style={{ ...paragraphStyle, marginBottom: 0 }}>
          <Trans i18nKey="about.p4" components={{ 1: techHighlight }} />
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
