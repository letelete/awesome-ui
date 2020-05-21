import React from "react";
import { Math as ThreeMath } from "three";
import { useSpring, animated } from "react-spring/three";
import GeometryMaterial from "./GeometryMaterial.js";

function Torus(props) {
  const { degToRad } = ThreeMath;

  const { position, rotation, opacity } = useSpring({
    position: props.fireAnimation ? [1, 3.25, -2] : [1, 2.25, -4],
    opacity: props.fireAnimation ? 1.0 : 0.0,
    rotation: props.fireAnimation
      ? [degToRad(-25), degToRad(-20), 0]
      : [degToRad(-35), degToRad(10), 0],
  });

  return (
    <animated.mesh {...props} position={position} rotation={rotation}>
      <torusBufferGeometry attach="geometry" args={[1.05, 0.4, 100, 100]} />
      <GeometryMaterial opacity={opacity} />
    </animated.mesh>
  );
}

export default Torus;
