import Hero      from "@/components/Hero";
import Skills    from "@/components/Skills";
import Projects  from "@/components/Projects";
import Dock      from "@/components/Dock";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <hr className="border-t border-border-color opacity-50" />
      <Skills />
      <hr className="border-t border-border-color opacity-50" />
      <Projects />
      <Dock />
    </main>
  );
}
