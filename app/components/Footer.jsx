import { site } from "../data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = 2026;
  return (
    <footer className={styles.footer} id="contact">
      <div className="shell">
        <div className={`${styles.cta} reveal`}>
          <span className="eyebrow">Get in touch</span>
          <h2 className={styles.big}>Let’s connect.</h2>
          <p className={styles.sub}>
            I’m always down for a chat about a role, a project, or just design.
          </p>
          <a href={`mailto:${site.email}`} className="btn btn--primary">
            {site.email}
          </a>
        </div>

        <nav className={styles.socials} aria-label="Social links">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="chip"
              target="_blank"
              rel="noreferrer"
            >
              {s.label} ↗
            </a>
          ))}
        </nav>

        <div className={styles.base}>
          <span>© {year} {site.name} · Built with care</span>
          <a href="#top" className="ulink">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
