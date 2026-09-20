import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode, favoriteCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">TN</span>
          <span>TravelNepal</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/destinations" onClick={closeMenu}>Destinations</NavLink>
          <NavLink to="/favorites" onClick={closeMenu}>
            Favorites ({favoriteCount})
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;