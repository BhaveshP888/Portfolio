"use client";

import { motion } from "motion/react";
import { siteData } from "@/lib/data";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import TechIcon from "./TechIcon";
import Image from "next/image";

export default function Projects() {
  const allProjects = siteData.projects;

  return (
    <section id="projects" className="py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-text">
          Featured Projects
        </h2>
        <p className="text-muted text-base mt-2 max-w-xl">
          Selected full-stack web applications, engineering experiments, and production deployments.
        </p>
      </div>

      {/* Full-Width Showcase Stack */}
      <div className="space-y-14 sm:space-y-20">
        {allProjects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col gap-6 rounded-3xl p-5 sm:p-7 backdrop-blur-xl bg-surface/60 border border-border hover:border-border-hover transition-all duration-300 shadow-[var(--glass-shadow)]"
          >
            {/* Cinematic Visual Frame */}
            {"image" in project && project.image && (
              <div
                suppressHydrationWarning
                className="relative w-full overflow-hidden rounded-2xl border border-border bg-black/20"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project preview screenshot`}
                  title={project.title}
                  width={1896}
                  height={988}
                  sizes="(max-width: 880px) 100vw, 840px"
                  className="w-full h-auto block rounded-2xl"
                  suppressHydrationWarning
                />
              </div>
            )}

            {/* Project Content & Links */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-text font-display tracking-tight">
                  {project.title}
                </h3>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-text text-bg hover:opacity-90 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={14} weight="bold" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-muted hover:text-text border border-border hover:border-border-hover bg-surface active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    >
                      <GithubLogo size={15} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted text-sm sm:text-[15px] leading-relaxed max-w-[75ch]">
                {project.description}
              </p>

              {/* Tech Stack & Status Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border">
                {/* Tech Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <div
                      key={t}
                      title={t}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-muted hover:text-text hover:border-border-hover transition-colors cursor-default"
                    >
                      <TechIcon name={t} className="w-3.5 h-3.5 shrink-0" />
                      <span className="font-medium">{t}</span>
                    </div>
                  ))}
                </div>

                {/* Status Indicator */}
                {"status" in project && project.status && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
