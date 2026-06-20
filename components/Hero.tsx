"use client";

import { motion } from "motion/react";
import { siteData } from "@/lib/data";
import { ArrowRight, GithubLogo } from "@phosphor-icons/react";

export default function Hero() {
  const paragraphs = siteData.about.split('\n').filter(p => p.trim() !== '');
  const handle = siteData.github.split('/').pop() || "username";

  return (
    <section id="hero" className="pt-20 pb-10 sm:pt-24">
      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 mb-8"
      >
        <span className="flex items-center gap-1.5 text-[12px] font-medium text-muted border border-border-color rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </span>
      </motion.div>

      {/* Name + handle */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6"
      >
        <h1 className="text-[28px] sm:text-[32px] font-bold text-text font-display tracking-tight leading-tight">
          {siteData.name}
        </h1>
        <p className="text-muted text-[14px] mt-1">
          @{handle} · {siteData.role}
        </p>
      </motion.div>

      {/* About paragraphs */}
      <div className="space-y-3 mb-8">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted leading-relaxed text-[15px] max-w-[60ch]"
          >
            {p}
          </motion.p>
        ))}
      </div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 flex-wrap"
      >
        <a
          href={`mailto:${siteData.email}`}
          className="inline-flex items-center gap-2 bg-text text-bg px-5 py-2.5 rounded-full font-semibold text-[13px] hover:opacity-85 active:scale-[0.97] transition-all"
        >
          Get in touch
          <ArrowRight weight="bold" size={13} />
        </a>
        <a
          href={siteData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted hover:text-text px-4 py-2.5 rounded-full font-medium text-[13px] border border-border-color hover:border-text/20 active:scale-[0.97] transition-all"
        >
          <GithubLogo size={14} />
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
