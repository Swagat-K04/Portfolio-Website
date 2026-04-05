"use client";
import { useEffect, useRef } from "react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <div className="fade-up" ref={ref}>
      <div className="sec-header">
        <span className="sec-num">02.</span>
        <h2>Experience</h2>
        <div className="sec-line" />
      </div>
      {experience.map((e) => (
        <div className="exp-item" key={e.company}>
          <div className="exp-head">
            <div>
              <div className="exp-co">{e.company}</div>
              <div className="exp-role">{e.role}</div>
            </div>
            <div className="exp-meta-r">
              <div className="exp-loc">{e.location}</div>
              <div className="exp-dur">{e.duration}</div>
            </div>
          </div>
          <ul className="exp-bullets">
            {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="tags">
            {e.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}
