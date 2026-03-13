export default function QuestionCard({ text, index }) {
  return (
    <div
      className="question-inline"
      style={{ animation: `fadeUp 0.35s ease ${index * 0.06}s both` }}
    >
      <span className="question-tag">Quiz</span>
      <p className="question-inline-text">{text}</p>
    </div>
  );
}
