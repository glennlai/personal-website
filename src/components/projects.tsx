import Link from "next/link";
import { site } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Side Projects</h2>
        </div>
        <div className="project-grid">
          {site.projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="stack">{project.stack}</p>
              <Link href={project.href} aria-label={`View ${project.name}`}>
                View project
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
