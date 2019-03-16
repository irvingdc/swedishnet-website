import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { contracts_color } from "../../../images";
import IntroText from "../../../components/IntroText/IntroText";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";

export default () => (
  <Fragment>
    <Nav lan="sv" sv="/sv/contracts" en="/contracts" />
    <FullScreenImage img={contracts_color} lineLeft="0px" lineWidth="80px">
      <IntroText title="ENTREPRENADER FÖR KÄRNKRAFTVERK, FÖRSVAR, FLYGPLATSER OCH ANNAN KRITISK INFRASTRUKTUR"/>
    </FullScreenImage>
    <Footer lan="sv" />
  </Fragment>
);
