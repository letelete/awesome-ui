import React, { useRef } from "react";
import { useSpring, animated } from "react-spring/three";
import GeometryMaterial from "./GeometryMaterial.js";

function Sphere(props) {
  const mesh = useRef();

  const { position, opacity } = useSpring({
    position: props.fireAnimation ? [-1, -1.25, 1] : [-0.5, -0.8, -1],
    opacity: props.fireAnimation ? 1.0 : 0.0,
  });

  return (
    <animated.mesh {...props} ref={mesh} position={position} opacity={opacity}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <GeometryMaterial opacity={opacity} />
    </animated.mesh>
  );
}

export default Sphere;
