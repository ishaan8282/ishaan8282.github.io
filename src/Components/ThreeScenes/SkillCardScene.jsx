import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function SkillCardScene({ index, active }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const targetScale = active ? 1.08 : 0.92;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime + index) * 0.12;
    meshRef.current.rotation.y = clock.elapsedTime * (active ? 0.72 : 0.34) + index;
    meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.08);

    if (ringRef.current) {
      ringRef.current.rotation.z = -clock.elapsedTime * (active ? 0.82 : 0.36);
      ringRef.current.scale.setScalar(active ? 1.02 : 0.9);
    }
  });

  return (
    <group position={[0.32, 0.08, -0.35]} scale={0.78}>
      <Float speed={1.25} rotationIntensity={0.12} floatIntensity={0.22}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.02, 0.72, 0.1]} />
          <meshStandardMaterial color={index % 2 ? "#8b5cf6" : "#3ae8ff"} roughness={0.2} metalness={0.68} transparent opacity={0.46} />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[1.25, 0, 0]}>
        <torusGeometry args={[0.72, 0.01, 10, 96]} />
        <meshBasicMaterial color={active ? "#d7ff63" : "#3ae8ff"} transparent opacity={active ? 0.58 : 0.24} />
      </mesh>
    </group>
  );
}

export default SkillCardScene;
