import { site } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Skills</h2>
        </div>
        <ul className="skills-list">
          {site.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
