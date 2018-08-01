import * as React from "react";
import { Grid } from "@material-ui/core";
import { Section } from "react-fullpage";
import Video from "../../assets/inst1.mp4";

export class SectionTwo extends React.Component {
  render() {
    return (
      <Section>
        <Grid container justify="center">
          <p style={{ color: "white", marginTop: "300px", fontSize: "3em" }}>
            Algo
          </p>
        </Grid>
      </Section>
    );
  }
}
