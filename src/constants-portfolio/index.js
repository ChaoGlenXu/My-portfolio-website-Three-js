import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    { imageUrl: typescript, name: "TypeScript", type: "Language" },
    { imageUrl: javascript, name: "JavaScript", type: "Language" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: express, name: "Express / NestJS", type: "Backend" },
    { imageUrl: mongodb, name: "PostgreSQL / Mongo", type: "Database" },
    { imageUrl: redux, name: "Redis", type: "Cache" },
    { imageUrl: html, name: "AWS", type: "Cloud" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
    { imageUrl: tailwindcss, name: "Docker", type: "DevOps" },
    { imageUrl: css, name: "Python", type: "Language" },
    { imageUrl: sass, name: "C / C++", type: "Language" },
    { imageUrl: mui, name: "Go", type: "Language" },
    { imageUrl: motion, name: "SQL", type: "Database" },
];

export const experiences = [
    {
        title: "Full Stack Software Engineer",
        company_name: "StrataEdge AI",
        icon: typescript,
        iconBg: "#a2d2ff",
        date: "Jan 2026 - Present",
        points: [
            "Integrated OpenAI LLM provider and refactored async provider abstractions in Python, unblocking non-Snowflake workflows and accelerating client-facing iteration.",
        ],
    },
    {
        title: "AI Founding Engineer",
        company_name: "AmelJobs (CareerAI)",
        icon: react,
        iconBg: "#b7e4c7",
        date: "Nov 2023 - Dec 2025",
        points: [
            "Built and deployed an AI career platform in TypeScript with resume review and automation features, running on AWS (S3, CloudFront, ECS) with Prisma, PostgreSQL, and OpenAI integrations.",
            "Designed and maintained core backend architecture, including REST APIs, database models, and authentication flows.",
        ],
    },
    {
        title: "Full Stack Developer (Contract)",
        company_name: "Symphony — Rentius",
        icon: express,
        iconBg: "#accbe1",
        date: "Sep 2023 - Oct 2023",
        points: [
            "Built the backend for Rentius, a full-stack web application, implementing REST APIs in TypeScript on Node.js with MongoDB, and collaborating on the React frontend.",
        ],
    },
    {
        title: "Embedded Software Engineer Intern",
        company_name: "Aviat Networks",
        icon: car,
        iconBg: "#fbc3bc",
        date: "Jul 2022 - Sep 2022",
        points: [
            "Modified and debugged project code in C for ARM-based hardware devices on a 5G development project, expanding device usability.",
        ],
    },
    {
        title: "Embedded Software Engineer Intern",
        company_name: "Redline Communications",
        icon: git,
        iconBg: "#a2d2ff",
        date: "Sep 2021 - Jun 2022",
        points: [
            "Developed a Python automation script to streamline generation of ~6,000 5G signal samples, improving productivity by 90%.",
            "Completed quality assurance testing for generated signal data via custom Python scripts.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ChaoGlenXu',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/chao-glen-xu',
    },
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'ApplyPilot — AI Job Application Agent',
        description: 'AI-powered Chrome extension that automates the end-to-end job application workflow — generating tailored documents, autofilling forms, and uploading files. Reduced application time by 95%+. (Private Beta)',
        link: 'https://github.com/ChaoGlenXu',
    },
    {
        iconUrl: github,
        theme: 'btn-back-green',
        name: 'Personal Portfolio Website',
        description: 'Full-stack portfolio with React frontend and Sanity CMS backend. Responsive design, Framer Motion animations, dynamic content updates via live deployment.',
        link: 'https://github.com/ChaoGlenXu',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'MockMate AI — Hackathon Winner',
        description: 'Real-time AI career coach with live voice mock interviews, resume analysis, job search, and instant feedback powered by OpenAI APIs. 🏆 Hackathon Award Winner.',
        link: 'https://github.com/ChaoGlenXu',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'OpenClaw Contribution',
        description: 'Improved Cron job setup reliability via an upstream TypeScript PR to OpenClaw — a 365k+ star open-source AI assistant — preventing invalid default delivery-channel selection and adding regression coverage.',
        link: 'https://github.com/ChaoGlenXu',
    },
];
