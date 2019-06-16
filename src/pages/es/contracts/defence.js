import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { device, defence_color } from "../../../images";
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
      en="/en/contracts/defence/"
      es="/es/contracts/defence/"
      sv="/entreprenader/forsvar/"
      canonical="https://www.swedishnet.se/es/contracts/defence/"
      title="Swedish Net: Contratos - Defensa"
      description="Asignaciones complejas para proyectos relacionados con la defensa"
    />
    <FullScreenImage img={defence_color} noLine>
      <IntroText
        title={
          <span>
            Asignaciones complejas para proyectos{" "}
            <b>relacionados con la defensa</b>
          </span>
        }
      />
    </FullScreenImage>
    <SectionHeader title="DEFENSA" />
    <CardListSection img={device}>
      <CardListItem
        title={
          <span>
            LO QUE <b>HACEMOS</b>
          </span>
        }
      >
        Swedish Net es un proveedor experimentado de material para la
        Administración de Defensa y Material y las Fuerzas Armadas de Suecia.
        Tenemos experiencia y certificaciones para la entrega de documentación
        técnica, documentos de seguridad de sistemas y registro de bases de
        datos, todo de acuerdo con las normas y rutinas de las Fuerzas Armadas
        Suecas.
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        Swedish Net ganó una licitación pública para la entrega de equipos de
        búsqueda a la Administración de Material de Defensa de Suecia. El equipo
        de búsqueda se entregó con toda la documentación técnica, incluyendo el
        sistema de seguridad, los manuales y el registro. El equipo está
        destinado a ser utilizado en la búsqueda de arsenales de armas ocultos,
        equipo de vigilancia, minas y personas ocultas.
      </CardListItem>
    </CardListSection>
    <Footer lan="es" />
  </Fragment>
);
