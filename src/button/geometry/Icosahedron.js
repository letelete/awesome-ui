import React, { useRef } from "react";
import { Math as ThreeMath } from "three";
import { useSpring, animated } from "react-spring/three";
import GeometryMaterial from "./GeometryMaterial.js";

function Icosahedron(props) {
  const mesh = useRef();

  const { degToRad } = ThreeMath;

  const { position, rotation, opacity } = useSpring({
    position: props.fireAnimation ? [3.5, 1.5, -1.2] : [2.5, 0.3, -3],
    opacity: props.fireAnimation ? 1.0 : 0.0,
    rotation: props.fireAnimation
      ? [degToRad(-111), degToRad(0), degToRad(25)]
      : [degToRad(-141), degToRad(-25), degToRad(2)],
  });

  return (
    <animated.mesh
      {...props}
      ref={mesh}
      position={position}
      rotation={rotation}
    >
      <icosahedronBufferGeometry attach="geometry" args={[1, 0]} />
      <GeometryMaterial opacity={opacity} />
    </animated.mesh>
  );
}

export default Icosahedron;
