"use client";

import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/lib/data";
import TechIcon from "./TechIcon";

const CATEGORIES = ["Frontend", "Backend", "Tools"] as const;

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="py-10">
      <div className="space-y-6">
        {CATEGORIES.map((cat, catIdx) => (
          <div key={cat}>
            <p className="text-[11px] font-mono tracking-widest uppercase text-muted/50 mb-3">
              {cat}
            </p>
            <div className="flex flex-wrap gap-2">
              {siteData.skills[cat].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: catIdx * 0.08 + i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border-color text-[13px] text-muted hover:text-text hover:border-text/20 transition-colors cursor-default"
                >
                  <TechIcon name={skill} className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
