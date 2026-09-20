import { useMemo, useState } from "react";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

const CATEGORIES = [
  "All",
  ...new Set(destinations.map((item) => item.category)),
];

function Destinations({ favorites, onToggleFavorite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredDestinations = useMemo(() => {
    const q = search.trim().toLowerCase();
    return destinations.filter((destination) => {
      const matchesSearch =
        q === "" ||
        destination.name.toLowerCase().includes(q) ||
        destination.location.toLowerCase().includes(q);

      const matchesCategory =
        category === "All" || destination.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main>
      <section className="page-hero">
        <div>
          <span className="eyebrow">EXPLORE NEPAL</span>
          <h1>Destinations</h1>
          <p>
            Find your next destination and discover what makes
            each place special.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="filters">
          <div className="search-box">
            <label htmlFor="destination-search">Search destinations</label>
            <input
              id="destination-search"
              type="search"
              placeholder="Search Pokhara, Mustang..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="category-filter">
            <span>Category</span>
            <div className="filter-buttons">
              {CATEGORIES.map((item) => (
                <button
                  key={item}
                  className={
                    category === item ? "filter-button active" : "filter-button"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="results-heading">
          <h2>{filteredDestinations.length} destinations found</h2>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="destination-grid">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                isFavorite={favorites.includes(destination.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No destinations found</h2>
            <p>Try a different search term or category.</p>
            <button
              className="primary-button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Destinations;