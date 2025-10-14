import { FC } from "react";
import { projects } from "./utils";

const Projects: FC = () => {
  return (
    <section>
      <h3 className="section-title">Side Projects</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="section-card" style={{ margin: "0px" }}>
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
