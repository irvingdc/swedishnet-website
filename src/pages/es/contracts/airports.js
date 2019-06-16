import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { airport_color, airport } from "../../../images";
import IntroText from "../../../components/IntroText/IntroText";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import CardListItem from "../../../components/CardListItem/CardListItem";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";
import CardListSection from "../../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      en="/en/contracts/airports/"
      es="/es/contracts/airports/"
      sv="/entreprenader/flygplatser/"
      canonical="https://www.swedishnet.se/es/contracts/airports/"
      title="Swedish Net: Contratos - Aeropuertos"
      description="AGL, ILS y fuente de suministro de energía redundante para aeropuertos públicos y militares"
    />
    <FullScreenImage img={airport_color} noLine>
      <IntroText
        title={
          <span>
            AGL, ILS y fuente de suministro de energía redundante
            <br />
            <b>para aeropuertos públicos y militares</b>
          </span>
        }
      />
    </FullScreenImage>
    <SectionHeader title="AEROPUERTOS" />
    <CardListSection img={airport}>
      <CardListItem
        title={
          <span>
            LO QUE <b>HACEMOS</b>
          </span>
        }
      >
        Swedish Net es una de las pocas empresas en Suecia que ofrece soluciones
        integrales, incluyendo el diseño e instalación de iluminación de
        aeropuertos e ILS (sistema de aterrizaje instrumental, por sus siglas en
        inglés) en la zona de operaciones. Entregamos en aeropuertos militares y
        públicos en Suecia y a nivel internacional.
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        El aeropuerto de las montañas escandinavas es el primer aeropuerto de
        tráfico regular que se construye en Suecia en más de 19 años. El
        aeropuerto se está construyendo en Sälen, cerca de la frontera noruega.
        Cumplirá con la CAT III, la categoría más alta para pistas (la misma que
        Arlanda). Se estima que en diciembre de 2019, los primeros vuelos
        nacionales e internacionales aterrizarán en el aeropuerto de las
        montañas escandinavas, uno de los más modernos de Europa.
        <br />
        <br />
        Swedish Net tiene la responsabilidad total de la ingeniería de los
        sistemas y la instalación de AGL, el sistema de suministro de energía
        eléctrica y la infraestructura para la energía y las comunicaciones en
        el nuevo aeropuerto. Se necesitarán 120 km de cable y 1250 luces.
      </CardListItem>
    </CardListSection>
    <Footer lan="es" />
  </Fragment>
);
