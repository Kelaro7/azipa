import { FC } from "react";
import Resume from "./Resume";

const Header: FC = () => {
  return (
    <header className="profile-header-card">
      <img src="/portre.webp" alt="András Czipa" />
      <h1>András Czipa</h1>
      <h2>Frontend Developer&nbsp;|&nbsp;React, Next.js, TypeScript</h2>
      <div className="profile-header-contact">
        <span>Hungary</span>
        <a href="mailto:czipa7@gmail.com">czipa7@gmail.com</a>
        <span className="phone">+36 20 429 93 95</span>
        <a
          href="https://www.linkedin.com/in/andras-czipa/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn: linkedin.com/in/andras-czipa
        </a>
        <Resume />
      </div>
    </header>
  );
};

export default Header;
