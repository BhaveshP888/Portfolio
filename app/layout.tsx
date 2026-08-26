import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import InteractiveBackground from "@/components/InteractiveBackground";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-var",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-var",
});

export const metadata: Metadata = {
  title: "Bhavesh Patil — Full-Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, and Node.js. View my projects and get in touch.",
  openGraph: {
    title: "Bhavesh Patil — Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, and Node.js. View my projects and get in touch.",
    url: "https://github.com/BhaveshP888",
    siteName: "Bhavesh Patil Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavesh Patil — Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, and Node.js. View my projects and get in touch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-text antialiased min-h-screen flex justify-center pb-28 sm:pb-36 transition-colors duration-300">
        {/*
          THESIS: Studio Showcase developer portfolio leading with full-bleed, cinematic project artifacts and restrained typography over artificial widgets or AI clichés.
          OWN-WORLD: Obsidian ground, subtle studio lighting, hairline glass borders, vibrant brand badges, high-contrast display type.
          STORY: Technical recruiters instantly see verified working software, architecture depth, and direct communication access.
          FIRST VIEWPORT: Architectural name and role statement, live availability pulse, direct email copy pill, flowing immediately into the primary featured software showcase.
          FORM: Studio Showcase portfolio (Experience mode).
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <InteractiveBackground />
          <div className="relative z-10 w-full max-w-[880px] px-6 sm:px-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
