import { skills } from "../data/site";
import Icon from "./Icon";
import styles from "./SkillPills.module.css";

// Slight per-pill tilt for the playful "pile" feel from the reference.
const TILTS = [-4, 3, -2, 4, -3, 2, -5, 3];

export default function SkillPills() {
  // Duplicated track so the marquee loops seamlessly.
  const row = [...skills, ...skills];
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {row.map((s, i) => (
          <span
            key={i}
            className={styles.pill}
            style={{
              background: s.color,
              "--tilt": `${TILTS[i % TILTS.length]}deg`,
              border: s.color === "#ffffff" ? "1px solid var(--line)" : "none",
            }}
          >
            <span className={styles.label}>{s.label}</span>
            <Icon name={s.icon} size={18} />
          </span>
        ))}
      </div>
    </div>
  );
}
