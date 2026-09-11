import { about } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap section-head">
        <h2 className="section-title">A little about me.</h2>
      </div>

      <div className="wrap about__grid">
        <div className="about__copy">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <dl className="about__facts">
          {about.facts.map((fact) => (
            <div key={fact.label} className="about__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
