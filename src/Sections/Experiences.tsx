import { FC } from "react";
import { experiences } from "./utils";

const Experiences: FC = () => {
  return (
    <section>
      <h3 className="section-title">Experience</h3>
      {experiences.map((exp, index) => (
        <div className="section-card" key={index}>
          <div className="experience-title">{exp.title}</div>
          <div className="experience-company">{exp.company}</div>
          <div className="experience-date">{exp.date}</div>
          <ul className="experience-list">
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
