import { profile } from "../lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap contact__grid">
        <div>
          <span className="index">05 — Contact</span>
          <h2 className="section-title contact__title">
            Let's talk about something worth building.
          </h2>
        </div>

        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="contact__email link-underline">
            {profile.email}
          </a>
          <div className="contact__social">
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
