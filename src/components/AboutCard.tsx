import type { ReactNode } from "react";

interface AboutCardProps {
  content: ReactNode;
}

export function AboutCard({ content }: AboutCardProps) {
  return <div className="about-card reveal">{content}</div>;
}
