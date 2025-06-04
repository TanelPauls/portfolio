import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <a href="#hero">
          <img src="/portfolio/logo.svg" alt="Logo" className="logo" />
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links">
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

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
