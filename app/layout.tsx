import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  description: "Full-stack developer specializing in React, Next.js and Node.js. View my projects and get in touch.",
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
      <body className="bg-bg text-text antialiased min-h-screen flex justify-center pb-32 transition-colors duration-300">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          {/* Background orbs — purely CSS, GPU-only, reduced-motion aware */}
          <div className="orb orb-a" aria-hidden="true" />
          <div className="orb orb-b" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-[680px] px-6">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
