import './Project.css';

export default function Project({ project }) {
  return (
    <div className="project">
      <img className="project-image" src={project.image} alt={project.title} />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a
        href={project.github}
        className="project-link"
        target="_blank"
        rel="noreferrer"
        aria-label="View project on GitHub"
      >
        <button className="project-button">View Project</button>
      </a>
    </div>
  );
}
