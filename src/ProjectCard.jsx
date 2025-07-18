import { FaSearch, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index, likeCount, onLike, onOpenModal }) => {
  return (
    <div className="project-wrapper">
      <div className="project-card">
        {/* Overlay for desktop */}
        <div className="card-overlay">
          <button onClick={() => onOpenModal()} title="Inspect">
            <FaSearch />
          </button>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            title="Live"
          >
            <FaExternalLinkAlt />
          </a>
          {project.github && index !== 0 && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          )}
        </div>

        <h3>{project.title}</h3>
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="project-img"
          />
        )}
        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i} className="badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="description-wrapper">
          <p>{project.description}</p>
        </div>

        {/* Buttons for mobile only */}
        <div className="card-actions-mobile">
          <button onClick={() => onOpenModal()} title="Inspect">
            <FaSearch />
          </button>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            title="Live"
          >
            <FaExternalLinkAlt />
          </a>
          {project.github && index !== 0 && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>

      {/* Like button always visible, under the card */}
      <div className="like-button">
        <button
          onClick={(e) => {
            e.stopPropagation(); // avoid triggering modal
            onLike(project.id);
          }}
        >
          👍 Like
        </button>
        <span>
          {likeCount} potential employers have already liked this project.{" "}
          <a href="#contact" className="contact-link">
            Contact me fast!
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
