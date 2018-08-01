import * as React from "react";
import { Grid } from "@material-ui/core";
import { Section } from "react-fullpage";
import particlesConfig from "../assets/particles.json";
import Particles from "react-particles-js";

export class Particle extends React.Component {
  render() {
    return (
      <Particles
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: 1000
        }}
        params={particlesConfig}
        width="100vw"
        height="100vh"
      />
    );
  }
}
