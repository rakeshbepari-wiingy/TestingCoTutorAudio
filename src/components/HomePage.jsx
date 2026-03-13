import { Link } from "react-router-dom";
import data from "../data";

const ACCENT_COLORS = [
  "#6366F1", "#8B5CF6", "#EC4899", "#F59E0B",
  "#10B981", "#3B82F6", "#EF4444", "#14B8A6",
  "#F97316", "#8B5CF6", "#06B6D4", "#84CC16",
  "#E879F9", "#FB923C", "#22D3EE", "#A3E635",
];

export default function HomePage() {
  const keys = Object.keys(data);

  return (
    <div className="home-page">
      <div className="v-header">
        <div className="v-badge">Leccion de Espanol</div>
        <h1>Available Dialogues</h1>
        <p>{keys.length} lessons</p>
      </div>
      <div className="home-grid">
        {keys.map((key, idx) => {
          const title = key
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ");
          const accent = ACCENT_COLORS[idx % ACCENT_COLORS.length];
          const lineCount = data[key].transcript.length;
          const hasAudio = !!data[key].audioUrl;
          const hasSpeakers = data[key].transcript.some(
            (d) => d.speaker === "Narrator"
          );

          return (
            <Link to={`/${key}`} key={key} className="home-card">
              <div className="home-card-accent" style={{ background: accent }} />
              <div className="home-card-body">
                <div className="home-card-icon" style={{ background: accent }}>
                  {title[0]}
                </div>
                <h3 className="home-card-title">{title}</h3>
                <div className="home-card-meta">
                  <span className="home-card-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    {lineCount} lines
                  </span>
                  {hasAudio && (
                    <span className="home-card-tag">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                      Audio
                    </span>
                  )}
                  {hasSpeakers && (
                    <span className="home-card-tag home-card-tag--story">
                      Story
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
