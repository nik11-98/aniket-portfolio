import { site } from "../data/site";
import Reveal from "../components/Reveal";
import Nav from "../components/Nav";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export const metadata = {
  title: `About — ${site.name}`,
  description: site.intro,
};

export default function AboutPage() {
  return (
    <>
      <Reveal />
      <Nav />
      <main id="top" className="page">
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
