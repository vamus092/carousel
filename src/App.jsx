import { Canvas } from '@react-three/fiber'
//import React from 'react'
import "./style.css"
import { OrbitControls} from '@react-three/drei';
import Scence from"./Cyl";
const App = () => {

  return (

    <Canvas>
      <OrbitControls/>
      <ambientLight/>
     
    </Canvas>
  );
};

export default App;
