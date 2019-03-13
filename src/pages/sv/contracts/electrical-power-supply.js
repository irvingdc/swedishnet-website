import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { electric, cabin } from "../../../images";
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
      en="/contracts/electrical-power-supply"
      sv="/sv/contracts/electrical-power-supply"
    />
    <FullScreenImage img={electric} noLine>
      <IntroText
        title={
          <span>
            TILLFÖRLITLIGA ELKRAFTFÖRSÖRJNINGSSYSTEM
            <b> FÖR KRITISK INFRASTRUKTUR</b>
          </span>
        }
      />
      <ScrollDown>Scrolla Ner</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="04" title="ELKRAFTFÖRSÖRJNING" />
    <CardListSection img={cabin}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net levererar kompletta lösningar för kraft, reservkraft och
        avbrottsfri kraft med tillhörande säkra byggnader och områdesskydd.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net är ansvarig för leveransen av ett komplett
        kraftförsörjningssystem,till Scandinavian Mountains Airport. En
        ställverksbyggnad på 200 kvadratmeter försörjer hela airside med kraft,
        reservkraft och avbrottsfri kraft inklusive teknikrum. En annan byggnad
        på 100 kvadratmeter försörjer flygplatsens terminalbyggnad och övriga
        ytor med kraft och reservkraft.
        <br />
        <br />
        Båda byggnaderna levereras nyckelfärdiga med samtliga funktioner
        färdiginstallerade.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
