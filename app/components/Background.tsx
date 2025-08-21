"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";

// ScrollTracker component to measure scroll progress
function ScrollTracker({ onScroll }: { onScroll: (progress: number) => void }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      onScroll(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);
  
  return null;
}

// Background with expanding hole
function ExpandingHoleBackground({ scrollProgress }: { scrollProgress: number }) {
  const frontRef = useRef<THREE.Mesh>(null);
  const backRef = useRef<THREE.Mesh>(null);
  
  // Calculate hole size based on scroll progress
  const holeRadius = 0.1 + scrollProgress * 0.9; // Starts small, expands to almost full size
  
  useFrame(() => {
    if (frontRef.current) {
      // Update the hole size in the shader
      (frontRef.current.material as THREE.ShaderMaterial).uniforms.holeRadius.value = holeRadius;
    }
  });
  
  // Create a shader material for the front layer with hole
  const frontMaterial = new THREE.ShaderMaterial({
    uniforms: {
      holeRadius: { value: holeRadius },
      color1: { value: new THREE.Color("#6396f1") },
      color2: { value: new THREE.Color("#ec4899") }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float holeRadius;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      
      void main() {
        // Calculate distance from center
        vec2 center = vec2(0.7, 0.7);
        float dist = distance(vUv, center);
        
        // Create gradient background
        vec3 bgColor = mix(color1, color2, length(vUv - vec2(0.3, 0.8)));
        
        // Create hole effect
        if (dist < holeRadius) {
          // Inside the hole - transparent
          discard;
        } else {
          // Outside the hole - gradient background
          gl_FragColor = vec4(bgColor, 1.0);
        }
      }
    `,
    side: THREE.DoubleSide
  });
  
  // Create a different material for the back layer
  const backMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color("#06b6d4") },
      color2: { value: new THREE.Color("#06b6d4") }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      
      void main() {
        // Create a different gradient background
        vec3 bgColor = mix(color1, color2, length(vUv - vec2(0.7, 0.3)));
        gl_FragColor = vec4(bgColor, 1.0);
      }
    `,
    side: THREE.DoubleSide
  });
  
  return (
    <>
      {/* Back layer (visible through the hole) */}
      <mesh ref={backRef} position={[0, 0, -1]}>
        <planeGeometry args={[20, 20]} />
        <primitive object={backMaterial} />
      </mesh>
      
      {/* Front layer with hole */}
      <mesh ref={frontRef} position={[0, 0, -0.5]}>
        <planeGeometry args={[20, 20]} />
        <primitive object={frontMaterial} />
      </mesh>
    </>
  );
}

export default function Background() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  return (
    <div style={{ height: "300vh" }}> {/* Make page scrollable */}
      <div style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100vh",
        zIndex: 10
      }}>
        <Canvas style={{ 
          height: "100%", 
          width: "100%" 
        }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[3, 2, 1]} intensity={2} />
          <Suspense fallback={null}>
            <ExpandingHoleBackground scrollProgress={scrollProgress} />
            {/* <AnimatedModel /> */}
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <ScrollTracker onScroll={setScrollProgress} />
    </div>
  );
}