import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('/models/target.glb');

  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.3,
      duration: 1.8,
      repeat: -1,
      ease: "sine.inOut",
      yoyo: true,
    });
  });

  return (
    <group ref={targetRef} {...props} rotation={[0, Math.PI, 0]} scale={0.35}>
      <primitive object={scene} />
    </group>
  );
};

export default Target;