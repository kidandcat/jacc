import * as React from "react";
import { Button, Grid, Card, CardMedia } from "@material-ui/core";
import wallpaper from "../../assets/wall1.jpg";
import { Section } from "react-fullpage";

export class SectionOne extends React.Component {
  render() {
    return (
      <Section>
        <Grid
          container
          justify="center"
          style={{
            backgroundColor: "black"
          }}
        >
          <div
            style={{
              position: "absolute",
              color: "white",
              zIndex: 100,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "4em",
              top: "300px"
            }}
          >
            José Antonio Casco Cervera
          </div>
          <div
            style={{
              position: "absolute",
              color: "white",
              zIndex: 100,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "2em",
              top: "450px",
              textAlign: "center"
            }}
          >
            Profesional en la comunicación AV. especializado en edición de
            imagen. Con más de 5 años de experiencia como operador de cámara y
            editor de vídeo.
          </div>
          <img
            style={{
              width: "99vw",
              height: "100vh",
              opacity: 0.5
            }}
            src={wallpaper}
          />
        </Grid>
      </Section>
    );
  }
}
