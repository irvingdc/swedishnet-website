import React, { Fragment } from "react";
import HomeFullScreenImage from "../../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "../../images";
import Nav from "../../components/Nav/Nav";
import WhiteFooter from "../../components/WhiteFooter/WhiteFooter";
import "../../main.module.css";
import { f6 } from "../../images";

export default () => {
  let links = [
    {
      title: "Consultancy Services",
      url: "/en/services/"
    },
    {
      title: "Defence",
      url: "/en/contracts/defence/"
    },
    {
      title: "Airports",
      url: "/en/contracts/airports/"
    },
  ];
  return (
    <Fragment>
      <Nav
        lan="en"
        sv="/"
        en="/en/"
        es="/es/"
        canonical="https://www.swedishnet.se/en/"
        title="Swedish Net: Home"
        description="Security and Technology for Vital Societal Facilities and Functions"
      />
      <HomeFullScreenImage
        img={globe}
        lineLeft="0%"
        lineWidth="10%"
        title="Security and Technology for Vital Societal Facilities and Functions"
        links={links}
      />
      <WhiteFooter aaaLogo={f6} />
    </Fragment>
  );
};
