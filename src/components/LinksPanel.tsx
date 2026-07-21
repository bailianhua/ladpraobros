import { ExternalLink } from "lucide-react";
import { guildLinks } from "../data/siteContent";

export function LinksPanel() {
  return (
    <section id="links" className="links-section">
      <div className="section-heading compact">
        <p className="section-kicker">Links</p>
        <h2>Guild shortcuts</h2>
      </div>
      <div className="link-grid">
        {guildLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a className="link-card" href={link.href} key={link.label}>
              <Icon size={22} aria-hidden="true" />
              <span>
                <strong>{link.label}</strong>
                <small>{link.description}</small>
              </span>
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
