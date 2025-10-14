import { FC } from "react";

const Education: FC = () => {
  return (
    <section>
      <h3 className="section-title">Education</h3>
      <div className="section-card">
        <div className="experience-title">
          Software Information Technology – Associate’s Degree
        </div>
        <div className="experience-company">
          MATE University (Magyar Agrár- és Élettudományi Egyetem)
        </div>
        <div className="experience-date">2021 – 2024</div>
        <ul className="experience-list">
          <li>
            Completed a multidisciplinary degree combining software development,
            databases, and IT systems with business fundamentals.
          </li>
          <li>
            Developed a strong interest in web development, forming the
            foundation for a career in frontend engineering.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
