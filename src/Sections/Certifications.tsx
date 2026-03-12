import React, { FC } from "react";
import { Trophy } from "lucide-react";

const Certifications: FC = () => {
  return (
    <section id="certifications">
      <h3 className="section-title">
        <Trophy size={24} style={{ marginRight: "0.5rem" }} />
        Certifications
      </h3>
      <div className="section-card">
        <div className="accordion-title">
          Ultimate AWS Certified Cloud Practitioner CLF-C02 2026
        </div>
        <div className="accordion-subtitle">Amazon Web Services (AWS)</div>
        <div className="accordion-date">Dec 2025</div>
        <div>
          <img
            src="/cloud-aws.webp"
            alt="AWS Cloud Practitioner Certification"
            style={{ maxWidth: "400px", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
