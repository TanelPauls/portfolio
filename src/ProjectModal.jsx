// components/ProjectModal.jsx
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x-button" onClick={onClose}>
          ✕
        </button>

        <h2>{project.title}</h2>
        {project.modalImage && (
          <img src={project.modalImage} alt={`${project.title} detail`} />
        )}
        <div className="tech-stack">
          {project.features.map((tech, index) => (
            <span key={index} className="badge">
              {tech}
            </span>
          ))}
        </div>
        <p>{project.modalDescription || project.description}</p>

        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
