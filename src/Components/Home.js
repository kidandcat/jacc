import * as React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import { SectionOne } from "/src/Components/Sections/SectionOne";
import { SectionOneMobile } from "/src/Components/Sections/SectionOneMobile";
import { SectionTwo } from "/src/Components/Sections/SectionTwo";
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
          <SectionTwo />
          <Section>Page 3</Section>
        </SectionsContainer>
      );
    } else {
      return (
        <SectionsContainer {...options}>
          <SectionOneMobile />
          <SectionTwo />
          <Section>Page 3</Section>
        </SectionsContainer>
      );
    }
  }
}
