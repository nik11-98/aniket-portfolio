import { site, stats } from "../data/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className={`${styles.block} reveal`}>
          <span className="eyebrow">About</span>
          <div className={styles.body}>
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
