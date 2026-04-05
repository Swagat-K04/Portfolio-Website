"use client";
import { useEffect, useRef } from "react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <div className="fade-up" ref={ref}>
      <div className="sec-header">
        <span className="sec-num">04.</span>
        <h2>Skills & Tech</h2>
        <div className="sec-line" />
      </div>
      <div className="skills-wrap">
        {Object.entries(skills).map(([cat, items]) => (
          <div className="skill-card" key={cat}>
            <div className="skill-cat">{cat}</div>
            <div className="skill-pills">
              {items.map((s) => <span className="skill-pill" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
