import Reveal from "./components/Reveal";
import Nav from "./components/Nav";
import StatementHero from "./components/StatementHero";
import FanDeck from "./components/FanDeck";
import Work from "./components/Work";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <StatementHero />
        <Work />
        <FanDeck />
      </main>
      <Footer />
    </>
  );
}
