"use client";

import { siteData } from "@/lib/data";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  House,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  File,
  Sun,
  Moon,
} from "@phosphor-icons/react";

export default function Dock() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const iconProps = { size: 18, className: "text-muted group-hover:text-text transition-colors" };

  const items: Array<{
    icon: React.ReactNode;
    href?: string;
    action?: () => void;
    label: string;
    external?: boolean;
  }> = [
    { icon: <House {...iconProps} />, href: "#hero", label: "Top" },
    { icon: <GithubLogo {...iconProps} />, href: siteData.github, label: "GitHub", external: true },
    { icon: <LinkedinLogo {...iconProps} />, href: siteData.linkedin, label: "LinkedIn", external: true },
    { icon: <EnvelopeSimple {...iconProps} />, href: `mailto:${siteData.email}`, label: "Email" },
    { icon: <File {...iconProps} />, href: siteData.resumeUrl, label: "Resume" },
  ];

  const themeIcon =
    mounted && resolvedTheme === "light" ? (
      <Moon {...iconProps} />
    ) : (
      <Sun {...iconProps} />
    );

  return (
    <nav
      aria-label="Quick Navigation Dock"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-1/3 md:left-auto md:right-8 lg:right-12 md:translate-x-0 z-50 transition-all duration-300"
    >
      <div className="flex md:flex-col items-center gap-1 p-2 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-surface/85 border border-border shadow-[var(--glass-shadow)]">
        {items.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="p-2.5 sm:p-3 rounded-xl hover:bg-surface-hover active:scale-[0.92] transition-all group cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              {item.icon}
            </a>
          ) : (
            <button
              key={item.label}
              type="button"
              onClick={item.action}
              aria-label={item.label}
              title={item.label}
              className="p-2.5 sm:p-3 rounded-xl hover:bg-surface-hover active:scale-[0.92] transition-all group cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              {item.icon}
            </button>
          ),
        )}

        <div className="w-px h-5 md:w-5 md:h-px bg-border mx-1 md:mx-0 md:my-1" />

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
          className="p-2.5 sm:p-3 rounded-xl hover:bg-surface-hover active:scale-[0.92] transition-all group cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
        >
          {themeIcon}
        </button>
      </div>
    </nav>
  );
}
