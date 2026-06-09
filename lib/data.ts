export const siteData = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline: "I build fast, scalable web apps — from database to deployment.",
  email: "you@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf", // drop resume.pdf into /public when ready
  availableForWork: true,

  about: `I'm a full-stack developer who loves turning ideas into production-ready products.
I work across the entire stack — from crafting clean UIs in React and Next.js to designing
robust APIs with Node.js and managing databases with PostgreSQL and MongoDB.
I care about writing maintainable code and shipping things that actually work.`,

  skills: {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    Backend:  ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM"],
    Tools:    ["Docker", "CI/CD", "Git"],
  },

  projects: [
    {
      title: "Project One",
      description:
        "A full-stack web application that does something cool. Built with Next.js on the frontend and Node.js + PostgreSQL on the backend.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
      liveUrl: "https://project-one.vercel.app",
      githubUrl: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description:
        "A real-time application with WebSocket support. Features user authentication, live updates, and a clean dashboard.",
      tech: ["React", "Express.js", "MongoDB", "Docker"],
      liveUrl: "https://project-two.vercel.app",
      githubUrl: "https://github.com/yourusername/project-two",
    },
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
  ],
};

export type Project = typeof siteData.projects[number];
