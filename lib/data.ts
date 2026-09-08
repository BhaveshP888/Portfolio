export const siteData = {
  name: "Bhavesh Patil",
  role: "Full-Stack Developer",
  tagline: "I love to build modern web apps and bring new ideas to life.",
  email: "plbhavesh88@gmail.com",
  github: "https://github.com/BhaveshP888",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf", // drop resume.pdf into /public when ready
  availableForWork: true,

  about: `I'm a full-stack developer who loves turning raw ideas into production-ready products using React.js and Node.js.
I like bringing new and interesting ideas to life by building full-stack applications.
I build apps with robust APIs using Node.js and manage databases with PostgreSQL and MongoDB.
I care about writing easily readable and maintainable code and shipping products that solve real-world problems.`,

  skills: {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "shadcn/ui",
      "HTML",
      "CSS",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Fastify",
      "Redis",
      "BullMQ",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Prisma ORM",
    ],
    Tools: ["Docker", "Bun", "Turborepo", "Git", "CI/CD"],
  },

  projects: [
    {
      title: "Logitrack",
      description:
        "LogiTrack is a modern, real-time logistics and supply chain orchestration platform. It enables administrators to manage complex global infrastructures, monitor real-time telemetrics, and optimize routing across fleets with military-grade precision. The platform also provides a dedicated driver portal for route execution and checkpoint tracking.",
      tech: ["React.js", "Redux Toolkit", "TailwindCSS", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "JWT Authentication"],
      liveUrl: "https://logitrack-beta.vercel.app",
      githubUrl: "https://github.com/BhaveshP888/logitrack",
      image: "/logitrack_hero.png",
      status: "Completed",
    },
    {
      title: "DecodeAi",
      description:
        "Decode is a technical engine and web interface for parsing, normalizing, and analyzing ingredient labels from foods, beverages, and pharmaceuticals. It leverages generative AI to identify additives, evaluate chemical safety, and track cumulative compound exposure over time.",
      tech: ["Next.js", "TailwindCSS", "TypeScript", "PostgreSQL", "Prisma ORM", "Supabase", "Gemini API", "Supabase Auth"],
      liveUrl: "https://decode-dusky.vercel.app/",
      githubUrl: "https://github.com/BhaveshP888/Decode",
      image: "/decodeai_hero.png",
      status: "Completed",
    },
    {
      title: "Tessera",
      description:
        "A high-performance, local-first, zero-knowledge bookmark manager and encrypted private vault. Features on-device XChaCha20-Poly1305 authenticated encryption, SQLite FTS5 prefix indexing with Sørensen–Dice trigram fuzzy search, vector clock causality resolution, and a capability-gated extension runtime.",
      tech: ["React 19", "TypeScript", "Fastify", "SQLite", "Docker", "Bun"],
      liveUrl: "",
      githubUrl: "https://github.com/BhaveshP888/Tessera",
      image: "/tessera_hero.png",
      status: "Completed",
    },
    {
      title: "DisQueue",
      description:
        "A distributed background task queue and rate-limiting microservice engine. Implements atomic Lua-based sliding-window ingress rate limiting on Redis Sorted Sets (ZSET), BullMQ worker orchestration with exponential backoff retries, dead-letter queue (DLQ) state escalation, and a real-time React telemetry dashboard.",
      tech: ["Node.js", "Express.js", "Redis", "BullMQ", "PostgreSQL", "Prisma ORM", "Docker", "React"],
      liveUrl: "",
      githubUrl: "https://github.com/BhaveshP888/DisQueue",
      image: "",
      status: "Completed",
    },
  ],
};

export type Project = typeof siteData.projects[number];
