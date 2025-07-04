import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  Float, 
  PresentationControls,
  AdaptiveDpr,
  AdaptiveEvents
} from '@react-three/drei';
import TechModel from './TechModel';
import PhoneModel from './PhoneModel';
import ComputerModel from './ComputerModel';
import CameraModel from './CameraModel';

const Scene3D = ({ modelType = 'tech', autoRotate = true, enableZoom = true }) => {
  const getModel = () => {
    switch (modelType) {
      case 'phone':
        return <PhoneModel />;
      case 'computer':
        return <ComputerModel />;
      case 'camera':
        return <CameraModel />;
      default:
        return <TechModel />;
    }
  };

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight 
            position={[-10, -10, -5]} 
            intensity={0.5} 
            color="#3B82F6"
          />
          <pointLight 
            position={[10, -10, 5]} 
            intensity={0.3} 
            color="#F97316"
          />

          {/* Environment */}
          <Environment preset="city" />

          {/* Main Model */}
          <Float
            speed={4}
            rotationIntensity={1}
            floatIntensity={2}
            floatingRange={[-0.1, 0.1]}
          >
            {getModel()}
          </Float>

          {/* Camera Controls */}
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, 0.75]}
          >
            <OrbitControls
              enableZoom={enableZoom}
              enablePan={false}
              autoRotate={autoRotate}
              autoRotateSpeed={2}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 6}
              maxDistance={10}
              minDistance={2}
            />
          </PresentationControls>

          {/* Performance Optimizations */}
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
