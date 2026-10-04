"use client";
import React, { useState } from "react";
import { meta } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Terminal,
  Award,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    // Construct mailto link
    const mailtoUrl = `mailto:${meta.email}?subject=Inquiry from ${encodeURIComponent(
      formState.name || "Engineering Recruiter"
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <Mail size={15} />
          <span>INITIALIZE COMM CHANNEL</span>
        </div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Open to full-time Software Engineering roles, distributed systems discussions, and low-latency architecture.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left card: Direct channels */}
        <div className="contact-info-card">
          <div className="contact-status-card">
            <div className="status-indicator-ring">
              <span className="dot-live" />
            </div>
            <div>
              <div className="status-headline">Available for SDE Roles</div>
              <div className="status-sub">Targeting full-time opportunities (2026 onwards)</div>
            </div>
          </div>

          <div className="direct-channel-box">
            <div className="channel-lbl">Primary Email</div>
            <div className="channel-action-row">
              <span className="channel-val">{meta.email}</span>
              <button
                type="button"
                className="btn-copy-email"
                onClick={handleCopyEmail}
                title="Copy Email"
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          <div className="contact-meta-list">
            <div className="contact-meta-item">
              <MapPin size={16} className="text-amber" />
              <span>Location: <strong>Mumbai, Maharashtra, India</strong></span>
            </div>
            <div className="contact-meta-item">
              <Terminal size={16} className="text-cyan" />
              <span>Education: <strong>IIIT Nagpur (B.Tech CSE, 8.60 CGPA)</strong></span>
            </div>
            <div className="contact-meta-item">
              <Award size={16} className="text-purple" />
              <span>LeetCode: <strong>Knight (1800+ Peak Rating)</strong></span>
            </div>
          </div>

          {/* Social Icons Bar */}
          <div className="contact-social-bar">
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <GithubIcon size={17} />
              <span>GitHub</span>
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <LinkedinIcon size={17} />
              <span>LinkedIn</span>
            </a>
            <a
              href={meta.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <LeetCodeIcon size={16} />
              <span>LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right card: Fast Dispatch Form */}
        <div className="contact-form-card">
          <div className="form-card-header">
            <Sparkles size={16} className="text-emerald" />
            <span>Direct Message Dispatch</span>
          </div>

          <form onSubmit={handleSendMessage} className="contact-form">
            <div className="form-group">
              <label>Your Name / Organization</label>
              <input
                type="text"
                placeholder="e.g. Technical Recruiter / Engineering Lead"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Your Email Address *</label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Message / Opportunity Details *</label>
              <textarea
                rows={4}
                required
                placeholder="Hi Swagat, we'd love to connect regarding our backend / systems engineering role..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-send-dispatch">
              <Send size={16} />
              <span>{sent ? "Prepared in Email Client!" : "Dispatch Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
