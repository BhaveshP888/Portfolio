import { siteData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto reveal">
        {/* Section label */}
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          About
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-8 font-display">
          Who I am
        </h2>

        <div className="max-w-2xl">
          {siteData.about.split("\n").filter(Boolean).map((para, i) => (
            <p key={i} className="text-muted text-base sm:text-lg leading-relaxed mb-4 last:mb-0">
              {para.trim()}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
