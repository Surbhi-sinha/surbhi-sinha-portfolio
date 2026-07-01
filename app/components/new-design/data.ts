/* Resume-backed content for Surbhi Sinha's portfolio. */

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#journey" },
  { label: "CONTACT", href: "#contact" },
];

export const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/Surbhi-sinha" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/surbhi-sinha-in/" },
  { label: "MEDIUM", href: "https://astsurbhisinha.medium.com/" },
  { label: "RESUME", href: "/Surbhi-Sinha.pdf" },
];

export const HERO_STATS = [
  {
    icon: "cpu" as const,
    label: "AI ENGINEERING",
    lines: ["MULTI-AGENT SYSTEMS", "RAG / HYBRID SEARCH", "LLM WORKFLOWS", "MCP / AGENTIC AI"],
  },
  {
    icon: "code" as const,
    label: "FULL-STACK",
    lines: ["JAVASCRIPT / TYPESCRIPT", "REACT / NEXT.JS", "NODE.JS / NESTJS", "JAVA / SPRING BOOT"],
  },
  {
    icon: "cloud" as const,
    label: "PLATFORM & CLOUD",
    lines: ["AWS / AZURE / GCP", "DOCKER / CI/CD", "LINUX / GITLAB", "REST / WEBSOCKETS"],
  },
  {
    icon: "box" as const,
    label: "DATA & SYSTEMS",
    lines: ["MICROSERVICES", "DISTRIBUTED SYSTEMS", "MONGODB / POSTGRESQL", "MYSQL / REDIS"],
  },
];

export const SERVICES = [
  {
    index: "01",
    tag: "PRODUCT ENGINEERING",
    icon: "layers" as const,
    title: "FULL-STACK WEB DEVELOPMENT",
    description:
      "Building maintainable product experiences across frontend and backend, from reusable React interfaces to secure APIs and real-time workflows.",
    points: ["REACT & NEXT.JS INTERFACES", "NODE.JS & NESTJS APIS", "REAL-TIME WEBSOCKET FEATURES", "RESPONSIVE PRODUCT EXPERIENCES"],
  },
  {
    index: "02",
    tag: "APPLIED AI",
    icon: "cpu" as const,
    title: "AI-POWERED PRODUCT FEATURES",
    description:
      "Embedding multi-agent systems, RAG, hybrid search, and prompt-engineered LLM workflows into practical user-facing products.",
    points: ["MULTI-AGENT ORCHESTRATION", "RAG & HYBRID SEARCH", "LLM WORKFLOW DESIGN", "MCP & AGENTIC PROGRAMMING"],
  },
  {
    index: "03",
    tag: "RELIABILITY",
    icon: "cloud" as const,
    title: "PERFORMANCE & PLATFORM DELIVERY",
    description:
      "Improving application speed, release reliability, SEO coverage, and engineering workflows across modern cloud-hosted products.",
    points: ["PERFORMANCE OPTIMIZATION", "CI/CD & CONTAINERIZATION", "SEO & CRAWLABILITY", "UNIT TESTING & DEBUGGING"],
  },
];

export const SHOWCASE_PILLARS = [
  { index: "01", title: "PRODUCT ENGINEERING" },
  { index: "02", title: "APPLIED AI" },
  { index: "03", title: "SCALABLE WEB" },
];

export const STACK_GROUPS = [
  {
    title: "LANGUAGES & BACKEND",
    items: ["JavaScript / TypeScript", "Node.js / Express.js", "NestJS", "Java / Spring Boot", "C#"],
  },
  {
    title: "PLATFORM & WORKFLOW",
    items: ["AWS / Azure / GCP", "Docker", "CI/CD", "Git / GitLab", "Linux / Postman"],
  },
  {
    title: "DATA & ARCHITECTURE",
    items: ["MongoDB / Mongoose", "PostgreSQL / MySQL", "Redis", "Microservices", "Distributed Systems"],
  },
  {
    title: "FRONTEND & CLIENT",
    items: ["React.js / Next.js", "HTML5 / CSS3", "Tailwind CSS", "Zustand / Context API", "Web Components / WebSocket"],
  },
];

export const STACK_PRINCIPLES = [
  { icon: "zap" as const, title: "PERFORMANCE FOCUSED", description: "LAZY LOADING, INCREMENTAL RENDERING, AND EFFICIENT ASSET DELIVERY" },
  { icon: "shield" as const, title: "RELIABLE BY DESIGN", description: "SECURE FLOWS, TESTABLE CODE, AND RESILIENT USER EXPERIENCES" },
  { icon: "code" as const, title: "BUILT TO EVOLVE", description: "REUSABLE COMPONENTS, CLEAR BOUNDARIES, AND MAINTAINABLE SYSTEMS" },
];

export const CAPABILITIES = [
  {
    index: "01_PRODUCT_ENGINEERING",
    title: "ENTERPRISE FRONTENDS",
    description: "Designing scalable, content-heavy React experiences and reusable component systems for complex product discovery and editing workflows.",
    tags: ["REACT", "NEXT.JS", "TYPESCRIPT"],
  },
  {
    index: "02_INTELLIGENCE_LAYER",
    title: "APPLIED AI SYSTEMS",
    description: "Building multi-agent orchestration, RAG optimizations, hybrid search, and LLM workflows aligned with user-defined guidelines.",
    tags: ["LLM", "RAG", "MCP"],
  },
  {
    index: "03_BACKEND_SYSTEMS",
    title: "REAL-TIME PLATFORMS",
    description: "Developing REST APIs, WebSocket gateways, authentication, and data models for secure, responsive full-stack applications.",
    tags: ["NESTJS", "WEBSOCKET", "MONGODB"],
  },
];

export type Project = {
  index: string;
  meta: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  points: string[];
  image: string;
  layout: "media-top" | "media-side" | "media-bg" | "text";
  theme: "light" | "dark";
  ctaStyle: "arrow" | "accent" | "bar" | "box" | "none";
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    meta: "NEXT.JS / NESTJS / WEBSOCKETS",
    title: "MEDICO",
    description: "A real-time healthcare communication platform connecting patients and doctors through secure, role-based experiences.",
    cta: { label: "LAUNCH MEDICO", href: "https://medicoz-web.vercel.app/" },
    image: "/Medicoz.png",
    points: ["JWT authentication and protected patient/doctor routes", "Room-based messaging, typing indicators, and connection status", "NestJS WebSocket Gateway and REST APIs", "MongoDB models for users, messages, and chat rooms"],
    layout: "media-top",
    theme: "dark",
    ctaStyle: "arrow",
  },
  {
    index: "02",
    meta: "REACT / NODE.JS / OPENROUTER",
    title: "NEURANOTES",
    description: "A full-stack AI notes workspace with an interactive drag-and-drop canvas, persistent storage, and writing assistance.",
    cta: { label: "LAUNCH NEURANOTES", href: "https://neura-notes-ashen.vercel.app/" },
    image: "/NeuraNotesDemo.gif",
    points: ["Complete CRUD note workflows", "Flexible canvas built with react-rnd", "AI grammar, summary, and expansion tools", "MongoDB persistence and React Context state"],
    layout: "media-top",
    theme: "dark",
    ctaStyle: "arrow",
  },
  {
    index: "03",
    meta: "REACT / THREE.JS / WEBGL",
    title: "THE CARSTUDIO",
    description: "An interactive 3D car configurator with rich material customization and optimized GLB asset rendering.",
    cta: { label: "EXPLORE CONFIGURATOR", href: "https://the-car-studio.vercel.app/configurator" },
    image: "/carStudio.gif",
    points: [],
    layout: "media-top",
    theme: "dark",
    ctaStyle: "arrow",
  },
  {
    index: "04",
    meta: "FIREBASE / TASK MANAGEMENT",
    title: "TASK BUDDY",
    description: "A productivity application for organizing tasks, tracking progress, and keeping personal and professional work accountable.",
    cta: { label: "OPEN TASK BUDDY", href: "https://taskbuddy-psi.vercel.app/" },
    image: "/Taskbuddy-copy.png",
    points: ["Google authentication", "Task categories, due dates, and attachments", "Status-based progress tracking", "Task history and activity logs"],
    layout: "media-side",
    theme: "dark",
    ctaStyle: "accent",
  },
  {
    index: "05",
    meta: "TYPESCRIPT / MATCHING LOGIC",
    title: "SECRET SANTA",
    description: "A gift-exchange application that applies participant constraints and historical rules to produce dependable matches.",
    cta: { label: "EXPLORE SECRET SANTA", href: "https://secret-santa-frontend-self.vercel.app/" },
    image: "/secretsanta.gif",
    points: [],
    layout: "media-bg",
    theme: "dark",
    ctaStyle: "accent",
  },
  {
    index: "06",
    meta: "REDIS / DOCKER / LOCALIZATION",
    title: "MULTILINGUAL FAQ",
    description: "A multilingual FAQ system using Redis caching and automated translation to serve localized answers efficiently.",
    image: "/multilingual.png",
    points: [],
    cta: { label: "VIEW SOURCE", href: "https://github.com/Surbhi-sinha/Multilingual_FAQ_system_UI" },
    layout: "media-top",
    theme: "dark",
    ctaStyle: "bar",
  },
  {
    index: "07",
    meta: "C# / .NET",
    title: "DESKTOP CALCULATOR",
    description: "A Windows calculator with keyboard shortcuts and dynamic themes, developed with C# and modern .NET tooling.",
    cta: { label: "VIEW GITHUB", href: "https://github.com/Surbhi-sinha" },
    image: "/calc.gif",
    points: [],
    layout: "media-bg",
    theme: "dark",
    ctaStyle: "box",
  },
];

export const JOURNEY = [
  {
    period: "JUNE 2025 - PRESENT",
    location: "BENGALURU, INDIA",
    role: "FULL-STACK DEVELOPER",
    company: "UXMagic.AI",
    detail: "AI-powered design and product experiences",
    point: [
      "Embedded multi-agent orchestration, RAG optimization, and hybrid search into an AI design assistant.",
      "Architected content-heavy experiences across 10+ product discovery pages using reusable React components.",
      "Built backend APIs and prompt-engineered LLM workflows, contributing to a 35% increase in feature adoption.",
      "Improved new-page load performance by approximately 20-30% through lazy loading and incremental rendering.",
      "Reduced React export-flow errors by approximately 25% and restored near-complete SEO crawl coverage.",
    ],
    current: true,
  },
  {
    period: "JANUARY 2024 - MAY 2025",
    location: "NOIDA, INDIA",
    role: "SOFTWARE ENGINEER",
    company: "GRAPECITY INDIA",
    detail: "Developer Tools Division - SpreadJS",
    point: [
      "Delivered tailored component extensions that improved developer and end-user experiences.",
      "Designed customizable enterprise JavaScript solutions focused on client-side Excel functionality.",
      "Optimized SpreadJS behavior in complex web environments and delivered CRM enhancements.",
      "Worked with JavaScript, TypeScript, React, Node.js, C#, PostgreSQL, MySQL, GitLab, and Webpack.",
    ],
    current: false,
  },
  {
    period: "APRIL 2023 - JUNE 2023",
    location: "HYDERABAD, INDIA",
    role: "SOFTWARE ENGINEERING INTERN",
    company: "MICROSOFT INDIA",
    detail: "Azure DevOps Test Plans Team",
    point: [
      "Enhanced test-case import/export workflows and reduced generated file sizes by up to 500 KB.",
      "Developed unit tests and evaluated npm packages to optimize feature implementation.",
      "Collaborated with cross-geographic teams on micro-frontends and Agile delivery workflows.",
      "Worked with C#, SQL Management Studio, MySQL, and telemetry tools.",
    ],
    current: false,
  },
  {
    period: "2020 - 2024",
    location: "NEW DELHI, INDIA",
    role: "B.TECH, COMPUTER SCIENCE ENGINEERING",
    company: "GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY",
    detail: "Graduated with a 9.2 CGPA",
    point: ["Coursework included data structures and algorithms, OOP, DBMS, operating systems, and computer networks."],
    current: false,
  },
];

export const CONTACT_EMAIL = "astsurbhisinha@gmail.com";
