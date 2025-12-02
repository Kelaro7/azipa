import { FC } from "react";
import { appliedSkills, baseSkills } from "./utils";
import { Award } from "lucide-react";

const Skills: FC = () => {
  return (
    <section id="skills">
      <h3 className="section-title">
        <Award size={24} style={{ marginRight: "0.5rem" }} />
        Skills
      </h3>
      <div className="section-card-no-hover">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          {baseSkills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <h4 className="section-title" style={{ marginTop: 24 }}>
          Applied in side projects:
        </h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          {appliedSkills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
