import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { fence, camera } from "../../../images";
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
      en="/services/protective-security-and-planning"
      sv="/sv/services/protective-security-and-planning"
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
    <SectionHeader number="01" title="SÄKERHETSSKYDD OCH PROJEKTERING" />
    <CardListSection img={camera}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net genomför förstudier med hot- och sårbarhetsanalyser,
        inventering och utredning av tekniskt och fysiskt skydd samt förslag på
        åtgärder med tillhörande budget. Vi är vana säkerhetsrådgivare rörande
        teknisk och fysisk säkerhet, uppbyggnad och utformning av exempelvis
        larm-, passer- och CCTV-system med tillhörande bevakningscentraler, val
        av lås, dörrar, glas- och byggnadskonstruktion utifrån olika
        skyddsklasser samt säkerhetskyddsfrågor.
        <br />
        <br />
        Vi är specialiserade på teknisk dokumentation och upphandlingsstöd och
        tar fram upphandlingsunderlag (rambeskrivning/teknisk beskrivning) och
        projekteringsanvisningar för tekniskt och fysiskt skydd samt
        föreskrifter och rutiner gällande säkerhetsskydd. Vi har SUA-klassade
        lokaler och stor erfarenhet av arbete med säkerhetsklassade
        upphandlingar.
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
        - Rättsväsendet
        <br />
        - Flygplatser
        <br />
        - Försvaret
        <br />
        - Offentlig förvaltning
        <br />- Privata företag
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Våra säkerhetsrådgivare och projektörer har levererat
        upphandlingsunderlag, utredningar och analyser till över 200 tekniska
        projekt i samband med säkerhetshöjande åtgärder.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
