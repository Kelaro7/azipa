import { FC } from "react";
import { projects } from "./utils";
import { FolderGit2 } from "lucide-react";

const Projects: FC = () => {
  return (
    <section id="projects">
      <h3 className="section-title">
        <FolderGit2 size={24} style={{ marginRight: "0.5rem" }} />
        Side Projects
      </h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="section-card"
            style={{ margin: "0px" }}
            key={project.name}
          >
            {project.logo && (
              <div style={{ marginBottom: "1rem" }}>
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  style={{
                    maxWidth: "80px",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            )}
            <a href={project.url} target="_blank" rel="noopener">
              {project.name}
            </a>
            <p>{project.description}</p>
            <div className="stack">Stack: {project.stack}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
