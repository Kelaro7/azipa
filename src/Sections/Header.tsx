import React, { FC, useState } from "react";
import { Mail, Phone, MapPin, Download, Linkedin } from "lucide-react";
import ContactModal from "../components/ContactModal";

const Header: FC = () => {
  const [showContact, setShowContact] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/andras_czipa_resume_frontend.pdf";
    link.download = "andras_czipa_resume_frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          onClick={() => {
            setPhoneHover(true);
            setTimeout(() => {
              window.location.href = "tel:+36204299395";
            }, 500);
          }}
        >
          <Phone size={18} className={phoneHover ? "phone-ring" : ""} />
          Call me
        </div>

        <button className="header-action-btn" onClick={handleDownload}>
          <Download size={18} />
          Resume
        </button>

        <a
          href="https://www.linkedin.com/in/andras-czipa/"
          target="_blank"
          rel="noopener"
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
