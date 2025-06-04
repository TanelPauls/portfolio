import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="navbar">
        <a href="#hero" onClick={closeMenu}>
          <img src="/portfolio/logo.svg" alt="Logo" className="logo" />
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul
          className={`nav-links ${menuOpen ? "open" : ""}`}
          onClick={closeMenu}
        >
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
