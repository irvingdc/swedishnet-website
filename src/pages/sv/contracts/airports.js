import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { airport_color, airport } from "../../../images";
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
    <Nav lan="sv" en="/contracts/airports" sv="/sv/contracts/airports" />
    <FullScreenImage img={airport_color} noLine>
      <IntroText
        title={
          <span>
            AGL, ILS OCH AVBROTTSFRI KRAFT 
            <b> FÖR CIVILA OCH MILITÄRA FLYGPLATSER</b>
          </span>
        }
      />
      <ScrollDown>Scrolla Ner</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="03" title="FLYGPLATSER" />
    <CardListSection img={airport}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net är ett av få företag i Sverige som levererar helhetslösningar
        med design och installation för flygplatsljus (AGL),
        instrumentlandningssystem (ILS) och kraftförsörjningsystem på airside.
        Vi levererar till militära och civila flygplatser enligt internationella
        standarder i Sverige och internationellt.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Scandinavian Mountains Airport i Sälen är den första flygplatsen för
        reguljär trafik som byggs i Sverige på över 19 år. Flygplatsen byggs där
        den tidigare Sälens flygplats låg, på Mobergskölen i Sälenfjällen på
        gränsen till Norge. Flygplatsen ska uppfylla inflygningskategori III,
        samma kategori som bland annat landingsbanor på Arlanda har. I december
        2019 beräknas de första nationella och internationella flygplanen kunna
        landa på Scandinavian Mountains Airport, en av Europas modernaste
        flygplatser.
        <br />
        <br />
        Swedish Net har en stor del i uppförandet av Scandinavian Mountains
        Airport genom sitt funktionsansvar för ban- och inflygningsljus, kraft-
        och reservkraftsystem samt infrastruktur för kraft och kommunikation.
        Projektet är igång och bland annat ska cirka 12 mil kabel förläggas och
        1250 ljusarmaturer placeras ut. I augusti 2019 ska våra delar av
        projektet vara redo för besiktning.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
