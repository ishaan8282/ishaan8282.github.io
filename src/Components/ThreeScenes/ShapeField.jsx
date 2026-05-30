import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function ShapeField() {
  const groupRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.08 + mouse.x * 0.05;
    groupRef.current.rotation.x = mouse.y * 0.05;
  });

  return (
    <group ref={groupRef} position={[1.15, 0.05, -0.8]} scale={0.72}>
      {/* <Float speed={1.3} rotationIntensity={0.55} floatIntensity={0.7}>
        <mesh position={[1.25, 0.45, -0.2]}>
          <icosahedronGeometry args={[0.46, 1]} />
          <MeshDistortMaterial color="#3ae8ff" distort={0.18} speed={1.7} roughness={0.22} metalness={0.48} transparent opacity={0.200} />
        </mesh>
      </Float>
      <Float speed={1.65} rotationIntensity={0.75} floatIntensity={0.200}>
        <mesh position={[1.55, -0.55, -0.55]}>
          <torusKnotGeometry args={[0.36, 0.1, 96, 14]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.28} metalness={0.58} transparent opacity={0.68} />
        </mesh>
      </Float>
      <Float speed={1.05} rotationIntensity={0.85} floatIntensity={0.200}>
        <mesh position={[0.35, 1.15, -0.65]}>
          <octahedronGeometry args={[0.34]} />
          <meshStandardMaterial color="#d7ff63" roughness={0.38} metalness={0.32} transparent opacity={0.62} />
        </mesh>
      </Float> */}
    </group>
  );
}

export default ShapeField;
