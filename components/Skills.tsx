import { siteData } from "@/lib/data";
import TechIcon from "./TechIcon";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto reveal">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Skills
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 font-display">
          Tech Stack
        </h2>

        <div className="space-y-8">
          {Object.entries(siteData.skills).map(([group, items]) => (
            <div key={group}>
              <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-4">
                {group}
              </p>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-text text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                  >
                    <TechIcon name={skill} className="w-4 h-4" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
