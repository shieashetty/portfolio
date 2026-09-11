import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap section-head">
        <h2 className="section-title">Tools and skills I work with.</h2>
      </div>

      <div className="wrap skills__grid">
        {skills.map((group) => (
          <div key={group.category} className="skills__group">
            <h3 className="skills__category">{group.category}</h3>
            <ul className="skills__items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
