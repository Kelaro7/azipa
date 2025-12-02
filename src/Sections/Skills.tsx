import { FC, useState } from "react";
import { skills } from "./utils";
import {
  Award,
  Layers,
  Code2,
  Database,
  Gauge,
  Wrench,
  MoreHorizontal,
} from "lucide-react";

type SkillFilter =
  | "all"
  | "frontend"
  | "backend"
  | "devops"
  | "tools"
  | "other";

const Skills: FC = () => {
  const [filter, setFilter] = useState<SkillFilter>("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  const categoryConfig: Record<SkillFilter, { label: string; icon: any }> = {
    all: { label: "All Skills", icon: Layers },
    frontend: { label: "Frontend", icon: Code2 },
    backend: { label: "Backend", icon: Database },
    devops: { label: "DevOps", icon: Gauge },
    tools: { label: "Tools", icon: Wrench },
    other: { label: "Other", icon: MoreHorizontal },
  };

  return (
    <section id="skills">
      <h3 className="section-title">
        <Award size={24} style={{ marginRight: "0.5rem" }} />
        Skills
      </h3>
      <div className="section-card-no-hover">
        {/* Filter Buttons */}
        <div className="skills-filter">
          {(
            [
              "all",
              "frontend",
              "backend",
              "devops",
              "tools",
              "other",
            ] as SkillFilter[]
          ).map((cat) => {
            const Icon = categoryConfig[cat].icon;
            return (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                <Icon size={16} />
                <span>{categoryConfig[cat].label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          {filteredSkills.map((skill) => (
            <span className="skill-tag" key={skill.name}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
