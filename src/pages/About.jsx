import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ABOUT US</span>

          <h1>Travel Nepal differently.</h1>

          <p>
            TravelNepal is a simple travel platform
            designed to make discovering Nepal easier.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">

          <div>
            <span className="eyebrow">
              OUR PURPOSE
            </span>

            <h2>
              Discover more. Plan better.
            </h2>
          </div>

          <div>
            <p className="large-text">
              Nepal has everything from high Himalayan
              trails and peaceful lakes to historic towns
              and rich cultural experiences.
            </p>

            <p>
              TravelNepal brings destinations and tours
              together in a clean and easy-to-use
              experience so travelers can explore their
              options before planning a trip.
            </p>
          </div>

        </div>
      </section>

      <section className="section alt-section">
        <div className="container">

          <div className="section-heading centered">
            <span className="eyebrow">
              WHAT WE VALUE
            </span>

            <h2>
              Built around the traveler
            </h2>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              

              <h3>Clarity</h3>

              <p>
                Keep destination and tour information
                simple and easy to understand.
              </p>
            </div>

            <div className="feature-card">
             

              <h3>Exploration</h3>

              <p>
                Make discovering new places enjoyable
                and accessible.
              </p>
            </div>

            <div className="feature-card">
              

              <h3>Local Focus</h3>

              <p>
                Highlight Nepal's landscapes, culture
                and travel experiences.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">
            READY TO EXPLORE?
          </span>

          <h2>
            Start discovering Nepal.
          </h2>
        </div>

        <Link
          to="/destinations"
          className="primary-button"
        >
          Explore Destinations
        </Link>
      </section>
    </main>
  );
}

export default About;