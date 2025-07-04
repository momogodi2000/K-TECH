import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Cone } from '@react-three/drei';
import * as THREE from 'three';

const TechModel = () => {
  const groupRef = useRef();
  const sphereRef = useRef();
  const torusRef = useRef();
  const boxRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.02;
      torusRef.current.rotation.z += 0.01;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      boxRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Sphere - Representing connectivity */}
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#1E40AF"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* Orbiting Elements */}
      {/* Computer/Tech Box */}
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[2, 0.5, 0]}>
        <meshStandardMaterial
          color="#F97316"
          emissive="#ea580c"
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.3}
        />
      </Box>

      {/* Network Ring */}
      <Torus ref={torusRef} args={[1.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#10b981"
          emissive="#059669"
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Torus>

      {/* Data Points - Floating spheres */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 2;
        const z = Math.sin(angle) * 2;
        const y = Math.sin(angle + Date.now() * 0.001) * 0.5;
        
        return (
          <Sphere key={i} args={[0.15, 16, 16]} position={[x, y, z]}>
            <meshStandardMaterial
              color={i % 2 === 0 ? "#3B82F6" : "#F97316"}
              emissive={i % 2 === 0 ? "#1E40AF" : "#ea580c"}
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </Sphere>
        );
      })}

      {/* Connection Lines */}
      <group>
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const points = [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(
              Math.cos(angle) * 2,
              Math.sin(angle) * 0.5,
              Math.sin(angle) * 2
            )
          ];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          
          return (
            <line key={i} geometry={geometry}>
              <lineBasicMaterial color="#3B82F6" opacity={0.3} transparent />
            </line>
          );
        })}
      </group>

      {/* Tech Icons - Simplified geometric representations */}
      {/* Phone Shape */}
      <group position={[-2, 0.5, 0.5]}>
        <Box args={[0.4, 0.6, 0.05]}>
          <meshStandardMaterial color="#6366f1" metalness={0.7} roughness={0.3} />
        </Box>
        <Box args={[0.3, 0.05, 0.05]} position={[0, 0.35, 0]}>
          <meshStandardMaterial color="#1f2937" />
        </Box>
      </group>

      {/* Camera Shape */}
      <group position={[0.5, -1.5, 1]}>
        <Cone args={[0.3, 0.5, 8]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#ef4444" metalness={0.6} roughness={0.3} />
        </Cone>
        <Sphere args={[0.15, 16, 16]} position={[0.3, 0, 0]}>
          <meshStandardMaterial color="#1f2937" />
        </Sphere>
      </group>

      {/* Ambient Particles */}
      <group>
        {[...Array(20)].map((_, i) => {
          const x = (Math.random() - 0.5) * 5;
          const y = (Math.random() - 0.5) * 5;
          const z = (Math.random() - 0.5) * 5;
          
          return (
            <Sphere key={`particle-${i}`} args={[0.05, 8, 8]} position={[x, y, z]}>
              <meshStandardMaterial
                color="#3B82F6"
                emissive="#3B82F6"
                emissiveIntensity={1}
              />
            </Sphere>
          );
        })}
      </group>
    </group>
  );
};

export default TechModel;