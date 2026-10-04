"use client";
import React from "react";
import { skills } from "@/data/portfolio";
import { Cpu, Terminal, Database, Server, Layers, Shield } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Core Languages":
        return <Terminal size={17} className="text-emerald" />;
      case "Backend & Systems":
        return <Server size={17} className="text-cyan" />;
      case "Data & Streaming":
        return <Database size={17} className="text-amber" />;
      case "ML & High-Performance":
        return <Cpu size={17} className="text-purple" />;
      case "Infrastructure & Tools":
        return <Layers size={17} className="text-green" />;
      case "Protocols & Standards":
        return <Shield size={17} className="text-pink" />;
      default:
        return <Terminal size={17} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <Cpu size={15} />
          <span>TECHNICAL ARSENAL</span>
        </div>
        <h2 className="section-title">Skills &amp; Architecture Mastery</h2>
        <p className="section-subtitle">
          Core toolsets, distributed primitives, and low-latency infrastructure.
        </p>
      </div>

      <div className="skills-category-grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="skill-cat-card">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">{getCategoryIcon(category)}</div>
              <h3 className="skill-cat-title">{category}</h3>
            </div>

            <div className="skill-badge-cloud">
              {items.map((skill, i) => (
                <span key={i} className="skill-item-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
