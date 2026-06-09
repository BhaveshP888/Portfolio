import { siteData } from "@/lib/data";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Available badge */}
        {siteData.availableForWork && (
          <div
            className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 cyber-tag text-xs font-medium mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>
        )}

        {/* Name */}
        <h1
          className="animate-fade-up font-display text-5xl sm:text-7xl font-bold tracking-tight text-text mb-4"
          style={{ animationDelay: "0.2s" }}
        >
          {siteData.name}
        </h1>

        {/* Role */}
        <p
          className="animate-fade-up text-xl sm:text-2xl text-accent font-medium mb-6"
          style={{ animationDelay: "0.35s" }}
        >
          {siteData.role}
        </p>

        {/* Tagline */}
        <p
          className="animate-fade-up text-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-mono"
          style={{ animationDelay: "0.5s" }}
        >
          <Typewriter text={siteData.tagline} delay={40} />
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-6 justify-center"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#projects"
            className="px-7 py-3 cyber-btn font-medium text-sm"
          >
            View Projects
          </a>
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 cyber-btn-alt font-medium text-sm"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
