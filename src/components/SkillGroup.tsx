"use client";

import { useReveal } from "@/hooks/useReveal";

interface SkillGroupProps {
  title: string;
  children: React.ReactNode;
}

export function SkillGroup({ title, children }: SkillGroupProps) {
  return (
    <div className="skill-group reveal">
      <h4>{title}</h4>
      <div className="chip-row">{children}</div>
    </div>
  );
}

export function SkillsGrid({ children }: { children: React.ReactNode }) {
  useReveal();
  return <div className="skill-groups">{children}</div>;
}
