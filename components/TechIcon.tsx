import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGithubactions,
  SiGit,
} from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
  "HTML": SiHtml5,
  "CSS": SiCss,
  "JavaScript": SiJavascript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Prisma": SiPrisma,
  "Prisma ORM": SiPrisma,
  "Docker": SiDocker,
  "CI/CD": SiGithubactions,
  "Git": SiGit,
};

export default function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
