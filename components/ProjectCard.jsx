export default function ProjectCard({ project, reverse }) {
  return (
    <article className={`project ${reverse ? "project--reverse" : ""}`}>
      <div className="project__media">
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      </div>

      <div className="project__body">
        <span className="index">{project.id}</span>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__description">{project.description}</p>

        <ul className="project__stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project__links">
          <a href={project.github} className="link-underline" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}
