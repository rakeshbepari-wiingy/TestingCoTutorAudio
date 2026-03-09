import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-glare"></div>
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The dialogue or page you are looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <span className="not-found-icon">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
