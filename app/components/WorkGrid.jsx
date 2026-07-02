import Icon from "./Icon";
import styles from "./Work.module.css";

// Shared grid of project cards. Locked projects render as non-clickable cards.
export default function WorkGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((p, i) => {
        const delay = { "--reveal-delay": `${i * 0.08}s` };
        const inner = (
          <>
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
          </>
        );

        return p.locked ? (
          <div
            key={p.id}
            className={`${styles.card} ${styles.locked} reveal`}
            style={delay}
            aria-disabled="true"
            title="Locked"
          >
            {inner}
          </div>
        ) : (
          <a
            key={p.id}
            href={p.href}
            className={`${styles.card} reveal`}
            style={delay}
            {...(p.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}
