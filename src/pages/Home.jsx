import { Link } from "react-router-dom";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Home({ favorites, onToggleFavorite }) {
  const featured = destinations.filter((item) => item.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="eyebrow">YOUR NEXT ADVENTURE STARTS HERE</span>
          <h1>Explore Nepal</h1>
          <p>
            Mountains, lakes, culture and
            unforgettable adventures — all in one place.
          </p>
          <div className="hero-actions">
            <Link to="/destinations" className="primary-button">
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DISCOVER</span>
            <h2>Popular Destinations</h2>
          </div>
          <Link to="/destinations" className="text-link">
            View all →
          </Link>
        </div>

        <div className="destination-grid">
          {featured.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              isFavorite={favorites.includes(destination.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <span className="eyebrow">WHY TRAVELNEPAL?</span>
          <h2>Everything you need for your next trip</h2>
          <p>
            Simple tools and useful information to
            help you plan your Nepal adventure.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            
            <h3>Local Knowledge</h3>
            <p>Discover places and experiences with practical Nepal-focused information.</p>
          </div>
          <div className="feature-card">
            
            <h3>Flexible Trips</h3>
            <p>Choose short escapes or longer Himalayan journeys.</p>
          </div>
          <div className="feature-card">
            
            <h3>Clear Pricing</h3>
            <p>See prices in NPR before you decide what fits your budget.</p>
          </div>
          <div className="feature-card">
            
            <h3>Easy Planning</h3>
            <p>Search destinations, save ideas and start planning in a few clicks.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading centered">
          <span className="eyebrow">TRAVEL STORIES</span>
          <h2>What travelers say</h2>
        </div>

        <div className="testimonial-grid">
          <blockquote>
            "The destination information made planning our Pokhara trip much easier."
            <cite>— Anisha, Kathmandu</cite>
          </blockquote>
          <blockquote>
            "I loved being able to compare different destinations and prices quickly."
            <cite>— Rohan, Dhankuta</cite>
          </blockquote>
          <blockquote>
            "The site is simple, clean and easy to use on my phone."
            <cite>— Suman, Bhaktapur</cite>
          </blockquote>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">PLAN YOUR NEXT ESCAPE</span>
          <h2>Where will Nepal take you?</h2>
          <p>Browse destinations and start building your trip.</p>
        </div>
        <Link to="/destinations" className="primary-button">
          Start Exploring
        </Link>
      </section>
    </>
  );
}

export default Home;