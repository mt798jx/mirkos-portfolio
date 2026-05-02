import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";
import {Element} from "react-scroll";

import { Link as LinkScroll } from 'react-scroll';

const techStack = [
    { name: 'LangChain', icon: '/assets/langchain.svg' },
    { name: 'Snowflake', icon: '/assets/snowflake.svg' },
    { name: 'Databricks', icon: '/assets/databricks.svg' },
    { name: 'Python', icon: '/assets/python.svg' },
    { name: 'TypeScript', icon: '/assets/typescript.png' },
    { name: 'SQL', icon: '/assets/sql.svg' },
    { name: 'Docker', icon: '/assets/docker.svg' },
    { name: 'REST APIs', icon: '/assets/api.svg' },
];

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("miroslav@mtvrdon.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return (
        <Element className="c-space my-20" name="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Software Engineer</p>
                            <p className="grid-subtext">I build reliable software, data workflows, and automation with a practical mindset.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="about-tech-visual">
                            {techStack.map((tech) => (
                                <span key={tech.name} className="about-tech-item">
                                    <img src={tech.icon} alt="" />
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Focused on software, data platforms, automation, and practical engineering tools.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                width={326}
                                height={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 48, lng: 21, text: 'Košice, Slovakia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Based in Košice, Slovakia</p>
                            <p className="grid-subtext">Open to clear communication, teamwork, and learning fast in technical environments.</p>
                            <LinkScroll
                                to="contact"
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                spy={true}
                                activeClass="nav-active"
                                className="w-fit cursor-pointer"
                            >
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                            </LinkScroll>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Engineering mindset</p>
                            <p className="grid-subtext">I like turning unclear problems into structured, maintainable solutions that people can actually use. I value clean communication, ownership, and steady improvement.</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">miroslav@mtvrdon.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default About
