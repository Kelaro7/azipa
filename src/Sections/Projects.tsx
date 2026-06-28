import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { projectsMeta } from "./utils";
import { FolderGit2, ExternalLink } from "lucide-react";

const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <h3 className="section-title">
        <FolderGit2 size={24} style={{ marginRight: "0.5rem" }} />
        {t("projects.title")}
      </h3>
      <div className="projects-scroll">
        {projectsMeta.map((project) => (
          <div className="project-card" key={project.id}>
            {project.logo && (
              <img
                src={project.logo}
                alt={t("projects.logoAlt", { name: project.name })}
                className="project-card-logo"
              />
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener"
              className="project-card-name"
            >
              {project.name}
              <ExternalLink size={14} />
            </a>
            <p className="project-card-desc">
              {t(`projects.${project.id}.description`)}
            </p>
            <div className="project-card-stack">
              {t("projects.stack", { stack: project.stack })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
