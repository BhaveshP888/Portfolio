import { siteData } from "@/lib/data";
import TechIcon from "./TechIcon";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3 reveal">
          Work
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 font-display reveal">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {siteData.projects.map((project) => (
            <article
              key={project.title}
              className="reveal group flex flex-col p-6 rounded-xl bg-surface border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 24px 0 #6366f120";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 0 transparent";
              }}
            >
              {/* Title */}
              <h3 className="font-display text-text font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-accent/30 text-accent text-xs font-medium"
                  >
                    <TechIcon name={tag} className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-accent transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-text transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
