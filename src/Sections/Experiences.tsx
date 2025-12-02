import { FC } from "react";
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
  return (
    <section id="experience">
      <h3 className="section-title">
        <Briefcase size={24} style={{ marginRight: "0.5rem" }} />
        Experience
      </h3>
      {experiences.map((exp) => (
        <div className="section-card-no-hover" key={exp.title}>
          <div className="experience-title">{exp.title}</div>
          <div className="experience-company">{exp.company}</div>
          <div className="experience-date">{exp.date}</div>
          <div className="responsibilities-grid">
            {exp.responsibilities.map((resp, i) => {
              const Icon = iconMap[resp.icon];
              return (
                <div className="responsibility-card" key={i}>
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
                    <div className="responsibility-example">{resp.example}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
