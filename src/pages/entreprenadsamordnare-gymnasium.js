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
      sv="/entreprenadsamordnare-gymnasium/"
      en="/en/"
      es="/es/"
      canonical="https://www.swedishnet.se/entreprenadsamordnare-gymnasium/"
      title="Swedish Net: Projektledare/entreprenadsamordnare"
      description="Som projektledare/entreprenadsamordnare kommer du leda projektet i byggfasen."
    />
    <CardListSection
      img={globe}
      style={{
        background: `url(${globe}) center center / contain no-repeat`,
        backgroundColor: "black",
        paddingTop: "220px",
      }}
    >
      <CardListItem head="Projektledare/entreprenadsamordnare">
        <br />
        <b>Rollen:</b>
        <br />
        Som projektledare/entreprenadsamordnare kommer du leda projektet i
        byggfasen. Du kommer samordna de entreprenörer som krävs för just ditt
        projekt: installationsföretag inom fastighetsnät, datasystem, teknisk
        bevakning med mera. Med hjälp av tekniska beskrivningar och ritningar
        ser du till så att entreprenörernas resultat håller rätt kvalitet och
        följer de direktiv som kunden gett. Du kommer i din roll delta i
        byggmöten och jobba mycket nära kunden från försvarssektorn (FMV eller
        FM). Det är därför viktigt att du förstår vikten av att lyssna till
        kundens behov och att du lätt anpassar dig efter nya situationer. Du är
        duktig på att skapa dig en helhetsbild av ett projekt, som du sedan kan
        förmedla till kunden på ett tydligt och konkret sätt. Din förmåga att
        leda andra är god.
        <br />
        <br />
        <b>Din bakgrund:</b>
        <br />
        <ul>
          <li>Avslutad gymnasieutbildning</li>
          <li>Minst 10 års arbetslivserfarenhet inom branschen</li>
          <li>
            Erfarenhet av arbete som
            entreprenadsamordnare/byggledare/projektledare
          </li>
          <li>Erfarenhet av fastighetsnät och säkerhetssystem</li>
        </ul>
        Vi söker dig som har jobbat minst 10 år i branschen. Det är meriterande
        om du har kunskap eller erfarenhet inom något av följande områden:
        <br />
        <ul>
          <li>Projektledarutbildning</li>
          <li>Entreprenadjuridik (AB, ABT)</li>
          <li>ABK</li>
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
        Enligt överenskommelse.
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
        Hallsberg eller Stockholm. I din roll som entreprenadsamordnare kan
        resor ingå.
        <br />
        <br />
        <b>Ansökan: </b>
        <br />
        Skicka CV och personligt brev till{" "}
        <a href="mailto:sofia.sjolander@swedishnet.se">
          sofia.sjolander@swedishnet.se
        </a>
        . Intervjuer kommer ske löpande så vänta inte med att skicka in din
        ansökan.
        <br />
        <br />
        För frågor eller mer information om tjänsten, vänligen kontakta:
        <br />
        <br />
        Sofia Sjölander,
        <br />
        010-207 81 55,
        <br />
        <a href="mailto:sofia.sjolander@swedishnet.se">
          sofia.sjolander@swedishnet.se
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
