function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <span className="project-icon">&#128187;</span>
        <h3 className="project-title">{title}</h3>
      </div>
      <p className="project-desc">{description}</p>
      <div className="project-tech">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-btn">
        View Project
      </a>
    </div>
  )
}

export default ProjectCard
