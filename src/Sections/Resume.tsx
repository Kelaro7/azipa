import { FC } from "react";

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
    <div>
      <button className="resume-button" onClick={handleDownload}>
        Download My Resume
      </button>
    </div>
  );
};

export default Resume;
