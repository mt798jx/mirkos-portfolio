import { Float, RoundedBox, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const bars = [
  { x: -1.42, y: 1.18, width: 0.28, color: "#ef4444" },
  { x: -1.08, y: 1.18, width: 0.28, color: "#eab308" },
  { x: -0.74, y: 1.18, width: 0.28, color: "#22c55e" },
  { x: 1.0, y: -1.18, width: 0.72, color: "#38bdf8" },
  { x: 0.08, y: -1.18, width: 0.46, color: "#a78bfa" },
];

const GlowBar = ({ x, y, width, color, z = 0.18 }) => (
  <RoundedBox args={[width, 0.045, 0.035]} radius={0.018} smoothness={4} position={[x, y, z]}>
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
  </RoundedBox>
);

const BackPlate = ({ position, rotation, color, isLight = false }) => (
  <group position={position} rotation={rotation}>
    <RoundedBox args={[2.2, 1.35, 0.06]} radius={0.12} smoothness={10}>
      <meshStandardMaterial
        color={isLight ? "#dbeafe" : "#10121c"}
        metalness={isLight ? 0.12 : 0.45}
        roughness={isLight ? 0.5 : 0.28}
        transparent
        opacity={isLight ? 0.58 : 0.72}
      />
    </RoundedBox>
    <GlowBar x={-0.42} y={0.34} width={0.74} color={color} z={0.055} />
    <GlowBar x={0.02} y={0.02} width={1.24} color="#94a3b8" z={0.055} />
    <GlowBar x={-0.18} y={-0.26} width={0.82} color={color} z={0.055} />
  </group>
);

const ProjectPreview = ({ texture, isLight = false }) => {
  const root = useRef();
  const videoTexture = useVideoTexture(texture || "/textures/project/project1.mp4");
  const palette = {
    frame: isLight ? "#d8e3ef" : "#080b12",
    bezel: isLight ? "#f8fafc" : "#111827",
    topBar: isLight ? "#e2e8f0" : "#202637",
    ringOpacity: isLight ? 0.14 : 0.32,
    glassOpacity: isLight ? 0.16 : 0.055,
    glareOpacity: isLight ? 0.06 : 0.11,
  };

  useEffect(() => {
    if (videoTexture) {
      videoTexture.flipY = true;
    }
  }, [videoTexture]);

  useFrame(({ clock }) => {
    if (!root.current) return;

    const time = clock.getElapsedTime();
    root.current.rotation.y = -0.22 + Math.sin(time * 0.35) * 0.045;
    root.current.rotation.x = 0.06 + Math.sin(time * 0.28) * 0.02;
  });

  useGSAP(
    () => {
      gsap.fromTo(
        root.current.scale,
        { x: 0.88, y: 0.88, z: 0.88 },
        { x: 1, y: 1, z: 1, duration: 0.8, ease: "power3.out" },
      );
      gsap.fromTo(
        root.current.rotation,
        { y: Math.PI / 2 },
        { y: -0.22, duration: 0.95, ease: "power3.out" },
      );
    },
    { dependencies: [texture] },
  );

  return (
    <group ref={root} rotation={[0.06, -0.22, 0]} dispose={null}>
      <Float speed={1.25} rotationIntensity={0.08} floatIntensity={0.35}>
        <BackPlate
          position={[0.72, 0.08, -0.42]}
          rotation={[0.02, -0.22, 0.03]}
          color="#38bdf8"
          isLight={isLight}
        />
        <BackPlate
          position={[-0.72, -0.16, -0.56]}
          rotation={[0.02, 0.28, -0.035]}
          color="#22c55e"
          isLight={isLight}
        />

        <RoundedBox args={[4.05, 2.66, 0.16]} radius={0.18} smoothness={14} position={[0, 0, 0]}>
          <meshStandardMaterial color={palette.frame} metalness={isLight ? 0.22 : 0.65} roughness={isLight ? 0.42 : 0.2} />
        </RoundedBox>

        <RoundedBox args={[3.78, 2.4, 0.08]} radius={0.14} smoothness={12} position={[0, 0, 0.09]}>
          <meshStandardMaterial
            color={palette.bezel}
            metalness={isLight ? 0.1 : 0.38}
            roughness={isLight ? 0.46 : 0.22}
            transparent
            opacity={0.9}
          />
        </RoundedBox>

        <mesh position={[0, -0.02, 0.145]}>
          <planeGeometry args={[3.48, 2.02]} />
          <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>

        <mesh position={[0, -0.02, 0.152]}>
          <planeGeometry args={[3.5, 2.04]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={palette.glassOpacity} />
        </mesh>

        <mesh position={[-0.92, 0.38, 0.158]} rotation={[0, 0, -0.4]}>
          <planeGeometry args={[0.11, 2.4]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={palette.glareOpacity} />
        </mesh>

        <RoundedBox args={[3.66, 0.18, 0.05]} radius={0.06} smoothness={5} position={[0, 1.18, 0.18]}>
          <meshStandardMaterial color={palette.topBar} metalness={isLight ? 0.1 : 0.32} roughness={isLight ? 0.48 : 0.32} />
        </RoundedBox>

        {bars.map((bar) => (
          <GlowBar key={`${bar.x}-${bar.y}`} {...bar} z={0.215} />
        ))}

        <mesh position={[0, 0, -0.09]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.12, 2.16, 128]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.35}
            transparent
            opacity={palette.ringOpacity}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default ProjectPreview;
