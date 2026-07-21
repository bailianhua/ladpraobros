import { guildStats } from "../data/siteContent";

export function StatsBar() {
  return (
    <section className="stats-band" aria-label="Guild highlights">
      <div className="stats-grid">
        {guildStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div className="stat-item" key={stat.label}>
              <Icon size={18} aria-hidden="true" />
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          );
        })}
      </div>
    </section>
  );
}
