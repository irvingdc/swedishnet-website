import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import HomeFullScreenImage from "../../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "../../images";
import Nav from "../../components/Nav/Nav";
import WhiteFooter from "../../components/WhiteFooter/WhiteFooter";
import "../../main.module.css";

export default () => {
  let links = [
    {
      title: "Consultancy Services",
      url: "/en/services"
    },
    {
      title: "Nuclear Power Plants",
      url: "/en/contracts/nuclear-power-plants"
    },
    {
      title: "Defence",
      url: "/en/contracts/defence"
    },
    {
      title: "Airports",
      url: "/en/contracts/airports"
    },
    {
      title: "Electrical Power Supply",
      url: "/en/contracts/electrical-power-supply"
    }
  ];
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swedish Net: Home</title>
        <link rel="canonical" href="https://www.swedishnet.se/en" />
        <meta name="description" content="Security and Technology for Vital Societal Facilities and Functions." />
        <html lang="en" />
      </Helmet>
      <Nav lan="en" sv="/" en="/en/" />
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
