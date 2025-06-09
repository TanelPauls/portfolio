import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="navbar">
        <a href="#hero">
          <img src="/portfolio/logo.svg" alt="Logo" className="logo" />
        </a>

        {/* Desktop Nav */}
        <ul
          className={`nav-links ${menuOpen ? "open" : ""}`}
          onClick={closeMenu}
        >
          <li>
            <a
              href="#hero"
              className={activeSection === "hero" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
