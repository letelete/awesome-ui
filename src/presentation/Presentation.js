import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Presentation.css";

function Presentation(props) {
  return (
    <section className="Project-presentation">
      {props.body}
      <section className="Project-presentation-socials">
        {props.socials.map((social) => (
          <Social key={social.alt} social={social} />
        ))}
      </section>
    </section>
  );
}

function Social(props) {
  return (
    <a href={props.social.url} title={props.social.alt}>
      <div className="Project-social">
        <FontAwesomeIcon icon={props.social.icon} alt={props.social.alt} />
      </div>
    </a>
  );
}

export default Presentation;
