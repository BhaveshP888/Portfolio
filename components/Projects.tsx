"use client";

import { motion } from "motion/react";
import { siteData } from "@/lib/data";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import TechIcon from "./TechIcon";
import Image from "next/image";

export default function Projects() {
  const allProjects = siteData.projects;

  return (
    <section id="projects" className="py-10">
      <h2 className="text-[11px] font-mono tracking-widest uppercase text-muted/50 mb-6">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            className="group flex flex-col gap-4 p-4 rounded-3xl transition-all duration-300 backdrop-blur-md bg-glass border border-glass-border shadow-[inset_0_1px_0_var(--glass-shadow-inset)] hover:bg-glass-hover hover:border-glass-border-hover hover:shadow-[inset_0_1px_0_var(--glass-shadow-inset),0_0_28px_rgba(99,102,241,0.10)] hover:-translate-y-[2px]"
          >
            {/* Project Screenshot / Cover Image */}
            {"image" in project && project.image && (
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-glass-border bg-black/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}

            {/* Title & Links Row */}
            <div className="flex items-center justify-between gap-2 px-1">
              <h3 className="font-bold text-[18px] text-text tracking-tight font-display">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0 text-muted">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="hover:text-text transition-colors"
                  >
                    <GithubLogo size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="hover:text-text transition-colors"
                  >
                    <ArrowSquareOut size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] text-muted leading-relaxed px-1 flex-1">
              {project.description}
            </p>

            {/* Bottom Tech-Stack & Status Row */}
            <div className="flex items-end justify-between gap-4 mt-auto pt-3 px-1 border-t border-glass-border">
              {/* Tech stack */}
              <div className="space-y-2">
                <p className="text-[9px] font-mono tracking-wider uppercase text-muted/50">
                  Tech-Stack
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <TechIcon key={t} name={t} className="w-5 h-5 shrink-0" />
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              {"status" in project && project.status && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {project.status}
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
