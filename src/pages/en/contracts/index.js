import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { contracts_color } from "../../../images";
import IntroText from "../../../components/IntroText/IntroText";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Swedish Net: Contracts</title>
      <link rel="canonical" href="https://www.swedishnet.se/en/contracts" />
      <html lang="en" />
    </Helmet>
    <Nav lan="en" sv="/contracts" en="/en/contracts" />
    <FullScreenImage img={contracts_color} lineLeft="0px" lineWidth="80px">
      <IntroText title="CONTRACTS FOR NUCLEAR POWER PLANTS, DEFENCE, AIRPORTS AND OTHER CRITICAL INFRASTRUCTURE"/>
    </FullScreenImage>
    <Footer lan="en" />
  </Fragment>
);
