import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

const Home = lazy(() => import("./pages/Home"));
const Destinations = lazy(() => import("./pages/Destinations"));
const DestinationDetails = lazy(
  () => import("./pages/DestinationDetails")
);
const Favorites = lazy(() => import("./pages/Favorites"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });

  // renamed: selectedTour -> selectedDestination
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  function toggleFavorite(id) {
    setFavorites((current) => {
      if (current.includes(id)) {
        return current.filter((favoriteId) => favoriteId !== id);
      }
      return [...current, id];
    });
  }

  function handleBook(destination) {
    setSelectedDestination(destination);
  }

  function closeBooking() {
    setSelectedDestination(null);
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          favoriteCount={favorites.length}
        />

        <Suspense
          fallback={
            <div className="page-loading">
              <div className="loading-spinner"></div>
              <p>Loading...</p>
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />

            <Route
              path="/destinations"
              element={
                <Destinations
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />

            <Route
              path="/destinations/:id"
              element={<DestinationDetails onBook={handleBook} />}
            />

            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />

        {selectedDestination && (
          <BookingModal
            destination={selectedDestination}
            onClose={closeBooking}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;