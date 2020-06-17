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
      sv="/teknisk-kravstallare-ingenjör/"
      en="/en/"
      es="/es/"
      canonical="https://www.swedishnet.se/teknisk-kravstallare-ingenjör/"
      title="Swedish Net: Teknisk kravställare"
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
      <CardListItem head="Teknisk kravställare">
        <br />
        <b> Rollen:</b> <br />
        Som teknisk kravställare jobbar du med att ta fram tekniska
        beskrivningar eller ritningar inom till exempel fastighetsnät, teknisk
        bevakning, datasystem eller radiosystem. Vi är vana att jobba i par, där
        en person arbetar med den skriftliga beskrivningen och en person gör
        ritningar i AutoCAD. Detta betyder att rollen som teknisk kravställare
        passar dig utmärkt om du har en god förmåga att uttrycka dig i skrift
        likväl som om du är duktig på CAD.
        <br /> <br />
        <b>Din bakgrund:</b>
        <ul>
          <li>Ingenjörsexamen från högskola eller universitet</li>
          <li>Minst 2 års arbetslivserfarenhet inom branschen</li>
        </ul>
        Vi ser positivt på olika utbildningsbakgrunder och du som söker kan
        därför ha studerat exempelvis inom elteknik, elektronik, mekanik, radio-
        eller datateknik. Vi söker dig som har jobbat minst 2 år i branschen.
        Det är meriterande om du har kunskap eller erfarenhet inom något av
        följande områden:
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
          <li>Upprättande av relationshandlingar</li>
          <li>Upphandling (LOU, LUFS)</li>
          <li>AMA</li>
          <li>POINT regelverket</li>
          <li>ABK</li>
          <li>Entreprenadjuridik (AB, ABT)</li>
        </ul>
        <b>Om oss:</b> <br />
        Hos oss är arbetsmiljön viktig och vi har en trevlig, ödmjuk och
        hjälpsam stämning på våra kontor i Hallsberg och Stockholm. Swedish Nets
        strävan är att bli Sverige största kunskapscentrum för projektering och
        kravställning av tekniska lösningar inom våra specialistområden.
        <br /> <br />
        <b>Registerkontroll:</b> <br />
        För arbete i avtalet krävs godkänd säkerhetsprövning.
        <br /> <br />
        <b>Start: </b> <br />
        Enligt överenskommelse.
        <br /> <br />
        <b>Omfattning: </b> <br />
        Tillsvidare (heltid) eller projektanställning.
        <br /> <br />
        <b>Lön: </b> <br />
        Fast marknadsmässig månadslön, individuell lönesättning.
        <br /> <br />
        <b>Placering: </b> <br />
        Hallsberg eller Stockholm.
        <br /> <br />
        <b>Ansökan: </b> <br />
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
