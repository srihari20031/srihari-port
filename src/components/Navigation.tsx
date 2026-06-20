import { ThemeToggle } from "./ui/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navigation() {
  return (
    <nav>
      <div className="nav-name">
        <span className="dot" />
        <span> Sri Hari N. </span>
      </div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}
