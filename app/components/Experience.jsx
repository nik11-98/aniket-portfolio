import { experience } from "../data/site";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">Experience</span>
        </div>

        <ul className={styles.list}>
          {experience.map((job, i) => (
            <li
              key={job.company}
              className={`${styles.row} card reveal`}
              style={{ "--reveal-delay": `${i * 0.07}s` }}
            >
              <span className={styles.logo} aria-hidden="true">
                {job.logo ? (
                  <img src={job.logo} alt="" className={styles.logoImg} />
                ) : (
                  job.company[0]
                )}
              </span>
              <div className={styles.info}>
                <div className={styles.top}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <span className={styles.period}>{job.period}</span>
                </div>
                <p className={styles.company}>{job.company}</p>
                <p className={styles.summary}>{job.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
