import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { nuclear_color, street } from "../../../images";
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
      en="/en/contracts/nuclear-power-plants/"
      es="/es/contracts/nuclear-power-plants/"
      sv="/entreprenader/karnkraftverk/"
      canonical="https://www.swedishnet.se/es/contracts/nuclear-power-plants/"
      title="Swedish Net: Contratos - Plantas Nucleares"
      description="Medidas de mejora de la seguridad en las centrales nucleares."
    />
    <FullScreenImage img={nuclear_color} noLine>
      <IntroText
        title={
          <span>
            Medidas de mejora de la seguridad en las <b>centrales nucleares</b>
          </span>
        }
      />
    </FullScreenImage>
    <SectionHeader title="PLANTAS NUCLEARES" />
    <CardListSection img={street}>
      <CardListItem
        title={
          <span>
            LO QUE <b>HACEMOS</b>
          </span>
        }
      >
        Swedish Net ofrece contratos dentro de las medidas de mejora de la
        seguridad con un enfoque en la protección física y técnica de las
        actividades relacionadas con la energía nuclear. Podemos entregar el
        diseño del sistema, la ingeniería, los trabajos en tierra, la
        construcción y la instalación como un contrato funcional en cooperación
        con la organización propia de una planta nuclear.
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        Como contratista general, junto con Forsmarks Kraftgrupp AB y
        subcontratistas, Swedish Net construyó un puesto de control para el
        tráfico de vehículos en la planta nuclear de Forsmark. El puesto de
        control consta de seis carriles para el tráfico, cada uno de 350 metros
        de longitud. Las estaciones de control y las islas de tráfico separan
        los carriles, y las compuertas de la pluma controlan el flujo de
        tráfico. El contrato también incluía alojamiento para el personal de
        seguridad.
        <br />
        <br />
        El proyecto comenzó con un análisis a profundidad de las necesidades, el
        diseño del sistema, el presupuesto y, posteriormente, la elaboración de
        los documentos de construcción. La siguiente fase de implementación
        incluyó todo: desde obras de tierra hasta edificios. El puesto de
        control también consta de múltiples sistemas de seguridad, como energía
        de emergencia, los sistemas de gestión de la seguridad y las
        comunicaciones por radio. Se instalaron sistemas de control inalámbricos
        y alámbricos para las puertas y barreras.
        <br />
        <br />
        También hemos entregado un contrato similar a la central nuclear de
        Oskarshamn.
      </CardListItem>
    </CardListSection>
    <Footer lan="es" />
  </Fragment>
);
