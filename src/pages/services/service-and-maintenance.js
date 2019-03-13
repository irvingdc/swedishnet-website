import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { fence, techguy } from "../../images";
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
      en="/services/service-and-maintenance"
      sv="/sv/services/service-and-maintenance"
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
    <SectionHeader number="04" title="SERVICE AND MAINTENANCE" />
    <CardListSection img={techguy}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net has a department for service and maintenance. We have
        several agreements for the maintenance of technical systems in the
        government sector. We also have service agreements related to our own
        contracts in Sweden and abroad.
        <br />
        <br />
        Our own organisation together with our partners ensures a high level of
        service.
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
        - Defence
        <br />
        - Airports
        <br />
        - Nuclear power plants
        <br />- Embassies
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net has service agreements for, among others, embassies and
        vehicle checkpoints on Swedish nuclear power plants. Furthermore, we
        have a number of agreements including maintenance and development to
        ensure that the technical systems used by government agencies function
        for their full intended lifespan.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
