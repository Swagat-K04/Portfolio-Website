"use client";
import { useEffect, useRef, useState } from "react";
import { meta } from "@/data/portfolio";

const WORDS = ["Backend Systems", "Payment APIs", "Distributed Infra", "Real-Time Pipelines"];

export default function Hero() {
  const ref = useRef(null);
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    setTimeout(() => ref.current?.classList.add("visible"), 100);
  }, []);

  useEffect(() => {
    const word = WORDS[idx];
    let t;
    if (!del && chars.length < word.length)
      t = setTimeout(() => setChars(word.slice(0, chars.length + 1)), 75);
    else if (!del && chars.length === word.length)
      t = setTimeout(() => setDel(true), 2200);
    else if (del && chars.length > 0)
      t = setTimeout(() => setChars(chars.slice(0, -1)), 40);
    else { setDel(false); setIdx((i) => (i + 1) % WORDS.length); }
    return () => clearTimeout(t);
  }, [chars, del, idx]);

  return (
    <div className="hero-wrap fade-up" ref={ref}>
      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open to full-time SDE roles · June 2026
        </div>

        <h1 className="hero-h1">
          Hi, I'm <span className="grad">Swagat.</span><br />
          I build
        </h1>
        <h1 className="hero-h1" style={{ fontFamily: "var(--mono)", fontSize: "clamp(28px,3.5vw,44px)", color: "var(--cyan)", letterSpacing: "-1px", marginBottom: 24, minHeight: "1.2em" }}>
          {chars}<span style={{ display:"inline-block", width:3, height:"0.85em", background:"var(--cyan)", verticalAlign:"middle", marginLeft:2, animation:"blink 1s step-end infinite", borderRadius:1 }} />
        </h1>

        <p className="hero-sub">
          Software engineer at <strong>Pine Labs (Mosambee)</strong> building payments
          infrastructure. Backend-first, systems-obsessed, CP addict.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-g">View Projects</a>
          <a href="#contact" className="btn-o">Get In Touch</a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-n">600+</div>
            <div className="stat-l">LC Problems</div>
          </div>
          <div className="stat-item">
            <div className="stat-n">1800+</div>
            <div className="stat-l">LC Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-n">8.59</div>
            <div className="stat-l">CGPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-n">10mo</div>
            <div className="stat-l">Internship</div>
          </div>
        </div>
      </div>

      {/* RIGHT — visual cards */}
      <div className="hero-right">
        <div className="hero-card">
          <div className="hcard-top">
            <span className="hcard-label">Current Role</span>
            <span className="hcard-icon">🏢</span>
          </div>
          <div className="hcard-val">Pine Labs</div>
          <div className="hcard-sub">SWE Intern · Mosambee · Mumbai</div>
          <div className="hcard-pill pill-cyan" style={{marginTop:10}}>Alternate Payments · Sept 2025</div>
        </div>

        <div className="hero-card-row">
          <div className="hero-card">
            <div className="hcard-top">
              <span className="hcard-label">LeetCode</span>
              <span className="hcard-icon">⚡</span>
            </div>
            <div className="hcard-val">Knight</div>
            <div className="hcard-sub">1800+ Rating</div>
            <div className="hcard-pill pill-green">600+ Solved</div>
          </div>
          <div className="hero-card">
            <div className="hcard-top">
              <span className="hcard-label">College</span>
              <span className="hcard-icon">🎓</span>
            </div>
            <div className="hcard-val" style={{fontSize:18}}>IIIT Nagpur</div>
            <div className="hcard-sub">CSE · Batch 2026</div>
            <div className="hcard-pill pill-purple">CGPA 8.59</div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hcard-top">
            <span className="hcard-label">Fraud Detection Pipeline</span>
            <span className="hcard-icon">🔍</span>
          </div>
          <div className="hcard-val" style={{fontSize:20}}>AUC 0.9614</div>
          <div className="hcard-sub">XGBoost · Kafka · FastAPI · Redis</div>
          <div style={{display:"flex", gap:6, marginTop:10, flexWrap:"wrap"}}>
            <span className="hcard-pill pill-green">Sub-second latency</span>
            <span className="hcard-pill pill-purple">SHAP explainability</span>
          </div>
        </div>
      </div>
    </div>
  );
}
