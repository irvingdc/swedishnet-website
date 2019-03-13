import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { fence, techguy } from "../../../images";
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
      en="/services/service-and-maintenance"
      sv="/sv/services/service-and-maintenance"
    />
    <FullScreenImage img={fence} noLine>
      <IntroText
        title={
          <span>
            Konsultationer avseende fysiskt och tekniskt skydd
            <b> för högsäkerhetsanläggningar</b>
          </span>
        }
      />
      <ScrollDown>Scrolla Ner</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="04" title="04  SERVICE OCH UNDERHÅLLE" />
    <CardListSection img={techguy}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net har en avdelning för service och underhåll. Vi har flertalet
        avtal för service och vidmakthållande av tekniska system. Vi har även
        serviceåtaganden i anknytning till våra egna utförda entreprenader i
        Sverige och utomlands.
        <br />
        <br />
        Vår serviceorganisation tillsammans med övriga konsulter och partners
        säkerställer en hög servicenivå.
      </CardListItem>
      <CardListItem
        title={
          <span>
            TILL <b>VILKA</b>
          </span>
        }
      >
        Myndigheter, skyddsobjekt och annan kritisk infrastruktur för
        exempelvis:
        <br />
        <br />
        - Försvar
        <br />
        - Flyg
        <br />
        - Kärnkraft
        <br />- Ambassader
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net har serviceåtaganden mot bland annat ambassader och
        fordonskontroller vid svenska kärnkraftverk. Vidare har vi ett antal
        löpande avtal som innefattar underhåll och vidareutveckling för att
        säkerställa myndigheters tekniska systemfunktioner under deras
        tilltänkta livslängd.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
