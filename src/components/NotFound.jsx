import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Dialogue not found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
