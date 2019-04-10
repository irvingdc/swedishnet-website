import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { contracts_color } from "../../../images";
import IntroText from "../../../components/IntroText/IntroText";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";

export default () => (
  <Fragment>
    <Nav
      lan="en"
      sv="/contracts/"
      en="/en/contracts/"
      canonical="https://www.swedishnet.se/en/contracts/"
      title="Swedish Net: Contracts"
      description="Contracts for nuclear power plants, defence, airports and other critical infrastructure."
    />
    <FullScreenImage img={contracts_color} noLine>
      <IntroText title="CONTRACTS FOR NUCLEAR POWER PLANTS, DEFENCE, AIRPORTS AND OTHER CRITICAL INFRASTRUCTURE" />
    </FullScreenImage>
    <Footer lan="en" />
  </Fragment>
);
