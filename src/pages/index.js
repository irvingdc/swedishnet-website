import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import HomeFullScreenImage from "../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "../images";
import Nav from "../components/Nav/Nav";
import WhiteFooter from "../components/WhiteFooter/WhiteFooter";
import "../main.module.css";

export default () => {
  let links = [
    {
      title: "Teknik- och säkerhetstjänster",
      url: "/services"
    },
    {
      title: "Kärnkraftverk",
      url: "/contracts/nuclear-power-plants"
    },
    {
      title: "Försvar",
      url: "/contracts/defence"
    },
    {
      title: "Flygplatser",
      url: "/contracts/airports"
    },
    {
      title: "Elkraftförsörjning",
      url: "/contracts/electrical-power-supply"
    }
  ];
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swedish Net: Hem</title>
        <link rel="canonical" href="https://www.swedishnet.se/" />
        <html lang="sv" />
      </Helmet>
      <Nav lan="sv" sv="/" en="/en" />
      <HomeFullScreenImage
        img={globe}
        lineLeft="0%"
        lineWidth="10%"
        title="Säkerhet och teknik för samhällsviktiga anläggningar och funktioner"
        links={links}
      />
      <WhiteFooter />
    </Fragment>
  );
};
