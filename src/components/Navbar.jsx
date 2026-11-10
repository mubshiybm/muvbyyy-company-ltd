import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import RelayMark from "./RelayMark.jsx";

const themeStorageKey = "muvbyyy-theme";

const links = [
  ["Services", "/services"],
  ["Our process", "/process"],
  ["Selected work", "/work"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === "dark" ? "dark" : "light");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "light" ? "#f7f8f2" : "#050605",
    );
    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      console.warn("Could not save the selected theme:", error);
    }
  }, [theme]);

  return (
    <header className="navbar">
      <Link className="wordmark" to="/" aria-label="Muvbyyy Coding Studio home" onClick={closeMenu}>
        <RelayMark className="relay-mark" />
        <span>muvbyyy</span>
      </Link>
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
          <Link to={target} key={label} aria-current={pathname.replace(/\/+$/, "") === target ? "page" : undefined} onClick={closeMenu}>{label}</Link>
        ))}
      </nav>
      <div className="nav-actions">
        <span className="system-status"><i><Check size={10} /></i> Open for projects</span>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          aria-pressed={theme === "light"}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <Link className="button button-lime nav-cta" to="/contact" onClick={closeMenu}>
          Book a project <ArrowUpRight size={15} />
        </Link>
      </div>
    </header>
  );
}
