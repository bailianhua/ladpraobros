import { MessageCircle } from "lucide-react";
import { publicAsset } from "../utils/assets";

const navItems = [
  { label: "Gallery", href: "#portfolio" },
  { label: "Links", href: "#links" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ladpraobros home">
        <span className="brand-mark" aria-hidden="true">
          <img src={publicAsset("images/web-logo.png")} alt="" />
        </span>
        <span>Ladpraobros</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="https://discord.gg/replace-this">
        <MessageCircle size={18} aria-hidden="true" />
        <span>Discord</span>
      </a>
    </header>
  );
}
