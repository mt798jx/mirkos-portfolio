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
import { useActiveTheme } from '../hooks/useActiveTheme.js';
import { content } from '../content.js';
import { useI18n } from '../i18n.jsx';

const Hero = () => {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const { language } = useI18n();
  const hero = content[language].hero;
  const marqueeItems = hero.marqueeItems;
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const theme = useActiveTheme();
  const isLight = theme === 'light';

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Element className="hero-section w-full flex flex-col relative overflow-hidden" name="home" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-32 mt-24 c-space gap-3 relative z-10">
        <p className="hero_tag text-gray_gradient">{hero.role}</p>
        <p className="max-w-2xl mx-auto text-center text-white-600 sm:text-lg text-sm leading-7">
          {hero.intro}
        </p>
        <div
          className="hero-marquee"
          aria-label={hero.focusLabel}
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

      <div className="hero-canvas_wrap">
        <Canvas
          className="w-full h-full"
          resize={{ scroll: false, debounce: { scroll: 120, resize: 0 } }}
          dpr={[1, isMobile ? 1.5 : 2]}
        >
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HeroWorkspace scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.05, -0.18, 0]} isLight={isLight} />
            </HeroCamera>

            <HeroTechObjects visible={!isMobile} isLight={isLight} />

            <ambientLight intensity={isLight ? 2.65 : 2.05} />
            <directionalLight position={[10, 10, 10]} intensity={isLight ? 1.15 : 0.8} />
            <pointLight position={[-10, 1, 5]} intensity={isLight ? 2.2 : 3.4} color="#38bdf8" />
            <pointLight position={[10, 0, 5]} intensity={isLight ? 1.8 : 2.8} color="#f97316" />
            <pointLight position={[0, -4, 5]} intensity={isLight ? 1.05 : 1.4} color="#60a5fa" />
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
          <Button name={hero.cta} isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </LinkScroll>
      </div>
    </Element>
  );
};

export default Hero;
