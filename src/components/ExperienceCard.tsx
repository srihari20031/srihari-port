import type { ReactNode } from "react";

interface ExperienceCardProps {
  title: string;
  org: string;
  date: string;
  bullets: ReactNode;
  stats: { value: string; label: string }[];
}

export function ExperienceCard({ title, org, date, bullets, stats }: ExperienceCardProps) {
  return (
    <div className="exp-card reveal">
      <div className="exp-top">
        <div>
          <h3>{title}</h3>
          <div className="exp-org">{org}</div>
        </div>
        <span className="exp-date">{date}</span>
      </div>
      <ul className="exp-bullets">{bullets}</ul>
      <div className="stat-row">
        {stats.map((s, i) => (
          <div className="stat-box" key={i}>
            <div className="stat-num count" data-target={parseInt(s.value) || 0} data-suffix={s.value.replace(/[0-9]/g, "")}>
              0
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
