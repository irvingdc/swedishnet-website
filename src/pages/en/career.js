import React, { Fragment } from "react";
import { globe } from "src/images";
import CardListItem from "components/CardListItem/CardListItem";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";
import "src/main.module.css";
import CardListSection from "components/CardListSection/CardListSection";
import { Link } from "gatsby";

export default () => (
  <Fragment>
    <Nav
      lan="en"
      sv="/jobb/"
      en="/en/career/"
      es="/es/carrera/"
      canonical="https://www.swedishnet.se/en/career/"
      title="Swedish Net: Career"
      description="There are no job applications available in English."
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
        inverted
        title={
          <span>
            <b>CAREER</b>
          </span>
        }
      >
        <b>There are no job applications available in English.</b>
        <br />
        <br />
        Please check the Swedish site for job positions in Hallsberg or
        Stockholm{" "}
        <b>
          <Link to="/jobb">swedishnet.se/jobb</Link>
        </b>
        <br />
        <br />
        Please check the Spanish site for job positions in Mexico{" "}
        <b>
          <Link to="/es/carrera">swedishnet.se/es/carrera</Link>
        </b>
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
