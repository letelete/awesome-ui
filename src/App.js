import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Presentation from "./presentation/Presentation";
import Button from "./button/Button";

import "./App.css";

function App(props) {
  const projectSocials = [
    {
      alt: "GitHub",
      url: "https://github.com/UI-Challenges/ch0-3d-animated-button",
      icon: faGithub,
    },
  ];

  const [forceHover, setForceHover] = useState(false);

  function handleMobileAnimationTrigger(e) {
    e.preventDefault();
    setForceHover(e.target.checked);
  }

  return (
    <div className="App">
      <Presentation
        socials={projectSocials}
        body={<Button forceHover={forceHover} />}
      />
      <section className="Mobile-view">
        <h1>{"On mobile?"}</h1>
        <p>
          {"Trigger an animation with the switch beneath"}
          <span role="img" aria-label="much-love">
            🙌
          </span>
        </p>
        <div className="Mobile-animation-trigger-container">
          <Switch
            className="Mobile-animation-trigger"
            type="checkbox"
            checked={forceHover}
            onChange={handleMobileAnimationTrigger}
            color="secondary"
            name={`${forceHover ? "Disable" : "Trigger"} animation`}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
