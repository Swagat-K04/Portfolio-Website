"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/data/portfolio";

const GH = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;

const metrics = {
  "Real-Time Fraud Detection Pipeline": "AUC 0.9614 · Sub-second delivery",
  "Parallel File Encrypter": "1000+ files · Parallel POSIX execution",
};

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.05 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="fade-up" ref={ref}>
      <div className="sec-header">
        <span className="sec-num">03.</span>
        <h2>Projects</h2>
        <div className="sec-line" />
      </div>

      <div className="proj-featured">
        {featured.map((p) => (
          <div className="proj-card" key={p.name}>
            <div className="proj-top">
              <span className="proj-badge">Featured Project</span>
              <div className="proj-links">
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer"><GH /></a>}
              </div>
            </div>
            <h3 className="proj-title">{p.name}</h3>
            {metrics[p.name] && <div className="proj-metric">{metrics[p.name]}</div>}
            <p className="proj-desc">{p.description}</p>
            <ul className="exp-bullets" style={{marginBottom:14}}>
              {p.bullets.slice(0, 2).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="tags">
              {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {others.length > 0 && (
        <>
          <p className="other-label">Other Projects</p>
          <div className="proj-grid">
            {others.map((p) => (
              <div className="proj-mini" key={p.name}>
                <div className="proj-mini-icon">📁</div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tech.slice(0,4).map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
