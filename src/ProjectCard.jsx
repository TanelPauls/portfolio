const ProjectCard = ({ project, index, likeCount, onLike, onOpenModal }) => {
  return (
    <div className="project-wrapper">
      <div className="project-card" onClick={onOpenModal}>
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
        <p>{project.description}</p>
      </div>

      {/* Like button now outside the clickable card */}
      <div className="like-button">
        <button
          onClick={(e) => {
            e.stopPropagation(); // still needed if wrapper ever gets a click
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
