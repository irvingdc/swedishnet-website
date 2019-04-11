import React, { Fragment } from "react";
import HomeFullScreenImage from "../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "../images";
import Nav from "../components/Nav/Nav";
import WhiteFooter from "../components/WhiteFooter/WhiteFooter";
import "../main.module.css";

export default () => {
  let links = [
    {
      title: "Teknik- och säkerhetstjänster",
      url: "/teknik-och-sakerhetstjanster/"
    },
    {
      title: "Kärnkraftverk",
      url: "/entreprenader/karnkraftverk/"
    },
    {
      title: "Försvar",
      url: "/entreprenader/forsvar/"
    },
    {
      title: "Flygplatser",
      url: "/entreprenader/flygplatser/"
    },
    {
      title: "Elkraftförsörjning",
      url: "/entreprenader/elkraftforsorjning/"
    }
  ];
  return (
    <Fragment>
      <Nav
        lan="sv"
        sv="/"
        en="/en"
        canonical="https://www.swedishnet.se/"
        title="Swedish Net: Hem"
        description="Säkerhet och teknik för samhällsviktiga anläggningar och funktioner"
      />
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
