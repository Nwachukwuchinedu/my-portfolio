"use client"
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { Environment, Float } from "@react-three/drei";

function RotatingShape() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#0891B2"
                    wireframe
                    emissive="#7C3AED"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
}

export function Scene3D() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />
                <RotatingShape />
                {/* Environment for better lighting reflections if needed, but keeping it simple/light */}
            </Canvas>
        </div>
    );
}
