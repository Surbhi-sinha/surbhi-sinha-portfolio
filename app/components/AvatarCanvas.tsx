"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";

// ScrollTracker component to measure scroll progress and detect current section
function ScrollTracker({ onScroll, onSectionChange }: { 
  onScroll: (progress: number) => void;
  onSectionChange: (section: string) => void;
}) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      onScroll(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll, onSectionChange]);
  
  return null;
}

function AnimatedModel({ 
  scrollProgress, 
}: { 
  scrollProgress: number; 
  currentSection: string;
}) {
  const group = useRef<THREE.Object3D>(null);
  const headBone = useRef<THREE.Object3D>(null);
  const leftEye = useRef<THREE.Object3D>(null);
  const rightEye = useRef<THREE.Object3D>(null);
  const { scene, animations } = useGLTF("/models/saying-hello-main.glb");
  const { actions } = useAnimations(animations, group);
  const mouse = useRef({ x: 0, y: 0 });
  const [foundBones, setFoundBones] = useState<string[]>([]);
  console.log(foundBones);
  // Log all bones and find eyes and head
  useEffect(() => {
    if (!group.current) return;
    
    const bones: string[] = [];
    group.current.traverse((obj) => {
      if (obj instanceof THREE.Bone) {
        bones.push(obj.name);
      }
      
      // Look for eye objects - they might be bones or meshes
      if (obj.name.includes('Eye') || obj.name.includes('eye')) {
      
        if (obj.name.includes('Left') || obj.name.includes('left')) {
          leftEye.current = obj;
        }
        if (obj.name.includes('Right') || obj.name.includes('right')) {
          rightEye.current = obj;
        }
      }
    });
    setFoundBones(bones);
    
    // If we didn't find specific eye objects, look for eye bones
    if (!leftEye.current || !rightEye.current) {
      const eyeBoneNames = [
        "LeftEye", "leftEye", "EyeLeft", "eyeLeft", "mixamorig:LeftEye",
        "RightEye", "rightEye", "EyeRight", "eyeRight", "mixamorig:RightEye"
      ];
      
      group.current.traverse((obj) => {
        if (obj instanceof THREE.Bone) {
          if (!leftEye.current && 
              (eyeBoneNames.includes(obj.name) || (obj.name.includes("Left") && obj.name.includes("Eye")))) {
            // console.log("👁️ Left eye bone found:", obj.name);
            leftEye.current = obj;
          }
          if (!rightEye.current && 
              (eyeBoneNames.includes(obj.name) || (obj.name.includes("Right") && obj.name.includes("Eye")))) {
            // console.log("👁️ Right eye bone found:", obj.name);
            rightEye.current = obj;
          }
        }
      });
    }
    
    // Try multiple possible head bone names
    const headBoneNames = ["Head", "head", "Wolf3D_Head", "mixamorig:Head", "Neck", "neck", "mixamorig:Neck"];
    
    for (const boneName of headBoneNames) {
      group.current.traverse((obj) => {
        if (obj instanceof THREE.Bone && obj.name === boneName) {
          // console.log("🎯 FOUND HEAD BONE:", boneName, obj);
          headBone.current = obj;
          
          // Store initial rotation for reference
          if (headBone.current) {
            headBone.current.userData.initialRotation = {
              x: obj.rotation.x,
              y: obj.rotation.y,
              z: obj.rotation.z
            };
          }
        }
      });
      
      if (headBone.current) break;
    }
    
    
    
    // If we still didn't find eye bones, try to find eye meshes
    if (!leftEye.current || !rightEye.current) {
      group.current.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          if (!leftEye.current && obj.name.toLowerCase().includes("eye") && 
              obj.name.toLowerCase().includes("left")) {
            // console.log("👁️ Left eye mesh found:", obj.name);
            leftEye.current = obj;
          }
          if (!rightEye.current && obj.name.toLowerCase().includes("eye") && 
              obj.name.toLowerCase().includes("right")) {
            // console.log("👁️ Right eye mesh found:", obj.name);
            rightEye.current = obj;
          }
        }
      });
    }
    
    // Store initial rotations for eyes if found
    if (leftEye.current) {
      leftEye.current.userData.initialRotation = {
        x: leftEye.current.rotation.x,
        y: leftEye.current.rotation.y,
        z: leftEye.current.rotation.z
      };
    }
    
    if (rightEye.current) {
      rightEye.current.userData.initialRotation = {
        x: rightEye.current.rotation.x,
        y: rightEye.current.rotation.y,
        z: rightEye.current.rotation.z
      };
    }
    
  }, [scene]);
  
  // Play animation
  useEffect(() => {
    // Log all available animations
    console.log("Available animations:", Object.keys(actions));
    console.log("Animation names:", animations.map(anim => anim.name));
    
    const idle = actions["Idle"] || actions["Armature|mixamo.com|Layer0"] || actions[animations[0]?.name];
    
    if (idle) {
      console.log("Playing animation:", idle.getClip().name);
      idle.play();
    } else {
      console.log("No animation found to play");
    }
  }, [actions, animations]);

  // Track mouse movement
  useEffect(() => {
    const onMouseMove = (e : any) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Enhanced head rotation with more dramatic range of motion
  useFrame(() => {
    if (!headBone.current) return;

    const head = headBone.current;
    const initial = head.userData.initialRotation || { x: 0, y: 0, z: 0 };
    
    // SIGNIFICANTLY ENHANCED VERTICAL MOVEMENT
    // Up/down rotation (pitch) - greatly increased range and sensitivity
    const targetX = initial.x + THREE.MathUtils.clamp(-mouse.current.y * 5.0, -2.0, 1.5);
    
    // Left/right rotation (yaw) - increased range
    const targetY = initial.y + THREE.MathUtils.clamp(mouse.current.x * 3.0, -1.5, 1.5);
    
    // Add more pronounced tilt (roll) based on horizontal mouse position
    const targetZ = initial.z + THREE.MathUtils.clamp(mouse.current.x * 1.5, -0.5, 0.5);
    
    // Apply smooth interpolation for natural movement with faster response
    head.rotation.x += (targetX - head.rotation.x) * 0.3;
    head.rotation.y += (targetY - head.rotation.y) * 0.3;
    head.rotation.z += (targetZ - head.rotation.z) * 0.3;
    
    // Also rotate the neck with more pronounced movement
    const neck = head.parent;
    if (neck && neck instanceof THREE.Bone) {
      // Get neck's initial rotation if not already stored
      if (!neck.userData.initialRotation) {
        neck.userData.initialRotation = {
          x: neck.rotation.x,
          y: neck.rotation.y,
          z: neck.rotation.z
        };
      }
      
      const neckInitial = neck.userData.initialRotation;
      
      // Apply more significant rotation to neck with enhanced vertical movement
      neck.rotation.x += ((neckInitial.x + mouse.current.y * 1.5) - neck.rotation.x) * 0.2;
      neck.rotation.y += ((neckInitial.y + mouse.current.x * 0.8) - neck.rotation.y) * 0.2;
    }
    
    // Eye tracking code...
    if (leftEye.current) {
      const initialLeft = leftEye.current.userData.initialRotation || { x: 0, y: 0, z: 0 };
      const eyeTargetX = initialLeft.x + THREE.MathUtils.clamp(mouse.current.y * 1.0, -0.8, 0.8);
      const eyeTargetY = initialLeft.y + THREE.MathUtils.clamp(mouse.current.x * 0.8, -0.8, 0.8);
      
      leftEye.current.rotation.x += (eyeTargetX - leftEye.current.rotation.x) * 0.4;
      leftEye.current.rotation.y += (eyeTargetY - leftEye.current.rotation.y) * 0.4;
    }
    
    if (rightEye.current) {
      const initialRight = rightEye.current.userData.initialRotation || { x: 0, y: 0, z: 0 };
      const eyeTargetX = initialRight.x + THREE.MathUtils.clamp(mouse.current.y * 1.0, -0.8, 0.8);
      const eyeTargetY = initialRight.y + THREE.MathUtils.clamp(mouse.current.x * 0.8, -0.8, 0.8);
      
      rightEye.current.rotation.x += (eyeTargetX - rightEye.current.rotation.x) * 0.4;
      rightEye.current.rotation.y += (eyeTargetY - rightEye.current.rotation.y) * 0.4;
    }
  });

  // Alternative approach for eye tracking using morph targets
  useFrame(() => {
    // Find skinned mesh with morph targets
    if (!group.current) return;
    
    group.current.traverse((obj) => {
      // Type guard: check if obj is a Mesh and has morphTargetDictionary and morphTargetInfluences
      if (
        obj instanceof THREE.Mesh &&
        (obj as any).morphTargetDictionary &&
        (obj as any).morphTargetInfluences
      ) {
        const mesh = obj as THREE.Mesh & {
          morphTargetDictionary: { [key: string]: number };
          morphTargetInfluences: number[];
          morphTargetsLogged?: boolean;
        };

        // Log available morph targets once
        if (!mesh.morphTargetsLogged) {
          // console.log("Available morph targets:", Object.keys(mesh.morphTargetDictionary));
          mesh.morphTargetsLogged = true;
        }
        
        // Look for eye-related morph targets
        const eyeTargets = [
          "eyeLookDown", "eyeLookUp", "eyeLookLeft", "eyeLookRight",
          "eyesLookDown", "eyesLookUp", "eyesLookLeft", "eyesLookRight"
        ];
        
        eyeTargets.forEach(targetName => {
          const targetIndex = mesh.morphTargetDictionary[targetName];
          if (targetIndex !== undefined) {
            // Apply morph target based on mouse position
            if (targetName.includes("Down")) {
              // Apply when mouse is down (positive Y)
              mesh.morphTargetInfluences[targetIndex] = Math.max(0, mouse.current.y);
            } else if (targetName.includes("Up")) {
              // Apply when mouse is up (negative Y)
              mesh.morphTargetInfluences[targetIndex] = Math.max(0, -mouse.current.y);
            } else if (targetName.includes("Left")) {
              // Apply when mouse is left (negative X)
              mesh.morphTargetInfluences[targetIndex] = Math.max(0, -mouse.current.x);
            } else if (targetName.includes("Right")) {
              // Apply when mouse is right (positive X)
              mesh.morphTargetInfluences[targetIndex] = Math.max(0, mouse.current.x);
            }
          }
        });
      }
    });
  });

  // Apply scroll-based rotation and slight left movement to the entire model
  useFrame(() => {
    if (!group.current) return;
    
    // Rotate clockwise around Y-axis based on scroll progress
    // Full rotation is 2π radians (6.28), so we multiply scrollProgress by 2π
    const targetRotation = scrollProgress * Math.PI * 2; // Clockwise rotation
    
    // Move slightly to the left based on scroll progress
    // Start at position 0 and move to -2 (slight left movement)
    const targetX = scrollProgress * -1;
    
    // Apply smooth interpolation for the rotation
    group.current.rotation.y += (targetRotation - group.current.rotation.y) * 1;
    
    // Apply smooth interpolation for the left movement
    group.current.position.x += (targetX - group.current.position.x) * 0.7;
  });

  return (
    <primitive ref={group} object={scene} scale={3.5} position={[-3, -4, 0]} />
  );
}

export default function AnimatedAvatar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('home');
  
  return (
    <div style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100vh",
      zIndex: -1, // Put in background
      pointerEvents: "none" // Make it non-interactive so buttons on top work
    }}>
      <Canvas style={{ 
        height: "100%", 
        width: "100%" 
      }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 2, 1]} intensity={2} />
        
        <Suspense fallback={null}>
          <AnimatedModel 
            scrollProgress={scrollProgress} 
            currentSection={currentSection}
          />
        </Suspense>
        
      </Canvas>
      
      <ScrollTracker 
        onScroll={setScrollProgress} 
        onSectionChange={setCurrentSection}
      />
      
      {/* Debug indicator - remove this in production */}
      <div style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "8px 12px",
        borderRadius: "8px",
        fontSize: "12px",
        fontFamily: "monospace",
        zIndex: 1000,
        pointerEvents: "none"
      }}>
        Section: {currentSection}
      </div>
      
    </div>
  );
}