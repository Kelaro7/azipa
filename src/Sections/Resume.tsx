import { FC } from "react";

const Resume: FC = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/andras-czipa-frontend-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "andras-czipa-frontend-resume.pdf";
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
