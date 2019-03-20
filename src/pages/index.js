import React, { Fragment } from "react";
import HomeFullScreenImage from "../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "../images";
import Nav from "../components/Nav/Nav";
import WhiteFooter from "../components/WhiteFooter/WhiteFooter";
import "../main.module.css";

export default () => {
  let links = [
    {
      title: "Consultancy Services",
      url: "/services"
    },
    {
      title: "Nuclear Power Plants",
      url: "/contracts/nuclear-power-plants"
    },
    {
      title: "Defence",
      url: "/contracts/defence"
    },
    {
      title: "Airports",
      url: "/contracts/airports"
    },
    {
      title: "Electrical Power Supply",
      url: "/contracts/electrical-power-supply"
    }
  ];
  return (
    <Fragment>
      <Nav lan="en" sv="/sv" en="/" />
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
