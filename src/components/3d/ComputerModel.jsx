import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ComputerModel = () => {
  const groupRef = useRef();
  const monitorRef = useRef();
  const keyboardRef = useRef();
  const mouseRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (monitorRef.current) {
      monitorRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
    if (keyboardRef.current) {
      keyboardRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.01;
    }
    if (mouseRef.current) {
      mouseRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Monitor */}
      <group ref={monitorRef} position={[0, 0.5, 0]}>
        {/* Monitor Screen */}
        <Box args={[1.2, 0.8, 0.05]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1f2937"
            metalness={0.7}
            roughness={0.3}
          />
        </Box>

        {/* Screen Display */}
        <Box args={[1.1, 0.7, 0.01]} position={[0, 0, 0.03]}>
          <meshStandardMaterial
            color="#000000"
            emissive="#3B82F6"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </Box>

        {/* Monitor Stand */}
        <Cylinder args={[0.05, 0.05, 0.3, 8]} position={[0, -0.55, 0]}>
          <meshStandardMaterial
            color="#6b7280"
            metalness={0.6}
            roughness={0.4}
          />
        </Cylinder>

        {/* Monitor Base */}
        <Box args={[0.4, 0.1, 0.3]} position={[0, -0.7, 0]}>
          <meshStandardMaterial
            color="#6b7280"
            metalness={0.6}
            roughness={0.4}
          />
        </Box>

        {/* Monitor Buttons */}
        <Box args={[0.02, 0.02, 0.01]} position={[0.5, 0.3, 0.03]}>
          <meshStandardMaterial
            color="#374151"
            metalness={0.5}
            roughness={0.5}
          />
        </Box>
      </group>

      {/* Computer Tower */}
      <Box args={[0.3, 0.6, 0.2]} position={[0.8, 0, 0]}>
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Tower Details */}
      <Box args={[0.25, 0.1, 0.15]} position={[0.8, 0.2, 0]}>
        <meshStandardMaterial
          color="#374151"
          metalness={0.7}
          roughness={0.3}
        />
      </Box>

      {/* USB Ports */}
      {[...Array(4)].map((_, i) => (
        <Box key={i} args={[0.02, 0.02, 0.01]} position={[0.8, 0.15 - i * 0.05, 0.1]}>
          <meshStandardMaterial
            color="#6b7280"
            metalness={0.5}
            roughness={0.5}
          />
        </Box>
      ))}

      {/* Keyboard */}
      <group ref={keyboardRef} position={[0, -0.3, 0.3]}>
        <Box args={[0.8, 0.05, 0.3]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#374151"
            metalness={0.6}
            roughness={0.4}
          />
        </Box>

        {/* Keyboard Keys */}
        {[...Array(20)].map((_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;
          const x = (col - 4.5) * 0.08;
          const y = (row - 0.5) * 0.06;
          
          return (
            <Box key={i} args={[0.06, 0.01, 0.06]} position={[x, y, 0.03]}>
              <meshStandardMaterial
                color="#6b7280"
                metalness={0.4}
                roughness={0.6}
              />
            </Box>
          );
        })}
      </group>

      {/* Mouse */}
      <group ref={mouseRef} position={[0.5, -0.3, 0.3]}>
        <Box args={[0.12, 0.06, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1f2937"
            metalness={0.7}
            roughness={0.3}
          />
        </Box>

        {/* Mouse Buttons */}
        <Box args={[0.05, 0.01, 0.08]} position={[-0.02, 0.035, 0.05]}>
          <meshStandardMaterial
            color="#6b7280"
            metalness={0.5}
            roughness={0.5}
          />
        </Box>
        <Box args={[0.05, 0.01, 0.08]} position={[0.02, 0.035, 0.05]}>
          <meshStandardMaterial
            color="#6b7280"
            metalness={0.5}
            roughness={0.5}
          />
        </Box>

        {/* Mouse Scroll Wheel */}
        <Cylinder args={[0.01, 0.01, 0.04, 8]} position={[0, 0.035, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#9ca3af"
            metalness={0.6}
            roughness={0.4}
          />
        </Cylinder>
      </group>

      {/* Cables */}
      <group>
        {/* Monitor Cable */}
        <Cylinder args={[0.01, 0.01, 0.4, 8]} position={[0, 0.2, 0.1]} rotation={[0, 0, Math.PI / 6]}>
          <meshStandardMaterial
            color="#374151"
            metalness={0.3}
            roughness={0.7}
          />
        </Cylinder>

        {/* Power Cable */}
        <Cylinder args={[0.008, 0.008, 0.3, 8]} position={[0.8, -0.2, 0.1]} rotation={[0, 0, -Math.PI / 6]}>
          <meshStandardMaterial
            color="#374151"
            metalness={0.3}
            roughness={0.7}
          />
        </Cylinder>
      </group>

      {/* Ambient Lighting */}
      <pointLight
        position={[0, 1, 2]}
        intensity={0.8}
        color="#ffffff"
        distance={5}
      />
      <pointLight
        position={[2, 0, 1]}
        intensity={0.5}
        color="#3B82F6"
        distance={3}
      />
    </group>
  );
};

export default ComputerModel;
