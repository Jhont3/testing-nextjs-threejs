"use client";
import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0x468585} emissive={0x468585} />
      <Sparkles count={100} scale={1} speed={0.02} noise={0.2} color="orange" />
    </mesh>
  );
};
