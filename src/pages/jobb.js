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
          Swedish Net har vunnit ett stort ramavtal inom försvarssektorn. I
          avtalet ska vi projektera och kravställa tekniska lösningar inom
          fastighetsnät, teknisk bevakning, datasystem, radiosystem med mera.
          När dessa tekniska lösningar implementeras stödjer vi kunden med
          entreprenadsamordning av entreprenörer. Uppskattningsvis kommer 50
          personer att jobba heltid i avtalet. Vi söker därför efter många nya
          medarbetare!
        </b>
        <br />
        <br />
      </CardListItem>
      <CardListItem
        title={
          <span>
            <b>ROLLER</b>
          </span>
        }
        content={
          <Fragment>
            <Table
              dataSource={JOBS_SV}
              columns={[
                {
                  title: "Roll",
                  dataIndex: "title",
                  render: (title, item) => <Link to={item.url}>{title}</Link>,
                },
                {
                  title: "Högsta utbildningsnivå",
                  dataIndex: "degree",
                },
                {
                  title: "Erfarenhet i branschen",
                  dataIndex: "experience",
                  render: (number) => `minst ${number} år`,
                },
              ]}
            />
            <p>
              <br />
            </p>
          </Fragment>
        }
      >
        I avtalet kommer fyra roller vara aktuella: teknisk kravställare,
        projekteringsledare, projektledare/entreprenadsamordnare samt
        dokumentatör. Olika lång arbetslivserfarenhet krävs för de olika
        rollerna.
        <br />
        <br />
        Exempel: Din högsta utbildningsnivå är gymnasium, du behöver då ha minst
        5 års arbetslivserfarenhet inom branschen för jobbet teknisk
        kravställare. Har du däremot en ingenjörsexamen behöver du endast 2 års
        arbetslivserfarenhet inom branschen för jobb som teknisk kravställare.
        <br />
        <br />
        Klicka på respektive roll för att läsa mer.
        <br />
        <br />
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
