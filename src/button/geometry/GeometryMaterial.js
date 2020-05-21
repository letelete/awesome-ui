import React from "react";
import { animated } from "react-spring/three";

function GeometryMaterial(props) {
  return (
    <animated.meshLambertMaterial
      attach="material"
      color={0x2d4261}
      opacity={props.opacity}
      transparent={true}
    />
  );
}

export default GeometryMaterial;
