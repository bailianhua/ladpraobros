import { About } from "./components/About";
import { Games } from "./components/Games";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LinksPanel } from "./components/LinksPanel";
import { Portfolio } from "./components/Portfolio";
import { StatsBar } from "./components/StatsBar";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Portfolio />
        <Games />
        <LinksPanel />
        <About />
      </main>
      <footer className="site-footer">
        <span>Ladpraobros</span>
        <span>Discord, gallery, and guild tools in one place.</span>
      </footer>
    </>
  );
}
