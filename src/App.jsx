import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const base = "/portfolio";

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    fetch("https://vso24pauls.ita.voco.ee/portfolio/api/get-likes.php")
      .then((res) => res.json())
      .then((data) => setLikeCount(parseInt(data.count)))
      .catch((err) => console.error("Failed to load likes", err));
  }, []);

  const handleLike = () => {
    fetch("https://vso24pauls.ita.voco.ee/portfolio/api/add-likes.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ project: "global" }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newCount = parseInt(data.newCount);
        console.log("✅ Received from server:", newCount);
        setLikeCount((prev) =>
          newCount !== prev ? newCount : prev + 0.000001
        );
      })
      .catch((err) => console.error("❌ Like failed", err));
  };

  const projects = [
    {
      title: "saewärk.ee",
      description:
        "Client project with React, Express, MariaDB, image processing via Sharp.",
      tech: ["React", "Express", "MariaDB", "Sharp"],
      image: `${base}/saewark.webp`,
      github: "https://github.com/",
      live: "https://saewärk.ee",
    },
    {
      title: "Hackathon Game",
      description:
        "Fast-paced mini game built in a hackathon with React and Bootstrap.",
      tech: ["React", "Bootstrap"],
      image: `${base}/hackathon-game.webp`,
      github: "https://github.com/TanelPauls/VEPSo",
      live: "https://vepso.ita.voco.ee/",
    },
    {
      title: "PHP Voting App",
      description: "Simple voting app using PHP and MariaDB. Quick prototype.",
      tech: ["PHP", "MariaDB"],
      image: `${base}/php-voting.webp`,
      github: "https://github.com/TanelPauls/php-voting",
      live: "https://vepso.ita.voco.ee/php-voting/",
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar">
          <img src="/portfolio/logo.svg" alt="Logo" className="logo" />
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          <ul
            className={`nav-links ${menuOpen ? "open" : ""}`}
            onClick={closeMenu}
          >
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main onClick={closeMenu}>
        <section id="hero" className="section hero">
          <img
            src={`${base}/headshot.webp`}
            alt="Profile"
            className="profile-pic"
          />
          <h1>Tanel Pauls</h1>
          <p>
            Junior Software Developer passionate about clean code and creative
            solutions.
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

        <section id="projects" className="section">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openModal(index)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-img"
                />
              )}
              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
              <div className="like-button">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // avoid opening modal
                    handleLike();
                  }}
                >
                  👍 Like
                </button>
                <span>{likeCount} likes</span>
              </div>
            </div>
          ))}

          {activeModal !== null && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{projects[activeModal].title}</h3>
                {projects[activeModal].image && (
                  <img src={projects[activeModal].image} alt="Project" />
                )}
                <p>{projects[activeModal].description}</p>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          )}
        </section>

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
