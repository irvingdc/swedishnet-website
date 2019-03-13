import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { fence, documents } from "../../images";
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
      en="/services/electricity-and-security-engineering"
      sv="/sv/services/electricity-and-security-engineering"
    />
    <FullScreenImage img={fence} noLine>
      <IntroText
        title={
          <span>
            Consultancy regarding physical and technical protection{" "}
            <b>for high security facilities</b>
          </span>
        }
      />
      <ScrollDown>Scroll Down</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="02" title="ELECTRICAL AND SECURITY ENGINEERING" />
    <CardListSection img={documents}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net focuses particularly on security systems, building security
        and systems for uninterruptible power supply.
        <br />
        <br />
        Our engineers design facility documentation for alarm, access control
        and CCTV systems, networks, telephone and radio systems, satellite
        communication systems and electrical systems with high reliability and
        redundancy. Building and ground construction documents for security
        enhancement measures are also delivered. One part of our engineering
        group develops construction documents for airside on airports.
        <br />
        <br />
        We handle classified information in our classified premises.
      </CardListItem>
      <CardListItem
        title={
          <span>
            TO <b>WHOM</b>
          </span>
        }
      >
        Government agencies, protected objects and other critical infrastructure
        such as:
        <br />
        <br />
        - Security companies
        <br />
        - Defence
        <br />
        - Judicial system
        <br />
        - Airports
        <br />
        - Data centres
        <br />- Power supply companies
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Our engineers have delivered documentation to over 300 projects related
        to high-security facilities and protected objects for governmental
        actors.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
