import { Link } from "react-router-dom";

function formatNPR(value) {
  return `NPR ${value.toLocaleString("en-NP")}`;
}

function DestinationCard({
  destination,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="destination-card">
      <div className="card-image-wrap">
        <img
          src={destination.image}
          alt={`${destination.name}, Nepal`}
          loading="lazy"
          width="600"
          height="400"
        />

        <button
          className={`favorite-button ${
            isFavorite ? "active" : ""
          }`}
          onClick={() => onToggleFavorite(destination.id)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <span className="badge">
          {destination.category}
        </span>
      </div>

      <div className="card-content">
        <div className="card-heading">
          <div>
            <h3>{destination.name}</h3>
            <p className="muted">
              {destination.location}
            </p>
          </div>

          <span className="rating">
            ★ {destination.rating}
          </span>
        </div>

        <p>{destination.description}</p>

        <div className="card-meta">
          <span>{destination.duration}</span>

          <strong>
            {formatNPR(destination.price)}
          </strong>
        </div>

        <Link
          className="outline-button"
          to={`/destinations/${destination.id}`}
        >
          Explore
        </Link>
      </div>
    </article>
  );
}

export default DestinationCard;