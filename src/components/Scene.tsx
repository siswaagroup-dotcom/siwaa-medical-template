import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, ContactShadows, useScroll, ScrollControls, Scroll, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Nav, Hero, Services, Doctors, BookingFlow, FAQ, Footer } from './Sections';

function DNAHelix() {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      const angle = i * 0.5;
      const x = Math.cos(angle) * 1.5;
      const z = Math.sin(angle) * 1.5;
      const y = (i - 25) * 0.3;
      p.push({ pos: [x, y, z], color: i % 2 === 0 ? '#10b981' : '#2563eb' }); // Emerald teal and Royal blue
      p.push({ pos: [-x, y, -z], color: i % 2 === 0 ? '#2563eb' : '#10b981' });
    }
    return p;
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[-5, 0, -5]}>
      {points.map((p, i) => (
        <mesh key={i} position={p.pos as [number, number, number]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function MedicalCross({ position = [2, 0, -2] as [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.1;
  });

  return (
    <group ref={meshRef} position={position} scale={0.4}>
      <mesh>
        <boxGeometry args={[3, 1, 1]} />
        <MeshDistortMaterial color="#3b82f6" speed={2} distort={0.2} radius={1} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[3, 1, 1]} />
        <MeshDistortMaterial color="#3b82f6" speed={2} distort={0.2} radius={1} />
      </mesh>
    </group>
  );
}

function SceneContent() {
  const scroll = useScroll();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const offset = scroll.offset; // 0 to 1
    
    // Zoom in and Pan Camera
    state.camera.position.z = 8 - offset * 4;
    state.camera.position.x = Math.sin(offset * Math.PI) * 5;
    state.camera.lookAt(0, 0, 0);

    if (groupRef.current) {
      // Rotate whole scene based on scroll
      groupRef.current.rotation.y = offset * Math.PI * 0.5;
      groupRef.current.position.y = -offset * 10;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 8]} fov={45} />
      <ambientLight intensity={0.8} />
      <spotLight position={[20, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={1} color="#0d9488" />
      
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DNAHelix />
        </Float>
        
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
          <MedicalCross position={[4, 2, -4]} />
        </Float>
        
        <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
          <MedicalCross position={[-3, -4, -2]} />
        </Float>

        {/* Floating Abstract Shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={2}>
            <mesh position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              -5 - Math.random() * 10
            ]}>
              <sphereGeometry args={[Math.random() * 0.3, 32, 32]} />
              <meshStandardMaterial 
                color={i % 2 === 0 ? '#99f6e4' : '#bfdbfe'} 
                transparent 
                opacity={0.3} 
              />
            </mesh>
          </Float>
        ))}
      </group>

      <Environment preset="city" />
      <ContactShadows 
        position={[0, -10, 0]} 
        opacity={0.5} 
        scale={40} 
        blur={2} 
        far={15} 
      />

      <Scroll html>
        <div className="w-screen">
          <Nav />
          <Hero />
          <div className="h-[50vh]" /> {/* Gap for scroll effects */}
          <Services />
          <Doctors />
          <BookingFlow />
          
          <section className="py-24 px-6 md:px-20 bg-white/30 backdrop-blur-sm border-y border-slate-100">
            <div className="max-w-7xl mx-auto overflow-hidden">
              <h3 className="text-center text-slate-400 font-bold tracking-widest text-sm uppercase mb-12">Partners & Insurance Providers</h3>
              <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {['BlueCross', 'Aetna', 'Cigna', 'UnitedHealth', 'Kaiser'].map((name) => (
                  <div key={name} className="text-3xl font-black text-slate-400">{name}</div>
                ))}
              </div>
            </div>
          </section>

          <FAQ />
          <Footer />
        </div>
      </Scroll>
    </>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 h-screen w-screen z-0">
      <Canvas shadows>
        <ScrollControls pages={6} damping={0.2}>
          <SceneContent />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
