import AboutMe from "./Sections/AboutMe";
import Experiences from "./Sections/Experiences";
import Header from "./Sections/Header";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Education from "./Sections/Studies";

function App() {
  const isMobile = window.innerWidth <= 768;

  const bg = isMobile
    ? "#000 url('/mobileBg.webp') center top / cover no-repeat"
    : "#000 url('/desktopBg.webp') center top / cover no-repeat";

  return (
    <div
      className="portfolio-page"
      style={{
        minHeight: isMobile ? "100dvh" : "100vh", // Better mobile viewport support
        background: bg,
        backgroundAttachment: isMobile ? "scroll" : "fixed", // Fixed causes issues on mobile
        color: "#fff",
        fontFamily: "Inter, Poppins, sans-serif",
        padding: "0 0 4rem 0",
      }}
    >
      <Header />

      <main
        style={{
          maxWidth: 800,
          margin: "40px auto 0 auto",
          background: "rgba(0,0,0,0.7)",
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          padding: "1rem 2rem",
        }}
      >
        <AboutMe />

        <Skills />

        <Projects />

        <Experiences />

        <Education />
      </main>
    </div>
  );
}

export default App;
