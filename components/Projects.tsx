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
              className="reveal brutal-card group flex flex-col p-6"
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
                    className="flex items-center gap-1.5 px-2.5 py-1 brutal-tag text-xs font-medium"
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
