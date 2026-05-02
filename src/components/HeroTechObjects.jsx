import { Float, RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const AnimatedGroup = ({ children, position, rotation, speed = 1, drift = 0.18, spin = 0.13 }) => {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime * speed;
    group.current.position.y = position[1] + Math.sin(time) * drift;
    group.current.position.x = position[0] + Math.cos(time * 0.72) * drift * 0.55;
    group.current.position.z = position[2] + Math.sin(time * 0.5) * drift * 0.25;
    group.current.rotation.y = rotation[1] + Math.sin(time * 0.55) * spin;
    group.current.rotation.x = rotation[0] + Math.cos(time * 0.5) * spin * 0.38;
    group.current.rotation.z = rotation[2] + Math.cos(time * 0.45) * spin * 0.45;
  });

  return (
    <group ref={group} position={position} rotation={rotation}>
      {children}
    </group>
  );
};

const SpinningRing = ({ position }) => {
  const ring = useRef();

  useFrame((state, delta) => {
    if (!ring.current) return;
    ring.current.rotation.z += delta * 0.9;
    ring.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.03);
  });

  return (
    <mesh ref={ring} position={position}>
      <torusGeometry args={[0.72, 0.018, 12, 48]} />
      <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.75} />
    </mesh>
  );
};

const PulsingNode = ({ position, delay = 0 }) => {
  const node = useRef();

  useFrame((state) => {
    if (!node.current) return;
    node.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2.4 + delay) * 0.14);
  });

  return (
    <mesh ref={node} position={position}>
      <sphereGeometry args={[0.14, 24, 24]} />
      <meshStandardMaterial color="#cbd5e1" emissive="#38bdf8" emissiveIntensity={0.35} />
    </mesh>
  );
};

const DatabaseStack = () => (
  <Float floatIntensity={1.35} rotationIntensity={0.35}>
    <AnimatedGroup position={[-10.2, 0.35, -1.15]} rotation={[0.08, 0.42, -0.08]} speed={1.05} drift={0.34} spin={0.22}>
      {[0, 0.36, 0.72].map((y, index) => (
        <group key={y} position={[0, y, 0]}>
          <mesh>
            <cylinderGeometry args={[0.72, 0.72, 0.2, 48]} />
            <meshStandardMaterial color={index === 1 ? '#1e3a5f' : '#14243d'} metalness={0.45} roughness={0.3} emissive="#0f2d46" emissiveIntensity={0.3} />
          </mesh>
          <SpinningRing position={[0, 0.12, 0]} />
        </group>
      ))}
      <pointLight position={[0, 0.6, 1]} intensity={2} distance={5} color="#38bdf8" />
    </AnimatedGroup>
  </Float>
);

const TerminalPanel = () => (
  <Float floatIntensity={1.1} rotationIntensity={0.24}>
    <AnimatedGroup position={[10.05, 0.55, -1.25]} rotation={[0.06, -0.5, 0.08]} speed={1.18} drift={0.28} spin={0.2}>
      <RoundedBox args={[2.35, 1.36, 0.1]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color="#152238" metalness={0.36} roughness={0.34} emissive="#0f2d46" emissiveIntensity={0.22} />
      </RoundedBox>
      {[
        [-0.55, 0.34, 1.2, '#38bdf8'],
        [-0.38, 0.08, 1.54, '#64748b'],
        [-0.62, -0.18, 0.9, '#f97316'],
        [-0.28, -0.42, 1.45, '#64748b'],
      ].map(([x, y, width, color]) => (
        <mesh key={`${x}-${y}`} position={[x, y, 0.08]}>
          <boxGeometry args={[width, 0.045, 0.025]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.95} />
        </mesh>
      ))}
    </AnimatedGroup>
  </Float>
);

const NetworkNodes = () => (
  <Float floatIntensity={1.2} rotationIntensity={0.3}>
    <AnimatedGroup position={[-9.35, -3.45, -0.8]} rotation={[-0.1, 0.25, 0.06]} speed={1.38} drift={0.36} spin={0.26}>
      {[
        [-0.75, 0.15, 0],
        [0.1, 0.65, 0],
        [0.82, 0.05, 0],
        [-0.05, -0.58, 0],
      ].map((position, index) => (
        <PulsingNode key={position.join('-')} position={position} delay={index * 0.6} />
      ))}
      {[
        [[-0.75, 0.15, 0], [0.1, 0.65, 0]],
        [[0.1, 0.65, 0], [0.82, 0.05, 0]],
        [[0.82, 0.05, 0], [-0.05, -0.58, 0]],
        [[-0.05, -0.58, 0], [-0.75, 0.15, 0]],
      ].map(([start, end]) => {
        const mid = start.map((value, index) => (value + end[index]) / 2);
        const dx = end[0] - start[0];
        const dy = end[1] - start[1];
        const length = Math.sqrt(dx * dx + dy * dy);

        return (
          <mesh key={`${start.join('-')}-${end.join('-')}`} position={mid} rotation={[0, 0, Math.atan2(dy, dx)]}>
            <boxGeometry args={[length, 0.025, 0.02]} />
            <meshStandardMaterial color="#60a5fa" emissive="#38bdf8" emissiveIntensity={0.62} />
          </mesh>
        );
      })}
    </AnimatedGroup>
  </Float>
);

const CloudBlocks = () => (
  <Float floatIntensity={1.25} rotationIntensity={0.25}>
    <AnimatedGroup position={[9.45, -3.28, -0.88]} rotation={[-0.08, -0.32, -0.05]} speed={0.98} drift={0.34} spin={0.2}>
      {[
        [-0.65, 0, 0, 0.42],
        [-0.22, 0.18, 0, 0.58],
        [0.36, 0.02, 0, 0.48],
        [0.84, -0.08, 0, 0.34],
      ].map(([x, y, z, size]) => (
        <RoundedBox key={`${x}-${size}`} position={[x, y, z]} args={[size, size, size]} radius={0.06} smoothness={3}>
          <meshStandardMaterial color="#172033" metalness={0.4} roughness={0.34} emissive="#38bdf8" emissiveIntensity={0.26} />
        </RoundedBox>
      ))}
      <mesh position={[0.08, -0.45, 0]}>
        <boxGeometry args={[1.75, 0.045, 0.045]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.65} />
      </mesh>
    </AnimatedGroup>
  </Float>
);

const HeroTechObjects = ({ visible = true }) => {
  if (!visible) return null;

  return (
    <group>
      <DatabaseStack />
      <TerminalPanel />
      <NetworkNodes />
      <CloudBlocks />
    </group>
  );
};

export default HeroTechObjects;
