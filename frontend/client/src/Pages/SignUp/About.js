import React from "react";
import Button from "react-bootstrap/Button";
import { LoremIpsum } from "react-lorem-ipsum";

function About() {
  return (
    <div>
      <h6 style={{ fontSize: "12px", color: "#FE8303" }}>About</h6>
      <h3>Evangadi Networks Q&A</h3>
      <div
        style={{ fontSize: "12px", width: " width: 480px;" }}
        className="about_description"
      >
        <LoremIpsum p={2} />
      </div>
      <Button style={{ backgroundColor: "#FE8303" }}>How it works</Button>
    </div>
  );
}

export default About;
