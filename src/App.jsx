import Header from "./Header";
import Projects from "./Projects";
import { useState } from "react";
import "./styles.css";

function App() {
  const base = "/portfolio";

  return (
    <>
      <Header />

      <main>
        <section id="hero" className="section hero">
          <img
            src={`${base}/headshot.webp`}
            alt="Profile"
            className="profile-pic"
          />
          <h1>Tanel Pauls</h1>
          <p>
            Junior Software Developer passionate about things working; not
            passionate about clean code.
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/TanelPauls"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I’m a junior developer based in Estonia with a background in
            software development and a passion for building responsive web apps.
          </p>
          <p>
            <strong>Education:</strong> Vocational training in software
            development (Tartu VOCO)
          </p>
        </section>

        <Projects />

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>
            Email me at:{" "}
            <a href="mailto:Tanel.Pauls@voco.ee">Tanel.Pauls@voco.ee</a>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
