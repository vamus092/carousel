import { Canvas } from "@react-three/fiber";
import React from 'react';
import "./style.css";
import { OrbitControls} from '@react-three/drei';
import Cyl from"./Cyl";
import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
const App = () => {

  return (
    <Canvas flat camera={{fov:35}}>
      <OrbitControls/>
      <ambientLight/>
     <Cyl/>
    <EffectComposer>
  <Bloom
      mipmapBlur
    intensity={7} // The bloom intensity.
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
    // resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
    // resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
  />
  <ToneMapping adaptive/>
</EffectComposer>
    </Canvas>
  );
};

export default App;
