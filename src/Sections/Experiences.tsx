import { FC } from "react";
import { experiences } from "./utils";
import { Briefcase } from "lucide-react";

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
            {exp.responsibilities.map((resp, i) => (
              <div className="responsibility-card" key={i}>
                <div className="responsibility-title">{resp.title}</div>
                <div className="responsibility-description">
                  {resp.description}
                </div>
                {resp.example && (
                  <div className="responsibility-example">{resp.example}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
