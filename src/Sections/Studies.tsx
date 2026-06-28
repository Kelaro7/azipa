import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { GraduationCap } from "lucide-react";
import AccordionCard from "../components/AccordionCard";

const Education: FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="education">
      <h3 className="section-title">
        <GraduationCap size={24} style={{ marginRight: "0.5rem" }} />
        {t("education.title")}
      </h3>
      <AccordionCard
        title={t("education.degree")}
        subtitle={t("education.university")}
        date={t("education.date")}
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      >
        <p className="accordion-paragraph">{t("education.p1")}</p>
        <p className="accordion-paragraph">{t("education.p2")}</p>
      </AccordionCard>
    </section>
  );
};

export default Education;
