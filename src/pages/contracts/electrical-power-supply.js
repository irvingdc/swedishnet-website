import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { snow, lockers } from "../../images";
import IntroText from "../../components/IntroText/IntroText";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import CardListSection from "../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="sv"
      en="/en/contracts/electrical-power-supply/"
      sv="/contracts/electrical-power-supply/"
      canonical="https://www.swedishnet.se/contracts/electrical-power-supply/"
      title="Swedish Net: Entreprenader - Elkraftförsörjning"
      description="Tillförlitliga elkraftförsörjningssystem för kritisk infrastruktur."
    />
    <FullScreenImage img={snow} noLine>
      <IntroText
        title={
          <span>
            TILLFÖRLITLIGA ELKRAFTFÖRSÖRJNINGSSYSTEM
            <b> FÖR KRITISK INFRASTRUKTUR</b>
          </span>
        }
      />
    </FullScreenImage>
    <SectionHeader title="ELKRAFTFÖRSÖRJNING" />
    <CardListSection img={lockers}>
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
