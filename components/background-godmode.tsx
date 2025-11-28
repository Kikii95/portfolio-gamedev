"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Scanline, DotScreen, Grid, TiltShift2 } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

// Matrix Rain Effect
function MatrixRain() {
  const groupRef = useRef<THREE.Group>(null);
  const columnCount = 50;

  const columns = useMemo(() => {
    return Array.from({ length: columnCount }, (_, i) => ({
      x: (i / columnCount) * 40 - 20,
      chars: Array.from({ length: 20 }, () => ({
        y: Math.random() * 40 - 20,
        speed: 0.1 + Math.random() * 0.2,
        opacity: Math.random(),
      })),
    }));
  }, []);

  useFrame(() => {
    columns.forEach((column) => {
      column.chars.forEach((char) => {
        char.y += char.speed;
        if (char.y > 20) {
          char.y = -20;
          char.opacity = Math.random();
        }
      });
    });
  });

  return (
    <group ref={groupRef}>
      {columns.map((column, colIndex) => (
        <group key={colIndex}>
          {column.chars.map((char, charIndex) => (
            <mesh
              key={charIndex}
              position={[column.x, char.y, -30]}
              scale={[0.2, 0.3, 0.1]}
            >
              <boxGeometry />
              <meshBasicMaterial
                color="#00ff00"
                transparent
                opacity={char.opacity}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// Cyber Grid Floor
function CyberGrid() {
  const gridRef = useRef<THREE.Group>(null);
  const gridSize = 50;
  const gridDivisions = 50;

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 2) % 2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -10, -25]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper
        args={[gridSize, gridDivisions, '#dc2626', '#3b82f6']}
      />
    </group>
  );
}

// Energy Waves
function EnergyWaves() {
  const waveCount = 10;
  const waves = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    waves.current.forEach((wave, i) => {
      if (wave) {
        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2 + i) * 0.5;
        wave.scale.set(scale, scale, scale);
        wave.material.opacity = 0.5 + Math.sin(state.clock.getElapsedTime() * 2 + i) * 0.3;
      }
    });
  });

  return (
    <group>
      {Array.from({ length: waveCount }, (_, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) waves.current[i] = el; }}
          position={[0, 0, -10 + i * -2]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[5 + i, 0.1, 16, 64]} />
          <meshBasicMaterial
            color={new THREE.Color().setHSL((i / waveCount) * 0.3, 1, 0.5)}
            transparent
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

// Fractal Cubes
function FractalCubes() {
  const groupRef = useRef<THREE.Group>(null);
  const depth = 4;
  let uniqueId = 0;

  const generateFractal = (level: number, position: [number, number, number], scale: number): JSX.Element[] => {
    if (level === 0) return [];

    const offset = scale / 2;
    const positions: [number, number, number][] = [
      [position[0] + offset, position[1] + offset, position[2] + offset],
      [position[0] - offset, position[1] + offset, position[2] + offset],
      [position[0] + offset, position[1] - offset, position[2] + offset],
      [position[0] + offset, position[1] + offset, position[2] - offset],
      [position[0] - offset, position[1] - offset, position[2] + offset],
      [position[0] + offset, position[1] - offset, position[2] - offset],
      [position[0] - offset, position[1] + offset, position[2] - offset],
      [position[0] - offset, position[1] - offset, position[2] - offset],
    ];

    return positions.flatMap((pos, i) => {
      const currentId = uniqueId++;
      return [
        <mesh key={`fractal-${currentId}`} position={pos} scale={scale}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
            color={new THREE.Color().setHSL((level / depth), 1, 0.5)}
            emissive={new THREE.Color().setHSL((level / depth), 1, 0.5)}
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>,
        ...generateFractal(level - 1, pos, scale * 0.5),
      ];
    });
  };

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[-8, 0, -5]}>
      {generateFractal(depth, [0, 0, 0], 1)}
    </group>
  );
}

export function BackgroundGodMode() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#dc2626" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

        <MatrixRain />
        <CyberGrid />
        <EnergyWaves />
        <FractalCubes />

        {/* Post-Processing */}
        <EffectComposer>
          {/* Scanlines - CRT effect */}
          <Scanline
            blendFunction={BlendFunction.OVERLAY}
            density={1.5}
          />

          {/* Dot Screen - Retro effect */}
          <DotScreen
            blendFunction={BlendFunction.NORMAL}
            angle={Math.PI * 0.5}
            scale={0.5}
          />

          {/* Grid overlay */}
          <Grid
            blendFunction={BlendFunction.OVERLAY}
            scale={1}
            lineWidth={0.5}
          />

          {/* Tilt Shift - Miniature effect */}
          <TiltShift2
            blur={0.2}
            focusArea={0.6}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
