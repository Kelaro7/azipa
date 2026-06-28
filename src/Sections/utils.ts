interface Responsibility {
  title: string;
  icon: string;
  example: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: Responsibility[];
}

interface Project {
  name: string;
  url: string;
  description: string;
  stack: string;
  logo: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Developer – Frontend",
    company: "Assa Abloy",
    date: "2026 – Present",
    responsibilities: [
      {
        title: "Greenfield Product Development",
        icon: "Code2",
        example: "Architecting a brand-new product from scratch with React 19, TypeScript, and GraphQL",
        description:
          "Actively involved from day one in architecting and developing a brand-new product from scratch using React 19 and TypeScript, leveraging GraphQL for modern, efficient data fetching.",
      },
      {
        title: "Legacy Modernization & Platform Expansion",
        icon: "GitBranch",
        example: "Refactoring Blazor systems into React 19 across Desktop, Kiosk, Tablet, and Mobile",
        description:
          "Refactored legacy Blazor systems into modern React 19 applications across multiple platforms (Desktop, Kiosk, Tablet, and Mobile apps), streamlining integrations via OpenAPI-driven, type-safe REST API client generation.",
      },
      {
        title: "AI-Driven Efficiency",
        icon: "TrendingUp",
        example: "Accelerating development with Cursor AI in the daily workflow",
        description:
          "Accelerated development lifecycles and optimized code quality by integrating advanced AI-assisted coding tools (Cursor AI) into the daily workflow.",
      },
      {
        title: "Design Systems",
        icon: "Palette",
        example: "Company-wide Design System and UI Component Library",
        description:
          "Contributed to the implementation of a company-wide Design System and UI Component Library to ensure visual consistency and drastically reduce time-to-market.",
      },
    ],
  },
  {
    title: "Software Engineer – Frontend",
    company: "Byborg Enterprises",
    date: "Nov 2023 – Oct 2025",
    responsibilities: [
      {
        title: "Web Development",
        icon: "Code2",
        example: "Big admin project with multiple features and modules",
        description:
          "Developed scalable, high-performance web applications using React.js, Next.js, TypeScript, and Redux, ensuring optimal performance and maintainability for a product used by millions of users.",
      },
      {
        title: "API Integration",
        icon: "Plug",
        example: "Redux-Saga for handling PHP RESTful APIs",
        description:
          "Integrated RESTful APIs built with Node.js and PHP, enabling dynamic, data-driven features across multiple modules.",
      },
      {
        title: "Analytics Implementation",
        icon: "BarChart3",
        example: "Self-hosted Matomo analytics for the main project",
        description:
          "Implemented analytics from scratch and integrated it into the project, providing advanced tracking and user insights for product optimization.",
      },
      {
        title: "Agile Collaboration",
        icon: "Users",
        example:
          "Working in 12-15 people team (PO, BA, EM, Leads, QA, DevOps, Backend, Frontend)",
        description:
          "Collaborated within Agile (Scrum and Kanban) teams to deliver features on schedule while maintaining high quality and consistency.",
      },
      {
        title: "Code Quality",
        icon: "FileCheck",
        example: "Conducting and participating in code reviews",
        description:
          "Adhered to best coding practices, ensuring clean, reusable, and maintainable code following industry standards.",
      },
      {
        title: "UI/UX Enhancement",
        icon: "Palette",
        example: "Testing UX/UI across multiple devices and browsers",
        description:
          "Contributed to UI/UX improvements, enhancing accessibility, responsiveness, and overall user experience across platforms.",
      },
      {
        title: "Design Implementation",
        icon: "Paintbrush",
        example: "Collaborating with designers on Figma designs",
        description:
          "Translated Figma designs into pixel-perfect, responsive components aligned with design and branding guidelines.",
      },
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Byborg Enterprises",
    date: "Mar 2023 – Jun 2023",
    responsibilities: [
      {
        title: "Tech Stack Learning",
        icon: "BookOpen",
        example: "React, TypeScript, Redux, Redux-Saga, Chakra UI",
        description:
          "Gained hands-on experience with modern frontend technologies and libraries.",
      },
      {
        title: "Component Development",
        icon: "Boxes",
        example: "Reusable UI components and state management",
        description:
          "Assisted in building reusable components and managing application state.",
      },
      {
        title: "Code Practices",
        icon: "GitBranch",
        example: "Mentorship on clean code and architecture",
        description:
          "Worked under mentorship to improve component architecture and clean code practices.",
      },
      {
        title: "Team Collaboration",
        icon: "MessageSquare",
        example: "Team meetings and code reviews",
        description:
          "Participated in team meetings and code reviews to enhance collaboration and technical quality.",
      },
    ],
  },
  {
    title: "Security Officer",
    company: "Docler Holding (Byborg Enterprises)",
    date: "2019 – 2023",
    responsibilities: [
      {
        title: "Security Operations",
        icon: "Shield",
        example: "Site security and personnel safety",
        description:
          "Ensured the safety and security of personnel and property across company sites.",
      },
      {
        title: "Career Transition",
        icon: "TrendingUp",
        example: "From security to software development",
        description:
          "Inspired by the innovative IT environment, transitioned toward software development and began studies in software technology.",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "www.hashtagselfie.hu",
    url: "https://www.hashtagselfie.hu/",
    description: `Fully developed by me. Includes a complete backend system and an admin page to handle bookings from the site. Features automated emails, booking status changes, and more.`,
    stack: "MERN (MongoDB, Express, React, Node.js) + Next.js, Vercel, Render",
    logo: "/hashtagselfie-logo.png",
  },
  {
    name: "www.repteresparkolo.hu",
    url: "https://www.repteresparkolo.hu/",
    description: `I maintain this page and develop new features. The landing page is built with Wordpress. The admin page is custom-built using PHP (Laravel), vanilla JS, HTML, and CSS.`,
    stack: "Wordpress, Laravel, vanilla JS, HTML, CSS",
    logo: "/repteresparkolo-logo.webp",
  },
  {
    name: "www.magyandrol.hu",
    url: "https://www.magyandrol.hu/",
    description: `Asked to update the website, but creating a new one from scratch was faster. Replaced the old classic PHP webapp with a modern tech stack.`,
    stack: "Next.js, React, TailwindCSS, Supabase, Vercel",
    logo: "/magyandrol-logo.webp",
  },
];

interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "tools" | "other";
}

export const skills: Skill[] = [
  // Frontend (Main Skills)
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Redux-Saga", category: "frontend" },
  { name: "Chakra UI", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "Vanilla JS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "REST API Integration", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Supabase", category: "backend" },

  // DevOps & Toolss
  { name: "Git", category: "devops" },
  { name: "Jenkins", category: "devops" },
  { name: "Bitbucket Pipelines", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "Render", category: "devops" },

  // Tools & Other
  { name: "Figma", category: "tools" },
  { name: "GitHub Copilot", category: "tools" },
  { name: "Cursor", category: "tools" },
  { name: "Matomo Analytics", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "Agile (Scrum / Kanban)", category: "other" },
];

// Legacy exports for backward compatibility
export const baseSkills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "Redux-Saga",
  "REST API Integration",
  "Chakra UI",
  "Jenkins",
  "Agile (Scrum / Kanban)",
  "Git",
  "GitHub Copilot",
  "Figma",
  "Matomo Analytics",
  "Jest",
  "Cursor",
  "CI/CD",
];

export const appliedSkills: string[] = [
  "Vanilla JS",
  "PHP",
  "Laravel",
  "Node.js",
  "Express",
  "MongoDB",
  "Vercel",
  "Render",
  "TailwindCSS",
  "Supabase",
];
