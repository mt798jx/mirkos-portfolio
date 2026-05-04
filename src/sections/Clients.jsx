import {Element} from "react-scroll";
import { content } from "../content.js";
import { useI18n } from "../i18n.jsx";

const Clients = () => {
    const { language } = useI18n();
    const strengths = content[language].strengths;
    const collaborationNotes = strengths.notes;
    const carouselNotes = [...collaborationNotes, ...collaborationNotes];

    return (
        <Element className="c-space my-20" name="strengths">
            <div className="strengths-heading">
                <p className="text-white-500 text-sm uppercase tracking-[0.3em]">{strengths.kicker}</p>
                <h3 className="head-text">{strengths.title}</h3>
                <p className="strengths-intro">
                    {strengths.intro}
                </p>
            </div>

            <div className="strengths-carousel" aria-label={strengths.ariaLabel}>
                <div className="strengths-track">
                    {carouselNotes.map(({id, label, title, detail}, index) => (
                        <article key={`${id}-${index}`} className="strength-card">
                            <div className="strength-card_top">
                                <span>{label}</span>
                                <p>{String((index % collaborationNotes.length) + 1).padStart(2, '0')}</p>
                            </div>

                            <div className="strength-card_body">
                                <h4>{title}</h4>
                                <p>{detail}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="strengths-grid">
                {collaborationNotes.slice(0, 3).map(({id, label, title}) => (
                    <div key={id} className="strength-mini">
                        <span>{label}</span>
                        <p>{title}</p>
                    </div>
                ))}
            </div>
        </Element>
    )
}
export default Clients
