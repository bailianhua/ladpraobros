import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { publicAsset } from "../utils/assets";

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <img
        className="hero-image"
        src={publicAsset("images/hero-guild.png")}
        alt="A fantasy game guild looking over a glowing city"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Game guild community
        </p>
        <h1>Ladpraobros</h1>
        <p className="hero-copy">
          A home base for our guild Discord, game memories, useful tools, and
          the links members need before the next run.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="https://discord.gg/replace-this">
            <MessageCircle size={20} aria-hidden="true" />
            Join Discord
          </a>
          <a className="secondary-button" href="#portfolio">
            View gallery
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
