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
      description="SOLUCIONES INTEGRALES PARA ZONAS DE ATERRIZAJE"
    />
    <FullScreenImage img={airport_color} noLine>
      <IntroText
        title={<span>SOLUCIONES INTEGRALES PARA ZONAS DE ATERRIZAJE</span>}
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
        Swedish Net ha reunido y entregado soluciones integrales para la zona de
        operaciones basadas en diferentes sistemas técnicos:
        <ul>
          <li>Iluminación del aeródromo (AGL)</li>
          <li>Sistema de Aterrizaje por Instrumentos (ILS)</li>
          <li>Control de Tráfico Aéreo (ATC)</li>
          <li>Sistema Automatizado de Observación Meteorológica (AWOS)</li>
          <li>Sistemas para hangares</li>
          <li>Suministro de energía</li>
          <li>Alarma operacional</li>
        </ul>
        Asumimos la responsabilidad de la ingeniería de acuerdo con las normas y
        reglamentos actuales.
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        El aeropuerto de las Montañas Escandinavas es el primer aeropuerto de
        tráfico regular que se construye en Suecia en más de 20 años. Está
        diseñado y construido de acuerdo a las regulaciones actuales de la
        Agencia de Seguridad Aérea de la Unión Europea (EASA). El aeropuerto
        tiene pistas de categoría III, lo que significa que los aviones pueden
        aterrizar en condiciones de mal tiempo y baja visibilidad.
        <br />
        <br />
        Swedish Net tuvo la responsabilidad total de la ingeniería e instalación
        de todas las luces del aeropuerto, el sistema de suministro de energía
        eléctrica y la infraestructura para la electricidad y la comunicación.
      </CardListItem>
    </CardListSection>
    <Footer lan="es" />
  </Fragment>
);
