import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { experiencesMeta } from "./utils";
import {
  Briefcase,
  Code2,
  Plug,
  BarChart3,
  Users,
  FileCheck,
  Palette,
  Paintbrush,
  BookOpen,
  Boxes,
  GitBranch,
  MessageSquare,
  Shield,
  TrendingUp,
} from "lucide-react";
import AccordionCard from "../components/AccordionCard";

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Code2,
  Plug,
  BarChart3,
  Users,
  FileCheck,
  Palette,
  Paintbrush,
  BookOpen,
  Boxes,
  GitBranch,
  MessageSquare,
  Shield,
  TrendingUp,
};

const Experiences: FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experience">
      <h3 className="section-title">
        <Briefcase size={24} style={{ marginRight: "0.5rem" }} />
        {t("experience.title")}
      </h3>
      {experiencesMeta.map((exp, i) => (
        <AccordionCard
          key={exp.id}
          title={t(`experience.items.${exp.id}.title`)}
          subtitle={exp.company}
          date={t(`experience.items.${exp.id}.date`)}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        >
          <div className="responsibilities-grid">
            {exp.responsibilities.map((resp) => {
              const Icon = iconMap[resp.icon];
              const baseKey = `experience.items.${exp.id}.responsibilities.${resp.id}`;
              return (
                <div className="responsibility-card" key={resp.id}>
                  <div className="responsibility-title">
                    {Icon && (
                      <Icon size={18} style={{ marginRight: "0.5rem" }} />
                    )}
                    {t(`${baseKey}.title`)}
                  </div>
                  <div className="responsibility-description">
                    {t(`${baseKey}.description`)}
                  </div>
                  <div className="responsibility-example">
                    {t(`${baseKey}.example`)}
                  </div>
                </div>
              );
            })}
          </div>
        </AccordionCard>
      ))}
    </section>
  );
};

export default Experiences;
