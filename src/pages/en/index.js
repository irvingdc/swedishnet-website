import React, { Fragment } from "react";
import HomeFullScreenImage from "../../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "../../images";
import Nav from "../../components/Nav/Nav";
import WhiteFooter from "../../components/WhiteFooter/WhiteFooter";
import "../../main.module.css";

export default () => {
  let links = [
    {
      title: "Consultancy Services",
      url: "/en/services/"
    },
    {
      title: "Nuclear Power Plants",
      url: "/en/contracts/nuclear-power-plants/"
    },
    {
      title: "Defence",
      url: "/en/contracts/defence/"
    },
    {
      title: "Airports",
      url: "/en/contracts/airports/"
    },
    {
      title: "Electrical Power Supply",
      url: "/en/contracts/electrical-power-supply/"
    }
  ];
  return (
    <Fragment>
      <Nav
        lan="en"
        sv="/"
        en="/en/"
        canonical="https://www.swedishnet.se/en/"
        title="Swedish Net: Home"
        description="Security and Technology for Vital Societal Facilities and Functions"
      />
      <HomeFullScreenImage
        img={globe}
        lineLeft="0%"
        lineWidth="10%"
        title="Security and Technology for Vital Societal Facilities and Functions."
        links={links}
      />
      <WhiteFooter />
    </Fragment>
  );
};
