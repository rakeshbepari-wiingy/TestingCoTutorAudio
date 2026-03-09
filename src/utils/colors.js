const COLORS = ["#F59E0B", "#6366F1", "#22C55E", "#F43F5E"];

export function createColorMap() {
  const map = {};
  let count = 0;
  return function getColor(speaker) {
    if (!map[speaker]) {
      map[speaker] = COLORS[count % COLORS.length];
      count++;
    }
    return map[speaker];
  };
}
