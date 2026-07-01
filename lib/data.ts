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
I build apps with robust APIs using Node.js & Express.js and manage databases with PostgreSQL and MongoDB.
I care about writing easily readable and maintainable code and shipping products that solve real-world problems.`,

  skills: {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    Backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM"],
    Tools: ["Docker", "CI/CD", "Git"],
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
    /*
    {
      title: "Project Three",
      description:
        "A REST API service with full CI/CD pipeline. Containerized with Docker and deployed automatically on push to main.",
      tech: ["Node.js", "PostgreSQL", "Docker", "CI/CD"],
      liveUrl: null,
      githubUrl: "https://github.com/yourusername/project-three",
    },
    {
      title: "Project Four",
      description:
        "A MERN stack application with JWT authentication, role-based access control, and a responsive frontend.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "https://project-four.vercel.app",
      githubUrl: "https://github.com/yourusername/project-four",
    },
    */
  ],
};

export type Project = typeof siteData.projects[number];
