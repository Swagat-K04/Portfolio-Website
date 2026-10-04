"use client";
import React from "react";
import ThreeCanvas from "./ThreeCanvas";
import { meta } from "@/data/portfolio";
import {
  Terminal,
  Cpu,
  Layers,
  ArrowDown,
  ExternalLink,
  FileText,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";

export default function Hero() {
  return (
    <div className="hero-section">
      {/* Background ambient mesh grid */}
      <div className="hero-grid-overlay" />

      <div className="hero-container">
        {/* LEFT COLUMN: High-density Typographic Signal */}
        <div className="hero-left">
          {/* Status Badges */}
          <div className="hero-status-row">
            <div className="hero-badge live-pulse">
              <span className="pulse-dot" />
              <span>Software Engineer · Pine Labs (Mosambee)</span>
            </div>
            <div className="hero-badge badge-subtle">
              <span>IIIT Nagpur · CGPA 8.60</span>
            </div>
          </div>

          {/* Name & Headline */}
          <div className="hero-titles">
            <h1 className="hero-name">SWAGAT KHODKUMBHE</h1>
            <h2 className="hero-tagline">
              Engineering <span className="highlight-emerald">low-latency payment rails</span>,{" "}
              <span className="highlight-amber">C++20 memory engines</span> &amp;{" "}
              <span className="highlight-cyan">real-time Kafka pipelines</span>.
            </h2>
          </div>

          <p className="hero-bio">
            Specializing in financial messaging protocols (<strong>ISO 8583</strong>),
            high-throughput IPC memory pools, and distributed streaming fraud detection.
            LeetCode Knight with a passion for mechanical sympathy and low-level optimization.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#hud" className="btn-primary">
              <Terminal size={17} />
              <span>Inspect Systems HUD</span>
              <ArrowDown size={15} className="arrow-down" />
            </a>

            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social & Resume Links */}
          <div className="hero-social-links">
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <GithubIcon size={17} />
              <span>GitHub</span>
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
              <span>LinkedIn</span>
            </a>
            <a
              href={meta.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LeetCode Profile"
            >
              <LeetCodeIcon size={16} />
              <span>LeetCode (1800+)</span>
            </a>
            <a
              href={meta.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn highlight"
              title="Resume"
            >
              <FileText size={17} />
              <span>Resume PDF</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Real-time Telemetry Stats Bar */}
          <div className="hero-telemetry-bar">
            <div className="telemetry-stat">
              <div className="telemetry-val">2.5+ GB/s</div>
              <div className="telemetry-lbl">C++20 AES Throughput</div>
            </div>
            <div className="telemetry-divider" />
            <div className="telemetry-stat">
              <div className="telemetry-val">1800+</div>
              <div className="telemetry-lbl">LeetCode Knight (Top 5%)</div>
            </div>
            <div className="telemetry-divider" />
            <div className="telemetry-stat">
              <div className="telemetry-val">0.9614</div>
              <div className="telemetry-lbl">ML Fraud Pipeline AUC</div>
            </div>
            <div className="telemetry-divider" />
            <div className="telemetry-stat">
              <div className="telemetry-val">8.60</div>
              <div className="telemetry-lbl">B.Tech CSE CGPA</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive 3D WebGL Kinetic Node */}
        <div className="hero-right">
          <div className="three-glass-card">
            {/* Top Bar of the 3D Viewport */}
            <div className="three-card-header">
              <div className="three-status">
                <span className="signal-led" />
                <span>3D PROTOCOL NODE · REAL-TIME SHADER</span>
              </div>
              <div className="three-tag">WebGL · 60 FPS</div>
            </div>

            {/* Three.js Canvas */}
            <div className="three-viewport">
              <ThreeCanvas />
            </div>

            {/* Bottom floating telemetry chips */}
            <div className="three-card-footer">
              <div className="chip">
                <Cpu size={14} />
                <span>ISO 8583 Bitfield Router</span>
              </div>
              <div className="chip">
                <Layers size={14} />
                <span>POSIX Memory Pool</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
