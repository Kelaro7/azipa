import { Download } from "lucide-react";
import React, { FC } from "react";

const Resume: FC = () => {
  const handleDownload = () => {
    const resumeUrl = "/andras_czipa_resume_frontend.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "andras_czipa_resume_frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="header-button-container">
      <button className="resume-button" onClick={handleDownload}>
        <Download size={16} style={{ marginRight: "8px" }} />
        <span>Download My Resume</span>
      </button>
    </div>
  );
};

export default Resume;
