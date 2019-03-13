import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { fence, helmet } from "../../../images";
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
      en="/services/project-functions"
      sv="/sv/services/project-functions"
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
    <SectionHeader number="03" title="PROJEKTFUNKTIONER" />
    <CardListSection img={helmet}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net tar sig an helhetsåtaganden med funktionsansvar för att
        avlasta beställaren i tekniska projekt. Med vår organisation
        säkerställer vi projekts höga krav på kvalitet, miljö och arbetsmiljö
        samt anläggningssäkerhet och driftsäkerhet.
        <br />
        <br />
        Hos våra konsulter hittar du projektledare, konstruktörer och
        driftsättare. Vi har ingenjörer inom elkraft, mekatronik, elektroteknik,
        automation, IT och energisystem.
        <br />
        <br />
        Alla våra konsulter är säkerhetskontrollerade och har lång erfarenhet av
        att arbeta i särskilt känsliga miljöer.
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
        -Rättsväsendet
        <br />
        - Flygplatser
        <br />
        - Försvaret
        <br />
        - Datacenter
        <br />- Kärnkraftverk
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net har drivit flertalet projekt som helhetsåtaganden för kunder
        i privat och offentlig sektor. Våra projektledare har tillsammans med
        våra ingenjörer, konstruktörer, montörer och driftsättare utfört
        säkerhetshöjande åtgärder åt bland andra kärnkraftverk och
        säkerhetsföretag.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
