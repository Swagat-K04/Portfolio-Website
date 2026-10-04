"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemsHud from "@/components/SystemsHud";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { meta } from "@/data/portfolio";
import { Terminal, ArrowUp } from "lucide-react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Background ambient lighting and fine sub-pixel grid */}
      <div className="bg-canvas-layer">
        <div className="ambient-mesh-radial-1" />
        <div className="ambient-mesh-radial-2" />
        <div className="micro-grid-pattern" />
        <div className="noise-texture-overlay" />
      </div>

      <div id="app-root" className="app-layout">
        <Navbar />

        <main className="main-content">
          <Hero />
          <SystemsHud />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* High-Craft Systems Footer */}
        <footer className="systems-footer">
          <div className="footer-container">
            <div className="footer-left">
              <div className="footer-brand">
                <span className="footer-status-dot" />
                <span className="footer-brand-title">SWAGAT KHODKUMBHE</span>
              </div>
              <p className="footer-tagline">
                Software Engineer · Pine Labs (Mosambee) · IIIT Nagpur (CGPA: 8.60)
              </p>
            </div>

            <div className="footer-center">
              <div className="footer-telemetry-tag">
                <Terminal size={14} className="text-emerald" />
                <span>ISO 8583 · POSIX IPC · C++20 · Kafka · Spring Boot</span>
              </div>
            </div>

            <div className="footer-right">
              <div className="footer-links">
                <a
                  href={meta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
                <span className="footer-sep">·</span>
                <a
                  href={meta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
                <span className="footer-sep">·</span>
                <a
                  href={meta.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LeetCode
                </a>
                <span className="footer-sep">·</span>
                <a
                  href={meta.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Resume
                </a>
              </div>
              <div className="footer-copy">
                © {new Date().getFullYear()} Swagat Khodkumbhe. Built for high-throughput performance.
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Scroll to Top button */}
        {showScrollTop && (
          <button
            className="scroll-to-top-btn"
            onClick={scrollToTop}
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </button>
        )}
      </div>
    </>
  );
}
