import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh, Group } from 'three'

function OrbitalObject() {
  const core = useRef<Mesh>(null)
  const group = useRef<Group>(null)
  const ringA = useRef<Mesh>(null)
  const ringB = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.x += delta * 0.18
      core.current.rotation.y += delta * 0.28
    }
    if (group.current) {
      group.current.rotation.y += delta * 0.075
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.22) * 0.12
    }
    if (ringA.current) ringA.current.rotation.x += delta * 0.09
    if (ringB.current) ringB.current.rotation.y -= delta * 0.12
  })

  return (
    <group ref={group}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.04, 1]} />
        <meshStandardMaterial color="#f0444a" emissive="#8d171c" emissiveIntensity={0.65} roughness={0.22} metalness={0.78} wireframe />
      </mesh>
      <mesh scale={0.72}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="#252629" emissive="#4b171a" emissiveIntensity={0.45} roughness={0.18} metalness={0.7} />
      </mesh>
      <mesh ref={ringA} rotation={[1.1, 0.28, 0.32]}>
        <torusGeometry args={[1.55, 0.012, 12, 160]} />
        <meshStandardMaterial color="#ffffff" emissive="#96989c" emissiveIntensity={0.85} metalness={0.65} roughness={0.28} />
      </mesh>
      <mesh ref={ringB} rotation={[0.45, 1.18, 0.9]}>
        <torusGeometry args={[1.8, 0.009, 12, 160]} />
        <meshStandardMaterial color="#e14b50" emissive="#9d2429" emissiveIntensity={1.15} metalness={0.55} roughness={0.3} />
      </mesh>
      <mesh position={[1.55, 0.52, 0.1]}>
        <sphereGeometry args={[0.075, 20, 20]} />
        <meshStandardMaterial color="#ffffff" emissive="#f0444a" emissiveIntensity={1.8} />
      </mesh>
      <mesh position={[-1.1, -0.78, 0.6]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshStandardMaterial color="#b7b8bb" emissive="#737579" emissiveIntensity={1.2} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.05} />
      <pointLight position={[3, 2, 4]} intensity={28} color="#f0444a" />
      <pointLight position={[-3, -2, 1]} intensity={12} color="#d4d5d7" />
      <OrbitalObject />
    </Canvas>
  )
}

export default function OrbitScene() {
  return (
    <div className="orbit-scene" aria-label="Animated three-dimensional neon orbital sculpture" role="img">
      <Scene />
      <div className="scene-ring scene-ring-one" />
      <div className="scene-ring scene-ring-two" />
    </div>
  )
}
