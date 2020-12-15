import React, { Fragment } from "react";
import { globe } from "src/images";
import CardListItem from "components/CardListItem/CardListItem";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";
import "src/main.module.css";
import CardListSection from "components/CardListSection/CardListSection";
import { JOBS_SV } from "src/constants";
import { Link } from "gatsby";
import Table from "components/Table/Table";

export default () => (
  <Fragment>
    <Nav
      lan="sv"
      sv="/jobb/"
      en="/en/career/"
      es="/es/carrera/"
      canonical="https://www.swedishnet.se/jobb/"
      title="Swedish Net: Jobb"
      description="Swedish Net har vunnit ett stort ramavtal inom försvarssektorn. I avtalet ska vi projektera och kravställa tekniska lösningar inom fastighetsnät, teknisk bevakning, datasystem, radiosystem med mera."
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
            <b>KARRIÄR</b>
          </span>
        }
      >
        <b style={{ color: "#f57a52" }}>
          För tillfället finns det tyvärr inga lediga tjänster
        </b>
        <br />
        <br />
        Hos oss på Swedish Net jobbar bland annat projektledare, projektörer och
        konstruktörer. Om du tror att du skulle passa bra hos oss får du gärna
        skicka en spontanansökan till jobb@swedishnet.se. Observera att det kan
        dröja innan du får svar på din ansökan.
        <br />
        <br />
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
