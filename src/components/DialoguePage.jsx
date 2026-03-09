import { useState, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import DialogueCard from "./DialogueCard";
import { createColorMap } from "../utils/colors";
import data from "../data";

export default function DialoguePage() {
  const { slug } = useParams();
  const entry = data[slug];
  const [showEnglish, setShowEnglish] = useState(true);

  const getColor = useMemo(() => createColorMap(), [slug]);

  if (!entry) return <Navigate to="/not-found" replace />;

  const { audioUrl, transcript, translated } = entry;

  const title = slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="dialogue-page">
      <div className="v-header">
        <div className="v-badge">Leccion de Espanol</div>
        <h1>{title}</h1>
      </div>
      <div className="v-container">
        <div className="controls">
          <button
            className="toggle-btn"
            onClick={() => setShowEnglish(!showEnglish)}
          >
            {showEnglish ? "Hide English" : "Show English"}
          </button>
        </div>

        <div className="dialogues-scroll">
          {transcript.map((d, i) => (
            <DialogueCard
              key={i}
              speaker={d.speaker}
              text={d.text}
              translation={translated[i]?.text || ""}
              color={getColor(d.speaker)}
              index={i}
              showEnglish={showEnglish}
            />
          ))}
        </div>
      </div>

      {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
    </div>
  );
}
