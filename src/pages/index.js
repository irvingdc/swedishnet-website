import React, { Fragment } from "react";
import HomeFullScreenImage from "../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "../images";
import Nav from "../components/Nav/Nav";
import WhiteFooter from "../components/WhiteFooter/WhiteFooter";
import { f7 } from "../images";
import "../main.module.css";

export default () => {
  let links = [
    {
      title: "Teknik- och säkerhetstjänster",
      url: "/teknik-och-sakerhetstjanster/"
    },
    {
      title: "Försvar",
      url: "/entreprenader/forsvar/"
    },
    {
      title: "Flygplatser",
      url: "/entreprenader/flygplatser/"
    },
  ];
  return (
    <Fragment>
      <Nav
        lan="sv"
        sv="/"
        en="/en"
        es="/es"
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
      <WhiteFooter aaaLogo={f7}/>
    </Fragment>
  );
};
