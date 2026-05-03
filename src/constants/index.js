export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Strengths',
    href: '#strengths',
  },
  {
    id: 5,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 6,
    name: 'CV',
    href: '#cv',
  },
  {
    id: 7,
    name: 'Contact',
    href: '#contact',
  },
];

export const collaborationNotes = [
  {
    id: 1,
    label: 'Architecture',
    title: 'Clear technical thinking',
    detail:
      'I turn broad ideas into concrete system design, data flows, APIs, and implementation steps.',
  },
  {
    id: 2,
    label: 'AI Engineering',
    title: 'Practical AI systems',
    detail:
      'I build RAG, evaluation, automation, and assistant workflows around real use cases, not just demos.',
  },
  {
    id: 3,
    label: 'Full Stack',
    title: 'Frontend to backend',
    detail:
      'I connect clean interfaces with reliable backend services, databases, authentication, and deployment.',
  },
  {
    id: 4,
    label: 'DevOps',
    title: 'Reliable delivery',
    detail:
      'I care about Docker setup, readable code, predictable behavior, and projects that are easy to continue.',
  },
  {
    id: 5,
    label: 'Product Sense',
    title: 'Useful before flashy',
    detail:
      'I focus on workflows, edge cases, and small details that make software easier to understand and use.',
  },
  {
    id: 6,
    label: 'Teamwork',
    title: 'Calm collaboration',
    detail:
      'I like direct feedback, documented decisions, steady iteration, and communication that keeps work moving.',
  },
];

export const myProjects = [
  {
    title: 'CallTrainer - AI Emergency Call Training Simulator',
    desc: 'CallTrainer is an interactive AI-powered simulation platform for training emergency line 155 operators. It allows operators to practice realistic emergency calls through text and voice-based scenarios, while the AI acts as a stressed caller and evaluates the operator’s performance.',
    subdesc:
      'Built with a microservice architecture using Next.js, TypeScript, FastAPI, PostgreSQL, MongoDB, ChromaDB, LangChain, Hugging Face/Nebius LLM integration, Twilio voice support and Docker Compose, CallTrainer provides RAG-based emergency scenarios, session memory, task management, statistics and automated training evaluation.',
    href: 'https://git.kpi.fei.tuke.sk/miroslav.tvrdon/calltrainer',
    texture: '/textures/project/calltrainer.mp4',
    logo: '/assets/calltrainer-logo.png',
    logoStyle: {
      backgroundColor: '#1A0F0F',
      border: '0.2px solid #3A1E1E',
      boxShadow: '0px 0px 60px 0px #DC26264D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'FastAPI',
        path: '/assets/fastapi.png',
      },
      {
        id: 3,
        name: 'LangChain',
        path: '/assets/langchain.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: '/assets/docker.png',
      },
    ],
  },
  {
    title: 'FractureLab - Interactive X-ray Fracture Diagnostics Trainer',
    desc: 'FractureLab is an interactive educational platform for practicing X-ray fracture diagnostics. It helps medical students and professionals train fracture identification, measurement techniques and diagnostic reasoning through guided demos, exercises, tests and AI-assisted learning.',
    subdesc:
      'Built with React, TypeScript, FastAPI, PostgreSQL, Redis, ChromaDB, LlamaIndex, LangChain, Orthanc, Cornerstone.js and Docker Compose, FractureLab provides DICOM viewing, interactive measurements, progress tracking and RAG-powered chat assistance for guided diagnostics.',
    href: 'https://git.kpi.fei.tuke.sk/miroslav.tvrdon/maps',
    texture: '/textures/project/fracturelab.mp4',
    logo: '/assets/fracturelab-logo.svg',
    logoStyle: {
      backgroundColor: '#0F1821',
      border: '0.2px solid #1E3A5F',
      boxShadow: '0px 0px 60px 0px #2563EB4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/react.png',
      },
      {
        id: 2,
        name: 'FastAPI',
        path: '/assets/fastapi.png',
      },
      {
        id: 3,
        name: 'PostgreSQL',
        path: '/assets/postgresql.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: '/assets/docker.png',
      },
    ],
  },
  {
    title: 'TUKE ExamAI - AI Exam Evaluation Platform',
    desc: 'TUKE ExamAI is a web-based platform for managing exams, students, questions, grades and programming assignments. It provides separate interfaces for students and professors, supports classic and programming exam workflows, and integrates AI-assisted evaluation for answers and code.',
    subdesc:
      'Built with a microservice architecture using Next.js, TypeScript, FastAPI, PostgreSQL, Google GenAI, GitPython and Docker Compose, the system combines authentication, student/professor dashboards, GitLab browsing, exam management, grade tracking and automated AI evaluation workflows for submitted assignments and teacher review flows.',
    href: 'https://git.kpi.fei.tuke.sk/miroslav.tvrdon/dp',
    texture: '/textures/project/examai.mp4',
    logo: '/assets/examai-logo.png',
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #1E293B',
      boxShadow: '0px 0px 60px 0px #2563EB4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'FastAPI',
        path: '/assets/fastapi.png',
      },
      {
        id: 3,
        name: 'PostgreSQL',
        path: '/assets/postgresql.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: '/assets/docker.png',
      },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.95 : isMobile ? 1.05 : isTablet ? 1.2 : 1.34,
    deskPosition: isSmall ? [0, -2.9, 0] : isMobile ? [0, -2.9, 0] : isTablet ? [0.15, -2.75, 0] : [0.25, -2.7, 0],
    cubePosition: isSmall ? [3.7, -4.2, 0] : isMobile ? [4.7, -4.4, 0] : isTablet ? [5.7, -4.6, 0] : [8.3, -4.4, 0],
    reactLogoPosition: isSmall ? [2.8, 3.2, 0] : isMobile ? [4.6, 3.5, 0] : isTablet ? [6.1, 3.7, 0] : [9.6, 3.25, 0],
    ringPosition: isSmall ? [-4.8, 5.3, 0] : isMobile ? [-7.5, 6.2, 0] : isTablet ? [-10, 7.5, 0] : [-17.5, 7.4, 0],
    targetPosition: isSmall ? [-3.8, -6.8, -4] : isMobile ? [-6.5, -6.9, -4] : isTablet ? [-8.5, -6.2, -4] : [-12.5, -6.6, -4],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Siemens Healthineers',
    pos: 'Software Engineer',
    duration: 'May 2026 - Present',
    title:
      'Beginning a new role focused on software and data engineering workflows. I am building domain knowledge while working with modern data platforms such as Click, Snowflake, and Databricks.',
    icon: '/assets/siemens-healthineers-logo.jpg',
  },
  {
    id: 2,
    name: 'Erste Digital',
    pos: 'Chatbot Developer',
    duration: 'Jun 2025 - Apr 2026',
    title:
      'Designed and developed an advanced chatbot that improved user interaction and engagement. I implemented new features, supported performance, scalability, and security, and collaborated on code reviews to improve code quality.',
    icon: '/assets/erste-digital-logo.png',
  },
  {
    id: 3,
    name: 'U. S. Steel Košice',
    pos: 'IT Asset Management Specialist',
    duration: 'Oct 2023 - Mar 2026',
    title:
      'Provided comprehensive IT support by configuring and deploying new PCs for employees, staff, and customer use. I helped streamline the setup process, reducing deployment time by 20%, while collaborating with teams to improve support efficiency.',
    icon: '/assets/us-steel-logo.png',
  },
  {
    id: 4,
    name: 'Hockey Slovakia',
    pos: 'Linesman',
    duration: 'Aug 2022 - Present',
    title:
      'Served as a linesman for Hockey Slovakia, ensuring fair play and clear communication with players. I assisted head referees in maintaining game flow and enforcing rules, developing strong decision-making under pressure.',
    icon: '/assets/hockey-slovakia-logo.jpg',
  },
];
