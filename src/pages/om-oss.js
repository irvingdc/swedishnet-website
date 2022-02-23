import React, { Fragment } from "react";
import { globe } from "../images";
import CardListItem from "../components/CardListItem/CardListItem";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css";
import CardListSection from "../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="sv"
      sv="/om-oss/"
      en="/en/about/"
      es="/es/about/"
      canonical="https://www.swedishnet.se/om-oss/"
      title="Swedish Net: Om oss"
      description="Swedish Net erbjuder tjänster och entreprenader för samhällsviktiga anläggningar och funktioner vilka till följd av sin hotbild har högt ställda krav på säkerhet och teknik."
    />
    <CardListSection
      img={globe}
      style={{
        background: `url(${globe}) center center / contain no-repeat`,
        backgroundColor: "black",
        paddingTop: "220px",
      }}
    >
      <CardListItem
        title={
          <span>
            OM <b>OSS</b>
          </span>
        }
      >
        <b style={{ color: "#f57a52" }}>
          Swedish Net erbjuder tjänster och entreprenader för samhällsviktiga
          anläggningar och funktioner vilka till följd av sin hotbild har högt
          ställda krav på säkerhet och teknik. I 20 år har vi levererat
          lösningar till myndigheter, skyddsobjekt och annan kritisk
          infrastruktur. Alla våra kunder behöver särskild kännedom vad gäller
          anläggningssäkerhet på grund av till exempel terrorism och andra
          antagonistiska hot samt kännedom avseende driftsäkerhet med hänsyn
          till deras ansvar för drift av kritiska funktioner.
        </b>
        <br />
        <br />
        Företaget grundades år 1998. Vårt huvudkontor är beläget i Sveriges
        logistiska centrum, Hallsberg. Under 2017 öppnade vi även ett
        lokalkontor i Stockholm. Swedish Nets lokaler är säkerhetsklassade och
        vi har ett tekniklaboratorium samt en verkstad för specialtillverkning
        av apparatskåp. Vi har i dagsläget över 25 erfarna konsulter inom
        säkerhetsrådgivning, projektering och konstruktion, systemdesign,
        projektledning, installation och driftsättning samt service och
        underhåll. All vår personal är säkerhetskontrollerad.
        <br />
        <br />
        Tillsammans levererar vi teknik och säkerhet som konsultlösningar och
        entreprenader för anläggningar och funktioner med stor betydelse för
        vårt samhälle.
        <br />
        <br />
      </CardListItem>

      <CardListItem>
        <b style={{ color: "#f57a52" }}>
          Den 1 februari förvärvade Sweco Sverige AB samtliga aktier i Swedish
          Net Engineering. Sweco planerar och utformar framtidens hållbara
          städer och samhällen. Med 18 000 medarbetare i norra Europa kan man
          alltid erbjuda rätt expertis för varje enskilt projekt. Sweco har en
          omsättning på cirka SEK 22 miljarder och är noterade på NASDAQ OMX
          Stockholm.
        </b>
        <br />
        <br />
        Swedish Net Engineering är en del av Swecos 130 experter inom skydd och
        säkerhet. Verksamheten i Swedish Net Engineering fortsätter utan några
        förändringar.
        <br />
        <br />
      </CardListItem>
      <CardListItem>
        <Fragment>
          Swedish Net ingår i en koncern inriktad på säkerhet, flyg och försvar.
          I koncernen finns även:
          <br />
          <br />
          <a
            rel="noopener noreferrer"
            href="http://www.swedishnet.mx/"
            target="_blank"
          >
            Swedish Net MX
          </a>{" "}
          som säljer säkerhetsprodukter- och system på den mexikanska marknaden.
          <br />
          <br />
          <a
            rel="noopener noreferrer"
            href="https://www.disarmamentsolutions.com/"
            target="_blank"
          >
            Disarmament Solutions
          </a>{" "}
          som utvecklar helhetskoncept för säker och miljöriktig avveckling av
          konventionella vapen och ammunition ihop med andra svenska företag med
          inriktning mot en global marknad.
          <br />
          <br />
          Koncernen fortsätter expandera på den svenska marknaden och är i gång
          med sin internationella etablering.
          <br />
          <br />
        </Fragment>
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
