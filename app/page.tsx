"use client";

import { useEffect } from "react";
import Navbar    from "@/components/Navbar";
import Hero      from "@/components/Hero";
import About     from "@/components/About";
import Skills    from "@/components/Skills";
import Projects  from "@/components/Projects";
import Contact   from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Projects />
      <Contact />
    </main>
  );
}
