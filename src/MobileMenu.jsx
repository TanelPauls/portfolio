const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu-content">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <img
          src="/portfolio/headshot.webp"
          alt="Profile"
          className="mobile-profile-pic"
        />

        <nav className="mobile-nav-links">
          <a href="#hero" onClick={onClose}>
            Home
          </a>
          <a href="#about" onClick={onClose}>
            About
          </a>
          <a href="#projects" onClick={onClose}>
            Projects
          </a>
          <a href="#contact" onClick={onClose}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
