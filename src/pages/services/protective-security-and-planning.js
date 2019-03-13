import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { fence, camera } from "../../images";
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
      en="/services/protective-security-and-planning"
      sv="/sv/services/protective-security-and-planning"
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
    <SectionHeader number="01" title="PROTECTIVE SECURITY AND PLANNING" />
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
    <Footer lan="en" />
  </Fragment>
);
