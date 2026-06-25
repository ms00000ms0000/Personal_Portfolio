import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function SphereMesh() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += 0.002;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={3}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />

        <meshStandardMaterial
          color="#00E5FF"
          wireframe
        />
      </mesh>
    </Float>
  );
}

function AISphere() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={3}
      />

      <SphereMesh />
    </Canvas>
  );
}

export default AISphere;