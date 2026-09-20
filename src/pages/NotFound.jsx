import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">

      <div>

        <span className="error-code">
          404
        </span>

        <h1>
          Page not found
        </h1>

        <p>
          The page you are looking for does not exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className="primary-button"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}

export default NotFound;