import React, { Fragment } from "react";
import { globe, soldier } from "../../images";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import CardListSection from "../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav lan="sv" sv="/sv/about" en="/about" />
    <CardListSection img={globe} style={{ paddingTop: "220px" }}>
      <CardListItem
        inverted
        title={
          <span>
            OM <b>OSS</b>
          </span>
        }
        extraContent={
          <Fragment>
            Swedish Net ingår i en koncern inriktad på säkerhet, flyg och
            försvar. I koncernen finns även:
            <br />
            <br />
            Swedish Net MX som säljer säkerhetsprodukter- och system på den
            mexikanska marknaden.
            <br />
            <br />
            Disarmament Solutions som utvecklar helhetskoncept för säker och
            miljöriktig avveckling av konventionella vapen och ammunition ihop
            med andra svenska företag med inriktning mot en global marknad.
            <br />
            <br />
            Koncernen fortsätter expandera på den svenska marknaden och är i
            gång med sin internationella etablering.
          </Fragment>
        }
      >
        <b>
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
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
