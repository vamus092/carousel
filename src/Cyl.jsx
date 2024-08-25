import React from 'react'
import {useTexture } from '@react-three/drei';
import *as THREE from"three";

const Cyl = () => {
    let tex=useTexture("./img.jpg");
    
  return (
    <mesh>
    <cylinderGeometry args={[1,1,1, 30,30, true]}/>
    <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
  </mesh>
  )
}

export default scene
