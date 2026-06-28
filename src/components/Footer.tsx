import { FC } from "react";
import { LINKEDIN_URL } from "../config/contact";
import { scrollToTop } from "../utils/scroll";

const Footer: FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <button
          type="button"
          className="site-footer-brand"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <img src="/favicon.ico" alt="" className="site-footer-logo" />
          <span>András Czipa</span>
        </button>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer-link"
        >
          LinkedIn
        </a>

        <span className="site-footer-copy">&copy; 2026 András Czipa</span>
      </div>
    </footer>
  );
};

export default Footer;
