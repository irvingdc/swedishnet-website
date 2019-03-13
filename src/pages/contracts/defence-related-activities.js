import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { device, soldier } from "../../images";
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
      en="/contracts/defence-related-activities"
      sv="/sv/contracts/defence-related-activities"
    />
    <FullScreenImage img={soldier} noLine>
      <IntroText
        title={
          <span>
            Complex assignments <b>for defence related projects</b>
          </span>
        }
      />
      <ScrollDown>Scroll Down</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="02" title="DEFENCE" />
    <CardListSection img={device}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net is an experienced supplier of material to the Swedish
        Defence and Material Administration and the Armed Forces. We have
        expertise and certifications for the delivery of technical
        documentation, system security documents and database registration, all
        according to the standards and routines of the Swedish Armed Forces.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net won a public procurement regarding the delivery of search
        equipment to the Swedish Defence Materiel Administration. The search
        equipment was delivered with full technical documentation including
        system security, manuals and registration. The equipment is intended to
        be used when searching for hidden weapon arsenals, surveillance
        equipment, mines and hidden persons.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
