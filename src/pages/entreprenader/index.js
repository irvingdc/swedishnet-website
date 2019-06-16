import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { contracts_color } from "../../images";
import IntroText from "../../components/IntroText/IntroText";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";

export default () => (
  <Fragment>
    <Nav
      lan="sv"
      sv="/entreprenader/"
      en="/en/contracts/"
      es="/es/contracts/"
      canonical="https://www.swedishnet.se/contracts/"
      title="Swedish Net: Entreprenader"
      description="Entreprenader för kärnkraftverk, försvar, flygplatser och annan kritisk infrastruktur."
    />
    <FullScreenImage img={contracts_color} noLine>
      <IntroText title="ENTREPRENADER FÖR KÄRNKRAFTVERK, FÖRSVAR, FLYGPLATSER OCH ANNAN KRITISK INFRASTRUKTUR" />
    </FullScreenImage>
    <Footer lan="sv" />
  </Fragment>
);
