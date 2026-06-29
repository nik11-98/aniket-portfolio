import Link from "next/link";
import { mementos } from "../data/site";
import styles from "./FanDeck.module.css";

// Fan deck: cards fanned in an arc like a hand of cards. The whole deck
// spreads wider on hover; hovering a card pops it out of the fan. Pure CSS.
export default function FanDeck() {
  const n = mementos.length;
  const mid = (n - 1) / 2;

  return (
    <section className="section" id="mementos">
      <div className="shell shell--wide">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">Mementos</span>
          <h2 className="h2">A few moments off the clock</h2>
          <p className={styles.hint}>Hover to fan out — or see them all.</p>
          <a href="/mementos" className={`btn ${styles.viewAll}`}>
            View all mementos →
          </a>
        </div>
      </div>

      <div className={styles.deck} style={{ "--mid": mid }}>
        {mementos.map((item, i) => (
          <Link
            key={i}
            href="/mementos"
            className={styles.card}
            style={{ "--i": i }}
            aria-label="View all mementos"
          >
            {item.type === "video" ? (
              <video
                className={styles.media}
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={styles.media}
                src={item.src}
                alt=""
                loading="lazy"
                draggable="false"
              />
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
