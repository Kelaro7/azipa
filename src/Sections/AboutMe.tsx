import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <section>
      <h3 className="section-title">About Me</h3>
      <div className="section-card">
        <p
          style={{
            color: "#fff",
            fontSize: "1.08rem",
            lineHeight: 1.8,
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          <strong>Frontend Developer</strong> with professional experience in
          building scalable web applications using{" "}
          <span style={{ color: "#00b4b6" }}>React</span>,{" "}
          <span style={{ color: "#00b4b6" }}>Next.js</span>,{" "}
          <span style={{ color: "#00b4b6" }}>TypeScript</span>, and{" "}
          <span style={{ color: "#00b4b6" }}>Redux</span>.
        </p>
        <p
          style={{
            color: "#fff",
            fontSize: "1.08rem",
            lineHeight: 1.8,
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          Active in full-stack projects with{" "}
          <span style={{ color: "#00b4b6" }}>Node.js</span>,{" "}
          <span style={{ color: "#00b4b6" }}>Express</span>, and{" "}
          <span style={{ color: "#00b4b6" }}>Laravel</span>.
        </p>
        <p
          style={{
            color: "#fff",
            fontSize: "1.08rem",
            lineHeight: 1.8,
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          Experienced in integrating REST APIs (Node.js and PHP) and deploying
          side projects on cloud platforms such as{" "}
          <span style={{ color: "#00b4b6" }}>Vercel</span> and{" "}
          <span style={{ color: "#00b4b6" }}>Render</span>.
        </p>
        <p
          style={{
            color: "#fff",
            fontSize: "1.08rem",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          Enthusiastic about clean code, Agile teamwork, and AI-assisted
          development with{" "}
          <span style={{ color: "#00b4b6" }}>GitHub Copilot</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
