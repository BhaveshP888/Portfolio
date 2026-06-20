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
    setMounted(true);
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

  const themeIcon = mounted && resolvedTheme === "light"
    ? <Moon {...iconProps} />
    : <Sun {...iconProps} />;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-3.5 py-2.5 rounded-2xl backdrop-blur-md bg-white/[0.04] border border-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.4)]">
        {items.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="p-2.5 rounded-xl hover:bg-text/5 active:scale-[0.92] transition-all group"
            >
              {item.icon}
            </a>
          ) : (
            <button
              key={item.label}
              onClick={item.action}
              aria-label={item.label}
              className="p-3 rounded-xl hover:bg-white/[0.07] active:scale-[0.92] transition-all group"
            >
              {item.icon}
            </button>
          )
        )}

        <div className="w-px h-5 bg-white/[0.08] mx-1.5" />

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-3 rounded-xl hover:bg-white/[0.07] active:scale-[0.92] transition-all group"
        >
          {themeIcon}
        </button>
      </div>
    </div>
  );
}
