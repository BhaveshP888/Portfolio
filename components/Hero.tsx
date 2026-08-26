"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { siteData } from "@/lib/data";
import { GithubLogo, Copy, Check, ArrowUpRight } from "@phosphor-icons/react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn("Failed to copy email: ", err);
    }
  };

  return (
    <section id="hero" className="pt-20 pb-14 sm:pt-28 sm:pb-20">
      <div className="max-w-3xl space-y-8">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-muted bg-surface border border-border px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-text font-display tracking-tight leading-[1.1]">
            {siteData.name}
          </h1>
          <p className="text-lg sm:text-xl text-muted font-medium">
            {siteData.role} crafting resilient web systems and full-stack software.
          </p>
        </motion.div>

        {/* Narrative Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-[17px] text-muted leading-relaxed max-w-[65ch]"
        >
          Specializing in React, Next.js, and Node.js. I design clean, high-performance interfaces
          and engineer dependable backend architectures with PostgreSQL, MongoDB, and Prisma.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 pt-2 flex-wrap"
        >
          {/* Email CTA with Copy Action */}
          <div className="inline-flex items-center bg-text text-bg rounded-full p-1 pl-4.5 shadow-sm hover:opacity-90 active:scale-[0.98] transition-all group">
            <a
              href={`mailto:${siteData.email}`}
              className="font-semibold text-sm tracking-tight pr-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm"
            >
              Get in touch
            </a>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="flex items-center justify-center w-7 h-7 rounded-full bg-bg/10 hover:bg-bg/20 active:scale-90 transition-all text-bg cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              title="Copy email to clipboard"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check weight="bold" size={13} className="text-bg animate-in fade-in zoom-in duration-200" />
              ) : (
                <Copy size={13} className="text-bg" />
              )}
            </button>
          </div>

          {/* GitHub Link */}
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-text px-5 py-2.5 rounded-full font-medium text-sm border border-border hover:border-border-hover bg-surface/60 hover:bg-surface active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            <GithubLogo size={16} />
            <span>GitHub</span>
            <ArrowUpRight size={13} className="text-muted/60" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
