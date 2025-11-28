"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedCubes() {
  const cube1 = useRef<THREE.Mesh>(null);
  const cube2 = useRef<THREE.Mesh>(null);
  const cube3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (cube1.current) {
      cube1.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      cube1.current.rotation.y = state.clock.getElapsedTime() * 0.7;
      cube1.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;
    }
    if (cube2.current) {
      cube2.current.rotation.x = state.clock.getElapsedTime() * -0.4;
      cube2.current.rotation.z = state.clock.getElapsedTime() * 0.6;
      cube2.current.position.x = Math.cos(state.clock.getElapsedTime()) * 0.5;
    }
    if (cube3.current) {
      cube3.current.rotation.y = state.clock.getElapsedTime() * 0.8;
      cube3.current.rotation.z = state.clock.getElapsedTime() * -0.3;
      cube3.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group>
      {/* Cube 1 - Red wireframe */}
      <mesh ref={cube1} position={[-2, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial color="#dc2626" wireframe />
      </mesh>

      {/* Cube 2 - Blue glowing */}
      <mesh ref={cube2} position={[2, 0, 0]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Cube 3 - Purple wireframe */}
      <mesh ref={cube3} position={[0, 2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#a855f7" wireframe />
      </mesh>
    </group>
  );
}

function AnimatedSpheres() {
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphere1.current) {
      sphere1.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      sphere1.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2;
    }
    if (sphere2.current) {
      sphere2.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      sphere2.current.position.x = Math.cos(state.clock.getElapsedTime()) * 2;
    }
  });

  return (
    <group>
      {/* Sphere 1 - Red distorted */}
      <mesh ref={sphere1} position={[0, -1.5, 0]}>
        <Sphere args={[0.6, 32, 32]}>
          <MeshDistortMaterial
            color="#dc2626"
            distort={0.4}
            speed={2}
            emissive="#dc2626"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </mesh>

      {/* Sphere 2 - Purple wireframe */}
      <mesh ref={sphere2} position={[0, -2, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="#a855f7" wireframe />
      </mesh>
    </group>
  );
}

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.6;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.8;
      torusRef.current.rotation.z = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <mesh ref={torusRef} position={[0, 0, 0]}>
      <Torus args={[2, 0.3, 16, 32]}>
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          wireframe
        />
      </Torus>
    </mesh>
  );
}

export function Hero3DOvercharged() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#dc2626" />
        <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
        <pointLight position={[0, -10, 0]} intensity={1.5} color="#a855f7" />

        <AnimatedTorus />
        <AnimatedCubes />
        <AnimatedSpheres />
      </Canvas>
    </div>
  );
}
