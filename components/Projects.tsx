"use client";

import { motion } from "motion/react";
import { siteData } from "@/lib/data";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";

export default function Projects() {
  const visibleProjects = siteData.projects.filter(
    (p) => p.title !== "Project Three" && p.title !== "Project Four",
  );
  const allProjects = siteData.projects;

  return (
    <section id="projects" className="py-10">
      {/* Section label */}
      <p className="text-[11px] font-mono tracking-widest uppercase text-muted/50 mb-6">
        Work
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {allProjects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col gap-3 p-5 rounded-2xl transition-all duration-300 backdrop-blur-md bg-white/[0.03] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-white/[0.06] hover:border-white/[0.22] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_0_28px_rgba(99,102,241,0.10)] hover:-translate-y-[2px]"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-[15px] text-text leading-snug tracking-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source`}
                    className="text-muted hover:text-text transition-colors"
                  >
                    <GithubLogo size={15} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="text-muted hover:text-text transition-colors"
                  >
                    <ArrowSquareOut size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] text-muted leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-border-color text-muted/70"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md text-muted/30">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
