import React, { Fragment } from "react";
import HomeFullScreenImage from "../../components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "../../images";
import Nav from "../../components/Nav/Nav";
import WhiteFooter from "../../components/WhiteFooter/WhiteFooter";
import { f6 } from "../../images";
import "../../main.module.css";

export default () => {
  let links = [
    {
      title: "Servicios de consultoría",
      url: "/es/services/"
    },
    {
      title: "Defensa",
      url: "/es/contracts/defence/"
    },
    {
      title: "Aeropuertos",
      url: "/es/contracts/airports/"
    },
  ];
  return (
    <Fragment>
      <Nav
        lan="es"
        sv="/"
        en="/en/"
        es="/es/"
        canonical="https://www.swedishnet.se/es/"
        title="Swedish Net: Inicio"
        description="Seguridad y tecnología para comodidades y funciones vitales de la sociedad"
      />
      <HomeFullScreenImage
        img={globe}
        lineLeft="0%"
        lineWidth="10%"
        title="Seguridad y tecnología para comodidades y funciones vitales de la sociedad"
        links={links}
      />
      <WhiteFooter aaaLogo={f6}/>
    </Fragment>
  );
};
