/* Single source of content for the portfolio. Keeps section components lean. */

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "JOURNEY", href: "#journey" },
  { label: "CONTACT", href: "#contact" },
];

export const SOCIALS = [
  { label: "GITHUB", href: "https://github.com/Surbhi-sinha" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/surbhi-sinha-in/" },
  { label: "MEDIUM", href: "https://astsurbhisinha.medium.com/" },
  { label: "WEBSITE", href: "https://surbhi-sinha.vercel.app/" },
];

export const HERO_STATS = [
  {
    icon: "cpu" as const,
    label: "ARTIFICIAL INTELLIGENCE",
    lines: ["AI AGENTS" , "CLAUDE SKILLS", "MODEL CONTEXT PROTOCOL(MCP)", "AGENTIC AI"],
  },
  {
    icon: "code" as const,
    label: "LANGUAGE BASE",
    lines: ["HTML / CSS", "JS / TS / NODE.JS", "GO / RUST", "JAVA / SPRING BOOT", "NEXT.JS / NEST.JS"],
  },
  {
    icon: "cloud" as const,
    label: "DEVOPS",
    lines: ["AWS / K8S / AZURE", "DOCKER","GCP", "KUBERNETES", "RENDER", "VERCEL"],
  },
  {
    icon: "box" as const,
    label: "ARCHITECTURE",
    lines: ["MICROSERVICES ", "MONOLITHIC","EVENT-DRIVEN ARCHITECHTURE", "LAYERED(N-TIER) ARCHITECHTURE" , "CLEAN ARCHITECHTURE", "DISTRIBUTED SYSTEMS"],
  },
];

export const SERVICES = [
  {
    index: "01",
    tag: "INFRASTRUCTURE",
    icon: "layers" as const,
    title: "FULL-STACK PRODUCT DEVELOPMENT",
    description:
      "End-to-end engineering from MVP to enterprise scale. I focus on performance, security, and exceptional user experience.",
    points: [
      "CUSTOM WEB APPLICATIONS",
      "RESTful APIs",
      "SAAS PLATFORMS",
      "HIGH-FIDELITY DASHBOARDS",
    ],
  },
  {
    index: "02",
    tag: "INTELLIGENCE",
    icon: "cpu" as const,
    title: "AI INTEGRATION & AUTOMATION",
    description:
      "Infuse your products with intelligence. Implementing LLMs and custom AI agents to automate workflows and drive insights.",
    points: [
      "AI AGENT WORKFLOWS",
      "LLM WORKFLOWS",
      "RAG & VECTOR SEARCH",
      "SKILLS AND MCP IMPLEMENTATIONS",
    ],
  },
  {
    index: "03",
    tag: "ARCHITECTURE",
    icon: "cloud" as const,
    title: "SCALABLE CLOUD ARCHITECTURE",
    description:
      "Robust backend systems designed for growth. Optimizing for high traffic, low latency, and continuous delivery.",
    points: [
      "SERVERLESS & MICROSERVICES ARCHITECTURE",
      "AWS / GCP / Azure",
      "CI / CD & DevOps",
      "Performance & Scalability",
    ],
  },
];

export const SHOWCASE_PILLARS = [
  { index: "01", title: "CLOUD ARCHITECTURE" },
  { index: "02", title: "AI INTEGRATION" },
  { index: "03", title: "FULL-STACK CORE" },
];

export const STACK_GROUPS = [
  {
    title: "BACKEND & RUNTIME",
    items: [
      "Node.js / Express.js / Nest.js",
      "Typescript / JavaScript",
      "JAVA / Spring Boot",
      "GO / GOLANG",
      "C# / Python",
    ],
  },
  {
    title: "INFRASTRUCTURE & OPS",
    items: [
      "AWS (EKS, S3, RDS, CloudFront)",
      "Docker / Containerization",
      "Terraform / IaC",
      "Git / GitHub Actions (CI/CD)",
      "Nginx / Load Balancing",
    ],
  },
  {
    title: "DATA & STORAGE",
    items: [
      "PostgreSQL / MySQL",
      "MongoDB",
      "Redis (Caching / Queues)",
      "ElasticSearch",
      "S3 / Cloud Storage",
    ],
  },
  {
    title: "FRONTEND & CLIENT",
    items: [
      "Next.js / React.js",
      "TypeScript",
      "Tailwind CSS / Styled Components",
      "Redux / Zustand / React Query",
      "Web Sockets / Socket.IO",
    ],
  },
];

export const STACK_PRINCIPLES = [
  {
    icon: "zap" as const,
    title: "MODERN & SCALABLE",
    description: "BUILD FOR PERFORMANCE AND GROWTH",
  },
  {
    icon: "shield" as const,
    title: "SECURE BY DESIGN",
    description: "FOLLOWING BEST PRACTICES FOR SECURITY AND RELIABILITY",
  },
  {
    icon: "code" as const,
    title: "DEVELOPER EXPERIENCE",
    description: "PRODUCTION WORKFLOWS AND CLEAN DEVELOPMENT ENVIRONMENTS",
  },
];

export const CAPABILITIES = [
  {
    index: "01_CORE_ENGINEERING",
    title: "DISTRIBUTED SYSTEMS",
    description:
      "Building fault-tolerant backends that scale horizontally. Focused on high throughput and data integrity across multi-region clusters.",
    tags: ["GO", "KAFKA", "KUBERNETES"],
  },
  {
    index: "02_INTELLIGENCE_LAYER",
    title: "APPLIED AI AGENTS",
    description:
      "Integrating large language models into production workflows. Developing autonomous agents for complex task orchestration and data analysis.",
    tags: ["PYTORCH", "OPENAI_API", "VECTOR_DB"],
  },
  {
    index: "03_INTERFACE_LAB",
    title: "ADVANCED FRONTENDS",
    description:
      "Crafting high-fidelity, high-performance web experiences. Specializing in data visualization and complex dashboard architecture.",
    tags: ["NEXT.JS", "TYPESCRIPT", "THREE.JS"],
  },
];

export type Project = {
  index: string;
  meta: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  points:string[],
  image: string;
  /** how the media relates to the card body */
  layout: "media-top" | "media-side" | "media-bg" | "text";
  /** body surface */
  theme: "light" | "dark";
  /** CTA presentation */
  ctaStyle: "arrow" | "accent" | "bar" | "box" | "none";
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    meta: "2024 / REACT & THREE.JS",
    title: "THE CARSTUDIO",
    description:
      "A high-performance 3D car customization platform using .glb files and a rich interactive UI. Optimized for advanced WebGL rendering and rapid material loading.",
    cta: { label: "EXPLORE PLATFORM", href: "https://the-car-studio.vercel.app/configurator" },
    image: "/carStudio.gif",
    points:[],
    layout: "media-top",
    theme: "dark",
    ctaStyle: "arrow",
  },
  {
    index: "02",
    meta: "AI / MONGODB",
    title: "NEURANOTES",
    description:
      "A full-stack Notes Application built using React (Frontend) and Node.js with MongoDB (Backend). The app features an interactive canvas for managing notes, supports CRUD operations, and integrates AI enhancements using OpenRouter.",
    cta: { label: "LAUNCH APP", href: "https://neura-notes-ashen.vercel.app/" },
    image: "/NeuraNotesDemo.gif",
    points:[
      "Interactive Canvas: Drag and position notes freely.",
      "Create, Read, Update, Delete (CRUD) Notes.",
      "AI Integration: Improve grammar, summarize, or expand notes.",
      "Persistent Storage: Notes are stored in MongoDB.",
      "Context API for State Management.",
      "Responsive & User-Friendly UI.]"],
    layout: "media-top",
    theme: "dark",
    ctaStyle: "arrow",
  },  
  {
    index: "03",
    meta: "DASHBOARD / CHAT APPLICATION",
    title: "MEDICOZ",
    description:
      "Developed a healthcare communication platform featuring user and doctor registration, secure authentication, profile management, and real-time chat functionality, enabling seamless interaction between patients and healthcare professionals. Medico is a healthcare communication platform that connects patients and doctors through a streamlined digital experience. The platform currently supports user and doctor onboarding, authentication, profile management, and real-time messaging, allowing healthcare professionals and patients to communicate efficiently. Its modular architecture enables future expansion into appointment scheduling, telemedicine, electronic health records, and comprehensive hospital management services.",
    cta: { label: "LAUNCH APP", href: "https://medicoz-web.vercel.app/" },
    image: "/Medicoz.png",
    points:[],
    layout: "media-top",
    theme: "dark",
    ctaStyle: "arrow",
  },

  {
    index: "04",
    meta: "FIREBASE / BOOTSTRAP",
    title: "TASK BUDDY",
    description:
      "TaskBuddy is a comprehensive task management application designed to help you organize your personal and professional life with ease. Whether you're managing daily to-dos, tracking project milestones, or collaborating with a team, TaskBuddy provides the tools you need to stay productive and focused. With its intuitive interface and powerful features, TaskBuddy transforms the way you manage tasks, helping you prioritize effectively and never miss a deadline again.",
    cta: { label: "OPEN TASK BUDDY", href: "https://taskbuddy-psi.vercel.app/" },
    image: "/Taskbuddy-copy.png",
    points:[
      "Sign Up/Login: Authenticate your Google Account.",
"Create Your First Task: Click the 'ADD TASK' button to add a new task",
"Organize: Categorize your tasks, set due dates, and attach relevant files",
"Track Progress: Move tasks across different status columns as you make progress",
"Stay Updated: Monitor task history and activity logs to maintain accountability"
    ],
    layout: "media-side",
    theme: "dark",
    ctaStyle: "accent",
  },
  {
    index: "05",
    meta: "TYPESCRIPT / LOGIC",
    title: "SECRET SANTA",
    description:
      "Architected a complex gift exchange system with custom logic rules, handling historical constraints and participant matching with high reliability.",
    cta: { label: "EXPLORE SECRET SANTA", href: "https://secret-santa-frontend-self.vercel.app/" },
    image: "/secretsanta.gif",
    points:[],
    layout: "media-bg",
    theme: "dark",
    ctaStyle: "accent",
  },
  {
    index: "06",
    meta: "REDIS / DOCKER",
    title: "MULTILINGUAL FAQ",
    description:
      "Scalable FAQ system with dynamic language support. Leverages Redis for caching and Google Translate API for automated localization.",
    image: "/multilingual.png",
    points:[],
    cta: { label: "VIEW SYSTEM", href: "https://github.com/Surbhi-sinha/Multilingual_FAQ_system_UI" },
    layout: "media-top",
    theme: "dark",
    ctaStyle: "bar",
  },
  {
    index: "07",
    meta: "C# / .NET CORE",
    title: "DESKTOP CALCULATOR",
    description:
      "Advanced Windows utility with support for keyboard shortcuts and dynamic theming, built using modern .NET architectures.",
    cta: { label: "SOURCE CODE", href: "https://github.com/Surbhi-sinha" },
    image: "/calc.gif",
    points:[],
    layout: "media-bg",
    theme: "dark",
    ctaStyle: "box",
  },
];

export const JOURNEY = [
  {
    period: "MAY 2025 — PRESENT",
    location: "Bangalore, INDIA",
    role: "FULLSTACK DEVELOPER",
    company: "UXMagic.ai",
    detail: "Product - UXMagic.ai , SeoSorted.ai",
    point:[
"Building AI based solutions for the designers.",
"gned and built scalable, content-driven frontend architectures (Inspirations, community, and discovery pages) supporting 10+ product workflows",
"loped reusable UI component libraries using React, improving development speed and consistency across features",
"t and integrated backend APIs to enable dynamic editing within design workflows, enhancing product flexibility and usability",
"emented LLM-powered workflows aligned with user-defined guidelines, driving ~35% increase in feature adoption",
"mized performance through lazy loading, incremental rendering, and efficient asset management, improving page load speed by 20–30%",
"tified and fixed critical issues in React export flows, reducing user errors by ~25% in a key product workflow",
"oved SEO and discoverability by resolving robots.txt and sitemap issues, achieving near-complete crawl coverage",
"ributed to a frontend monolithic architecture, optimizing component reuse and maintaining performance while scaling features",
"aborated closely with design, product, and engineering teams to deliver user-focused features in a fast-paced environment"
    ],
    current: true,
  },
  {
    period: "JAN 2024 — MAY 2025",
    location: "Noida, INDIA",
    role: "SOFTWARE ENGINEER",
    company: "Grapecity India",
    detail: "Product - SpreadJS",
    point:[
      "Developed tailored software component extensions to enhance efficiency.",
"Improved user experiences for end customers through advanced solutions.",
"Designed scalable enterprise-grade JavaScript solutions for Excel functionality.",
"Optimized performance of SpreadJS in complex web environments.",
"Worked with technologies: JavaScript, TypeScript, ReactJS, AngularJS, NodeJS, C#.",
"Used tools like GitLab and Visual Studio for seamless workflows."
    ],
    current: false,
  },
  {
    period: "APR 2023 — JUN 2023",
    location: "Hyderabad, INDIA",
    role: "SOFTWARE DEVELOPER INTERN",
    company: "Microsoft",
    detail: "Product - Azure Devops (core) Test Plans Team",
    point:[
      "Enhanced Azure DevOps Test Plans' import/export functionality, reducing file size by up to 500 KB.  ",
"Developed unit tests and optimized features using npm packages.  ",
"Collaborated with global teams to implement micro-frontends and workflows.  ",
"Followed Agile methodologies for feature development and delivery.  ",
"Gained expertise in C#, SQL Management Studio, MySQL, and telemetry tools."
    ],
    current: false,
  },
  {
    period: "2020 — 2024",
    location: "New Delhi, INDIA",
    role: "B.TECH IN COMPUTER SCIENCE",
    company: "Guru Govind Singh Indraprastha University",
    detail: "Computer Science Engineering",
    point:[
      "CGPA : 9.2",
      "Data Structures, Computer Networks &  Database Management System"
    ],
    current: false,
  },
];

export const CONTACT_EMAIL = "astsurbhisinha@gmail.com";
