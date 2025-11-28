"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, MeshTransmissionMaterial, Environment, Float, Trail } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette, Glitch, Noise, DepthOfField } from '@react-three/postprocessing';
import { BlendFunction, GlitchMode } from 'postprocessing';
import * as THREE from 'three';

// Infinite Tunnel Effect
function InfiniteTunnel() {
  const tunnelRef = useRef<THREE.Group>(null);
  const ringCount = 50;

  const rings = useMemo(() => {
    return Array.from({ length: ringCount }, (_, i) => ({
      z: i * -2,
      scale: 1 + i * 0.1,
      color: new THREE.Color().setHSL((i / ringCount) * 0.3, 1, 0.5),
    }));
  }, []);

  useFrame((state) => {
    if (tunnelRef.current) {
      tunnelRef.current.rotation.z = state.clock.getElapsedTime() * 0.5;
      tunnelRef.current.position.z = (state.clock.getElapsedTime() * 2) % 4 - 2;
    }
  });

  return (
    <group ref={tunnelRef}>
      {rings.map((ring, i) => (
        <mesh key={i} position={[0, 0, ring.z]} scale={ring.scale}>
          <torusGeometry args={[3, 0.1, 16, 64]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={1}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

// Exploding 3D Text Particles
function ExplodingText() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          position={[-2, 0, 0]}
        >
          3D
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={512}
            transmission={1}
            roughness={0.1}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.5}
            anisotropy={0.5}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.2}
            color="#dc2626"
          />
        </Text3D>
      </Float>
    </group>
  );
}

// Holographic Orbs with Trails
function HolographicOrbs() {
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  const orb3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (orb1.current) {
      orb1.current.position.x = Math.sin(t) * 3;
      orb1.current.position.y = Math.cos(t * 0.7) * 2;
      orb1.current.position.z = Math.sin(t * 0.5) * 1;
    }

    if (orb2.current) {
      orb2.current.position.x = Math.cos(t * 0.8) * 2.5;
      orb2.current.position.y = Math.sin(t) * 2.5;
      orb2.current.position.z = Math.cos(t * 0.6) * 1.5;
    }

    if (orb3.current) {
      orb3.current.position.x = Math.sin(t * 1.2) * 2;
      orb3.current.position.y = Math.cos(t * 0.9) * 1.5;
      orb3.current.position.z = Math.sin(t * 0.7) * 2;
    }
  });

  return (
    <>
      <Trail width={2} length={8} color="#dc2626" attenuation={(t) => t * t}>
        <mesh ref={orb1}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#dc2626"
            emissive="#dc2626"
            emissiveIntensity={2}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </Trail>

      <Trail width={2} length={8} color="#3b82f6" attenuation={(t) => t * t}>
        <mesh ref={orb2}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={2}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </Trail>

      <Trail width={2} length={8} color="#a855f7" attenuation={(t) => t * t}>
        <mesh ref={orb3}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={2}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </Trail>
    </>
  );
}

// Rotating DNA Helix
function DNAHelix() {
  const helixRef = useRef<THREE.Group>(null);
  const particleCount = 100;

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => {
      const t = (i / particleCount) * Math.PI * 4;
      return {
        x: Math.cos(t) * 2,
        y: (i / particleCount) * 10 - 5,
        z: Math.sin(t) * 2,
      };
    });
  }, []);

  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={helixRef} position={[4, 0, -3]}>
      {particles.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]} scale={0.1}>
          <sphereGeometry />
          <meshStandardMaterial
            color={new THREE.Color().setHSL((i / particleCount), 1, 0.5)}
            emissive={new THREE.Color().setHSL((i / particleCount), 1, 0.5)}
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}

export function Hero3DGodMode() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#dc2626" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#3b82f6" />
        <pointLight position={[0, 10, -10]} intensity={1.5} color="#a855f7" />

        {/* Environment for reflections */}
        <Environment preset="city" />

        {/* 3D Elements */}
        <InfiniteTunnel />
        <ExplodingText />
        <HolographicOrbs />
        <DNAHelix />

        {/* POST-PROCESSING EFFECTS - THE MAGIC */}
        <EffectComposer>
          {/* Bloom - Intense glow */}
          <Bloom
            intensity={2}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />

          {/* Chromatic Aberration - Color split */}
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={new THREE.Vector2(0.002, 0.002)}
          />

          {/* Glitch Effect - Random glitches */}
          <Glitch
            delay={new THREE.Vector2(0.5, 1)}
            duration={new THREE.Vector2(0.1, 0.3)}
            strength={new THREE.Vector2(0.2, 0.4)}
            mode={GlitchMode.SPORADIC}
          />

          {/* Noise - Film grain */}
          <Noise
            premultiply
            blendFunction={BlendFunction.ADD}
          />

          {/* Vignette - Dark edges */}
          <Vignette
            offset={0.3}
            darkness={0.5}
            blendFunction={BlendFunction.NORMAL}
          />

          {/* Depth of Field - Focus blur */}
          <DepthOfField
            focusDistance={0.01}
            focalLength={0.05}
            bokehScale={3}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
