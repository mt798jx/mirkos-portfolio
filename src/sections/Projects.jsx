import {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/Loading.jsx";
import ProjectPreview from "../components/ProjectPreview.jsx";
import {Element} from "react-scroll";
import { useActiveTheme } from "../hooks/useActiveTheme.js";
import { content } from "../content.js";
import { useI18n } from "../i18n.jsx";

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const { language } = useI18n();
    const projects = content[language].projects;
    const myProjects = projects.items;
    const theme = useActiveTheme();
    const isLight = theme === 'light';

    const currentProject= myProjects[selectedProjectIndex];
    const projectCount = myProjects.length;

    const handleNavigation = (direction) => {
        setSelectedProjectIndex(prevState => {
            if(direction === 'previous'){
                return prevState === 0 ? projectCount - 1 : prevState - 1;
            } else {
                return prevState === projectCount - 1 ? 0 : prevState + 1;
            }
        });
    }

    return (
        <Element className="c-space my-20" name="work">
            <p className="head-text">{projects.title}</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="project-copy_panel flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">
                            {currentProject.title}
                        </p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target={"_blank"} rel="noreferrer">
                            <p>{projects.linkLabel}</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"/>
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')} aria-label={projects.previousLabel}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                        </button>
                        <div className="flex items-center gap-2.5">
                            {myProjects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedProjectIndex(index)}
                                    aria-label={`${projects.selectLabel} ${index + 1}`}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 hover:opacity-80 ${
                                        selectedProjectIndex === index
                                            ? 'bg-white scale-125'
                                            : 'bg-gray-500 opacity-50'
                                    }`}
                                />
                            ))}
                        </div>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')} aria-label={projects.nextLabel}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>

                <div className="project-preview_panel border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                        <ambientLight intensity={isLight ? 2.35 : 1.5}/>
                        <directionalLight position={[6, 8, 5]} intensity={isLight ? 2.6 : 2.1} />
                        <pointLight position={[-4, -2, 4]} intensity={isLight ? 1.35 : 2.2} color="#38bdf8" />
                        <pointLight position={[3, 2, 3]} intensity={isLight ? 0.9 : 1.2} color="#22c55e" />

                        <Center>
                            <Suspense fallback={<CanvasLoader/> }>
                                <group scale={1.08} position={[0, 0.08, 0]}>
                                    <ProjectPreview texture={currentProject.texture} isLight={isLight} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false}/>
                    </Canvas>
                </div>

            </div>
        </Element>
    )
}
export default Projects
