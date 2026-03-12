import React, { FC, useState, useRef } from "react";
import { skills } from "./utils";
import {
  Award,
  Layers,
  Code2,
  Database,
  Gauge,
  Wrench,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type SkillFilter =
  | "all"
  | "frontend"
  | "backend"
  | "devops"
  | "tools"
  | "other";

const Skills: FC = () => {
  const [filter, setFilter] = useState<SkillFilter>("frontend");
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const skillFilters = [
    "all",
    "frontend",
    "backend",
    "devops",
    "tools",
    "other",
  ] as SkillFilter[]

  return (
    <section id="skills" ref={sectionRef}>
      <h3 className="section-title">
        <Award size={24} style={{ marginRight: "0.5rem" }} />
        Skills
      </h3>
      <div className="section-card-no-hover">
        <div className="skills-filter-wrapper">
          <button
            className="skills-filter-arrow skills-filter-arrow--left"
            onClick={() => {
              scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="skills-filter" ref={scrollRef}>
            {skillFilters.map((cat) => {
              const Icon = categoryConfig[cat].icon;
              return (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setFilter(cat);
                  }}
                >
                  <Icon size={16} />
                  <span>{categoryConfig[cat].label}</span>
                </button>
              );
            })}
          </div>
          <button
            className="skills-filter-arrow skills-filter-arrow--right"
            onClick={() => {
              scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });
            }}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Skills Display */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            minHeight: "80px",
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
