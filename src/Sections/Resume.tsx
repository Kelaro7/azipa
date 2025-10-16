import { FC } from "react";

const Resume: FC = () => {
  const handleDownload = () => {
    const resumeUrl = "/andas-czipa-resume-frontend.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "andas-czipa-resume-frontend.pdf";
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
