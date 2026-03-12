import React, { FC } from "react";
import { projects } from "./utils";
import { FolderGit2, ExternalLink } from "lucide-react";

const Projects: FC = () => {
  return (
    <section id="projects">
      <h3 className="section-title">
        <FolderGit2 size={24} style={{ marginRight: "0.5rem" }} />
        Side Projects
      </h3>
      <div className="projects-scroll">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            {project.logo && (
              <img
                src={project.logo}
                alt={`${project.name} logo`}
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
            <p className="project-card-desc">{project.description}</p>
            <div className="project-card-stack">Stack: {project.stack}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
