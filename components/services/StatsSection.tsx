const statistics = [
  
{ value: "43+", label: "Clients Served" },
{ value: "3", label: "Countries Reached" },
{ value: "2D + 3D", label: "Creative & Animation Services" },
{ value: "360°", label: "End-to-End Digital Solutions" },

];

export default function StatsSection() {
  return (
    <section className="stats-section" aria-labelledby="stats-title">
      <h2 id="stats-title" className="stats-label">metaruleX in numbers:</h2>
      <dl className="stats-grid">
        {statistics.map((statistic) => (
          <div className="stats-card" key={statistic.value}>
            <dt className="stats-value">{statistic.value}</dt>
            <dd className="stats-description">{statistic.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
