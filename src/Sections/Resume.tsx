import { Download, Loader2 } from "lucide-react";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { downloadResume } from "../utils/downloadResume";

const Resume: FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setError(false);
    try {
      await downloadResume();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="header-button-container">
      <button
        className="resume-button"
        onClick={handleDownload}
        disabled={loading}
      >
        {loading ? (
          <Loader2 size={16} className="spinner" style={{ marginRight: "8px" }} />
        ) : (
          <Download size={16} style={{ marginRight: "8px" }} />
        )}
        <span>{error ? t("resume.tryAgain") : t("resume.download")}</span>
      </button>
    </div>
  );
};

export default Resume;
