import { Float, RoundedBox } from '@react-three/drei';

const ScreenGlow = ({ position, rotation, scale, color = '#38bdf8' }) => (
  <mesh position={position} rotation={rotation} scale={scale}>
    <planeGeometry args={[1, 1]} />
    <meshBasicMaterial color={color} transparent opacity={0.18} />
  </mesh>
);

const CodeLine = ({ position, width = 1, color = '#64748b' }) => (
  <mesh position={position}>
    <boxGeometry args={[width, 0.035, 0.03]} />
    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} />
  </mesh>
);

const Monitor = ({ position, rotation = [0, 0, 0], accent = '#38bdf8' }) => (
  <group position={position} rotation={rotation}>
    <RoundedBox args={[3.5, 2.05, 0.16]} radius={0.08} smoothness={4}>
      <meshStandardMaterial color="#101827" metalness={0.25} roughness={0.38} />
    </RoundedBox>
    <mesh position={[0, 0, 0.091]}>
      <planeGeometry args={[3.18, 1.72]} />
      <meshStandardMaterial color="#06111f" emissive="#081e36" emissiveIntensity={0.65} />
    </mesh>
    <ScreenGlow position={[0, 0, 0.098]} scale={[3.18, 1.72, 1]} color={accent} />
    <mesh position={[0, 0.77, 0.14]}>
      <boxGeometry args={[2.85, 0.035, 0.03]} />
      <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.9} />
    </mesh>
    <CodeLine position={[-0.85, 0.48, 0.13]} width={1.25} color={accent} />
    <CodeLine position={[-0.55, 0.2, 0.13]} width={1.85} />
    <CodeLine position={[-0.9, -0.08, 0.13]} width={1.15} color="#f97316" />
    <CodeLine position={[-0.35, -0.36, 0.13]} width={2.05} />
    <mesh position={[0, -1.22, -0.02]}>
      <boxGeometry args={[0.22, 0.68, 0.14]} />
      <meshStandardMaterial color="#1f2937" metalness={0.45} roughness={0.35} />
    </mesh>
    <mesh position={[0, -1.62, -0.02]}>
      <boxGeometry args={[1.3, 0.12, 0.6]} />
      <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.32} />
    </mesh>
  </group>
);

const Laptop = () => (
  <group position={[0.95, -1.3, 0.88]} rotation={[-0.1, -0.28, 0]}>
    <RoundedBox args={[2.25, 0.12, 1.35]} radius={0.06} smoothness={4}>
      <meshStandardMaterial color="#151923" metalness={0.55} roughness={0.28} />
    </RoundedBox>
    <group position={[0, 0.75, -0.62]} rotation={[-1.15, 0, 0]}>
      <RoundedBox args={[2.25, 1.28, 0.1]} radius={0.06} smoothness={4}>
        <meshStandardMaterial color="#0f172a" metalness={0.35} roughness={0.32} />
      </RoundedBox>
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[1.92, 0.98]} />
        <meshStandardMaterial color="#07111f" emissive="#0f2d46" emissiveIntensity={0.75} />
      </mesh>
      <CodeLine position={[-0.35, 0.2, 0.09]} width={1.05} color="#38bdf8" />
      <CodeLine position={[-0.18, -0.06, 0.09]} width={1.42} />
      <CodeLine position={[-0.48, -0.3, 0.09]} width={0.82} color="#f97316" />
    </group>
  </group>
);

const Keyboard = () => (
  <group position={[-0.95, -1.22, 1.05]} rotation={[0, 0.16, 0]}>
    <RoundedBox args={[1.9, 0.12, 0.62]} radius={0.05} smoothness={4}>
      <meshStandardMaterial color="#0f1117" metalness={0.35} roughness={0.42} />
    </RoundedBox>
    {Array.from({ length: 16 }, (_, index) => (
      <mesh key={index} position={[-0.75 + (index % 8) * 0.22, 0.08, -0.17 + Math.floor(index / 8) * 0.22]}>
        <boxGeometry args={[0.14, 0.035, 0.1]} />
        <meshStandardMaterial color="#273244" emissive="#111827" emissiveIntensity={0.3} />
      </mesh>
    ))}
  </group>
);

const HeroWorkspace = ({ ...props }) => {
  return (
    <Float floatIntensity={0.25} rotationIntensity={0.12}>
      <group {...props}>
        <mesh position={[0, -1.78, 0.45]} receiveShadow>
          <boxGeometry args={[6.2, 0.22, 2.65]} />
          <meshStandardMaterial color="#161821" metalness={0.28} roughness={0.48} />
        </mesh>
        <mesh position={[0, -1.64, 0.45]}>
          <boxGeometry args={[6.4, 0.05, 2.75]} />
          <meshStandardMaterial color="#252a36" metalness={0.18} roughness={0.62} />
        </mesh>
        <mesh position={[0, -1.49, -0.94]}>
          <boxGeometry args={[5.7, 0.035, 0.08]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.75} />
        </mesh>
        <mesh position={[1.85, -1.47, 1.62]}>
          <boxGeometry args={[1.5, 0.03, 0.08]} />
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.65} />
        </mesh>

        <Monitor position={[-1.35, 0.2, 0]} rotation={[0.02, 0.18, 0]} accent="#38bdf8" />
        <Monitor position={[1.75, 0.1, -0.2]} rotation={[0.02, -0.32, 0]} accent="#f97316" />
        <Laptop />
        <Keyboard />

        <mesh position={[-2.8, -0.9, 0.7]}>
          <cylinderGeometry args={[0.18, 0.18, 0.95, 32]} />
          <meshStandardMaterial color="#0f172a" metalness={0.48} roughness={0.32} />
        </mesh>
        <pointLight position={[-2.8, -0.28, 0.7]} intensity={2.2} distance={5} color="#38bdf8" />
        <mesh position={[-2.8, -0.28, 0.7]}>
          <sphereGeometry args={[0.14, 24, 24]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1.6} />
        </mesh>
      </group>
    </Float>
  );
};

export default HeroWorkspace;
