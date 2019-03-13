import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { fence, helmet } from "../../images";
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
      en="/services/project-functions"
      sv="/sv/services/project-functions"
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
    <SectionHeader number="03" title="PROJECT FUNCTIONS" />
    <CardListSection img={helmet}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net takes total functional responsibility to facilitate for the
        client in technical projects. With our organisation, we fulfil the high
        requirements on quality, environment and working environment in the
        project, as well as the requirements on facility and operational
        security.
        <br />
        <br />
        Among our consultants, there are project managers, engineers and
        installers. We have experts on electrical power, mechatronics,
        electrotechnology, automation, IT and energy systems.
        <br />
        <br />
        All of our consultants are security checked and have long experience
        from working in highly sensitive environments.
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
        <br />- Nuclear power plants
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net has managed several turnkey projects for clients in both the
        private and public sector. Together with our engineers and installers,
        our project managers have delivered security enhancement measures for
        nuclear power plants and security companies among others.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
