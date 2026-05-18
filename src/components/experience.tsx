import { site } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Career</p>
          <h2>Work Experience</h2>
        </div>
        <div className="timeline">
          {site.experience.map((role) => (
            <article key={role.title} className="timeline-item">
              <header>
                <h3>{role.title}</h3>
                <p>{role.period}</p>
              </header>
              <ul>
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
