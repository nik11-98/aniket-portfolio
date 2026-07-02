import { site, projects, projectsRange } from "../data/site";
import Reveal from "../components/Reveal";
import Nav from "../components/Nav";
import WorkGrid from "../components/WorkGrid";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: `Work · ${site.name}`,
  description: "Selected product design work and case studies.",
};

const behance = site.socials.find((s) => s.label === "Behance");

export default function WorkPage() {
  return (
    <>
      <Reveal />
      <Nav />
      <main id="top" className="page">
        <header className={`shell shell--wide ${styles.head} reveal`}>
          <span className="eyebrow">Work</span>
          <h1 className={styles.title}>Everything I’ve made</h1>
          <p className={styles.sub}>
            Product design, brand and web · {projects.length} projects, {projectsRange}.
          </p>
        </header>

        <div className="shell shell--wide">
          <WorkGrid items={projects} />

          {behance && (
            <div className={`${styles.more} reveal`}>
              <a
                href={behance.href}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                View all projects on Behance ↗
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
