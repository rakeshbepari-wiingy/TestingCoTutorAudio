import { useState } from "react";

export default function DialogueCard({ speaker, text, translation, color, index, showEnglish }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`card${active ? " active" : ""}`}
      style={{ animation: `fadeUp 0.35s ease ${index * 0.06}s both` }}
      onClick={() => setActive(!active)}
    >
      <div className="card-header">
        <div className="avatar" style={{ background: color }}>
          {(speaker[0] || "?").toUpperCase()}
        </div>
        <span className="speaker-name" style={{ color }}>
          {speaker}
        </span>
      </div>
      <p className="text-es">{text}</p>
      {translation && (
        <p className="text-en" style={{ display: showEnglish ? "" : "none" }}>
          {translation}
        </p>
      )}
    </div>
  );
}
