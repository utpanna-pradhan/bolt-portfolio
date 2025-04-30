import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleField = () => {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  
  // Different animation speeds for particles
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      
      // Animate individual particles
      groupRef.current.children.forEach((particle, i) => {
        const t = clock.getElapsedTime() * (0.1 + i * 0.005);
        const x = Math.sin(t * 0.2 + i) * 0.1;
        const y = Math.cos(t * 0.3 + i) * 0.1;
        const z = Math.sin(t * 0.4 + i) * 0.1;
        
        particle.position.x += x * 0.01;
        particle.position.y += y * 0.01;
        particle.position.z += z * 0.01;
        
        // Keep particles within boundaries
        const limit = 10;
        if (Math.abs(particle.position.x) > limit) particle.position.x *= 0.9;
        if (Math.abs(particle.position.y) > limit) particle.position.y *= 0.9;
        if (Math.abs(particle.position.z) > limit) particle.position.z *= 0.9;
      });
    }
  });

  // Create particles in a field
  const particles = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random() * 0.2 + 0.05;
    const opacity = Math.random() * 0.6 + 0.2;
    
    return (
      <Sphere key={i} args={[size, 8, 8]} position={[
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ]}>
        <meshBasicMaterial 
          color={
            i % 3 === 0 ? '#0070F3' : 
            i % 3 === 1 ? '#6D28D9' : 
            '#F59E0B'
          } 
          transparent 
          opacity={opacity} 
        />
      </Sphere>
    );
  });

  return (
    <group ref={groupRef}>
      {particles}
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  );
};

export default ThreeBackground;