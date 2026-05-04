import { useState } from "react";
import { Element } from "react-scroll";

import { content } from "../content.js";
import { useI18n } from "../i18n.jsx";

const CV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useI18n();
  const cv = content[language].cv;

  return (
    <Element className="c-space my-20" name="cv">
      <section className="w-full text-white-600">
        <p className="head-text">{cv.title}</p>

        <div className="cv-section">
          <div className="cv-intro">
            <div>
              <p className="grid-headtext">{cv.previewTitle}</p>
              <p className="cv-intro_text">{cv.previewText}</p>
            </div>

            <div className="cv-actions">
              <button
                type="button"
                className="cv-toggle"
                aria-expanded={isOpen}
                aria-controls="cv-preview"
                onClick={() => setIsOpen((current) => !current)}
              >
                {isOpen ? cv.hide : cv.show}
              </button>

              <a
                className="cv-download"
                href="/assets/Miroslav_Tvrdon_CV.pdf"
                download="Miroslav_Tvrdon_CV.pdf"
              >
                {cv.download}
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
                    <p className="cv-kicker">{cv.role}</p>
                    <h2>Bc. Miroslav Tvrdon</h2>
                  </div>
                </div>
                <div className="cv-contact">
                  <a href="mailto:miroslav@mtvrdon.com">miroslav@mtvrdon.com</a>
                  <a href="tel:+421944403321">+421 944 403 321</a>
                  <span>{cv.location}</span>
                </div>
              </header>

              <div className="cv-body">
                <section className="cv-block">
                  <h3>{cv.educationTitle}</h3>
                  <div className="cv-timeline">
                    {cv.education.map((item) => (
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
                  <h3>{cv.experienceTitle}</h3>
                  <div className="cv-timeline">
                    {cv.experience.map((item) => (
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
                  <h3>{cv.languagesTitle}</h3>
                  <div className="cv-tags">
                    {cv.languages.map((languageItem) => (
                      <span key={languageItem}>{languageItem}</span>
                    ))}
                  </div>
                </section>

                <section className="cv-block">
                  <h3>{cv.trainingsTitle}</h3>
                  <div className="cv-tags">
                    {cv.trainings.map((training) => (
                      <span key={training}>{training}</span>
                    ))}
                  </div>
                </section>

                <section className="cv-block cv-block_wide">
                  <h3>{cv.hobbiesTitle}</h3>
                  <p>{cv.hobbies}</p>
                </section>

                <section className="cv-block cv-block_wide">
                  <h3>{cv.skillsTitle}</h3>
                  <div className="cv-skills">
                    {cv.technicalSkills.map((group) => (
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
                  <h3>{cv.motivationTitle}</h3>
                  {cv.motivation.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {cv.motivationHighlights.map((item) => (
                    <p key={item.label}>
                      <strong>{item.label}:</strong> {item.text}
                    </p>
                  ))}
                  <p>{cv.motivationClose}</p>
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
