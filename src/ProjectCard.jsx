const ProjectCard = ({ project, index, likeCount, onLike, onOpenModal }) => {
  return (
    <div className="project-card" onClick={onOpenModal}>
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
        {index !== 0 && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>

      <div className="like-button">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLike(project.id);
          }}
        >
          👍 Like
        </button>
        <span>
          {likeCount} potential employers have liked this picture. Contact me
          fast!
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
