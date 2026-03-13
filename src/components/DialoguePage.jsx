import { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import DialogueCard from "./DialogueCard";
import NarratorCard from "./NarratorCard";
import QuestionCard from "./QuestionCard";
import { createColorMap } from "../utils/colors";
import data from "../data";

export default function DialoguePage() {
  const { slug } = useParams();
  const entry = data[slug];

  const getColor = useMemo(() => createColorMap(), [slug]);

  if (!entry) return <Navigate to="/not-found" replace />;

  const { audioUrl, transcript, translated } = entry;

  const title = slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  // Pre-assign translation indices only to dialogue entries (skip Narrator/narrator_question)
  let tIdx = 0;
  const items = transcript.map((d, i) => {
    const isDialogue = d.speaker !== "Narrator" && d.speaker !== "narrator_question";
    const translation = isDialogue ? (translated?.[tIdx++]?.text ?? "") : null;
    return { ...d, translation, i };
  });

  return (
    <div className="dialogue-page">
      <div className="v-header">
        <div className="v-badge">Leccion de Espanol</div>
        <h1>{title}</h1>
      </div>
      <div className="v-container">
        <div className="dialogues-scroll">
          {items.map((d) => {
            if (d.speaker === "Narrator") {
              return <NarratorCard key={d.i} text={d.text} index={d.i} />;
            }
            if (d.speaker === "narrator_question") {
              return <QuestionCard key={d.i} text={d.text} index={d.i} />;
            }
            return (
              <DialogueCard
                key={d.i}
                speaker={d.speaker}
                text={d.text}
                translation={d.translation}
                color={getColor(d.speaker)}
                index={d.i}
              />
            );
          })}
        </div>
      </div>

      {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
    </div>
  );
}
