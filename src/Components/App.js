import * as React from "react";
import { Home } from "/src/Components/Home";
import { Particle } from "./Particle";

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Particle />
        <Home />
      </React.Fragment>
    );
  }
}
