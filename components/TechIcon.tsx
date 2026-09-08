import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MongodbOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  DockerOriginal,
  GithubactionsOriginal,
  GitOriginal,
  ReduxOriginal,
  SupabaseOriginal,
  RedisOriginal,
  SqliteOriginal,
  FastifyOriginal,
  BunOriginal,
} from "devicons-react";
import { SiShadcnui, SiJsonwebtokens, SiGoogle, SiOpenai } from "react-icons/si";

const iconMap: Record<string, React.ElementType> = {
  "HTML": Html5Original,
  "CSS": Css3Original,
  "JavaScript": JavascriptOriginal,
  "TypeScript": TypescriptOriginal,
  "React": ReactOriginal,
  "React.js": ReactOriginal,
  "React 19": ReactOriginal,
  "Next.js": NextjsOriginal,
  "Tailwind CSS": TailwindcssOriginal,
  "TailwindCSS": TailwindcssOriginal,
  "shadcn/ui": SiShadcnui,
  "Node.js": NodejsOriginal,
  "Express.js": ExpressOriginal,
  "MongoDB": MongodbOriginal,
  "PostgreSQL": PostgresqlOriginal,
  "Prisma": PrismaOriginal,
  "Prisma ORM": PrismaOriginal,
  "Docker": DockerOriginal,
  "CI/CD": GithubactionsOriginal,
  "Git": GitOriginal,
  "Redux Toolkit": ReduxOriginal,
  "Supabase": SupabaseOriginal,
  "Supabase Auth": SupabaseOriginal,
  "Gemini API": SiGoogle,
  "JWT Authentication": SiJsonwebtokens,
  "OpenAI": SiOpenai,
  "Redis": RedisOriginal,
  "BullMQ": RedisOriginal,
  "SQLite": SqliteOriginal,
  "Fastify": FastifyOriginal,
  "Bun": BunOriginal,
};

const colorMap: Record<string, string> = {
  "Gemini API": "#4285F4",
  "JWT Authentication": "#D63AFF",
  "OpenAI": "#10A37F",
};

export default function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  
  const color = colorMap[name];
  return <Icon className={className} style={color ? { color } : undefined} />;
}
