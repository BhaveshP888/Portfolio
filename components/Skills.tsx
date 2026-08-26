"use client";

import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/lib/data";
import TechIcon from "./TechIcon";

const CATEGORIES = ["Frontend", "Backend", "Tools"] as const;

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-border">
      <div className="mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-text">
          Technical Stack
        </h2>
        <p className="text-muted text-sm sm:text-base mt-1.5">
          Languages, libraries, and frameworks I use to build scalable products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: catIdx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-4"
          >
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted font-mono">
              {cat}
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteData.skills[cat].map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs sm:text-[13px] text-muted hover:text-text hover:border-border-hover transition-colors cursor-default"
                >
                  <TechIcon name={skill} className="w-4 h-4 shrink-0" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
