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
      sv="/teknisk-kravstallare/"
      en="/en/"
      es="/es/"
      canonical="https://www.swedishnet.se/teknisk-kravstallare/"
      title="Swedish Net: Teknisk Kravställare"
      description="Som teknisk kravställare/projektör jobbar du i projekteringsfasen med att ta fram kompletta förfrågningsunderlag..."
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
        head="Teknisk Kravställare"
        title={
          <span>
            <b>TEKNISK KRAVSTÄLLARE</b>
          </span>
        }
      >
        <br /> <b>Rollen:</b>
        <br />
        Som teknisk kravställare/projektör jobbar du i projekteringsfasen med
        att ta fram kompletta förfrågningsunderlag. Det handlar om att ta fram
        tekniska beskrivningar och ritningar för till exempel fastighetsnät,
        data- och kommunikationsutrustning, tekniska bevakningssystem och
        inredning. Du jobbar tillsammans med en eller flera kollegor samt en
        projekteringsledare. Rollen passar dig som har god förmåga att uttrycka
        dig i skrift och är duktig på AutoCAD.
        <br />
        <br />
        Det är viktigt att du är kommunikativ och vågar fråga – både dina
        kollegor internt och de kunder du kommer att arbeta med.
        <br />
        <br />
        <b>Din bakgrund:</b>
        <br />{" "}
        <ul>
          <li>
            Högskoleingenjörsexamen (eller högre) samt minst 2 års
            arbetslivserfarenhet inom branschen.
          </li>
          <br />
          ELLER
          <br />
          <br />
          <li>
            Avslutad gymnasieutbildning samt minst 5 års arbetslivserfarenhet
            inom branschen.
          </li>{" "}
        </ul>
        <br />
        <b>Meriterande:</b>
        <br /> Det är meriterande om du har kunskap eller erfarenhet inom något
        av följande områden:
        <br />
        <ul>
          <li>fastighetsnät</li>
          <li>teknisk bevakning</li>
          <li>AutoCAD</li>
          <li>projektering</li>
          <li>framtagning av förfrågningsunderlag</li>
          <li>upprättande av relationshandlingar</li>
          <li>AMA EL</li>
          <li>POINT regelverket</li>
          <li>entreprenadjuridik (ABK, AB, ABT).</li>
        </ul>
        <b>Om oss:</b>
        <br />
        Hos oss är arbetsmiljön viktig och vi har en trevlig, ödmjuk och
        hjälpsam stämning på våra kontor i Hallsberg och Stockholm. Swedish Nets
        strävan är att bli Sverige största kunskapscentrum för projektering och
        kravställning av tekniska lösningar inom våra specialistområden.
        <br />
        <br />
        <b>Registerkontroll:</b>
        <br />
        För arbete i avtalet krävs godkänd säkerhetsprövning. Skulle du bli
        anställd hos oss kommer du behöva genomgå en säkerhetsprövning med
        tillhörande registerkontroll.
        <br />
        <br />
        <b>Start: </b>
        <br />
        Enligt överenskommelse. Rekrytering kommer ske löpande. <br />
        <br /> <b>Omfattning: </b>
        <br />
        Tillsvidare (heltid) eller projektanställning.
        <br />
        <br /> <b>Lön: </b>
        <br />
        Fast marknadsmässig månadslön, individuell lönesättning.
        <br />
        <br /> <b>Placering:</b>
        <br />
        Hallsberg eller Stockholm (Munkbrogatan).
        <br />
        <br />
        <b>Ansökan: </b>
        <br />
        Skicka CV och personligt brev till{" "}
        <a href="mailto:jobb@swedishnet.se">jobb@swedishnet.se</a>
        . Intervjuer och rekrytering kommer att ske löpande så vänta inte med
        att skicka in din ansökan.
        <br />
        <br />
        För frågor eller mer information om tjänsten, vänligen kontakta: <br />
        <br />
        <a href="mailto:jobb@swedishnet.se">jobb@swedishnet.se</a>
        <br />
        <br />
        Varmt välkommen med din ansökan! <br />
        <br />
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
