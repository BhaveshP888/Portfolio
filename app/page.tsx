import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Dock from "@/components/Dock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Projects />
      <Skills />
      <Footer />
      <Dock />
    </main>
  );
}
