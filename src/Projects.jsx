import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [likeCounts, setLikeCounts] = useState({});
  const base = "/portfolio";

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  const projects = [
    {
      id: 1,
      title: "saewärk.ee",
      description:
        "Client project with React, Express, MariaDB, image processing via Sharp. I learned a lot about deloying a fullstack application.",
      tech: ["React", "Express", "Bootstrap", "MariaDB", "Sharp"],
      image: `${base}/saewark.webp`,
      github: "https://github.com/",
      live: "https://saewärk.ee",
    },
    {
      id: 2,
      title: "Hackathon Game",
      description:
        "Mini game built within a timelimit, in a hackathon with React and Bootstrap.",
      tech: ["React", "Bootstrap"],
      image: `${base}/hackathon-game.webp`,
      github: "https://github.com/TanelPauls/VEPSo",
      live: "https://vepso.ita.voco.ee/",
    },
    {
      id: 3,
      title: "PHP Voting App",
      description: "Voting app using PHP and MariaDB.",
      tech: ["PHP", "MariaDB"],
      image: `${base}/php-voting.webp`,
      github: "https://github.com/TanelPauls/php-voting",
      live: "https://vepso.ita.voco.ee/php-voting/",
    },
  ];

  useEffect(() => {
    projects.forEach((project) => {
      fetch(
        `https://vso24pauls.ita.voco.ee/portfolio/api/get-likes.php?id=${project.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setLikeCounts((prev) => ({
            ...prev,
            [data.id]: data.count,
          }));
        })
        .catch((err) =>
          console.error(`Failed to load likes for ID ${project.id}`, err)
        );
    });
  }, []);

  const handleLike = (id) => {
    fetch("https://vso24pauls.ita.voco.ee/portfolio/api/add-likes.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `id=${id}`,
    })
      .then((res) => res.json())
      .then((data) => {
        setLikeCounts((prev) => ({
          ...prev,
          [id]: data.newCount,
        }));
      })
      .catch((err) => console.error("❌ Like failed", err));
  };

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            likeCount={likeCounts[project.id] || 0}
            onLike={handleLike}
            onOpenModal={() => openModal(index)}
          />
        ))}
      </div>

      {activeModal !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
  );
};

export default Projects;
