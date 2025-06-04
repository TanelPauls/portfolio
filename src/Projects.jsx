import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

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
        "A full-stack web app built for a real client, featuring a custom admin panel and automated image optimization. This project deepened my understanding of deploying and maintaining production-ready applications.",
      modalDescription:
        "This full-stack web app was developed for a real client and includes an admin panel for managing content. Images uploaded through the admin panel are automatically compressed and optimized for the live site. Technologies used include React for the frontend, Express for the backend, and MariaDB for the database. The project also features a login system and an admin dashboard for managing site content.",
      tech: ["React", "Express", "Bootstrap", "MariaDB", "Sharp"],
      features: [
        "Login system",
        "Admin dashboard",
        "Automatic image compression",
      ],
      image: `${base}/saewark.webp`,
      modalImage: `${base}/saewarkadmin.webp`,

      github: "https://github.com/",
      live: "https://saewärk.ee",
    },
    {
      id: 2,
      title: "Hackathon Game",
      description:
        "Mini game built within a timelimit, in a hackathon with React and Bootstrap.",
      modalDescription:
        "Created a browser-based mini game from scratch as part of a hackathon challenge. The focus was on rapid prototyping, creative problem-solving, and working effectively under time constraints. Collaborated with a small team to design, build, and polish the game within the event’s deadline.",
      tech: ["React", "Bootstrap"],
      features: ["Hackathon-built", "Team collaboration", "Rapid prototyping"],
      image: `${base}/hackathon-game.webp`,
      modalImage: `${base}/hackathon-game2.webp`,
      github: "https://github.com/TanelPauls/VEPSo",
      live: "https://vepso.ita.voco.ee/",
    },
    {
      id: 3,
      title: "PHP Voting App",
      description:
        "A simple voting app built with PHP and MariaDB as a way to deepen my understanding of databases.",
      modalDescription:
        "This project was created to explore server-side programming and database interactions. Users can vote on predefined options, and the app stores and retrieves vote counts using MariaDB. It helped reinforce CRUD operations and form handling in PHP.",
      tech: ["PHP", "MariaDB"],
      features: [
        "Voting system",
        "Data storage and retrieval",
        "Form handling",
        "Basic CRUD functionality",
      ],
      image: `${base}/php-voting.webp`,
      modalImage: `${base}/php-voting2.webp`,
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

      <ProjectModal
        isOpen={activeModal !== null}
        onClose={closeModal}
        project={projects[activeModal]}
      />
    </section>
  );
};

export default Projects;
