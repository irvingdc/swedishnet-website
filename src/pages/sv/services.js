import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { services_color, camera, documents, helmet, techguy } from "../../images";
import IntroText from "../../components/IntroText/IntroText";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import CardListSection from "../../components/CardListSection/CardListSection";
import ScrollDown from "../../components/ScrollDown/ScrollDown";

export default () => (
  <Fragment>
    <Nav
      lan="sv"
      en="/services/"
      sv="/sv/services/"
    />
    <FullScreenImage img={services_color} noLine>
      <IntroText
        title={
          <span>
            Konsultationer avseende fysiskt och tekniskt skydd
            <b> för högsäkerhetsanläggningar</b>
          </span>
        }
      />
      <ScrollDown>Scrolla Ner</ScrollDown>
    </FullScreenImage>
    <SectionHeader number="01" title="SÄKERHETSSKYDD OCH PROJEKTERING" id="protective-security-and-planning"/>
    <CardListSection img={camera}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net genomför förstudier med hot- och sårbarhetsanalyser,
        inventering och utredning av tekniskt och fysiskt skydd samt förslag på
        åtgärder med tillhörande budget. Vi är vana säkerhetsrådgivare rörande
        teknisk och fysisk säkerhet, uppbyggnad och utformning av exempelvis
        larm-, passer- och CCTV-system med tillhörande bevakningscentraler, val
        av lås, dörrar, glas- och byggnadskonstruktion utifrån olika
        skyddsklasser samt säkerhetskyddsfrågor.
        <br />
        <br />
        Vi är specialiserade på teknisk dokumentation och upphandlingsstöd och
        tar fram upphandlingsunderlag (rambeskrivning/teknisk beskrivning) och
        projekteringsanvisningar för tekniskt och fysiskt skydd samt
        föreskrifter och rutiner gällande säkerhetsskydd. Vi har SUA-klassade
        lokaler och stor erfarenhet av arbete med säkerhetsklassade
        upphandlingar.
      </CardListItem>
      <CardListItem
        title={
          <span>
            TILL <b>VILKA</b>
          </span>
        }
      >
        Myndigheter, skyddsobjekt och annan kritisk infrastruktur för
        exempelvis:
        <br />
        <br />
        - Rättsväsendet
        <br />
        - Flygplatser
        <br />
        - Försvaret
        <br />
        - Offentlig förvaltning
        <br />- Privata företag
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Våra säkerhetsrådgivare och projektörer har levererat
        upphandlingsunderlag, utredningar och analyser till över 200 tekniska
        projekt i samband med säkerhetshöjande åtgärder.
      </CardListItem>
    </CardListSection>
    <SectionHeader number="02" title="EL OCH SÄKERHETS KONSTRUKTION" id="electrical-and-security-engineering"/>
    <CardListSection img={documents}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net är inriktade på konstruktion av säkerhetssystem,
        byggnadsteknisk säkerhet och system för avbrottsfri kraft.
        <br />
        <br />
        Våra konstruktörer tar fram anläggningsdokumentation för larm-, passer-
        och CCTV-system, nätverk, telefonisystem, radiosystem
        satellitkommunikationssystem samt elsystem med hög tillförlitlighet och
        redundans. Även bygg- och markritningar för säkerhetshöjande åtgärder
        levereras. En del av konstruktionsgruppen tar fram bygghandlingar för
        airside på flygplatser.
        <br />
        <br />
        Vi hanterar sekretessbelagd dokumentation i SUA-klassade lokaler.
      </CardListItem>
      <CardListItem
        title={
          <span>
            TILL <b>VILKA</b>
          </span>
        }
      >
        Myndigheter, skyddsobjekt och annan kritisk infrastruktur för
        exempelvis:
        <br />
        <br />
        - Säkerhetsföretag
        <br />
        - Försvaret
        <br />
        - Rättsväsendet
        <br />
        - Flygplatser
        <br />
        - Datacenter
        <br />- Kraftbolag
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Våra konstruktörer har levererat dokumentation till över 300 projekt för
        högsäkerhetsanläggningar och skyddsobjekt åt olika statliga aktörer.
      </CardListItem>
    </CardListSection>

    <SectionHeader number="03" title="PROJEKTFUNKTIONER" id="project-functions"/>
    <CardListSection img={helmet}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net tar sig an helhetsåtaganden med funktionsansvar för att
        avlasta beställaren i tekniska projekt. Med vår organisation
        säkerställer vi projekts höga krav på kvalitet, miljö och arbetsmiljö
        samt anläggningssäkerhet och driftsäkerhet.
        <br />
        <br />
        Hos våra konsulter hittar du projektledare, konstruktörer och
        driftsättare. Vi har ingenjörer inom elkraft, mekatronik, elektroteknik,
        automation, IT och energisystem.
        <br />
        <br />
        Alla våra konsulter är säkerhetskontrollerade och har lång erfarenhet av
        att arbeta i särskilt känsliga miljöer.
      </CardListItem>
      <CardListItem
        title={
          <span>
            TILL <b>VILKA</b>
          </span>
        }
      >
        Myndigheter, skyddsobjekt och annan kritisk infrastruktur för
        exempelvis:
        <br />
        <br />
        - Säkerhetsföretag
        <br />
        -Rättsväsendet
        <br />
        - Flygplatser
        <br />
        - Försvaret
        <br />
        - Datacenter
        <br />- Kärnkraftverk
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net har drivit flertalet projekt som helhetsåtaganden för kunder
        i privat och offentlig sektor. Våra projektledare har tillsammans med
        våra ingenjörer, konstruktörer, montörer och driftsättare utfört
        säkerhetshöjande åtgärder åt bland andra kärnkraftverk och
        säkerhetsföretag.
      </CardListItem>
    </CardListSection>

    <SectionHeader number="04" title="04  SERVICE OCH UNDERHÅLLE" id="service-and-maintenance"/>
    <CardListSection img={techguy}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net har en avdelning för service och underhåll. Vi har flertalet
        avtal för service och vidmakthållande av tekniska system. Vi har även
        serviceåtaganden i anknytning till våra egna utförda entreprenader i
        Sverige och utomlands.
        <br />
        <br />
        Vår serviceorganisation tillsammans med övriga konsulter och partners
        säkerställer en hög servicenivå.
      </CardListItem>
      <CardListItem
        title={
          <span>
            TILL <b>VILKA</b>
          </span>
        }
      >
        Myndigheter, skyddsobjekt och annan kritisk infrastruktur för
        exempelvis:
        <br />
        <br />
        - Försvar
        <br />
        - Flyg
        <br />
        - Kärnkraft
        <br />- Ambassader
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net har serviceåtaganden mot bland annat ambassader och
        fordonskontroller vid svenska kärnkraftverk. Vidare har vi ett antal
        löpande avtal som innefattar underhåll och vidareutveckling för att
        säkerställa myndigheters tekniska systemfunktioner under deras
        tilltänkta livslängd.
      </CardListItem>
    </CardListSection>

    <Footer lan="sv" />
  </Fragment>
);
