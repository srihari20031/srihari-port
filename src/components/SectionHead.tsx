import type { ReactNode } from "react";

interface SectionHeadProps {
  title: string;
  description?: ReactNode;
  tag?: string;
}

export function SectionHead({ tag, title, description }: SectionHeadProps) {
  return (
    <div className="section-head reveal">
      {tag && <span className="tag">{tag}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
