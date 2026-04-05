"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Animated background */}
      <div className="bg-canvas">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="bg-grid" />
        <div className="bg-noise" />
      </div>

      <div id="app">
        <Navbar active={active} />
        <main>
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
          <footer className="footer">
            <span>Designed & Built by <a href="https://github.com/Swagat-K04">Swagat Khodkumbhe</a></span>
            <span>IIIT Nagpur · CSE 2026</span>
          </footer>
        </main>
      </div>
    </>
  );
}
