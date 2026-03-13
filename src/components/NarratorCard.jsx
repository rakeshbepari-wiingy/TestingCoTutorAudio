export default function NarratorCard({ text, index }) {
  return (
    <div
      className="narrator-inline"
      style={{ animation: `fadeUp 0.35s ease ${index * 0.06}s both` }}
    >
      <p>{text}</p>
    </div>
  );
}
