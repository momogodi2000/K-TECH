import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Cone } from '@react-three/drei';
import * as THREE from 'three';

const CameraModel = () => {
  const groupRef = useRef();
  const lensRef = useRef();
  const baseRef = useRef();
  const ledRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
    if (lensRef.current) {
      lensRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (baseRef.current) {
      baseRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (ledRef.current) {
      ledRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Camera Body */}
      <Box args={[0.4, 0.3, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Camera Lens */}
      <group ref={lensRef} position={[0, 0, 0.15]}>
        <Cylinder args={[0.08, 0.06, 0.1, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#374151"
            metalness={0.9}
            roughness={0.1}
          />
        </Cylinder>

        {/* Lens Glass */}
        <Cylinder args={[0.06, 0.06, 0.02, 16]} position={[0, 0, 0.06]}>
          <meshStandardMaterial
            color="#000000"
            emissive="#3B82F6"
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </Cylinder>

        {/* Lens Ring */}
        <Cylinder args={[0.09, 0.09, 0.02, 16]} position={[0, 0, -0.04]}>
          <meshStandardMaterial
            color="#6b7280"
            metalness={0.7}
            roughness={0.3}
          />
        </Cylinder>
      </group>

      {/* Camera Mount */}
      <group ref={baseRef} position={[0, 0, -0.2]}>
        <Cylinder args={[0.15, 0.15, 0.1, 8]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#6b7280"
            metalness={0.6}
            roughness={0.4}
          />
        </Cylinder>

        {/* Mounting Plate */}
        <Box args={[0.3, 0.3, 0.05]} position={[0, 0, -0.075]}>
          <meshStandardMaterial
            color="#374151"
            metalness={0.7}
            roughness={0.3}
          />
        </Box>

        {/* Mounting Screws */}
        {[...Array(4)].map((_, i) => {
          const angle = (i / 4) * Math.PI * 2;
          const x = Math.cos(angle) * 0.1;
          const y = Math.sin(angle) * 0.1;
          
          return (
            <Cylinder key={i} args={[0.01, 0.01, 0.06, 8]} position={[x, y, -0.075]}>
              <meshStandardMaterial
                color="#9ca3af"
                metalness={0.8}
                roughness={0.2}
              />
            </Cylinder>
          );
        })}
      </group>

      {/* Status LED */}
      <Sphere ref={ledRef} args={[0.015, 16, 16]} position={[0.15, 0.1, 0]}>
        <meshStandardMaterial
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Infrared LEDs */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 0.12;
        const y = Math.sin(angle) * 0.12;
        
        return (
          <Sphere key={i} args={[0.008, 8, 8]} position={[x, y, 0.1]}>
            <meshStandardMaterial
              color="#ef4444"
              emissive="#ef4444"
              emissiveIntensity={0.1}
            />
          </Sphere>
        );
      })}

      {/* Microphone */}
      <Cylinder args={[0.005, 0.005, 0.02, 8]} position={[-0.15, 0.1, 0]}>
        <meshStandardMaterial
          color="#374151"
          metalness={0.6}
          roughness={0.4}
        />
      </Cylinder>

      {/* Speaker */}
      <Box args={[0.02, 0.02, 0.01]} position={[-0.15, -0.1, 0]}>
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.5}
          roughness={0.5}
        />
      </Box>

      {/* Cable */}
      <Cylinder args={[0.01, 0.01, 0.3, 8]} position={[0, 0, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#374151"
          metalness={0.3}
          roughness={0.7}
        />
      </Cylinder>

      {/* Cable Connector */}
      <Box args={[0.03, 0.03, 0.02]} position={[0, 0, -0.45]}>
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.6}
          roughness={0.4}
        />
      </Box>

      {/* Ambient Lighting */}
      <pointLight
        position={[0, 0, 1]}
        intensity={0.5}
        color="#3B82F6"
        distance={2}
      />
      <pointLight
        position={[1, 1, 0]}
        intensity={0.3}
        color="#ef4444"
        distance={1.5}
      />
    </group>
  );
};

export default CameraModel;
