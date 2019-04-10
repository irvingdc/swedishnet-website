import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import {
  services_color,
  documents,
  camera,
  helmet,
  techguy
} from "../../images";
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
      en="/en/services/"
      sv="/services/"
      canonical="https://www.swedishnet.se/en/services/"
      title="Swedish Net: Services"
      description="Consultancy regarding physical and technical protection for high security facilities"
    />
    <FullScreenImage img={services_color} noLine>
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

    <SectionHeader
      number="01"
      title="PROTECTIVE SECURITY AND PLANNING"
      id="protective-security-and-planning"
    />
    <CardListSection img={camera}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net conducts preliminary studies with threat and vulnerability
        analyses, inventories of technical and physical protection with
        suggestions on measures and associated budgets. We are experienced
        security advisors regarding physical and technical protection, the
        designing and building of, for example, alarm, access control and CCTV
        systems with associated surveillance centres, choice of locks, doors,
        glass and building constructions based on different security
        classifications and protective security issues.
        <br />
        <br />
        We are specialised in technical documentation and procurement support
        and develop technical specifications and planning guides for physical
        and technical protection as well as regulations and procedures regarding
        protective security. We have security classified premises and extensive
        experience from handling classified procurements.
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
        - Judicial systems
        <br />
        - Airports
        <br />
        - Defence
        <br />
        - Public administration
        <br />- Private companies
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Our security advisors and planners have delivered procurement documents,
        inventories and analyses to more than 200 technical projects in
        conjunction with security enhancement measures.
      </CardListItem>
    </CardListSection>

    <SectionHeader
      number="02"
      title="ELECTRICAL AND SECURITY ENGINEERING"
      id="electrical-and-security-engineering"
    />
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

    <SectionHeader
      number="03"
      title="THE PROJECT FUNCTION"
      id="the-project-function"
    />
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

    <SectionHeader
      number="04"
      title="SERVICE AND MAINTENANCE"
      id="service-and-maintenance"
    />
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
