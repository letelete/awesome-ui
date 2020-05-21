import React, { useRef } from "react";
import { Math as ThreeMath } from "three";
import { useSpring, animated } from "react-spring/three";
import GeometryMaterial from "./GeometryMaterial.js";

function Cone(props) {
  const mesh = useRef();
  const { degToRad } = ThreeMath;

  const { position, rotation, opacity } = useSpring({
    position: props.fireAnimation ? [-4.5, 1.5, -4] : [-4.25, 1, -10],
    opacity: props.fireAnimation ? 1.0 : 0.0,
    rotation: props.fireAnimation
      ? [degToRad(-28), degToRad(220), degToRad(-42)]
      : [degToRad(-27), degToRad(75), degToRad(-19)],
  });
  return (
    <animated.mesh
      {...props}
      ref={mesh}
      position={position}
      rotation={rotation}
    >
      <coneBufferGeometry attach="geometry" args={[0.75, 1.5, 100]} />
      <GeometryMaterial opacity={opacity} />
    </animated.mesh>
  );
}

export default Cone;
