import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { plane, airport } from "../../images";
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
    <Nav lan="en" en="/contracts/airports" sv="/sv/contracts/airports" />
    <FullScreenImage img={plane} noLine>
      <IntroText
        title={
          <span>
            AGL, ILS and redundant power supply{" "}
            <b>for public and military airports</b>
          </span>
        }
      />
      <ScrollDown>Scroll Down</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="03" title="AIRPORTS" />
    <CardListSection img={airport}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net is one of few companies in Sweden delivering comprehensive
        solutions including design and installation for airport lighting and ILS
        (Instrument Landing Systems) on airside. We deliver to military and
        public airports in Sweden and internationally.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Scandinavian Mountains Airport is the first airport for regular traffic
        being built in Sweden in over 19 years. The airport is being built in
        Sälen, close to the Norwegian border. It will fulfill CAT III, the
        highest category for runways (the same as Arlanda). It is estimated that
        in December 2019, the first national and international flights will land
        on Scandinavian Mountains Airport, one of the most modern airports in
        Europe.
        <br />
        <br />
        Swedish Net has full responsibility for the engineering of systems and
        installation of AGL, electrical power supply system and infrastructure
        for power and communication at the new airport. 120 km cable and 1250
        lights will be required.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
