import React from "react";
import { Canvas } from "react-three-fiber";

import Torus from "./geometry/Torus.js";
import Cone from "./geometry/Cone.js";
import Sphere from "./geometry/Sphere.js";
import Icosahedron from "./geometry/Icosahedron.js";

function ButtonCanvas(props) {
  return (
    <Canvas className="Button-canvas">
      <ambientLight />
      <pointLight intensity={5} position={[-180, -180, -180]} />
      <pointLight intensity={3} color={0xfe3476} position={[51, -25, -7]} />
      <pointLight intensity={3} color={0xfe3476} position={[69, 49, -20]} />
      <pointLight intensity={3} color={0x31394b} position={[-180, 180, 147]} />
      <pointLight intensity={3} color={0xc67aff} position={[-1000, 444, 547]} />
      <Torus fireAnimation={props.fireAnimation} />
      <Cone fireAnimation={props.fireAnimation} />
      <Sphere fireAnimation={props.fireAnimation} />
      <Icosahedron fireAnimation={props.fireAnimation} />
    </Canvas>
  );
}
export default ButtonCanvas;
