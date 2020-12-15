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
      sv="/projekteringsledare-gymnasium"
      en="/en"
      es="/es"
      canonical="https://www.swedishnet.se/projekteringsledare-gymnasium/"
      title="Swedish Net: Projekteringsledare"
      description=""
    />
    <CardListSection
      img={globe}
      style={{
        background: `url(${globe}) center center / contain no-repeat`,
        backgroundColor: "black",
        paddingTop: "220px",
      }}
    >
      <CardListItem head="Projekteringsledare">
        <br />
        <b>Rollen:</b>
        <br />
        Som projekteringsledare kommer du leda projektet i projekteringsfasen.
        Du ser till så att de tekniska beskrivningar och ritningar som tas fram
        håller rätt kvalitet och följer de direktiv som kunden gett. Du kommer
        att jobba nära kunden från försvarssektorn (FMV eller FM). Detta innebär
        att du som person ska kunna förstå vikten av att lyssna till kundens
        behov och att du lätt anpassar dig efter nya situationer. Du är duktig
        på att skapa dig en helhetsbild av ett projekt, som du sedan kan
        förmedla till både kunden och medarbetare på ett tydligt och konkret
        sätt. Din förmåga att leda andra medarbetare är god. Vidare är det
        viktigt att du är kommunikativ och informationsuppsökande – både dina
        kollegor internt men också de kunder du kommer att arbeta med.
        <br />
        <br />
        <b>Din bakgrund:</b>
        <ul>
          <li>Avslutad gymnasieutbildning</li>
          <li>Minst 10 års arbetslivserfarenhet inom branschen</li>
        </ul>
        Vi söker dig som har jobbat minst 10 år i branschen. Det är meriterande
        om du har kunskap eller erfarenhet inom något av följande områden:
        <br />
        <ul>
          <li>Fastighetsnät</li>
          <li>Teknisk bevakning</li>
          <li>Radio- och antennsystem</li>
          <li>AutoCAD</li>
          <li>Projektering</li>
          <li>Framtagning av förfrågningsunderlag</li>
          <li>Framtagning av tekniska beskrivningar</li>
          <li>Framtagning av installationsunderlag</li>
          <li>Projektledning (erfarenhet eller utbildning)</li>
          <li>Upphandling (LOU, LUFS)</li>
          <li>AMA</li>
          <li>POINT regelverket</li>
          <li>ABK</li>
          <li>Entreprenadjuridik (AB, ABT)</li>
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
        För arbete i avtalet krävs godkänd säkerhetsprövning.
        <br />
        <br />
        <b>Start: </b>
        <br />
        Enligt överenskommelse. Rekrytering kommer ske löpande.
        <br />
        <br />
        <b>Omfattning: </b>
        <br />
        Tillsvidare (heltid) eller projektanställning.
        <br />
        <br />
        <b>Lön: </b>
        <br />
        Fast marknadsmässig månadslön, individuell lönesättning.
        <br />
        <br />
        <b>Placering: </b>
        <br />
        Hallsberg eller Stockholm.
        <br />
        <br />
        <b>Ansökan: </b>
        <br />
        Skicka CV och personligt brev till{" "}
        <a href="mailto:jobb@swedishnet.se">
          jobb@swedishnet.se
        </a>
        . Intervjuer och rekrytering kommer att ske löpande så vänta inte med
        att skicka in din ansökan.
        <br />
        <br />
        För frågor eller mer information om tjänsten, vänligen kontakta:
        <br />
        <br />
        Sofia Sjölander,
        <br />
        <a href="mailto:jobb@swedishnet.se">
          jobb@swedishnet.se
        </a>
        <br />
        <br />
        Varmt välkommen med din ansökan!
        <br />
        <br />
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
