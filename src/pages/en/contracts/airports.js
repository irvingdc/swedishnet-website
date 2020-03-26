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
      es="/es/contracts/airports/"
      sv="/entreprenader/flygplatser/"
      canonical="https://www.swedishnet.se/en/contracts/airports/"
      title="Swedish Net: Contracts - Airports"
      description="TURNKEY SOLUTIONS FOR AIRSIDE"
    />
    <FullScreenImage img={airport_color} noLine>
      <IntroText title={<span>TURNKEY SOLUTIONS FOR AIRSIDE</span>} />
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
        Swedish Net put together and deliver turnkey solutions for airside based
        on different technical systems:
        <ul>
          <li>Airfield Ground Lighting (AGL)</li>
          <li>Instrument Landing System (ILS)</li>
          <li>Air Traffic Control (ATC)</li>
          <li>Automated Weather Observing System (AWOS)</li>
          <li>Systems for apron </li>
          <li>Power Supply</li>
          <li>Operational alarm </li>
        </ul>
        We take responsibility for the engineering according to actual standards
        and regulations.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Scandinavian Mountains Airport is the first airport for regular traffic
        being built in Sweden in over 20 years. It is designed and built
        according to actual regulations from the European Union Aviation Safety
        Agency (EASA). The airport has category III runways, meaning that the
        airplanes can land in bad weather conditions with very poor visibility.
        <br />
        <br />
        Swedish Net had full responsibility for the engineering and installation
        of all airport lights, the electrical power supply system and the
        infrastructure for electricity and communication.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
