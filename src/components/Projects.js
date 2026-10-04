"use client";
import React, { useState } from "react";
import { projects } from "@/data/portfolio";
import {
  Layers,
  Cpu,
  Activity,
  Smartphone,
  MessageSquare,
  Box,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "systems"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => !p.featured);

  const getProjectIcon = (id) => {
    switch (id) {
      case "fraud-detection":
        return <Activity size={20} className="text-cyan" />;
      case "parallel-encrypter":
        return <Cpu size={20} className="text-amber" />;
      case "bookworm":
        return <Smartphone size={20} className="text-purple" />;
      case "telechat":
        return <MessageSquare size={20} className="text-green" />;
      case "customizer-t":
        return <Box size={20} className="text-pink" />;
      default:
        return <Layers size={20} />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <Layers size={15} />
          <span>PRODUCTION &amp; DISTRIBUTED WORK</span>
        </div>
        <h2 className="section-title">Featured Engineering Projects</h2>
        <p className="section-subtitle">
          Distributed streaming pipelines, C++20 low-latency engines, and full-stack systems.
        </p>

        {/* Filter controls */}
        <div className="project-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Work ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === "systems" ? "active" : ""}`}
            onClick={() => setFilter("systems")}
          >
            Systems &amp; ML Pipelines
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full-Stack &amp; Mobile
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className={`project-card ${proj.featured ? "featured" : ""}`}
          >
            {/* Top Bar */}
            <div className="project-card-header">
              <div className="project-title-group">
                <div className="project-icon-box">{getProjectIcon(proj.id)}</div>
                <div>
                  <h3 className="project-name">{proj.name}</h3>
                  <p className="project-tagline">{proj.tagline}</p>
                </div>
              </div>

              <div className="project-links">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link-btn"
                    title="View Source on GitHub"
                  >
                    <GithubIcon size={17} />
                  </a>
                )}
              </div>
            </div>

            {/* Metrics pills if featured */}
            {proj.metrics && proj.metrics.length > 0 && (
              <div className="project-metrics-row">
                {proj.metrics.map((m, i) => (
                  <div key={i} className="metric-chip">
                    <span className="metric-lbl">{m.label}:</span>
                    <span className="metric-val">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Bullets */}
            <ul className="project-bullets">
              {proj.bullets.map((bullet, i) => (
                <li key={i}>
                  <CheckCircle2 size={14} className="bullet-check" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="project-tech-tags">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
