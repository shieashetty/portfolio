import { projects } from "../lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="section section--alt">
      <div className="wrap section-head">
        <h2 className="section-title">A project I'm proud of.</h2>
      </div>

      <div className="wrap projects__list">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
