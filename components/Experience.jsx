import { experience, education } from "../lib/data";

function TimelineList({ items }) {
  return (
    <ul className="timeline">
      {items.map((item) => (
        <li key={item.title} className="timeline__row">
          <span className="timeline__range">{item.range}</span>
          <div className="timeline__content">
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__org">{item.org}</p>
            <p className="timeline__description">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="wrap section-head">
        <span className="index">04 — Experience</span>
        <h2 className="section-title">Where I've spent my time.</h2>
      </div>

      <div className="wrap timeline__block">
        <h3 className="timeline__heading">Experience</h3>
        <TimelineList items={experience} />
      </div>

      <div className="wrap timeline__block">
        <h3 className="timeline__heading">Education</h3>
        <TimelineList items={education} />
      </div>
    </section>
  );
}
