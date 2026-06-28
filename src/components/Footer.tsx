import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LINKEDIN_URL } from "../config/contact";
import { getScrollRoot, scrollToTop } from "../utils/scroll";

const Footer: FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footerEl = footerRef.current;
    const root = getScrollRoot();
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        root,
        threshold: 0.15,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`site-footer${visible ? " site-footer--visible" : ""}`}
      aria-hidden={!visible}
    >
      <div className="site-footer-inner">
        <button
          type="button"
          className="site-footer-brand"
          onClick={scrollToTop}
          aria-label={t("footer.backToTop")}
          tabIndex={visible ? 0 : -1}
        >
          <img src="/favicon.ico" alt="" className="site-footer-logo" />
          <span>{t("header.name")}</span>
        </button>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer-link"
          tabIndex={visible ? 0 : -1}
        >
          {t("footer.linkedin")}
        </a>

        <span className="site-footer-copy">{t("footer.copyright")}</span>
      </div>
    </footer>
  );
};

export default Footer;
