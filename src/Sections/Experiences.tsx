import React, { FC, useState } from "react";
import { experiences } from "./utils";
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

const iconMap: Record<string, any> = {
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="experience">
      <h3 className="section-title">
        <Briefcase size={24} style={{ marginRight: "0.5rem" }} />
        Experience
      </h3>
      {experiences.map((exp, i) => (
        <AccordionCard
          key={exp.title}
          title={exp.title}
          subtitle={exp.company}
          date={exp.date}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        >
          <div className="responsibilities-grid">
            {exp.responsibilities.map((resp, j) => {
              const Icon = iconMap[resp.icon];
              return (
                <div className="responsibility-card" key={j}>
                  <div className="responsibility-title">
                    {Icon && (
                      <Icon size={18} style={{ marginRight: "0.5rem" }} />
                    )}
                    {resp.title}
                  </div>
                  <div className="responsibility-description">
                    {resp.description}
                  </div>
                  {resp.example && (
                    <div className="responsibility-example">
                      {resp.example}
                    </div>
                  )}
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
