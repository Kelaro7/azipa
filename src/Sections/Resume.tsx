import { FC } from "react";

const Resume: FC = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/Andras-Czipa-Frontend-Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Andras-Czipa-Frontend-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button className="resume-button" onClick={handleDownload}>
        Download My Resume
      </button>
    </div>
  );
};

export default Resume;
