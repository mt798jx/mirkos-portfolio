import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useEffect, useMemo, useRef, useState} from "react";
import {Element} from "react-scroll";

import { Link as LinkScroll } from 'react-scroll';
import { useActiveTheme } from "../hooks/useActiveTheme.js";
import { content } from "../content.js";
import { useI18n } from "../i18n.jsx";

const kosice = { lat: 48.7164, lng: 21.2611 };

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const globeRef = useRef();
    const { language } = useI18n();
    const about = content[language].about;
    const theme = useActiveTheme();
    const isLight = theme === 'light';
    const globeSize = 326;
    const globeTheme = useMemo(() => ({
        atmosphereColor: isLight ? '#0ea5e9' : '#60a5fa',
        labelColor: isLight ? '#ffffff' : '#f8fafc',
        pointColor: isLight ? '#2563eb' : '#38bdf8',
        ringColor: isLight ? '#2563eb' : '#38bdf8',
        arcColor: isLight ? '#0ea5e9' : '#f97316',
        globeImageUrl: isLight
            ? '//unpkg.com/three-globe/example/img/earth-day.jpg'
            : '//unpkg.com/three-globe/example/img/earth-night.jpg',
        backgroundImageOpacity: isLight ? 0.2 : 0.5,
    }), [isLight]);

    const locationPoints = useMemo(() => [
        {
            ...kosice,
            size: isLight ? 0.54 : 0.38,
            color: globeTheme.pointColor,
        },
    ], [globeTheme.pointColor, isLight]);

    const locationRings = useMemo(() => [
        {
            ...kosice,
            color: () => globeTheme.ringColor,
        },
    ], [globeTheme.ringColor]);

    const locationLabels = useMemo(() => [
        {
            ...kosice,
            text: about.locationLabel,
            color: globeTheme.labelColor,
            size: isLight ? 1.45 : 1.05,
            altitude: isLight ? 0.11 : 0.045,
        },
    ], [about.locationLabel, globeTheme.labelColor, isLight]);

    const locationArcs = useMemo(() => [
        {
            startLat: kosice.lat,
            startLng: kosice.lng,
            endLat: 48.1486,
            endLng: 17.1077,
            color: [globeTheme.arcColor, globeTheme.pointColor],
        },
        {
            startLat: kosice.lat,
            startLng: kosice.lng,
            endLat: 50.0755,
            endLng: 14.4378,
            color: [globeTheme.arcColor, globeTheme.pointColor],
        },
        {
            startLat: kosice.lat,
            startLng: kosice.lng,
            endLat: 48.2082,
            endLng: 16.3738,
            color: [globeTheme.arcColor, globeTheme.pointColor],
        },
    ], [globeTheme.arcColor, globeTheme.pointColor]);

    useEffect(() => {
        if (!globeRef.current) return;

        const controls = globeRef.current.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = isLight ? 0.38 : 0.28;
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.minDistance = 135;
        controls.maxDistance = 420;
        controls.zoomSpeed = 0.7;

        const globeMaterial = typeof globeRef.current.globeMaterial === "function"
            ? globeRef.current.globeMaterial()
            : globeRef.current.globeMaterial;
        if (globeMaterial) {
            globeMaterial.color.set(isLight ? '#f8fbff' : '#ffffff');
            globeMaterial.emissive.set(isLight ? '#dbeafe' : '#000000');
            globeMaterial.emissiveIntensity = isLight ? 0.18 : 0;
            globeMaterial.shininess = isLight ? 4 : 12;
        }

        globeRef.current.pointOfView({ lat: 48.1, lng: 20.8, altitude: isLight ? 1.62 : 1.95 }, 700);
    }, [isLight]);

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
                        <div className="about-image_frame about-image_frame-profile">
                            <img
                                src={isLight ? "/assets/grid1%20light.png" : "/assets/grid1.png"}
                                alt="grid-1"
                                className="about-asset about-profile-asset w-full sm:h-[276px] h-fit object-contain"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">{about.profileTitle}</p>
                            <p className="grid-subtext">{about.profileText}</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="about-image_frame about-image_frame-tech">
                            <img
                                src={isLight ? "/assets/grid2%20light.png" : "/assets/grid2.png"}
                                alt="Technology stack"
                                className="about-asset about-tech-asset w-full sm:h-[276px] h-fit object-contain"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">{about.techTitle}</p>
                            <p className="grid-subtext">{about.techText}</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="about-globe_frame rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                ref={globeRef}
                                width={globeSize}
                                height={globeSize}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={globeTheme.backgroundImageOpacity}
                                showAtmosphere
                                showGraticules={!isLight}
                                atmosphereColor={globeTheme.atmosphereColor}
                                atmosphereAltitude={isLight ? 0.18 : 0.22}
                                globeImageUrl={globeTheme.globeImageUrl}
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                pointsData={locationPoints}
                                pointLat="lat"
                                pointLng="lng"
                                pointAltitude={isLight ? 0.065 : 0.05}
                                pointRadius="size"
                                pointColor="color"
                                ringsData={locationRings}
                                ringLat="lat"
                                ringLng="lng"
                                ringColor="color"
                                ringMaxRadius={isLight ? 5.2 : 4.5}
                                ringPropagationSpeed={isLight ? 1.4 : 1.2}
                                ringRepeatPeriod={1600}
                                arcsData={locationArcs}
                                arcColor="color"
                                arcDashLength={0.32}
                                arcDashGap={0.12}
                                arcDashAnimateTime={2800}
                                arcStroke={isLight ? 1.05 : 0.75}
                                arcAltitude={isLight ? 0.2 : 0.16}
                                labelsData={locationLabels}
                                labelLat="lat"
                                labelLng="lng"
                                labelText="text"
                                labelSize="size"
                                labelColor="color"
                                labelDotRadius={isLight ? 0.42 : 0.28}
                                labelDotOrientation={() => 'bottom'}
                                labelAltitude="altitude"
                                labelResolution={4}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">{about.locationTitle}</p>
                            <p className="grid-subtext">{about.locationText}</p>
                            <LinkScroll
                                to="contact"
                                smooth={true}
                                duration={1000}
                                offset={-70}
                                spy={true}
                                activeClass="nav-active"
                                className="w-fit cursor-pointer"
                            >
                                <Button name={about.contactButton} isBeam containerClass="w-full mt-10"/>
                            </LinkScroll>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <div className="about-image_frame about-image_frame-large about-image_frame-engineering">
                            <img
                                src={"/assets/grid3.png"}
                                alt="grid-3"
                                className="about-asset about-engineering-asset w-full sm:h-[266px] h-fit object-contain"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">{about.mindsetTitle}</p>
                            <p className="grid-subtext">{about.mindsetText}</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div className="about-image_frame about-image_frame-compact">
                            <img
                                src={isLight ? "/assets/grid4%20light.png" : "/assets/grid4.png"}
                                alt="grid-4"
                                className="about-asset about-contact-asset w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">{about.contactTitle}</p>
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
