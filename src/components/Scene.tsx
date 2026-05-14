import React, { useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, ContactShadows, useScroll, ScrollControls, Scroll, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Nav, Hero, Services, Doctors, BookingFlow, FAQ, Footer, PatientCare } from './Sections';

function DNAHelix() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
  });

  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 60; i++) {
      const angle = i * 0.4;
      const x = Math.cos(angle) * 2;
      const z = Math.sin(angle) * 2;
      const y = (i - 30) * 0.25;
      p.push({ pos: [x, y, z], color: i % 2 === 0 ? '#10b981' : '#2563eb' });
      p.push({ pos: [-x, y, -z], color: i % 2 === 0 ? '#2563eb' : '#10b981' });
    }
    return p;
  }, []);

  return (
    <group ref={meshRef} rotation={[0, 0, Math.PI / 6]} position={[-6, 0, -8]}>
      {points.map((p, i) => (
        <mesh key={i} position={p.pos as [number, number, number]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={1} />
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
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const offset = scroll.offset; // 0 to 1
    
    // Cinematic camera path
    state.camera.position.z = THREE.MathUtils.lerp(12, 6, offset);
    state.camera.position.x = Math.sin(offset * Math.PI) * 12;
    state.camera.position.y = THREE.MathUtils.lerp(4, -12, offset);
    state.camera.lookAt(0, -offset * 18, 0);

    if (groupRef.current) {
      groupRef.current.rotation.y = offset * Math.PI * 2;
      groupRef.current.position.y = offset * 6;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 4, 12]} fov={45} />
      <ambientLight intensity={1} />
      <spotLight position={[20, 20, 10]} angle={0.2} penumbra={1} intensity={4} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={2} color="#60a5fa" />
      
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DNAHelix />
        </Float>
        
        <MedicalCross position={[6, 4, -8]} />
        <MedicalCross position={[-8, -6, -6]} />
        <MedicalCross position={[4, -12, -12]} />

        {/* Cinematic Particles */}
        {Array.from({ length: 60 }).map((_, i) => (
          <Float key={i} speed={0.5 + Math.random()} rotationIntensity={2} floatIntensity={2}>
            <mesh position={[
              (Math.random() - 0.5) * 50,
              (Math.random() - 0.5) * 50,
              -15 - Math.random() * 30
            ]}>
              <sphereGeometry args={[0.05 + Math.random() * 0.1, 16, 16]} />
              <meshStandardMaterial 
                color={i % 3 === 0 ? '#10b981' : i % 3 === 1 ? '#2563eb' : '#ffffff'} 
                transparent 
                opacity={0.15} 
              />
            </mesh>
          </Float>
        ))}
      </group>

      <Environment preset="city" />
      <ContactShadows 
        position={[0, -20, 0]} 
        opacity={0.4} 
        scale={80} 
        blur={2} 
        far={30} 
      />

      <Scroll html>
        <div className="scroll-container w-full">
          <Hero />
          
          <div className="h-[20vh] flex items-center justify-center pointer-events-none">
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-white text-[15vw] font-black opacity-5 uppercase tracking-tighter"
            >
              Excellence
            </motion.div>
          </div>

          <Services />
          
          <div className="h-[10vh]" />

          <PatientCare />
          
          <div className="h-[10vh]" />

          <Doctors />
          
          <div className="h-[10vh]" />

          <BookingFlow />
          
          <FAQ />
          
          <section className="py-20 px-8 md:px-24 bg-white/10 backdrop-blur-3xl border-y border-white/5">
            <div className="max-w-7xl mx-auto overflow-hidden">
              <h3 className="text-center text-slate-400 font-black tracking-[1em] text-[10px] uppercase mb-24 opacity-50">Strategic Alliances</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-20 items-center opacity-20 hover:opacity-50 transition-opacity duration-1000">
                {['Mayo', 'Cedars', 'Cleveland', 'Hopkins', 'Stanford'].map((name) => (
                  <div key={name} className="text-4xl font-black text-slate-900 tracking-tighter text-center">{name}</div>
                ))}
              </div>
            </div>
          </section>

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
        <ScrollControls pages={7.2} damping={0.2}>
          <SceneContent />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
