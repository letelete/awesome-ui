import React, { useState, useEffect } from "react";

import ButtonCanvas from "./ButtonCanvas";
import { useSpring, animated } from "react-spring";

import "./Button.css";

function Button(props) {
  const [hovered, setHover] = useState(false);

  const { transform } = useSpring({
    transform: hovered ? "scale(1.0)" : "scale(0.8)",
  });

  useEffect(() => {
    setHover(props.forceHover);
  }, [props.forceHover]);

  function handleMouseEnter(e) {
    e.preventDefault();
    setHover(true);
  }

  function handleMouseLeave(e) {
    e.preventDefault();
    setHover(false);
  }

  return (
    <div className="Button-container">
      <animated.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`Button-hoverable-area ${hovered ? "hovered" : ""}`}
        style={{ transform: transform }}
      ></animated.div>
      <animated.label className="Button-label" style={{ transform: transform }}>
        play
      </animated.label>
      <ButtonCanvas fireAnimation={hovered} />
      <animated.div
        className={`Button-background ${hovered ? "hovered" : ""}`}
        style={{ transform: transform }}
      ></animated.div>
    </div>
  );
}

export default Button;
