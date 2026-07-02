import { site } from "../data/site";
import SkillPills from "./SkillPills";
import styles from "./StatementHero.module.css";

export default function StatementHero() {
  const { headline, subtext } = site.hero;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className="shell">
          <h1 className={styles.headline}>
            {headline.before} <em>{headline.em}</em> {headline.after}
          </h1>

          <p className={styles.subtext}>
            {subtext.map((s, i) =>
              s.bold ? <strong key={i}>{s.t}</strong> : <span key={i}>{s.t}</span>
            )}
          </p>
        </div>
      </div>

      <div className={styles.pills}>
        <SkillPills />
      </div>
    </section>
  );
}
