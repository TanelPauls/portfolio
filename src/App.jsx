import Header from "./Header";
import Projects from "./Projects";
import { useEffect, useState } from "react";
import "./styles.css";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function App() {
  const base = "/portfolio";
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      let current = "hero";
      let maxVisibleHeight = 0;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount in case user reloads mid-page

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />

      <main>
        <section id="hero" className="section hero">
          <img
            src={`${base}/headshot.webp`}
            alt="Profile"
            className="profile-pic"
          />
          <h1>Tanel Pauls</h1>
          <p>
            I build things that work. I enjoy backend and database development —
            solving the logic and structure that powers the front.
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/TanelPauls"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              Practical experience meets purposeful development. With a
              background in managing a cherry orchard and solving real-world
              problems, the focus now is on building efficient, full-stack web
              apps that solve actual needs.
            </p>
            <p>
              The goal: automate the boring parts, streamline everyday tasks,
              and deliver tools that actually make life easier — ideally without
              too many side effects. Currently sharpened through formal training
              at Tartu VOCO in software development.
            </p>
          </div>
        </section>

        <Projects />

        <section id="contact" className="section contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
