import { siteData } from "@/lib/data";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 sm:pt-20 pb-20 border-t border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-text font-display">
            {siteData.name}
          </p>
          <p className="text-xs text-muted" suppressHydrationWarning>
            &copy; {year} · Built with Next.js & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-muted">
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-text transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-xs"
          >
            <span>GitHub</span>
            <ArrowUpRight size={13} className="opacity-60" />
          </a>
          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-text transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-xs"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={13} className="opacity-60" />
          </a>
          <a
            href={`mailto:${siteData.email}`}
            className="inline-flex items-center gap-1 hover:text-text transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-xs"
          >
            <span>Email</span>
            <ArrowUpRight size={13} className="opacity-60" />
          </a>
        </div>
      </div>
    </footer>
  );
}
