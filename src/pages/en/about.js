import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { globe } from "../../images";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import CardListSection from "../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Swedish Net: About</title>
      <link rel="canonical" href="https://www.swedishnet.se/en/about" />
      <html lang="en" />
    </Helmet>
    <Nav lan="en" sv="/about" en="/en/about"/>
    <CardListSection img={globe} style={{ paddingTop: "220px" }}>
      <CardListItem
        inverted
        title={
          <span>
            ABOUT <b>US</b>
          </span>
        }
        extraContent={
          <Fragment>
            Swedish Net is part of the Swedish Net Group that works with
            security, airport and defence related activities. The group also
            includes:
            <br />
            <br />
            Swedish Net MX which sells security products and systems on the
            Mexican market.
            <br />
            <br />
            Disarmament Solutions which develops comprehensive concepts for the
            secure and environmentally-friendly disarmament of conventional arms
            and ammunition.
            <br />
            <br />
            The Swedish Net Group continues to grow on the Swedish market and
            has commenced its establishment on the international market.
          </Fragment>
        }
      >
        <b>
          Swedish Net offers services and contracts for vital societal
          facilities and functions which have high requirements on security and
          technology due to potential threats. For 20 years, we have delivered
          solutions for government agencies, protected objects and critical
          infrastructure. All of our clients require advanced facility security
          due to, for example, terrorism and other antagonistic threats. Our
          clients also focus strongly on operational security because of their
          responsibility for the operation of critical functions.{" "}
        </b>
        <br />
        <br />
        Swedish Net was founded in 1998. Our head office is situated in Sweden’s
        logistical centre, Hallsberg. In 2017, we also set up an office in
        Stockholm. Our premises are classified and we have a technical
        laboratory and workshop where we customise electrical cabinets. Today we
        have more than 25 experienced consultants within security advice,
        planning and engineering, system design, project management,
        installation and service and maintenance. All our personnel are security
        checked.
        <br />
        <br />
        Together we deliver security and technology as consultancy services and
        contracts for facilities and functions that are of significance for
        security in our society.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
