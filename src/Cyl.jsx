import React from "react"
import {useTexture } from "@react-three/drei";
import *as THREE from"three";
import { useFrame } from "@react-three/fiber";

const Cyl = () => {
    let tex=useTexture("./assets/img.png");
  //let  cyl= useRef(null)'let cyl=useCyl
    useFrame((state,delta))=>{
cyl.current.rotation.y+=delta;
    })
  return (
    <mesh rotation={[0,0,0.2]}>
    <cylinderGeometry args={[1,1,1, 30,30, true]}/>
    <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
  </mesh>
  );
};

export default scene;
