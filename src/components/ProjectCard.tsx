import type { ReactNode } from "react";

interface ProjectCardProps {
  num: string;
  category: string;
  title: string;
  date: string;
  status: "live" | "done";
  statusLabel: string;
  description: string;
  bullets: ReactNode;
  tags: string[];
  impactLabel: string;
  impactValue: number;
}

export function ProjectCard({
  num,
  category,
  title,
  date,
  status,
  statusLabel,
  description,
  bullets,
  tags,
  impactLabel,
  impactValue,
}: ProjectCardProps) {
  return (
    <div className="stack-card" data-stack>
      <div className="proj-top">
        <div>
          <span className="proj-num">{num} · {category}</span>
          <h3>{title}</h3>
          <span className="proj-date">{date}</span>
        </div>
        <span className={`status-pill status-${status}`}>
          <span className="sdot" />
          {statusLabel}
        </span>
      </div>
      <p className="proj-desc">{description}</p>
      <ul className="proj-bullets">{bullets}</ul>
      <div className="proj-foot">
        <div className="proj-tags">
          {tags.map((t) => (
            <span className="tag-pill" key={t}>{t}</span>
          ))}
        </div>
        <div className="impact-bar">
          <div className="ib-label">{impactLabel}</div>
          <div className="impact-track">
            <div className="impact-fill" data-fill={impactValue} />
          </div>
        </div>
      </div>
    </div>
  );
}
