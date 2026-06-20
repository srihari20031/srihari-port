const items = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "Express.js",
  "MongoDB",
  "Supabase",
  "Azure",
  "Docker",
  "Stripe",
  "OpenAI API",
  "Agno Agent",
  "Tailwind CSS",
  "Python",
] as const;

export function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track" id="marquee">
        {repeated.map((item, idx) => (
          <span key={`${item}-${idx}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
