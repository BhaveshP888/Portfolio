import { siteData } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-orb"
        style={{
          background: "radial-gradient(circle, #6366f133 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Available badge */}
        {siteData.availableForWork && (
          <div
            className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-8"
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
          className="animate-fade-up text-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: "0.5s" }}
        >
          {siteData.tagline}
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"
          >
            View Projects
          </a>
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-lg border border-border text-text font-medium text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
