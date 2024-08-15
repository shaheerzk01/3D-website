import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={3}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={2}
        radius={3}
        intensity={1.55}
        ambient={1} 
        position={[3, 3, -5]}
      />
      <RandomizedLight 
        amount={2}
        radius={1}
        intensity={1.25}
        ambient={0.95} 
        position={[-3, 3, -5]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop
