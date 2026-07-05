function hasRealLink(url) {
  return Boolean(url && url !== "#");
}

export default function ProjectPanel({ project, isOpen, onClose }) {
  return (
    <div
      className={`project-panel${isOpen ? " open" : ""}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="project-panel-card">
        <button className="panel-close" type="button" onClick={onClose}>
          ×
        </button>

        {project && (
          <div>
            <div className="panel-image-wrap">
              <img className="panel-image" src={project.image} alt={`${project.title} preview image`} />
            </div>

            <div className="panel-topline">
              <span className="panel-pill">{project.category}</span>
            </div>

            <h3>{project.title}</h3>
            <p className="panel-description">{project.description}</p>

            <div className="panel-tags">
              {project.tech.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="panel-section">
              <h4>Highlights</h4>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="panel-actions">
              {hasRealLink(project.links.demo) && (
                <a
                  className="panel-btn panel-btn-primary"
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}

              {hasRealLink(project.links.code) && (
                <a className="panel-btn" href={project.links.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
