import {collaborationNotes} from "../constants/index.js";
import {Element} from "react-scroll";

const Clients = () => {
    const carouselNotes = [...collaborationNotes, ...collaborationNotes];

    return (
        <Element className="c-space my-20" name="strengths">
            <div className="strengths-heading">
                <p className="text-white-500 text-sm uppercase tracking-[0.3em]">Strengths</p>
                <h3 className="head-text">What I Bring to a Project</h3>
                <p className="strengths-intro">
                    A snapshot of how I think, build, and collaborate across AI, web development, and reliable product delivery.
                </p>
            </div>

            <div className="strengths-carousel" aria-label="Miroslav's strengths">
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
