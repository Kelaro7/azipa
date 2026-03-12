import React, { FC, useState } from "react";
import { GraduationCap } from "lucide-react";
import AccordionCard from "../components/AccordionCard";

const Education: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="education">
      <h3 className="section-title">
        <GraduationCap size={24} style={{ marginRight: "0.5rem" }} />
        Education
      </h3>
      <AccordionCard
        title="Software Information Technology – Associate's Degree"
        subtitle="MATE University (Magyar Agrár- és Élettudományi Egyetem)"
        date="2021 – 2024"
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      >
        <p className="accordion-paragraph">
          Completed a multidisciplinary degree combining software development,
          databases, and IT systems with business fundamentals.
        </p>
        <p className="accordion-paragraph">
          Developed a strong interest in web development, forming the foundation
          for a career in frontend engineering.
        </p>
      </AccordionCard>
    </section>
  );
};

export default Education;
