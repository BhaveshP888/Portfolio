export default function InteractiveBackground() {
  return (
    <div
      aria-hidden="true"
      className="studio-ambient"
    >
      {/* Hardware-accelerated multi-stop ambient lighting (zero CPU/GPU overhead) */}
      <div className="studio-ambient-glow" />
    </div>
  );
}
