import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { fence, documents } from "../../../images";
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
      en="/services/electricity-and-security-engineering"
      sv="/sv/services/electricity-and-security-engineering"
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
    <SectionHeader number="02" title="EL OCH SÄKERHETS KONSTRUKTION" />
    <CardListSection img={documents}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net är inriktade på konstruktion av säkerhetssystem,
        byggnadsteknisk säkerhet och system för avbrottsfri kraft.
        <br />
        <br />
        Våra konstruktörer tar fram anläggningsdokumentation för larm-, passer-
        och CCTV-system, nätverk, telefonisystem, radiosystem
        satellitkommunikationssystem samt elsystem med hög tillförlitlighet och
        redundans. Även bygg- och markritningar för säkerhetshöjande åtgärder
        levereras. En del av konstruktionsgruppen tar fram bygghandlingar för
        airside på flygplatser.
        <br />
        <br />
        Vi hanterar sekretessbelagd dokumentation i SUA-klassade lokaler.
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
        - Säkerhetsföretag
        <br />
        - Försvaret
        <br />
        - Rättsväsendet
        <br />
        - Flygplatser
        <br />
        - Datacenter
        <br />- Kraftbolag
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Våra konstruktörer har levererat dokumentation till över 300 projekt för
        högsäkerhetsanläggningar och skyddsobjekt åt olika statliga aktörer.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
