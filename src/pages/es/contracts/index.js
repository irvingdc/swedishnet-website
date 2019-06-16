import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { contracts_color } from "../../../images";
import IntroText from "../../../components/IntroText/IntroText";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      sv="/entreprenader/"
      en="/en/contracts/"
      es="/es/contracts/"
      canonical="https://www.swedishnet.se/es/contracts/"
      title="Swedish Net: Contratos"
      description="Contratos para plantas nucleares, defensa, aeropuertos y otras infraestructuras críticas."
    />
    <FullScreenImage img={contracts_color} noLine>
      <IntroText title="CONTRATOS PARA PLANTAS NUCLEARES, DEFENSA, AEROPUERTOS Y OTRAS INFRAESTRUCTURAS CRÍTICAS" />
    </FullScreenImage>
    <Footer lan="es" />
  </Fragment>
);
