import { gallery } from "../data/site";
import styles from "./MementosGallery.module.css";

// Responsive masonry of memento photos and video clips.
export default function MementosGallery() {
  return (
    <div className={`shell shell--wide ${styles.wrap}`}>
      <div className={styles.grid}>
        {gallery.map((item, i) => (
          <figure key={i} className={`${styles.item} reveal`}>
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
          </figure>
        ))}
      </div>
    </div>
  );
}
