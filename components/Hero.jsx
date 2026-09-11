import { profile } from "../lib/data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__main">
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__statement">{profile.statement}</p>

          <div className="hero__actions">
            <a href={profile.resumeHref} className="button button--solid">
              Download resume
            </a>
            <a
              href={profile.github}
              className="button button--ghost"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              className="button button--ghost"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero__panel">
          <dl className="hero__panel-list">
            <div>
              <dt>Currently</dt>
              <dd>{profile.focus}</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{profile.status}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
