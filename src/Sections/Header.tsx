import React, { FC, useState } from "react";
import { Mail, Phone, MapPin, Download, Loader2 } from "lucide-react";
import ContactModal from "../components/ContactModal";
import { getPhoneHref, LINKEDIN_URL } from "../config/contact";
import { downloadResume } from "../utils/downloadResume";

const Header: FC = () => {
  const [showContact, setShowContact] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  const [resumeLoading, setResumeLoading] = useState(false);
  const [resumeError, setResumeError] = useState(false);

  const handleDownload = async () => {
    setResumeLoading(true);
    setResumeError(false);
    try {
      await downloadResume();
    } catch {
      setResumeError(true);
    } finally {
      setResumeLoading(false);
    }
  };

  const handleCall = () => {
    setPhoneHover(true);
    setTimeout(() => {
      window.location.href = getPhoneHref();
    }, 500);
  };

  return (
    <header className="profile-header-card">
      <img src="/portre.webp" alt="András Czipa" />
      <h1>András Czipa</h1>
      <h2>Frontend Developer&nbsp;|&nbsp;React, Next.js, TypeScript</h2>
      <div className="header-location">
        <MapPin size={14} />
        Hungary
      </div>

      <div className="header-actions">
        <button
          className="header-action-btn header-action-btn--primary"
          onClick={() => setShowContact(true)}
        >
          <Mail size={18} />
          Message me
        </button>

        <div
          className={`header-action-btn header-action-btn--call${phoneHover ? " header-action-btn--calling" : ""}`}
          onMouseEnter={() => setPhoneHover(true)}
          onMouseLeave={() => setPhoneHover(false)}
          onClick={handleCall}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleCall();
          }}
        >
          <Phone size={18} className={phoneHover ? "phone-ring" : ""} />
          Call me
        </div>

        <button
          className="header-action-btn"
          onClick={handleDownload}
          disabled={resumeLoading}
        >
          {resumeLoading ? (
            <Loader2 size={18} className="spinner" />
          ) : (
            <Download size={18} />
          )}
          {resumeError ? "Try again" : "Resume"}
        </button>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="header-action-btn header-action-btn--icon"
        >
          <img src="/LI-Logo.png" alt="LinkedIn" className="linkedin-logo" />
        </a>
      </div>

      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </header>
  );
};

export default Header;
