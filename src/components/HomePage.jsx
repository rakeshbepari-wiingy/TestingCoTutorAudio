import { Link } from "react-router-dom";
import data from "../data";

export default function HomePage() {
  const keys = Object.keys(data);

  return (
    <div className="home-page">
      <div className="v-header">
        <div className="v-badge">Leccion de Espanol</div>
        <h1>Available Dialogues</h1>
      </div>
      <div className="v-container">
        {keys.map((key) => {
          const title = key
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ");
          return (
            <Link to={`/${key}`} key={key} className="card home-card">
              <div className="card-header">
                <div className="avatar" style={{ background: "#6366F1" }}>
                  {title[0]}
                </div>
                <span className="speaker-name" style={{ color: "#818CF8" }}>
                  {title}
                </span>
              </div>
              <p className="text-en">
                {data[key].transcript.length} lines
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
