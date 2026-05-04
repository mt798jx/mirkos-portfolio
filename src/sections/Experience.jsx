import { Element } from 'react-scroll';
import { content } from '../content.js';
import { useI18n } from '../i18n.jsx';

const WorkExperience = () => {
    const { language } = useI18n();
    const experience = content[language].experience;
    const workExperiences = experience.items;

    return (
        <Element className="c-space my-20" name="experience">
            <div className="w-full text-white-600">
                <p className="head-text">{experience.title}</p>

                <div className="work-container">
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item) => (
                                <div
                                    key={item.id}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full object-contain" src={item.icon} alt={`${item.name} logo`} />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="work-title">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default WorkExperience;
