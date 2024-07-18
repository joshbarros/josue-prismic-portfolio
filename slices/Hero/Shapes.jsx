"use client"

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { Suspense, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows gl={{antialias: false}}
        dpr={[1, 1.5]}
        camera={{position: [0, 0, 25], fov: 30, near: 1, far: 40}}
      >
        <Suspense fallback={null}>
          <Geometries />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

function Geometries() {
  // Create 7 positions in a circular pattern with a smaller radius
  const circleRadius = 4;
  const geometries = [];
  for (let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2;
    geometries.push({
      position: [circleRadius * Math.cos(angle), circleRadius * Math.sin(angle), 0],
      r: 0.5,
      geometry: new THREE.DodecahedronGeometry(1.5)
    });
  }

  // Emerald colors: green, yellow, blue, red, purple, white, cyan
  const materials = [
    new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0 }), // Green
    new THREE.MeshStandardMaterial({ color: 0xffff00, roughness: 0 }), // Yellow
    new THREE.MeshStandardMaterial({ color: 0x0000ff, roughness: 0 }), // Blue
    new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0 }), // Red
    new THREE.MeshStandardMaterial({ color: 0xff00ff, roughness: 0 }), // Purple
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0 }), // White
    new THREE.MeshStandardMaterial({ color: 0x00ffff, roughness: 0 })  // Cyan
  ]

  const groupRef = useRef();

  useEffect(() => {
    gsap.to(groupRef.current.rotation, {
      x: "+=6.28319", // 2 * Math.PI radians = 360 degrees
      y: "+=6.28319", // 2 * Math.PI radians = 360 degrees
      z: "+=6.28319", // 2 * Math.PI radians = 360 degrees
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <group ref={groupRef}>
      {geometries.map(({ position, r, geometry }, index) => (
        <Geometry
          key={index}
          position={position}
          geometry={geometry}
          materials={materials}
          materialIndex={index}
          r={r}
        />
      ))}
    </group>
  )
}

function Geometry({ r, position, geometry, materials, materialIndex }) {
  const meshRef = useRef()
  const [visible, setVisible] = useState(false)

  function handleClick(e) {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      yoyo: true
    });
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer"
  }

  const handlePointerOut = () => {
    document.body.style.cursor = "default"
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      setVisible(true)
      gsap.from(meshRef.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          delay: .3,
        }
      )

      gsap.to(meshRef.current.rotation, {
        y: "+=6.28319", // 2 * Math.PI radians = 360 degrees
        duration: 10,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert()
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={materials[materialIndex]}
        />
      </Float>
    </group>
  )
}
