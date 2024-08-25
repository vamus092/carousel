import { Canvas } from '@react-three/fiber'
import React from 'react'

const App = () => {
  return (

    <Canvas>
      <mesh>
        <boxGeometry/>
        <meshBasicMaterial/>
      </mesh>
    </Canvas>
  )
}

export default App
