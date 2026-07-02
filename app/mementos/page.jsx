import { site } from "../data/site";
import Reveal from "../components/Reveal";
import Nav from "../components/Nav";
import MementosGallery from "../components/MementosGallery";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: `Mementos · ${site.name}`,
  description: "Moments off the clock · photos and clips.",
};

export default function MementosPage() {
  return (
    <>
      <Reveal />
      <Nav />
      <main id="top" className="page">
        <header className={`shell ${styles.head} reveal`}>
          <span className="eyebrow">Mementos</span>
          <h1 className={styles.title}>A few moments off the clock</h1>
          <p className={styles.sub}>
            Places, light and small things I’ve pointed a camera at between projects.
          </p>
        </header>

        <MementosGallery />
      </main>
      <Footer />
    </>
  );
}
