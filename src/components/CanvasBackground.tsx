
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating particles component
const FloatingParticles = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions for particles
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

// Animated geometry component
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#0891b2"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

export const CanvasBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22d3ee" />
        
        <FloatingParticles />
        <AnimatedSphere />
        
        {/* Background gradient effect */}
        <mesh position={[0, 0, -5]} scale={[20, 20, 1]}>
          <planeGeometry />
          <meshBasicMaterial
            color="#0f172a"
            transparent
            opacity={0.8}
          />
        </mesh>
      </Canvas>
    </div>
  );
};
