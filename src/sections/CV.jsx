import { useState } from "react";
import { Element } from "react-scroll";

const technicalSkills = [
  {
    title: "Backend Development",
    items: [
      {
        name: "FastAPI (Python)",
        description:
          "Primary framework for building high-performance APIs, microservices, authentication flows (JWT, 2FA), and real-time communication layers, including integration with advanced AI systems.",
      },
      {
        name: "Python",
        description:
          "Strong experience in backend service development, data pipelines, AI workflows, and ML/RAG system integrations.",
      },
      {
        name: "Redis",
        description:
          "Used for caching, real-time eventing, session management, and performance optimization in distributed systems.",
      },
      {
        name: "PostgreSQL",
        description:
          "Schema design, query optimization, migrations, and advanced SQL.",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        name: "React & TypeScript",
        description:
          "Building modern, interactive, highly responsive web applications.",
      },
      {
        name: "Frontend Architecture",
        description:
          "Experience with larger frontend architectures using React Query, component-driven design, and performance tuning.",
      },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      {
        name: "LangChain, LangGraph, LangSmith",
        description:
          "Designing production-ready RAG systems, agent orchestration, evaluation, and observability.",
      },
      {
        name: "Model deployment",
        description:
          "Experience with local and cloud-hosted LLMs, embedding pipelines, retrieval systems, and vector databases.",
      },
      {
        name: "scikit-learn",
        description: "Classical ML, data preprocessing, and model evaluation.",
      },
      {
        name: "Databricks",
        description: "Data workflows, orchestration, and ML integrations.",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      {
        name: "Docker & Containerization",
        description:
          "Building and orchestrating containerized microservices for development and production environments.",
      },
      {
        name: "CI/CD",
        description:
          "Experience with CI/CD pipelines, multi-environment setups, monitoring, and reliable deployments.",
      },
      {
        name: "Git / GitHub / GitLab",
        description:
          "Branching strategies, code reviews, and team collaboration.",
      },
      {
        name: "JPA, Spring",
        description:
          "Previous background in enterprise Java backend development.",
      },
    ],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Siemens Healthineers",
    period: "May 2026 - Present",
    location: "Košice, Slovakia",
  },
  {
    role: "Chatbot Developer",
    company: "Erste Digital",
    period: "June 2025 - April 2026",
    location: "Košice, Slovakia",
  },
  {
    role: "IT Asset Management Specialist",
    company: "U. S. Steel Košice",
    period: "October 2023 - March 2026",
    location: "Košice, Slovakia",
  },
  {
    role: "Linesman",
    company: "Hockey Slovakia",
    period: "August 2022 - Present",
    location: "Košice, Slovakia",
  },
];

const education = [
  {
    school: "Technical University of Košice",
    detail:
      "Faculty of Electrical Engineering and Computer Science, 4th grade student",
    period: "September 2022 - Present",
    location: "Košice, Slovakia",
  },
  {
    school: "Czech Technical University in Prague",
    detail: "Faculty of Information Technologies",
    period: "September 2021 - February 2022",
    location: "Prague, Czech Republic",
  },
  {
    school: "High School Gymnasium Poštová 9",
    detail: "English class",
    period: "September 2017 - June 2021",
    location: "Košice, Slovakia",
  },
];

const languages = [
  "Slovak - mother tongue",
  "English - fluent",
  "German - beginner",
];
const trainings = [
  "Unix Operating Systems",
  "Technologies for Software Development",
];

const CV = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Element className="c-space my-20" name="cv">
      <section className="w-full text-white-600">
        <p className="head-text">Curriculum Vitae</p>

        <div className="cv-section">
          <div className="cv-intro">
            <div>
              <p className="grid-headtext">Resume preview</p>
              <p className="cv-intro_text">
                My CV translated into a clean web section, so it can be viewed
                directly on the portfolio.
              </p>
            </div>

            <div className="cv-actions">
              <button
                type="button"
                className="cv-toggle"
                aria-expanded={isOpen}
                aria-controls="cv-preview"
                onClick={() => setIsOpen((current) => !current)}
              >
                {isOpen ? "Hide CV" : "View CV"}
              </button>

              <a
                className="cv-download"
                href="/assets/Miroslav_Tvrdon_CV.pdf"
                download="Miroslav_Tvrdon_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>

          {isOpen && (
            <article id="cv-preview" className="cv-preview">
              <header className="cv-header">
                <div className="cv-identity">
                  <img
                    src="/assets/cv-photo.jpeg"
                    alt="Miroslav Tvrdon"
                    className="cv-avatar"
                  />
                  <div>
                    <p className="cv-kicker">Software Engineer</p>
                    <h2>Bc. Miroslav Tvrdon</h2>
                  </div>
                </div>
                <div className="cv-contact">
                  <a href="mailto:miroslav@mtvrdon.com">miroslav@mtvrdon.com</a>
                  <a href="tel:+421944403321">+421 944 403 321</a>
                  <span>Košice, Slovakia</span>
                </div>
              </header>

              <div className="cv-body">
                <section className="cv-block">
                  <h3>Education</h3>
                  <div className="cv-timeline">
                    {education.map((item) => (
                      <div key={item.school} className="cv-timeline_item">
                        <div>
                          <h4>{item.school}</h4>
                          <p>{item.detail}</p>
                        </div>
                        <div className="cv-meta">
                          <span>{item.period}</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="cv-block">
                  <h3>Work Experience</h3>
                  <div className="cv-timeline">
                    {experience.map((item) => (
                      <div
                        key={`${item.company}-${item.role}`}
                        className="cv-timeline_item"
                      >
                        <div>
                          <h4>{item.role}</h4>
                          <p>{item.company}</p>
                        </div>
                        <div className="cv-meta">
                          <span>{item.period}</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="cv-block">
                  <h3>Languages</h3>
                  <div className="cv-tags">
                    {languages.map((language) => (
                      <span key={language}>{language}</span>
                    ))}
                  </div>
                </section>

                <section className="cv-block">
                  <h3>Trainings & Certifications</h3>
                  <div className="cv-tags">
                    {trainings.map((training) => (
                      <span key={training}>{training}</span>
                    ))}
                  </div>
                </section>

                <section className="cv-block cv-block_wide">
                  <h3>Hobbies</h3>
                  <p>
                    Music, sports including ice hockey, skiing, cycling,
                    football, and reading books.
                  </p>
                </section>

                <section className="cv-block cv-block_wide">
                  <h3>Technical Skills</h3>
                  <div className="cv-skills">
                    {technicalSkills.map((group) => (
                      <div key={group.title} className="cv-skill_group">
                        <h4>{group.title}</h4>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item.name}>
                              <strong>{item.name}:</strong> {item.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="cv-block cv-block_wide">
                  <h3>Motivation</h3>
                  <p>
                    I am a dedicated student of Informatics at the Faculty of
                    Electrical Engineering and Informatics, Technical University
                    in Košice. I am seeking an opportunity to gain valuable
                    experience in an IT-focused company where I can contribute
                    my skills and further deepen my knowledge in software
                    development and modern technologies. I chose this major
                    because of my strong inclination toward mathematics,
                    physics, and computer science, which provide a solid
                    foundation for my programming abilities and problem-solving
                    skills.
                  </p>
                  <p>
                    Over the past two years, my work has shifted toward building
                    modern, production-ready web applications with a strong
                    focus on FastAPI and React. This transition has allowed me
                    to deepen my expertise in scalable backend systems,
                    interactive frontend interfaces, and AI-powered application
                    design. Through both academic and real-world projects, I
                    have gained hands-on experience with technologies commonly
                    used in professional software engineering:
                  </p>
                  <p>
                    <strong>FastAPI (Backend):</strong> Developing
                    high-performance APIs, authentication systems,
                    microservices, and integrations with AI components and data
                    pipelines.
                  </p>
                  <p>
                    <strong>React & TypeScript (Frontend):</strong> Creating
                    dynamic, responsive, and user-friendly web applications with
                    clean architecture and modern development patterns.
                  </p>
                  <p>
                    <strong>Machine Learning:</strong> Applying scikit-learn for
                    preprocessing, model training, and evaluation, along with
                    connecting ML pipelines to real applications.
                  </p>
                  <p>
                    <strong>Large Language Models (LLM):</strong> Building
                    conversational systems and automation workflows using tools
                    like LangChain, LangGraph, LangSmith, and LLM APIs;
                    integrating RAG pipelines and vector databases into
                    applications.
                  </p>
                  <p>
                    <strong>Databases & Infrastructure:</strong> Working with
                    PostgreSQL, Redis, containerization using Docker, and
                    maintaining multi-service environments for development and
                    deployment.
                  </p>
                  <p>
                    I enjoy collaborating in environments where ideas flow
                    freely and where learning is continuous. I bring my existing
                    experience in full-stack development and AI, and I am highly
                    motivated to grow alongside a skilled team. My combined
                    passion for modern software engineering, backend
                    architecture, and AI-driven solutions makes me a strong fit
                    for innovative, project-oriented roles in today&apos;s IT
                    landscape.
                  </p>
                </section>
              </div>
            </article>
          )}
        </div>
      </section>
    </Element>
  );
};

export default CV;
