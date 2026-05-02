import { Leva } from 'leva';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import { Link as LinkScroll } from 'react-scroll';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import HeroWorkspace from '../components/HeroWorkspace.jsx';
import HeroTechObjects from '../components/HeroTechObjects.jsx';
import { Element } from 'react-scroll';

const Hero = () => {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeItems = [
    'Software Engineering',
    'Data Platforms',
    'Automation',
    'Cloud Workflows',
    'Clean Architecture',
    'Reliable Systems',
    'Chatbot Development',
    'IT Support',
  ];
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Element className="hero-section min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-32 mt-24 c-space gap-3 relative z-10">
        <p className="hero_tag text-gray_gradient">Software Engineer</p>
        <p className="max-w-2xl mx-auto text-center text-white-600 sm:text-lg text-sm leading-7">
          I build reliable software, data-driven tools, and polished digital experiences with a focus on clean architecture, automation, and real-world impact.
        </p>
        <div
          className="hero-marquee"
          aria-label="Core engineering focus"
          onPointerEnter={() => setIsMarqueePaused(true)}
          onPointerLeave={() => setIsMarqueePaused(false)}
        >
          <div className="hero-marquee_track" style={{ animationPlayState: isMarqueePaused ? 'paused' : 'running' }}>
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <group position={[0, -0.45, -3.2]}>
              <mesh rotation={[0, 0, 0]}>
                <planeGeometry args={[17, 8]} />
                <meshBasicMaterial color="#06111f" transparent opacity={0.1} />
              </mesh>
            </group>

            <HeroCamera isMobile={isMobile}>
              <HeroWorkspace scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.05, -0.18, 0]} />
            </HeroCamera>

            <HeroTechObjects visible={!isMobile} />

            <ambientLight intensity={2.05} />
            <directionalLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, 1, 5]} intensity={3.4} color="#38bdf8" />
            <pointLight position={[10, 0, 5]} intensity={2.8} color="#f97316" />
            <pointLight position={[0, -4, 5]} intensity={1.4} color="#60a5fa" />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <LinkScroll
            to="work"
            smooth={true}
            duration={500}
            offset={-70}
            className="w-fit cursor-pointer">
          <Button name="Explore my work" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </LinkScroll>
      </div>
    </Element>
  );
};

export default Hero;
