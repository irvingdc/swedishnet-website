import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { snow, lockers } from "../../../images";
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
      en="/en/contracts/electrical-power-supply/"
      es="/es/contracts/electrical-power-supply/"
      sv="/entreprenader/elkraftforsorjning/"
      canonical="https://www.swedishnet.se/es/contracts/electrical-power-supply/"
      title="Swedish Net: Contratos - Suministro de energía eléctrica"
      description="Sistemas fiables de suministro de energía eléctrica para infraestructuras críticas."
    />
    <FullScreenImage img={snow} noLine large>
      <IntroText
        title={
          <span>
            Sistemas fiables de suministro de energía eléctrica
            <br />
            <b> para infraestructuras críticas.</b>
          </span>
        }
      />
    </FullScreenImage>
    <SectionHeader title="SUMINISTRO DE ENERGÍA ELÉCTRICA" />
    <CardListSection img={lockers}>
      <CardListItem
        title={
          <span>
            LO QUE <b>HACEMOS</b>
          </span>
        }
      >
        Swedish Net ofrece soluciones integrales con energía, energía de
        respaldo y energía ininterrumpida junto con edificios asociados y
        protección perimetral.
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        Swedish Net es responsable de la entrega de un sistema completo de
        suministro de energía eléctrica al aeropuerto de las montañas
        escandinavas. Un edificio de 200 metros cuadrados alimenta todos los
        sistemas de la zona de operaciones con energía, energía de reserva y
        energía ininterrumpida, incluidas las salas técnicas. Otro edificio de
        100 metros cuadrados abastece de energía eléctrica y de apoyo a la
        terminal del aeropuerto y a otras áreas. Los edificios seguros se
        entregan con todas las funciones instaladas.
      </CardListItem>
    </CardListSection>
    <Footer lan="es" />
  </Fragment>
);
