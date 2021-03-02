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
          Swedish Net har vunnit ett stort ramavtal inom försvarssektorn. Genom
          avtalet stödjer vi Försvarets Materiel Verk (FMV) och Försvarsmakten
          med projektering, utförande och dokumentation.
        </b>
        <br />
        <br />
        <b style={{ color: "#f57a52" }}>
          I projekteringsfasen tar vi fram kompletta förfrågningsunderlag där vi
          kravställer upp till 20 olika tekniska system. Det handlar framför
          allt om fastighetsnät, data- och kommunikationsutrustning, tekniska
          bevakningssystem och verkstadsinredning. När dessa tekniska system ska
          installeras stödjer vi vår kund med entreprenadsamordning av
          upphandlade entreprenörer. Avslutningsvis jobbar vi med att ta fram
          kompletta relationshandlingar, överlämningshandlingar samt lägger in
          information i tillämpliga databaser.
        </b>
        <br />
        <br />
        Uppskattningsvis kommer 60 personer att jobba heltid inom avtalet. Vi
        söker därför efter många nya medarbetare!
        <br />
        <br />
        I avtalet kommer fyra roller vara aktuella: teknisk kravställare,
        projekteringsledare, projektledare/entreprenadsamordnare samt
        dokumentatör. FMV ställer krav på att alla som arbetar i avtalet ska ha
        en viss typ av utbildningsbakgrund och arbetslivserfarenhet. Om man har
        högskoleingenjörsexamen (eller högre) sänks kraven på
        arbetslivserfarenhet.
        <br />
        <br />
        Exempel: Din högsta utbildningsnivå är gymnasium, du behöver då ha minst
        5 års arbetslivserfarenhet inom branschen för jobbet teknisk
        kravställare. Har du däremot en högskoleingenjörsexamen (eller högre)
        behöver du endast 2 års arbetslivserfarenhet inom branschen för jobb som
        teknisk kravställare.
        <br />
        <br />
        Olika lång arbetslivserfarenhet krävs för de olika rollerna. Klicka på
        respektive roll för att läsa mer.
        <br />
        <br />
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
        <br />
        <br />
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
