import Project from '@/components/Project/Project';
import projects from '@/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
