import Link from "next/link";
import { projects, projectsRange, site } from "../data/site";
import WorkGrid from "./WorkGrid";
import styles from "./Work.module.css";

const behance = site.socials.find((s) => s.label === "Behance");

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="shell shell--wide">
        <div className={`${styles.head} reveal`}>
          <span className="eyebrow">Selected work</span>
          <span className={styles.range}>Projects ({projectsRange})</span>
        </div>

        <WorkGrid items={projects} />

        <div className={`${styles.more} reveal`}>
          <Link href="/work" className="btn">
            View all work →
          </Link>
          {behance && (
            <a
              href={behance.href}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Behance ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
