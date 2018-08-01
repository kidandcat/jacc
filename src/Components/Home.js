import * as React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import { SectionOne } from "/src/Components/Sections/SectionOne";
import { SectionOneMobile } from "/src/Components/Sections/SectionOneMobile";

export class Home extends React.Component {
  render() {
    let options = {
      sectionClassName: "section",
      anchors: ["head", "sectionTwo", "sectionThree"],
      scrollBar: false,
      navigation: false,
      verticalAlign: false,
      arrowNavigation: false
    };

    if (screen.width > 1000) {
      return (
        <SectionsContainer {...options}>
          <SectionOne />
          <Section>Page 2</Section>
          <Section>Page 3</Section>
        </SectionsContainer>
      );
    } else {
      return (
        <SectionsContainer {...options}>
          <SectionOneMobile />
          <Section>Page 2</Section>
          <Section>Page 3</Section>
        </SectionsContainer>
      );
    }
  }
}
