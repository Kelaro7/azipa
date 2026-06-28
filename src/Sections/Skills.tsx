import React, { FC, useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<SkillFilter>("frontend");
  const [showArrows, setShowArrows] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setShowArrows(el.scrollWidth > el.clientWidth + 1);
    };

    checkOverflow();
    const observer = new ResizeObserver(checkOverflow);
    observer.observe(el);
    window.addEventListener("resize", checkOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [i18n.language]);

  const categoryConfig: Record<SkillFilter, { labelKey: string; icon: typeof Layers }> = {
    all: { labelKey: "skills.all", icon: Layers },
    frontend: { labelKey: "skills.frontend", icon: Code2 },
    backend: { labelKey: "skills.backend", icon: Database },
    devops: { labelKey: "skills.devops", icon: Gauge },
    tools: { labelKey: "skills.tools", icon: Wrench },
    other: { labelKey: "skills.other", icon: MoreHorizontal },
  };

  const skillFilters = [
    "all",
    "frontend",
    "backend",
    "devops",
    "tools",
    "other",
  ] as SkillFilter[];

  return (
    <section id="skills" ref={sectionRef}>
      <h3 className="section-title">
        <Award size={24} style={{ marginRight: "0.5rem" }} />
        {t("skills.title")}
      </h3>
      <div className="section-card-no-hover">
        <div className="skills-filter-wrapper">
          {showArrows && (
            <button
              className="skills-filter-arrow skills-filter-arrow--left"
              onClick={() => {
                scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
              }}
              aria-label={t("skills.scrollLeft")}
            >
              <ChevronLeft size={18} />
            </button>
          )}
          <div
            className={`skills-filter${showArrows ? "" : " skills-filter--centered"}`}
            ref={scrollRef}
          >
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
                  <span>{t(categoryConfig[cat].labelKey)}</span>
                </button>
              );
            })}
          </div>
          {showArrows && (
            <button
              className="skills-filter-arrow skills-filter-arrow--right"
              onClick={() => {
                scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });
              }}
              aria-label={t("skills.scrollRight")}
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>

        <div className="skills-tags">
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
