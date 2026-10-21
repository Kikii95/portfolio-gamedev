"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLES_COUNT = 2500;
const SPREAD = 60;

function createPositions(): Float32Array {
  const positions = new Float32Array(PARTICLES_COUNT * 3);
  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * SPREAD;
  }
  return positions;
}

const POSITIONS = createPositions();

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const particlesCount = PARTICLES_COUNT;
  const positions = POSITIONS;

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.25}
        color="#dc2626"
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function BackgroundParticles() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
