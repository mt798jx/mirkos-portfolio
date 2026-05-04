export const content = {
  en: {
    navLinks: [
      { id: 1, name: "Home", href: "#home" },
      { id: 2, name: "About", href: "#about" },
      { id: 3, name: "Work", href: "#work" },
      { id: 4, name: "Strengths", href: "#strengths" },
      { id: 5, name: "Experience", href: "#experience" },
      { id: 6, name: "CV", href: "#cv" },
      { id: 7, name: "Contact", href: "#contact" },
    ],
    hero: {
      role: "Software Engineer",
      intro:
        "I build reliable software, data-driven tools, and polished digital experiences with a focus on clean architecture, automation, and real-world impact.",
      focusLabel: "Core engineering focus",
      cta: "Explore my work",
      marqueeItems: [
        "Software Engineering",
        "Data Platforms",
        "Automation",
        "Cloud Workflows",
        "Clean Architecture",
        "Reliable Systems",
        "Chatbot Development",
        "IT Support",
      ],
    },
    about: {
      profileTitle: "Software Engineer",
      profileText: "I build reliable software, data workflows, and automation with a practical mindset.",
      techTitle: "Tech Stack",
      techText: "Focused on software, data platforms, automation, and practical engineering tools.",
      locationLabel: "Kosice, Slovakia",
      locationTitle: "Based in Kosice, Slovakia",
      locationText: "Open to clear communication, teamwork, and learning fast in technical environments.",
      contactButton: "Contact Me",
      mindsetTitle: "Engineering mindset",
      mindsetText:
        "I like turning unclear problems into structured, maintainable solutions that people can actually use. I value clean communication, ownership, and steady improvement.",
      contactTitle: "Contact me",
    },
    strengths: {
      kicker: "Strengths",
      title: "What I Bring to a Project",
      intro:
        "A snapshot of how I think, build, and collaborate across AI, web development, and reliable product delivery.",
      ariaLabel: "Miroslav's strengths",
      notes: [
        {
          id: 1,
          label: "Architecture",
          title: "Clear technical thinking",
          detail:
            "I turn broad ideas into concrete system design, data flows, APIs, and implementation steps.",
        },
        {
          id: 2,
          label: "AI Engineering",
          title: "Practical AI systems",
          detail:
            "I build RAG, evaluation, automation, and assistant workflows around real use cases, not just demos.",
        },
        {
          id: 3,
          label: "Full Stack",
          title: "Frontend to backend",
          detail:
            "I connect clean interfaces with reliable backend services, databases, authentication, and deployment.",
        },
        {
          id: 4,
          label: "DevOps",
          title: "Reliable delivery",
          detail:
            "I care about Docker setup, readable code, predictable behavior, and projects that are easy to continue.",
        },
        {
          id: 5,
          label: "Product Sense",
          title: "Useful before flashy",
          detail:
            "I focus on workflows, edge cases, and small details that make software easier to understand and use.",
        },
        {
          id: 6,
          label: "Teamwork",
          title: "Calm collaboration",
          detail:
            "I like direct feedback, documented decisions, steady iteration, and communication that keeps work moving.",
        },
      ],
    },
    projects: {
      title: "My work",
      linkLabel: "Check Project",
      previousLabel: "Previous project",
      nextLabel: "Next project",
      selectLabel: "Select project",
      items: [
        {
          title: "CallTrainer - AI Emergency Call Training Simulator",
          desc:
            "CallTrainer is an interactive AI-powered simulation platform for training emergency line 155 operators. It allows operators to practice realistic emergency calls through text and voice-based scenarios, while the AI acts as a stressed caller and evaluates the operator's performance.",
          subdesc:
            "Built with a microservice architecture using Next.js, TypeScript, FastAPI, PostgreSQL, MongoDB, ChromaDB, LangChain, Hugging Face/Nebius LLM integration, Twilio voice support and Docker Compose, CallTrainer provides RAG-based emergency scenarios, session memory, task management, statistics and automated training evaluation.",
          href: "https://git.kpi.fei.tuke.sk/miroslav.tvrdon/calltrainer",
          texture: "/textures/project/calltrainer.mp4",
          logo: "/assets/calltrainer-logo.png",
          logoStyle: {
            backgroundColor: "#1A0F0F",
            border: "0.2px solid #3A1E1E",
            boxShadow: "0px 0px 60px 0px #DC26264D",
          },
          spotlight: "/assets/spotlight1.png",
          tags: [
            { id: 1, name: "Next.js", path: "/assets/nextjs.png" },
            { id: 2, name: "FastAPI", path: "/assets/fastapi.png" },
            { id: 3, name: "LangChain", path: "/assets/langchain.png" },
            { id: 4, name: "Docker", path: "/assets/docker.png" },
          ],
        },
        {
          title: "FractureLab - Interactive X-ray Fracture Diagnostics Trainer",
          desc:
            "FractureLab is an interactive educational platform for practicing X-ray fracture diagnostics. It helps medical students and professionals train fracture identification, measurement techniques and diagnostic reasoning through guided demos, exercises, tests and AI-assisted learning.",
          subdesc:
            "Built with React, TypeScript, FastAPI, PostgreSQL, Redis, ChromaDB, LlamaIndex, LangChain, Orthanc, Cornerstone.js and Docker Compose, FractureLab provides DICOM viewing, interactive measurements, progress tracking and RAG-powered chat assistance for guided diagnostics.",
          href: "https://git.kpi.fei.tuke.sk/miroslav.tvrdon/maps",
          texture: "/textures/project/fracturelab.mp4",
          logo: "/assets/fracturelab-logo.svg",
          logoStyle: {
            backgroundColor: "#0F1821",
            border: "0.2px solid #1E3A5F",
            boxShadow: "0px 0px 60px 0px #2563EB4D",
          },
          spotlight: "/assets/spotlight1.png",
          tags: [
            { id: 1, name: "React", path: "/assets/react.png" },
            { id: 2, name: "FastAPI", path: "/assets/fastapi.png" },
            { id: 3, name: "PostgreSQL", path: "/assets/postgresql.png" },
            { id: 4, name: "Docker", path: "/assets/docker.png" },
          ],
        },
        {
          title: "TUKE ExamAI - AI Exam Evaluation Platform",
          desc:
            "TUKE ExamAI is a web-based platform for managing exams, students, questions, grades and programming assignments. It provides separate interfaces for students and professors, supports classic and programming exam workflows, and integrates AI-assisted evaluation for answers and code.",
          subdesc:
            "Built with a microservice architecture using Next.js, TypeScript, FastAPI, PostgreSQL, Google GenAI, GitPython and Docker Compose, the system combines authentication, student/professor dashboards, GitLab browsing, exam management, grade tracking and automated AI evaluation workflows for submitted assignments and teacher review flows.",
          href: "https://git.kpi.fei.tuke.sk/miroslav.tvrdon/dp",
          texture: "/textures/project/examai.mp4",
          logo: "/assets/examai-logo.png",
          logoStyle: {
            backgroundColor: "#0F172A",
            border: "0.2px solid #1E293B",
            boxShadow: "0px 0px 60px 0px #2563EB4D",
          },
          spotlight: "/assets/spotlight2.png",
          tags: [
            { id: 1, name: "Next.js", path: "/assets/nextjs.png" },
            { id: 2, name: "FastAPI", path: "/assets/fastapi.png" },
            { id: 3, name: "PostgreSQL", path: "/assets/postgresql.png" },
            { id: 4, name: "Docker", path: "/assets/docker.png" },
          ],
        },
      ],
    },
    experience: {
      title: "My Work Experience",
      items: [
        {
          id: 1,
          name: "Siemens Healthineers",
          pos: "Software Engineer",
          duration: "May 2026 - Present",
          title:
            "Beginning a new role focused on software and data engineering workflows. I am building domain knowledge while working with modern data platforms such as Click, Snowflake, and Databricks.",
          icon: "/assets/siemens-healthineers-logo.jpg",
        },
        {
          id: 2,
          name: "Erste Digital",
          pos: "Chatbot Developer",
          duration: "Jun 2025 - Apr 2026",
          title:
            "Designed and developed an advanced chatbot that improved user interaction and engagement. I implemented new features, supported performance, scalability, and security, and collaborated on code reviews to improve code quality.",
          icon: "/assets/erste-digital-logo.png",
        },
        {
          id: 3,
          name: "U. S. Steel Kosice",
          pos: "IT Asset Management Specialist",
          duration: "Oct 2023 - Mar 2026",
          title:
            "Provided comprehensive IT support by configuring and deploying new PCs for employees, staff, and customer use. I helped streamline the setup process, reducing deployment time by 20%, while collaborating with teams to improve support efficiency.",
          icon: "/assets/us-steel-logo.png",
        },
        {
          id: 4,
          name: "Hockey Slovakia",
          pos: "Linesman",
          duration: "Aug 2022 - Present",
          title:
            "Served as a linesman for Hockey Slovakia, ensuring fair play and clear communication with players. I assisted head referees in maintaining game flow and enforcing rules, developing strong decision-making under pressure.",
          icon: "/assets/hockey-slovakia-logo.jpg",
        },
      ],
    },
    cv: {
      title: "Curriculum Vitae",
      previewTitle: "Resume preview",
      previewText: "My CV translated into a clean web section, so it can be viewed directly on the portfolio.",
      show: "View CV",
      hide: "Hide CV",
      download: "Download CV",
      role: "Software Engineer",
      location: "Kosice, Slovakia",
      educationTitle: "Education",
      experienceTitle: "Work Experience",
      languagesTitle: "Languages",
      trainingsTitle: "Trainings & Certifications",
      hobbiesTitle: "Hobbies",
      skillsTitle: "Technical Skills",
      motivationTitle: "Motivation",
      hobbies: "Music, sports including ice hockey, skiing, cycling, football, and reading books.",
      languages: ["Slovak - mother tongue", "English - fluent", "German - beginner"],
      trainings: ["Unix Operating Systems", "Technologies for Software Development"],
      education: [
        {
          school: "Technical University of Kosice",
          detail: "Faculty of Electrical Engineering and Computer Science, 4th grade student",
          period: "September 2022 - Present",
          location: "Kosice, Slovakia",
        },
        {
          school: "Czech Technical University in Prague",
          detail: "Faculty of Information Technologies",
          period: "September 2021 - February 2022",
          location: "Prague, Czech Republic",
        },
        {
          school: "High School Gymnasium Postova 9",
          detail: "English class",
          period: "September 2017 - June 2021",
          location: "Kosice, Slovakia",
        },
      ],
      experience: [
        { role: "Software Engineer", company: "Siemens Healthineers", period: "May 2026 - Present", location: "Kosice, Slovakia" },
        { role: "Chatbot Developer", company: "Erste Digital", period: "June 2025 - April 2026", location: "Kosice, Slovakia" },
        { role: "IT Asset Management Specialist", company: "U. S. Steel Kosice", period: "October 2023 - March 2026", location: "Kosice, Slovakia" },
        { role: "Linesman", company: "Hockey Slovakia", period: "August 2022 - Present", location: "Kosice, Slovakia" },
      ],
      technicalSkills: [
        {
          title: "Backend Development",
          items: [
            {
              name: "FastAPI (Python)",
              description:
                "Primary framework for building high-performance APIs, microservices, authentication flows (JWT, 2FA), and real-time communication layers, including integration with advanced AI systems.",
            },
            { name: "Python", description: "Strong experience in backend service development, data pipelines, AI workflows, and ML/RAG system integrations." },
            { name: "Redis", description: "Used for caching, real-time eventing, session management, and performance optimization in distributed systems." },
            { name: "PostgreSQL", description: "Schema design, query optimization, migrations, and advanced SQL." },
          ],
        },
        {
          title: "Frontend Development",
          items: [
            { name: "React & TypeScript", description: "Building modern, interactive, highly responsive web applications." },
            { name: "Frontend Architecture", description: "Experience with larger frontend architectures using React Query, component-driven design, and performance tuning." },
          ],
        },
        {
          title: "AI & Machine Learning",
          items: [
            { name: "LangChain, LangGraph, LangSmith", description: "Designing production-ready RAG systems, agent orchestration, evaluation, and observability." },
            { name: "Model deployment", description: "Experience with local and cloud-hosted LLMs, embedding pipelines, retrieval systems, and vector databases." },
            { name: "scikit-learn", description: "Classical ML, data preprocessing, and model evaluation." },
            { name: "Databricks", description: "Data workflows, orchestration, and ML integrations." },
          ],
        },
        {
          title: "DevOps & Tools",
          items: [
            { name: "Docker & Containerization", description: "Building and orchestrating containerized microservices for development and production environments." },
            { name: "CI/CD", description: "Experience with CI/CD pipelines, multi-environment setups, monitoring, and reliable deployments." },
            { name: "Git / GitHub / GitLab", description: "Branching strategies, code reviews, and team collaboration." },
            { name: "JPA, Spring", description: "Previous background in enterprise Java backend development." },
          ],
        },
      ],
      motivation: [
        "I am a dedicated student of Informatics at the Faculty of Electrical Engineering and Informatics, Technical University in Kosice. I am seeking an opportunity to gain valuable experience in an IT-focused company where I can contribute my skills and further deepen my knowledge in software development and modern technologies. I chose this major because of my strong inclination toward mathematics, physics, and computer science, which provide a solid foundation for my programming abilities and problem-solving skills.",
        "Over the past two years, my work has shifted toward building modern, production-ready web applications with a strong focus on FastAPI and React. This transition has allowed me to deepen my expertise in scalable backend systems, interactive frontend interfaces, and AI-powered application design. Through both academic and real-world projects, I have gained hands-on experience with technologies commonly used in professional software engineering:",
      ],
      motivationHighlights: [
        { label: "FastAPI (Backend)", text: "Developing high-performance APIs, authentication systems, microservices, and integrations with AI components and data pipelines." },
        { label: "React & TypeScript (Frontend)", text: "Creating dynamic, responsive, and user-friendly web applications with clean architecture and modern development patterns." },
        { label: "Machine Learning", text: "Applying scikit-learn for preprocessing, model training, and evaluation, along with connecting ML pipelines to real applications." },
        { label: "Large Language Models (LLM)", text: "Building conversational systems and automation workflows using tools like LangChain, LangGraph, LangSmith, and LLM APIs; integrating RAG pipelines and vector databases into applications." },
        { label: "Databases & Infrastructure", text: "Working with PostgreSQL, Redis, containerization using Docker, and maintaining multi-service environments for development and deployment." },
      ],
      motivationClose:
        "I enjoy collaborating in environments where ideas flow freely and where learning is continuous. I bring my existing experience in full-stack development and AI, and I am highly motivated to grow alongside a skilled team. My combined passion for modern software engineering, backend architecture, and AI-driven solutions makes me a strong fit for innovative, project-oriented roles in today's IT landscape.",
    },
    contact: {
      title: "Let's talk",
      intro:
        "Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "johndoe@gmail.com",
      messageLabel: "Your Message",
      messagePlaceholder: "Hi, I'm interested in...",
      sending: "Sending...",
      send: "Send Message",
      success: "Message sent",
      error: "Message failed.",
    },
    footer: {
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      rights: "All rights reserved.",
      socialLabel: "Open",
    },
  },
  sk: {
    navLinks: [
      { id: 1, name: "Domov", href: "#home" },
      { id: 2, name: "O mne", href: "#about" },
      { id: 3, name: "Projekty", href: "#work" },
      { id: 4, name: "Silné stránky", href: "#strengths" },
      { id: 5, name: "Skúsenosti", href: "#experience" },
      { id: 6, name: "CV", href: "#cv" },
      { id: 7, name: "Kontakt", href: "#contact" },
    ],
    hero: {
      role: "Softvérový inžinier",
      intro:
        "Tvorím spoľahlivý softvér, dátovo orientované nástroje a premyslené digitálne riešenia so zameraním na čistú architektúru, automatizáciu a reálny prínos.",
      focusLabel: "Hlavné technické zameranie",
      cta: "Pozrieť projekty",
      marqueeItems: [
        "Softvérové inžinierstvo",
        "Dátové platformy",
        "Automatizácia",
        "Cloudové workflowy",
        "Čistá architektúra",
        "Spoľahlivé systémy",
        "Vývoj chatbotov",
        "IT podpora",
      ],
    },
    about: {
      profileTitle: "Softvérový inžinier",
      profileText: "Tvorím spoľahlivý softvér, dátové workflowy a automatizáciu s praktickým prístupom.",
      techTitle: "Technológie",
      techText: "Zameriavam sa na softvér, dátové platformy, automatizáciu a praktické inžinierske nástroje.",
      locationLabel: "Košice, Slovensko",
      locationTitle: "Pôsobím v Košiciach na Slovensku",
      locationText: "Som otvorený jasnej komunikácii, tímovej práci a rýchlemu učeniu v technickom prostredí.",
      contactButton: "Kontaktovať ma",
      mindsetTitle: "Inžinierske nastavenie",
      mindsetText:
        "Rád mením nejasné problémy na štruktúrované a udržiavateľné riešenia, ktoré ľudia vedia reálne používať. Cením si jasnú komunikáciu, zodpovednosť a priebežné zlepšovanie.",
      contactTitle: "Kontakt",
    },
    strengths: {
      kicker: "Silné stránky",
      title: "Čo prinášam do projektu",
      intro:
        "Krátky pohľad na to, ako premýšľam, vyvíjam a spolupracujem pri AI, webovom vývoji a spoľahlivom dodávaní produktov.",
      ariaLabel: "Miroslavove silné stránky",
      notes: [
        {
          id: 1,
          label: "Architektúra",
          title: "Jasné technické myslenie",
          detail:
            "Široké nápady premieňam na konkrétny návrh systému, dátové toky, API a realizačné kroky.",
        },
        {
          id: 2,
          label: "AI inžinierstvo",
          title: "Praktické AI systémy",
          detail:
            "Budujem RAG, evaluácie, automatizáciu a asistenčné workflowy okolo reálnych použití, nielen demá.",
        },
        {
          id: 3,
          label: "Full Stack",
          title: "Od frontendu po backend",
          detail:
            "Prepájam čisté používateľské rozhrania so spoľahlivými backend službami, databázami, autentifikáciou a nasadením.",
        },
        {
          id: 4,
          label: "DevOps",
          title: "Spoľahlivé dodávanie",
          detail:
            "Záleží mi na Docker nastavení, čitateľnom kóde, predvídateľnom správaní a projektoch, v ktorých sa dá ľahko pokračovať.",
        },
        {
          id: 5,
          label: "Produktové myslenie",
          title: "Najprv užitočné",
          detail:
            "Sústredím sa na workflowy, okrajové prípady a malé detaily, ktoré robia softvér zrozumiteľnejším a použiteľnejším.",
        },
        {
          id: 6,
          label: "Tímová práca",
          title: "Pokojná spolupráca",
          detail:
            "Mám rád priamu spätnú väzbu, zdokumentované rozhodnutia, stabilnú iteráciu a komunikáciu, ktorá posúva prácu dopredu.",
        },
      ],
    },
    projects: {
      title: "Moja práca",
      linkLabel: "Pozrieť projekt",
      previousLabel: "Predchádzajúci projekt",
      nextLabel: "Ďalší projekt",
      selectLabel: "Vybrať projekt",
      items: [
        {
          title: "CallTrainer - AI simulátor tréningu tiesňových hovorov",
          desc:
            "CallTrainer je interaktívna simulačná platforma poháňaná AI na tréning operátorov tiesňovej linky 155. Operátori si môžu precvičovať realistické tiesňové hovory cez textové aj hlasové scenáre, pričom AI vystupuje ako vystresovaný volajúci a hodnotí výkon operátora.",
          subdesc:
            "Riešenie je postavené na mikroservisnej architektúre s Next.js, TypeScriptom, FastAPI, PostgreSQL, MongoDB, ChromaDB, LangChainom, Hugging Face/Nebius LLM integráciou, hlasovou podporou cez Twilio a Docker Compose. CallTrainer ponúka RAG scenáre, pamäť relácie, správu úloh, štatistiky a automatizované hodnotenie tréningu.",
          href: "https://git.kpi.fei.tuke.sk/miroslav.tvrdon/calltrainer",
          texture: "/textures/project/calltrainer.mp4",
          logo: "/assets/calltrainer-logo.png",
          logoStyle: {
            backgroundColor: "#1A0F0F",
            border: "0.2px solid #3A1E1E",
            boxShadow: "0px 0px 60px 0px #DC26264D",
          },
          spotlight: "/assets/spotlight1.png",
          tags: [
            { id: 1, name: "Next.js", path: "/assets/nextjs.png" },
            { id: 2, name: "FastAPI", path: "/assets/fastapi.png" },
            { id: 3, name: "LangChain", path: "/assets/langchain.png" },
            { id: 4, name: "Docker", path: "/assets/docker.png" },
          ],
        },
        {
          title: "FractureLab - interaktívny tréner diagnostiky zlomenín z RTG",
          desc:
            "FractureLab je interaktívna vzdelávacia platforma na tréning diagnostiky zlomenín z röntgenových snímok. Pomáha študentom medicíny aj odborníkom trénovať identifikáciu zlomenín, meracie techniky a diagnostické uvažovanie cez ukážky, cvičenia, testy a AI asistované učenie.",
          subdesc:
            "Projekt je postavený na Reacte, TypeScripte, FastAPI, PostgreSQL, Redis, ChromaDB, LlamaIndexe, LangChaine, Orthanc, Cornerstone.js a Docker Compose. FractureLab ponúka DICOM prehliadač, interaktívne merania, sledovanie progresu a RAG chat asistenta pre vedenú diagnostiku.",
          href: "https://git.kpi.fei.tuke.sk/miroslav.tvrdon/maps",
          texture: "/textures/project/fracturelab.mp4",
          logo: "/assets/fracturelab-logo.svg",
          logoStyle: {
            backgroundColor: "#0F1821",
            border: "0.2px solid #1E3A5F",
            boxShadow: "0px 0px 60px 0px #2563EB4D",
          },
          spotlight: "/assets/spotlight1.png",
          tags: [
            { id: 1, name: "React", path: "/assets/react.png" },
            { id: 2, name: "FastAPI", path: "/assets/fastapi.png" },
            { id: 3, name: "PostgreSQL", path: "/assets/postgresql.png" },
            { id: 4, name: "Docker", path: "/assets/docker.png" },
          ],
        },
        {
          title: "TUKE ExamAI - AI platforma na hodnotenie skúšok",
          desc:
            "TUKE ExamAI je webová platforma na správu skúšok, študentov, otázok, známok a programátorských zadaní. Poskytuje samostatné rozhrania pre študentov a profesorov, podporuje klasické aj programátorské skúšky a integruje AI asistované hodnotenie odpovedí a kódu.",
          subdesc:
            "Systém je postavený na mikroservisnej architektúre s Next.js, TypeScriptom, FastAPI, PostgreSQL, Google GenAI, GitPython a Docker Compose. Spája autentifikáciu, dashboardy pre študentov a profesorov, prehliadanie GitLabu, správu skúšok, sledovanie známok a automatizované AI hodnotenie odovzdaní aj učiteľské kontrolné workflowy.",
          href: "https://git.kpi.fei.tuke.sk/miroslav.tvrdon/dp",
          texture: "/textures/project/examai.mp4",
          logo: "/assets/examai-logo.png",
          logoStyle: {
            backgroundColor: "#0F172A",
            border: "0.2px solid #1E293B",
            boxShadow: "0px 0px 60px 0px #2563EB4D",
          },
          spotlight: "/assets/spotlight2.png",
          tags: [
            { id: 1, name: "Next.js", path: "/assets/nextjs.png" },
            { id: 2, name: "FastAPI", path: "/assets/fastapi.png" },
            { id: 3, name: "PostgreSQL", path: "/assets/postgresql.png" },
            { id: 4, name: "Docker", path: "/assets/docker.png" },
          ],
        },
      ],
    },
    experience: {
      title: "Moje pracovné skúsenosti",
      items: [
        {
          id: 1,
          name: "Siemens Healthineers",
          pos: "Softvérový inžinier",
          duration: "máj 2026 - súčasnosť",
          title:
            "Začínam novú pozíciu zameranú na softvérové a dátové inžinierstvo. Budujem doménové znalosti a pracujem s modernými dátovými platformami, ako sú Click, Snowflake a Databricks.",
          icon: "/assets/siemens-healthineers-logo.jpg",
        },
        {
          id: 2,
          name: "Erste Digital",
          pos: "Vývojár chatbotov",
          duration: "jún 2025 - apríl 2026",
          title:
            "Navrhoval a vyvíjal som pokročilého chatbota, ktorý zlepšoval interakciu a zapojenie používateľov. Implementoval som nové funkcionality, podporoval výkon, škálovateľnosť a bezpečnosť a spolupracoval na code review pre zlepšenie kvality kódu.",
          icon: "/assets/erste-digital-logo.png",
        },
        {
          id: 3,
          name: "U. S. Steel Košice",
          pos: "IT Asset Management Specialist",
          duration: "október 2023 - marec 2026",
          title:
            "Zabezpečoval som komplexnú IT podporu pri konfigurácii a nasadzovaní nových počítačov pre zamestnancov, pracovníkov a zákazníkov. Pomohol som zefektívniť proces prípravy a skrátiť čas nasadenia o 20 %, pričom som spolupracoval s tímami na zlepšovaní podpory.",
          icon: "/assets/us-steel-logo.png",
        },
        {
          id: 4,
          name: "Hockey Slovakia",
          pos: "Čiarový rozhodca",
          duration: "august 2022 - súčasnosť",
          title:
            "Pôsobil som ako čiarový rozhodca pre Hockey Slovakia, kde som dohliadal na fair play a jasnú komunikáciu s hráčmi. Pomáhal som hlavným rozhodcom udržiavať plynulosť hry a presadzovať pravidlá, čo rozvíjalo rozhodovanie pod tlakom.",
          icon: "/assets/hockey-slovakia-logo.jpg",
        },
      ],
    },
    cv: {
      title: "Životopis",
      previewTitle: "Náhľad životopisu",
      previewText: "Moje CV spracované do prehľadnej webovej sekcie, aby sa dalo pozrieť priamo v portfóliu.",
      show: "Zobraziť CV",
      hide: "Skryť CV",
      download: "Stiahnuť CV",
      role: "Softvérový inžinier",
      location: "Košice, Slovensko",
      educationTitle: "Vzdelanie",
      experienceTitle: "Pracovné skúsenosti",
      languagesTitle: "Jazyky",
      trainingsTitle: "Školenia a certifikáty",
      hobbiesTitle: "Záľuby",
      skillsTitle: "Technické zručnosti",
      motivationTitle: "Motivácia",
      hobbies: "Hudba, šport vrátane ľadového hokeja, lyžovania, cyklistiky, futbalu a čítanie kníh.",
      languages: ["Slovenčina - materinský jazyk", "Angličtina - plynule", "Nemčina - začiatočník"],
      trainings: ["Unixové operačné systémy", "Technológie pre vývoj softvéru"],
      education: [
        {
          school: "Technická univerzita v Košiciach",
          detail: "Fakulta elektrotechniky a informatiky, študent 4. ročníka",
          period: "september 2022 - súčasnosť",
          location: "Košice, Slovensko",
        },
        {
          school: "České vysoké učení technické v Prahe",
          detail: "Fakulta informačných technológií",
          period: "september 2021 - február 2022",
          location: "Praha, Česká republika",
        },
        {
          school: "Gymnázium Poštová 9",
          detail: "Anglická trieda",
          period: "september 2017 - jún 2021",
          location: "Košice, Slovensko",
        },
      ],
      experience: [
        { role: "Softvérový inžinier", company: "Siemens Healthineers", period: "máj 2026 - súčasnosť", location: "Košice, Slovensko" },
        { role: "Vývojár chatbotov", company: "Erste Digital", period: "jún 2025 - apríl 2026", location: "Košice, Slovensko" },
        { role: "IT Asset Management Specialist", company: "U. S. Steel Košice", period: "október 2023 - marec 2026", location: "Košice, Slovensko" },
        { role: "Čiarový rozhodca", company: "Hockey Slovakia", period: "august 2022 - súčasnosť", location: "Košice, Slovensko" },
      ],
      technicalSkills: [
        {
          title: "Backend vývoj",
          items: [
            {
              name: "FastAPI (Python)",
              description:
                "Primárny framework na tvorbu výkonných API, mikroservisov, autentifikačných tokov (JWT, 2FA) a real-time komunikačných vrstiev vrátane integrácie s pokročilými AI systémami.",
            },
            { name: "Python", description: "Silná skúsenosť s vývojom backend služieb, dátových pipelineov, AI workflowov a ML/RAG integrácií." },
            { name: "Redis", description: "Používaný na cacheovanie, real-time eventy, správu relácií a optimalizáciu výkonu v distribuovaných systémoch." },
            { name: "PostgreSQL", description: "Návrh schém, optimalizácia dotazov, migrácie a pokročilé SQL." },
          ],
        },
        {
          title: "Frontend vývoj",
          items: [
            { name: "React & TypeScript", description: "Tvorba moderných, interaktívnych a responzívnych webových aplikácií." },
            { name: "Frontend architektúra", description: "Skúsenosť s väčšími frontend architektúrami, React Query, komponentovým návrhom a ladením výkonu." },
          ],
        },
        {
          title: "AI a strojové učenie",
          items: [
            { name: "LangChain, LangGraph, LangSmith", description: "Návrh produkčne pripravených RAG systémov, orchestrácia agentov, evaluácia a observabilita." },
            { name: "Nasadzovanie modelov", description: "Skúsenosť s lokálnymi aj cloudovými LLM, embedding pipelineami, retrieval systémami a vektorovými databázami." },
            { name: "scikit-learn", description: "Klasické ML, predspracovanie dát a evaluácia modelov." },
            { name: "Databricks", description: "Dátové workflowy, orchestrácia a ML integrácie." },
          ],
        },
        {
          title: "DevOps a nástroje",
          items: [
            { name: "Docker & kontajnerizácia", description: "Tvorba a orchestrácia kontajnerizovaných mikroservisov pre vývojové aj produkčné prostredia." },
            { name: "CI/CD", description: "Skúsenosť s CI/CD pipelineami, multi-environment nastaveniami, monitoringom a spoľahlivým nasadzovaním." },
            { name: "Git / GitHub / GitLab", description: "Branching stratégie, code review a tímová spolupráca." },
            { name: "JPA, Spring", description: "Predchádzajúce základy v enterprise Java backend vývoji." },
          ],
        },
      ],
      motivation: [
        "Som oddaný študent informatiky na Fakulte elektrotechniky a informatiky Technickej univerzity v Košiciach. Hľadám príležitosť získať cenné skúsenosti v IT orientovanej spoločnosti, kde môžem prispieť svojimi schopnosťami a ďalej prehlbovať znalosti v oblasti vývoja softvéru a moderných technológií. Tento odbor som si vybral pre silný vzťah k matematike, fyzike a informatike, ktoré tvoria pevný základ pre moje programátorské a analytické schopnosti.",
        "Počas posledných dvoch rokov sa moja práca posunula k tvorbe moderných webových aplikácií pripravených na reálne používanie so silným zameraním na FastAPI a React. Tento posun mi umožnil prehĺbiť expertízu v škálovateľných backend systémoch, interaktívnych frontend rozhraniach a návrhu AI aplikácií. V akademických aj praktických projektoch som získal skúsenosti s technológiami bežne používanými v profesionálnom softvérovom inžinierstve:",
      ],
      motivationHighlights: [
        { label: "FastAPI (Backend)", text: "Vývoj výkonných API, autentifikačných systémov, mikroservisov a integrácií s AI komponentmi a dátovými pipelineami." },
        { label: "React & TypeScript (Frontend)", text: "Tvorba dynamických, responzívnych a používateľsky prívetivých webových aplikácií s čistou architektúrou a modernými vývojovými vzormi." },
        { label: "Machine Learning", text: "Používanie scikit-learn na predspracovanie dát, tréning a evaluáciu modelov spolu s prepájaním ML pipelineov do reálnych aplikácií." },
        { label: "Veľké jazykové modely (LLM)", text: "Tvorba konverzačných systémov a automatizačných workflowov pomocou nástrojov ako LangChain, LangGraph, LangSmith a LLM API; integrácia RAG pipelineov a vektorových databáz do aplikácií." },
        { label: "Databázy a infraštruktúra", text: "Práca s PostgreSQL, Redisom, kontajnerizáciou pomocou Dockeru a údržba multi-service prostredí pre vývoj aj nasadenie." },
      ],
      motivationClose:
        "Rád spolupracujem v prostrediach, kde nápady prirodzene prúdia a učenie je súčasťou práce. Prinášam skúsenosti z full-stack vývoja a AI a som silne motivovaný rásť spolu so skúseným tímom. Moja kombinácia nadšenia pre moderné softvérové inžinierstvo, backend architektúru a AI riešenia zo mňa robí vhodného kandidáta pre inovatívne projektovo orientované roly v dnešnom IT prostredí.",
    },
    contact: {
      title: "Poďme sa porozprávať",
      intro:
        "Či už chcete vytvoriť nový web, zlepšiť existujúcu platformu alebo rozbehnúť jedinečný projekt, rád pomôžem.",
      nameLabel: "Meno a priezvisko",
      namePlaceholder: "Ján Novák",
      emailLabel: "Email",
      emailPlaceholder: "jan.novak@gmail.com",
      messageLabel: "Správa",
      messagePlaceholder: "Dobrý deň, mám záujem o...",
      sending: "Odosiela sa...",
      send: "Odoslať správu",
      success: "Správa bola odoslaná",
      error: "Správu sa nepodarilo odoslať.",
    },
    footer: {
      terms: "Obchodné podmienky",
      privacy: "Ochrana súkromia",
      rights: "Všetky práva vyhradené.",
      socialLabel: "Otvoriť",
    },
  },
};
