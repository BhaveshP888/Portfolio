import { siteData } from "@/lib/data";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 px-6 border-t border-border mt-12">
      <div className="max-w-5xl mx-auto text-center reveal">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Contact
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4 font-display">
          Let&apos;s work together
        </h2>

        <p className="text-muted text-base mb-10 max-w-md mx-auto">
          I&apos;m actively looking for full-time opportunities. If you think I&apos;d be
          a good fit, I&apos;d love to hear from you.
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${siteData.email}`}
          className="inline-block text-2xl sm:text-3xl font-semibold text-text hover:text-accent transition-colors mb-12 underline underline-offset-4 decoration-accent/30 hover:decoration-accent"
        >
          {siteData.email}
        </a>

        {/* Social links */}
        <div className="flex justify-center gap-6 text-sm font-medium mb-16">
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
          >
            LinkedIn ↗
          </a>
          {siteData.resumeUrl && (
            <a
              href={siteData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors"
            >
              Resume ↗
            </a>
          )}
        </div>

        <p className="text-muted text-xs">
          © {year} {siteData.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
