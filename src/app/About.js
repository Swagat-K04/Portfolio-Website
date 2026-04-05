"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <div className="fade-up" ref={ref}>
      <div className="sec-header">
        <span className="sec-num">01.</span>
        <h2>About Me</h2>
        <div className="sec-line" />
      </div>

      <div className="about-grid">
        <div>
          <p className="about-bio">
            Final-year <strong>CSE student at IIIT Nagpur</strong> (2022–26), building alternate
            payments infrastructure at <strong>Pine Labs (Mosambee)</strong> in Mumbai — QR generation,
            concurrent transaction scheduling, async bank callbacks.
          </p>
          <p className="about-bio">
            I care about systems that are <strong>fast, correct, and observable</strong>.
            Actively looking for full-time SDE roles from June 2026.
          </p>

          <div className="about-highlights">
            {[
              { icon: "⚡", title: "LeetCode Knight", sub: "1800+ rating · 600+ problems" },
              { icon: "🚀", title: "Fraud Detection ML", sub: "AUC 0.9614 · Kafka + XGBoost + Redis" },
              { icon: "💳", title: "Payments Infrastructure", sub: "UPI · BQR · Spring Boot · Java" },
              { icon: "🎓", title: "IIIT Nagpur CSE", sub: "CGPA 8.59 · Batch of 2026" },
            ].map((h) => (
              <div className="highlight-row" key={h.title}>
                <span className="highlight-icon">{h.icon}</span>
                <div className="highlight-text">
                  <h4>{h.title}</h4>
                  <p>{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile card */}
        <div className="profile-card">
          <div className="profile-card-top">
            <div className="profile-initials">SK</div>
            <div className="profile-pname">Swagat Khodkumbhe</div>
            <div className="profile-ptitle">// software-engineer</div>
          </div>
          <div className="profile-card-body">
            {[
              { icon: "📍", label: "Location", val: "Mumbai, Maharashtra" },
              { icon: "🏫", label: "College", val: "IIIT Nagpur · CSE '26" },
              { icon: "💼", label: "Current", val: "Pine Labs (Mosambee)" },
              { icon: "📧", label: "Email", val: "swagatk1004@gmail.com" },
              { icon: "🎯", label: "Available", val: "June 2026 onwards" },
            ].map((r) => (
              <div className="profile-row" key={r.label}>
                <span className="profile-row-icon">{r.icon}</span>
                <div>
                  <div className="profile-row-label">{r.label}</div>
                  <div className="profile-row-val">{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
