interface ResponsibilityMeta {
  id: string;
  icon: string;
}

export interface ExperienceMeta {
  id: string;
  company: string;
  responsibilities: ResponsibilityMeta[];
}

export interface ProjectMeta {
  id: string;
  name: string;
  url: string;
  stack: string;
  logo: string;
}

interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "tools" | "other";
}

export const experiencesMeta: ExperienceMeta[] = [
  {
    id: "assaAbloy",
    company: "Assa Abloy",
    responsibilities: [
      { id: "greenfield", icon: "Code2" },
      { id: "legacy", icon: "GitBranch" },
      { id: "ai", icon: "TrendingUp" },
      { id: "designSystems", icon: "Palette" },
    ],
  },
  {
    id: "byborgEngineer",
    company: "Byborg Enterprises",
    responsibilities: [
      { id: "webDev", icon: "Code2" },
      { id: "api", icon: "Plug" },
      { id: "analytics", icon: "BarChart3" },
      { id: "agile", icon: "Users" },
      { id: "codeQuality", icon: "FileCheck" },
      { id: "uiux", icon: "Palette" },
      { id: "design", icon: "Paintbrush" },
    ],
  },
  {
    id: "byborgIntern",
    company: "Byborg Enterprises",
    responsibilities: [
      { id: "learning", icon: "BookOpen" },
      { id: "components", icon: "Boxes" },
      { id: "practices", icon: "GitBranch" },
      { id: "collaboration", icon: "MessageSquare" },
    ],
  },
  {
    id: "security",
    company: "Docler Holding (Byborg Enterprises)",
    responsibilities: [
      { id: "operations", icon: "Shield" },
      { id: "transition", icon: "TrendingUp" },
    ],
  },
];

export const projectsMeta: ProjectMeta[] = [
  {
    id: "hashtagselfie",
    name: "www.hashtagselfie.hu",
    url: "https://www.hashtagselfie.hu/",
    stack: "MERN (MongoDB, Express, React, Node.js) + Next.js, Vercel, Render",
    logo: "/hashtagselfie-logo.png",
  },
  {
    id: "repteresparkolo",
    name: "www.repteresparkolo.hu",
    url: "https://www.repteresparkolo.hu/",
    stack: "Wordpress, Laravel, vanilla JS, HTML, CSS",
    logo: "/repteresparkolo-logo.webp",
  },
  {
    id: "magyandrol",
    name: "www.magyandrol.hu",
    url: "https://www.magyandrol.hu/",
    stack: "Next.js, React, TailwindCSS, Supabase, Vercel",
    logo: "/magyandrol-logo.webp",
  },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Redux-Saga", category: "frontend" },
  { name: "Chakra UI", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "Vanilla JS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "REST API Integration", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "Git", category: "devops" },
  { name: "Jenkins", category: "devops" },
  { name: "Bitbucket Pipelines", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "Render", category: "devops" },
  { name: "Figma", category: "tools" },
  { name: "GitHub Copilot", category: "tools" },
  { name: "Cursor", category: "tools" },
  { name: "Matomo Analytics", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "Agile (Scrum / Kanban)", category: "other" },
];

export const NAV_SECTION_IDS = [
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
] as const;

export type NavSectionId = (typeof NAV_SECTION_IDS)[number];
