import React, { Fragment } from "react";
import { globe } from "src/images";
import CardListItem from "components/CardListItem/CardListItem";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";
import "src/main.module.css";
import CardListSection from "components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      sv="/jobb/"
      en="/en/career/"
      es="/es/carrera/"
      canonical="https://www.swedishnet.se/es/carrera/"
      title="Swedish Net: Carrera"
      description="Somos un equipo multinacional listo para asumir los retos de la manera más profesional."
    />
    <CardListSection
      img={globe}
      style={{
        background: `url(${globe}) center center / contain no-repeat`,
        backgroundColor: "black",
        paddingTop: "220px",
      }}
    >
      <CardListItem
        inverted
        title={
          <span>
            <b>CARRERA</b>
          </span>
        }
      >
        Somos un equipo multinacional listo para asumir los retos de la manera
        más profesional. Por el momento no contamos con vacantes en nuestro
        equipo. Sin embargo, envía tu CV profesional e información a{" "}
        <b>info@swedishnet.mx</b> y nosotros te contactaremos.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
