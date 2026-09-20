import { Link, useParams } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationDetails({ onBook }) {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <main className="section">
        <div className="empty-state">
          <h1>Destination not found</h1>
          <p>The destination you are looking for does not exist.</p>
          <Link to="/destinations" className="primary-button">
            Back to Destinations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="details-hero">
        <img
          src={destination.image}
          alt={`${destination.name}, Nepal`}
        />
        <div className="details-overlay">
          <div>
            <span className="badge">{destination.category}</span>
            <h1>{destination.name}</h1>
            <p>{destination.location}</p>
          </div>
        </div>
      </section>

      <section className="section details-layout">
        <article className="details-content">
          <div className="details-intro">
            <div>
              <span className="eyebrow">DISCOVER</span>
              <h2>About {destination.name}</h2>
            </div>
            <span className="rating large-rating">
              ★ {destination.rating}
            </span>
          </div>

          <p className="large-text">{destination.description}</p>

          <p>
            {destination.name} offers travelers a chance
            to experience Nepal's landscapes, culture and
            local lifestyle. Plan your visit around the
            recommended season and choose activities that
            match your interests.
          </p>

          <h3>Popular activities</h3>
          <div className="activity-list">
            {destination.activities.map((activity) => (
              <span key={activity}>{activity}</span>
            ))}
          </div>

          <h3>Best time to visit</h3>
          <p>{destination.bestTime}</p>
        </article>

        <aside className="details-sidebar">
          <div className="info-card">
            <div className="info-item">
              <span>Location</span>
              <strong>{destination.location}</strong>
            </div>
            <div className="info-item">
              <span>Duration</span>
              <strong>{destination.duration}</strong>
            </div>
            <div className="info-item">
              <span>Best time</span>
              <strong>{destination.bestTime}</strong>
            </div>
            <div className="info-item">
              <span>Starting from</span>
              <strong>
                NPR {destination.price.toLocaleString("en-NP")}
              </strong>
            </div>

            <button
              className="primary-button full"
              onClick={() => onBook(destination)}
            >
              Book Now
            </button>
          </div>
        </aside>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">READY TO EXPLORE?</span>
          <h2>Start planning your trip to {destination.name}.</h2>
          <p>Book your spot and start your Nepal adventure.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => onBook(destination)}
        >
          Book This Trip
        </button>
      </section>
    </main>
  );
}

export default DestinationDetails;