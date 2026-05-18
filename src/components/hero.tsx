import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">{site.role}</p>
          <h1>{site.hero.headline}</h1>
          <p className="lead">{site.hero.lead}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="#projects">
              View Projects
            </Link>
            <Link className="btn btn-secondary" href="#contact">
              Get in Touch
            </Link>
          </div>
        </div>
        <aside className="hero-card" aria-label="Quick profile">
          <h2>Quick Profile</h2>
          <ul>
            {site.hero.profile.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
