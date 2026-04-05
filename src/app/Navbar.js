"use client";
import { meta } from "@/data/portfolio";

const navItems = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "skills",     label: "Skills" },
  { id: "contact",    label: "Contact" },
];

export default function Navbar({ active }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="nav-avatar">SK</div>
        <div className="nav-name-block">
          <div className="nav-name">Swagat Khodkumbhe</div>
          <div className="nav-title">// software-engineer</div>
        </div>
      </div>

      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={active === item.id ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
        <a href={`mailto:${meta.email}`} className="nav-cta">Hire Me</a>
      </div>
    </nav>
  );
}
