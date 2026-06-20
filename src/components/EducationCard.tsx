interface EducationCardProps {
  title: string;
  subtitle: string;
  cgpa: string;
}

export function EducationCard({ title, subtitle, cgpa }: EducationCardProps) {
  return (
    <div className="edu-card reveal">
      <div>
        <h3>{title}</h3>
        <div className="edu-sub">{subtitle}</div>
      </div>
      <div className="edu-cgpa">
        {cgpa.split(" ")[0]}
        <span>{cgpa.split(" ").slice(1).join(" ")}</span>
      </div>
    </div>
  );
}
