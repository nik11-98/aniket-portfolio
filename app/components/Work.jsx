import { projects, projectsRange } from "../data/site";
import Icon from "./Icon";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="shell shell--wide">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">Selected work</span>
          <span className={styles.range}>Projects ({projectsRange})</span>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <a key={p.id} href={p.href} className={`${styles.card} reveal`}>
              <div className={styles.panel}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.shot}
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  draggable="false"
                />
                <span className={styles.corner} aria-hidden="true">
                  <Icon name={p.locked ? "lock" : "arrowUpRight"} size={18} />
                </span>
              </div>

              <div className={styles.meta}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
