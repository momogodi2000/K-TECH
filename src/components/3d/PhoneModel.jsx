import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const PhoneModel = () => {
  const groupRef = useRef();
  const screenRef = useRef();
  const cameraRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (screenRef.current) {
      screenRef.current.material.emissiveIntensity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
    if (cameraRef.current) {
      cameraRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Phone Body */}
      <Box args={[0.4, 0.8, 0.05]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Screen */}
      <Box ref={screenRef} args={[0.35, 0.7, 0.01]} position={[0, 0, 0.03]}>
        <meshStandardMaterial
          color="#000000"
          emissive="#3B82F6"
          emissiveIntensity={0.1}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>

      {/* Home Button */}
      <Cylinder args={[0.04, 0.04, 0.01, 16]} position={[0, -0.25, 0.03]}>
        <meshStandardMaterial
          color="#374151"
          metalness={0.6}
          roughness={0.3}
        />
      </Cylinder>

      {/* Front Camera */}
      <Sphere ref={cameraRef} args={[0.015, 16, 16]} position={[0.12, 0.25, 0.03]}>
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>

      {/* Speaker */}
      <Box args={[0.08, 0.02, 0.01]} position={[0, 0.35, 0.03]}>
        <meshStandardMaterial
          color="#374151"
          metalness={0.7}
          roughness={0.2}
        />
      </Box>

      {/* Volume Buttons */}
      <Box args={[0.02, 0.15, 0.01]} position={[0.21, 0.1, 0]}>
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.5}
          roughness={0.4}
        />
      </Box>

      {/* Power Button */}
      <Box args={[0.02, 0.08, 0.01]} position={[0.21, -0.15, 0]}>
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.5}
          roughness={0.4}
        />
      </Box>

      {/* Screen Content - App Icons */}
      <group position={[0, 0, 0.04]}>
        {/* App Grid */}
        {[...Array(12)].map((_, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const x = (col - 1.5) * 0.08;
          const y = (1 - row) * 0.12;
          
          return (
            <Box key={i} args={[0.06, 0.06, 0.001]} position={[x, y, 0]}>
              <meshStandardMaterial
                color={i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#F97316" : "#10b981"}
                emissive={i % 3 === 0 ? "#1E40AF" : i % 3 === 1 ? "#ea580c" : "#059669"}
                emissiveIntensity={0.2}
              />
            </Box>
          );
        })}
      </group>

      {/* Ambient Glow */}
      <pointLight
        position={[0, 0, 2]}
        intensity={0.5}
        color="#3B82F6"
        distance={3}
      />
    </group>
  );
};

export default PhoneModel;
