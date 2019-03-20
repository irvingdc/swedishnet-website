import React, { Fragment } from "react"
import HomeFullScreenImage from "../../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from '../../images'
import Nav from "../../components/Nav/Nav";
import WhiteFooter from "../../components/WhiteFooter/WhiteFooter";
import "../../main.module.css"

export default () => {
    let links = [
      {
        title: "Teknik- och säkerhetstjänster",
        url: "/sv/services"
      },
      {
        title: "Kärnkraftverk",
        url: "/sv/contracts/nuclear-power-plants"
      },
      {
        title: "Försvar",
        url: "/sv/contracts/defence"
      },
      {
        title: "Flygplatser",
        url: "/sv/contracts/airports"
      },
      {
        title: "Elkraftförsörjning",
        url: "/sv/contracts/electrical-power-supply"
      }
    ];
    return (
      <Fragment>
        <Nav lan="sv" sv="/sv" en="/" />
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