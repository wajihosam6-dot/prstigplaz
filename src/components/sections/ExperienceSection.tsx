"use client";

import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Floating 3D furniture piece ── */
function FloatingSofa() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.12;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.08;
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: "#C9A96E",
    metalness: 0.8,
    roughness: 0.2,
  });
  const upholsteryMat = new THREE.MeshStandardMaterial({
    color: "#352D28",
    roughness: 0.85,
    metalness: 0.02,
  });
  const darkMat = new THREE.MeshStandardMaterial({
    color: "#1C1914",
    roughness: 0.7,
    metalness: 0.1,
  });

  return (
    <group ref={groupRef} position={[0, 0.3, 0]} scale={1.1}>
      {/* Seat */}
      <mesh position={[0, -0.05, 0]} material={upholsteryMat} castShadow>
        <boxGeometry args={[2.4, 0.4, 1.1]} />
      </mesh>
      {/* Backrest */}
      <mesh position={[0, 0.45, -0.48]} material={upholsteryMat} castShadow>
        <boxGeometry args={[2.4, 0.9, 0.18]} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-1.14, 0.2, 0]} material={darkMat} castShadow>
        <boxGeometry args={[0.18, 0.65, 1.1]} />
      </mesh>
      {/* Right arm */}
      <mesh position={[1.14, 0.2, 0]} material={darkMat} castShadow>
        <boxGeometry args={[0.18, 0.65, 1.1]} />
      </mesh>
      {/* Legs — gold */}
      {[
        [-0.95, -0.35, -0.4],
        [0.95, -0.35, -0.4],
        [-0.95, -0.35, 0.4],
        [0.95, -0.35, 0.4],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} material={goldMat} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        </mesh>
      ))}
      {/* Cushion left */}
      <mesh position={[-0.6, 0.17, 0]} material={upholsteryMat} castShadow>
        <boxGeometry args={[0.9, 0.22, 0.9]} />
      </mesh>
      {/* Cushion right */}
      <mesh position={[0.6, 0.17, 0]} material={upholsteryMat} castShadow>
        <boxGeometry args={[0.9, 0.22, 0.9]} />
      </mesh>
    </group>
  );
}

/* ── Reflective floor ── */
function ReflectiveFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
      <planeGeometry args={[12, 12]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={512}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#0A0908"
        metalness={0.5}
        mirror={0}
      />
    </mesh>
  );
}

/* ── Ambient orb lights ── */
function AmbientOrbs() {
  const orbRef1 = useRef<THREE.PointLight>(null);
  const orbRef2 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (orbRef1.current) {
      orbRef1.current.position.x = Math.sin(t * 0.3) * 3;
      orbRef1.current.position.z = Math.cos(t * 0.3) * 3;
    }
    if (orbRef2.current) {
      orbRef2.current.position.x = Math.sin(t * 0.3 + Math.PI) * 2.5;
      orbRef2.current.position.z = Math.cos(t * 0.3 + Math.PI) * 2.5;
    }
  });

  return (
    <>
      <pointLight ref={orbRef1} color="#C9A96E" intensity={0.6} distance={6} />
      <pointLight ref={orbRef2} color="#E8D5B0" intensity={0.3} distance={5} />
    </>
  );
}

/* ── Floating particle dots ── */
function Particles() {
  const count = 60;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  return (
    <points>
      <primitive object={geo} />
      <pointsMaterial
        color="#C9A96E"
        size={0.02}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Three.js Scene ── */
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} color="#1C1A18" />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.2}
        color="#E8D5B0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[0, 5, 0]}
        angle={0.4}
        penumbra={0.8}
        intensity={1.5}
        color="#C9A96E"
        castShadow
      />

      <AmbientOrbs />

      {/* Environment */}
      <Environment preset="city" />

      {/* Sofa */}
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.2}>
        <FloatingSofa />
      </Float>

      {/* Floor */}
      <ReflectiveFloor />

      {/* Particles */}
      <Particles />
    </>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative h-screen min-h-[700px] overflow-hidden"
      style={{ background: "var(--prestige-black)" }}
    >
      {/* Three.js Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 1.5, 4.5], fov: 45, near: 0.1, far: 50 }}
          shadows
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
          }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Scene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.4}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--prestige-black) 0%, transparent 20%, transparent 80%, var(--prestige-black) 100%)," +
            "linear-gradient(to right, var(--prestige-black) 0%, transparent 15%, transparent 85%, var(--prestige-black) 100%)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-end pb-24 pointer-events-none">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="label-sm text-gold">Immersive Experience</span>
            </div>
            <h2 className="text-display-md text-prestige-white mb-4">
              Step Into Our
              <br />
              <em className="italic text-gold-light">Virtual Showroom</em>
            </h2>
            <p className="text-[0.82rem] leading-[1.85] text-prestige-warm/60 mb-8">
              Explore our signature pieces in three dimensions. Drag to rotate.
              Experience how light plays on premium materials.
            </p>
            <button
              className="btn-luxury-primary pointer-events-auto"
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Book Showroom Visit</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Drag hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="absolute top-1/2 right-10 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-px h-10 gold-line-v opacity-40" />
        <span
          className="label-sm text-prestige-warm/30 vertical-rl"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.3em" }}
        >
          Drag to explore
        </span>
        <div className="w-px h-10 gold-line-v opacity-40" />
      </motion.div>
    </section>
  );
}
