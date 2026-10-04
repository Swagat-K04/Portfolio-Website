"use client";
import React from "react";
import { experience, meta } from "@/data/portfolio";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <Briefcase size={15} />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="section-title">Engineering Experience</h2>
        <p className="section-subtitle">
          Building production-grade payment rails, bank integrations, and high-concurrency schedulers.
        </p>
      </div>

      <div className="timeline-container">
        {/* Work Experience */}
        {experience.map((exp, idx) => (
          <div key={idx} className="timeline-card">
            <div className="timeline-dot-wrapper">
              <span className={`timeline-dot ${exp.current ? "current" : ""}`} />
              <span className="timeline-line" />
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <div className="role-badge-row">
                    <span className="company-tag">{exp.company}</span>
                    {exp.current && <span className="current-badge">Current Role</span>}
                  </div>
                  <h3 className="role-title">{exp.role}</h3>
                </div>

                <div className="timeline-meta">
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="timeline-highlights">
                {exp.highlights.map((point, i) => (
                  <li key={i}>
                    <CheckCircle size={15} className="bullet-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="timeline-tech-pills">
                {exp.tech.map((t, i) => (
                  <span key={i} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Education Item */}
        <div className="timeline-card education-card">
          <div className="timeline-dot-wrapper">
            <span className="timeline-dot edu" />
          </div>

          <div className="timeline-content">
            <div className="timeline-header">
              <div>
                <div className="role-badge-row">
                  <span className="company-tag edu">
                    <GraduationCap size={15} />
                    {meta.college}
                  </span>
                  <span className="cgpa-pill">CGPA: {meta.cgpa}</span>
                </div>
                <h3 className="role-title">{meta.degree}</h3>
              </div>

              <div className="timeline-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>2022 – 2026</span>
                </div>
                <div className="meta-item">
                  <MapPin size={14} />
                  <span>Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>

            <p className="edu-summary">
              Strong foundational coursework in <strong>Distributed Systems</strong>,{" "}
              <strong>Operating Systems &amp; Concurrency</strong>,{" "}
              <strong>Computer Networks</strong>, and <strong>Data Structures &amp; Algorithms</strong>.
              Consistently maintained top-tier academic standing (CGPA: 8.60).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
