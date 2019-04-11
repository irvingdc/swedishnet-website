import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { airport_color, airport } from "../../../images";
import IntroText from "../../../components/IntroText/IntroText";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import CardListItem from "../../../components/CardListItem/CardListItem";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";
import CardListSection from "../../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="en"
      en="/en/contracts/airports/"
      sv="/entreprenader/flygplatser/"
      canonical="https://www.swedishnet.se/en/contracts/airports/"
      title="Swedish Net: Contracts - Airports"
      description="AGL, ILS and power supply systems for public airports and military air bases."
    />
    <FullScreenImage img={airport_color} noLine>
      <IntroText
        title={
          <span>
            AGL, ILS and power supply systems
            <br />
            <b>for public airports and military air bases</b>
          </span>
        }
      />
    </FullScreenImage>
    <SectionHeader title="AIRPORTS" />
    <CardListSection img={airport}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net deliver turnkey contracts for airside including Airfield
        Ground Lighting (AGL), Instrument Landing System (ILS), Automated
        Weather Observation System (AWOS) and power supply systems with backup
        power and uninterruptible power. We deliver to public airports and
        military air bases in Sweden and internationally.
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
