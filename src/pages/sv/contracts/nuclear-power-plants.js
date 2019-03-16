import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { nuclear_color, nuclear } from "../../../images";
import IntroText from "../../../components/IntroText/IntroText";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import CardListItem from "../../../components/CardListItem/CardListItem";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";
import CardListSection from "../../../components/CardListSection/CardListSection";
import ScrollDown from "../../../components/ScrollDown/ScrollDown";

export default () => (
  <Fragment>
    <Nav
      lan="sv"
      en="/contracts/nuclear-power-related-activities"
      sv="/sv/contracts/nuclear-power-related-activities"
    />
    <FullScreenImage img={nuclear_color} noLine>
      <IntroText
        title={
          <span>
            Säkerhetshöjande åtgärder på <b> kärnkraftverk</b>
          </span>
        }
      />
      <ScrollDown>Scrolla Ner</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="01" title="KÄRNKRAFTVERK" />
    <CardListSection img={nuclear}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net levererar entreprenader inom säkerhetshöjande åtgärder med
        fokus på fysiskt och tekniskt skydd för kärnkraftsrelaterad verksamhet.
        Vi kan leverera systemdesign, konstruktion, markarbeten, byggnation och
        installation som en styrd funktionsentreprenad i samverkan med
        kärnkraftverkets egen organisation.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net byggde som totalentreprenör, tillsammans med Forsmarks
        Kraftgrupp och ett flertal underentreprenörer, en fordonskontroll vid
        Forsmarks kärnkraftverk. Fordonskontrollen består av en sexfilig, 350 m
        lång, kontrollstation med refuger som delar av filerna, samt bommar för
        respektive körfält. Det byggdes även hus för väktare, personalbod och
        teknikbod.
        <br />
        <br />
        Projektet började med en behovsanalys, systemdesign, budget och därefter
        framtagande av bygghandlingar. När utförandefasen började ingick allt
        från markarbeten till byggnader. Fordonskontrollen utgörs också av
        flertalet tekniska system som avbrottsfri kraft, larmsystem och
        radiokommunikation. Det finns även fasta och trådlösa styrsystem för
        bommar och grindar.
        <br />
        <br />
        Liknande entreprenad har utförts på Oskarshamns Kärnkraftverk.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
