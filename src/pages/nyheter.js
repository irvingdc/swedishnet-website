import React, { Fragment } from "react";
import VerticalText from "../components/VerticalText/VerticalText";
import CardListSection from "../components/CardListSection/CardListSection";
import Nav from "../components/Nav/Nav";
import "../main.module.css";
import Article from "../components/Article/Article";
import { new_black, news1, news2, news3, news4, news5, news7 } from "../images";
import Footer from "../components/Footer/Footer";

export default () => {
  let articles = [
    {
      title: (
        <span>
          190318 ENTREPRENAD <b>ÖREBRO FLYGPLATS</b>
        </span>
      ),
      img: news7,
      content:
        "Swedish Net har vunnit upphandling för byte av konstantströmsregulatorer (CCR:er) på Örebro flygplats."
    },
    {
      title: (
        <span>
          190315 ENTREPRENAD <b>LYCKSELE FLYGPLATS</b>
        </span>
      ),
      img: news2,
      content:
        "Swedish Net har vunnit upphandling för byte av kurssändare (Localizer) på flygplatsen i Lycksele."
    },
    {
      title: (
        <span>
          190301 ENTREPRENAD <b>SCANDINAVIAN MOUNTAINS AIRPORT</b>
        </span>
      ),
      img: news5,
      content:
        "Vårt arbete på flygplatsen i Sälen fortsätter, 70 procent av entreprenaden är färdigställd. Swedish Net har funktionsansvar för flygplatsens ban- och inflygningsljus samt kraft- och reservkraftsystem. Vår entreprenad ska vara redo för besiktning i slutet av augusti. "
    },
    {
      title: (
        <span>
          190228 ENTREPRENAD <b>FLYGPLATSEN I SVEG </b>
        </span>
      ),
      img: news4,
      content:
        "Swedish Net har installerat ny glidbanesändare (GP) och utrustning för avståndsmätning (DME) på flygplatsen i Sveg."
    },
    {
      title: (
        <span>
          190114 KONSULTTJÄNSTER{" "}
          <b>SÄKERHETSPROJEKTERING OCH DETALJKONSTRUKTION</b>
        </span>
      ),
      img: news3,
      content:
        "I början av 2019 har vi ett  fortsatt stort inflöde på uppdrag inom säkerhetsprojektering och detaljkonstruktion åt statliga och privata aktörer."
    },
    {
      title: (
        <span>
          181205 ENTREPRENAD <b>RONNEBYS CIVILA/MILITÄRA FLYGPLATS</b>
        </span>
      ),
      img: news2,
      content:
        "Ronnebys flygplats har fått nya inflygningsmaster och utrustning för ILS. Swedish Net vann upphandlingen från FMV tidigare i år och entreprenaden är nu genomförd."
    },
    {
      title: (
        <span>
          181022 KONSULTTJÄNSTER <b>PROJEKTLEDNINGSUPPDRAG</b>
        </span>
      ),
      img: news1,
      content:
        "Swedish Net innehar flera projektledningsuppdrag som pågår under hela hösten. Samtliga uppdrag innebär arbete på anläggningar med högt ställda krav på säkerhet."
    }
  ];
  return (
    <Fragment>
      <Nav
        lan="sv"
        sv="/nyheter/"
        en="/en/news/"
        es="/es/news/"
        canonical="https://www.swedishnet.se/nyheter/"
        title="Swedish Net: Nyheter"
      />
      <CardListSection img={new_black} style={{ paddingTop: "120px" }}>
        <VerticalText
          style={{
            left: "40%",
            fontSize: "22px",
            paddingTop: "40px"
          }}
        >
          <span>NYHETER</span>
        </VerticalText>
        {articles.map((it, index) => (
          <Article key={index} {...it} />
        ))}
      </CardListSection>
      <Footer lan="sv" />
    </Fragment>
  );
};
