import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { electrical_color, cabin } from "../../images";
import IntroText from "../../components/IntroText/IntroText";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import CardListSection from "../../components/CardListSection/CardListSection";
import ScrollDown from "../../components/ScrollDown/ScrollDown";

export default () => (
  <Fragment>
    <Nav
      lan="en"
      en="/contracts/electrical-power-supply"
      sv="/sv/contracts/electrical-power-supply"
    />
    <FullScreenImage img={electrical_color} noLine>
      <IntroText
        title={
          <span>
            Reliable electrical power supply systems{" "}
            <b>for critical infrastructure</b>
          </span>
        }
      />
      <ScrollDown>Scroll Down</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="04" title="ELECTRICAL POWER SUPPLY" />
    <CardListSection img={cabin}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net delivers comprehensive solutions with power, back-up power
        and uninterruptable power together with associated buildings and
        perimeter protection.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net is responsible for the delivery of a comprehensive
        electrical power supply system to Scandinavian Mountains Airport. A
        switchgear building of 200 m2 supplies all the systems on airside with
        power, back-up power and uninterruptable power including technical
        rooms. Another building of 100 m2 supplies the airport’s terminal and
        other areas with power and back-up power. The turnkey buildings are
        delivered with all functions installed.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
