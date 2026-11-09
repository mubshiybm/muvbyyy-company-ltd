import { useState } from "react";
import { ArrowUpRight, Check, Menu, X } from "lucide-react";
import RelayMark from "./RelayMark.jsx";

const links = [
  ["Services", "#product"],
  ["Our process", "#how-it-works"],
  ["Selected work", "#customers"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a className="wordmark" href="#home" aria-label="Muvbyyy Coding Studio home" onClick={closeMenu}>
        <RelayMark className="relay-mark" />
        <span>muvbyyy</span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`nav-links${menuOpen ? " is-open" : ""}`} id="primary-nav">
        {links.map(([label, target]) => (
          <a href={target} key={label} onClick={closeMenu}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <span className="system-status"><i><Check size={10} /></i> Open for projects</span>
        <a className="button button-lime nav-cta" href="#contact">
          Book a project <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
