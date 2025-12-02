interface Responsibility {
  title: string;
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
    title: "Software Engineer – Frontend",
    company: "Byborg Enterprises",
    date: "Nov 2023 – Oct 2025",
    responsibilities: [
      {
        title: "Web Development",
        example: "e.g., Big admin project with multiple features and modules",
        description:
          "Developed scalable, high-performance web applications using React.js, Next.js, TypeScript, and Redux, ensuring optimal performance and maintainability.",
      },
      {
        title: "API Integration",
        example: "e.g., Redux-Saga for handling PHP RESTful APIs",
        description:
          "Integrated RESTful APIs built with Node.js and PHP, enabling dynamic, data-driven features across multiple modules.",
      },
      {
        title: "Analytics Implementation",
        example: "e.g., Self-hosted Matomo analytics for the main project",
        description:
          "Implemented analytics from scratch and integrated it into the project, providing advanced tracking and user insights for product optimization.",
      },
      {
        title: "Agile Collaboration",
        example:
          "e.g., Working in 12-15 people team (PO/BA/EM/Leads/DevOps/Backend/Frontend)",
        description:
          "Collaborated within Agile (Scrum and Kanban) teams to deliver features on schedule while maintaining high quality and consistency.",
      },
      {
        title: "Code Quality",
        example: "e.g., Conducting and participating in code reviews",
        description:
          "Adhered to best coding practices, ensuring clean, reusable, and maintainable code following industry standards.",
      },
      {
        title: "UI/UX Enhancement",
        example: "e.g., Testing UX/UI across multiple devices and browsers",
        description:
          "Contributed to UI/UX improvements, enhancing accessibility, responsiveness, and overall user experience across platforms.",
      },
      {
        title: "Design Implementation",
        example: "e.g., Collaborating with designers on Figma designs",
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
        example: "e.g., React, TypeScript, Redux, Redux-Saga, Chakra UI",
        description:
          "Gained hands-on experience with modern frontend technologies and libraries.",
      },
      {
        title: "Component Development",
        example: "e.g., Reusable UI components and state management",
        description:
          "Assisted in building reusable components and managing application state.",
      },
      {
        title: "Code Practices",
        example: "e.g., Mentorship on clean code and architecture",
        description:
          "Worked under mentorship to improve component architecture and clean code practices.",
      },
      {
        title: "Team Collaboration",
        example: "e.g., Team meetings and code reviews",
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
        example: "e.g., Site security and personnel safety",
        description:
          "Ensured the safety and security of personnel and property across company sites.",
      },
      {
        title: "Career Transition",
        example: "e.g., From security to software development",
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
    description: `Asked to update the website, but creating a new one from scratch was faster. Replaced the old classic PHP webapp with a modern tech stack. (In progress)`,
    stack: "Next.js, React, TailwindCSS, Supabase, Vercel",
    logo: "/magyandrol-logo.webp",
  },
];

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
