import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { airport_color, airport } from "../../images";
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
      en="/en/contracts/airports/"
      es="/es/contracts/airports/"
      sv="/entreprenader/flygplatser/"
      canonical="https://www.swedishnet.se/entreprenader/flygplatser/"
      title="Swedish Net: Entreprenader - Flygplatser"
      description="HELHETSLÖSNINGAR FÖR AIRSIDE"
    />
    <FullScreenImage img={airport_color} noLine>
      <IntroText title={<span>HELHETSLÖSNINGAR FÖR AIRSIDE</span>} />
    </FullScreenImage>
    <SectionHeader title="FLYGPLATSER" />
    <CardListSection img={airport}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net sätter ihop och levererar helhetslösningar för airside som
        inkluderar flertalet tekniska system:
        <ul>
          <li>Flygplatsljus (AGL)</li>
          <li>Instrumentlandningssystem (ILS)</li>
          <li>Flygledningssystem (ATC)</li>
          <li>Väderobservationssystem (AWOS)</li>
          <li>System för apron (kraft, GPU, belysning- och dockningssystem)</li>
          <li>Kraftförsörjning (kraft, reservkraft och avbrottsfri kraft)</li>
          <li>Driftlarmsystem (insamling av kritiska larm) </li>
        </ul>
        Vi tar fullt ansvar för att projektering och konstruktion sker enligt
        aktuella standarder och regelverk.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Scandinavian Mountains Airport är den första flygplatsen för reguljär
        trafik som byggs i Sverige på över 20 år. Den är designad och byggd
        enligt aktuellt regelverk från Europeiska unionens byrå för
        luftfartssäkerhet (EASA). Flygplatsens landningsbanor uppnår kategori
        III, vilket innebär att flygplanen kan landa i väderförhållanden med
        mycket låg sikt.
        <br />
        <br />
        Swedish Net hade helhetsansvar för projekteringen och installationen av
        flygplatsens samtliga ban- och inflygningsljus, kraftförsörjningssystem
        samt infrastrukturen för el och kommunikation.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
