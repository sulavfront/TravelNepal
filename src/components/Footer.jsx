import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2>TravelNepal</h2>
          <p>
            Discover beautiful places, local culture
            and unforgettable adventures across Nepal.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/destinations">Destinations</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div>
          <h3>Popular</h3>
          <Link to="/destinations/1">Pokhara</Link>
          <Link to="/destinations/2">Everest Base Camp</Link>
          <Link to="/destinations/3">Mustang</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Kathmandu, Nepal</p>
          <a href="mailto:hellotravelnepal@gmail.com">
            hellotravelnepal@gmail.com
          </a>
          <p>+977 9800000000</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 TravelNepal</span>
        
      </div>
    </footer>
  );
}

export default Footer;