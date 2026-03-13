export default function DialogueCard({ speaker, text, translation, color, index }) {
  const isRight = speaker === "Person2";

  return (
    <div
      className={`chat-row ${isRight ? "chat-right" : "chat-left"}`}
      style={{ animation: `fadeUp 0.35s ease ${index * 0.06}s both` }}
    >
      <div className="chat-avatar" style={{ background: color }}>
        {(speaker[0] || "?").toUpperCase()}
      </div>
      <div className={`chat-bubble ${isRight ? "chat-bubble-right" : "chat-bubble-left"}`}>
        <p className="chat-text">{text}</p>
        {translation?.trim() && <p className="chat-translation">{translation}</p>}
      </div>
    </div>
  );
}
