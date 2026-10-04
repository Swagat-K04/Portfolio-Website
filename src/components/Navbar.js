"use client";
import React, { useState, useEffect } from "react";
import { meta } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Brand */}
        <a href="#" className="nav-brand">
          <span className="brand-dot" />
          <span className="brand-name">SWAGAT.K</span>
          <span className="brand-sub">SWE @ PINE LABS</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links-desktop">
          <a href="#hud" className="nav-link">
            <span>Systems HUD</span>
          </a>
          <a href="#experience" className="nav-link">
            <span>Experience</span>
          </a>
          <a href="#projects" className="nav-link">
            <span>Projects</span>
          </a>
          <a href="#skills" className="nav-link">
            <span>Skills</span>
          </a>
          <a href="#contact" className="nav-link">
            <span>Contact</span>
          </a>
        </div>

        {/* Right CTA */}
        <div className="nav-actions">
          <a
            href={meta.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile menu toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu">
          <a
            href="#hud"
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Systems HUD
          </a>
          <a
            href="#experience"
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
