import { Link } from "react-router-dom";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Favorites({
  favorites,
  onToggleFavorite,
}) {
  const favoriteDestinations = destinations.filter(
    (destination) =>
      favorites.includes(destination.id)
  );

  return (
    <main>
      <section className="page-hero">
        <div>
          <span className="eyebrow">
            YOUR SAVED PLACES
          </span>

          <h1>Favorites</h1>

          <p>
            Keep track of destinations you want to
            explore later.
          </p>
        </div>
      </section>

      <section className="section">

        {favoriteDestinations.length > 0 ? (
          <>
            <div className="results-heading">
              <h2>
                {favoriteDestinations.length} saved{" "}
                {favoriteDestinations.length === 1
                  ? "destination"
                  : "destinations"}
              </h2>
            </div>

            <div className="destination-grid">
              {favoriteDestinations.map(
                (destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    isFavorite={true}
                    onToggleFavorite={
                      onToggleFavorite
                    }
                  />
                )
              )}
            </div>
          </>
        ) : (
          <div className="empty-state">

            <h2>
              No favorites yet
            </h2>

            <p>
              Save destinations you like and they will
              appear here.
            </p>

            <Link
              to="/destinations"
              className="primary-button"
            >
              Explore Destinations
            </Link>

          </div>
        )}

      </section>
    </main>
  );
}

export default Favorites;