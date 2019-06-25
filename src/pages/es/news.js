import React, { Fragment } from "react";
import VerticalText from "../../components/VerticalText/VerticalText";
import CardListSection from "../../components/CardListSection/CardListSection";
import Nav from "../../components/Nav/Nav";
import Article from "../../components/Article/Article";
import {
  new_black,
  news1,
  news2,
  news3,
  news4,
  news5,
  news7,
  news8,
  news9
} from "../../images";
import "../../main.module.css";
import Footer from "../../components/Footer/Footer";

export default () => {
  let articles = [
    {
      title: (
        <span>
          190624 AEROPUERTOS <b>OPERACIONES NORUEGA</b>
        </span>
      ),
      img: news9,
      content:
        "Swedish Net está expandiendo su línea de negocios para aeropuertos e iniciará operaciones en Noruega para ofrecer proyectos integrales en pistas y zonas de aterrizaje y despegue."
    },
    {
      title: (
        <span>
          190618 ACUERDO MARCO <b>KAMMARKOLLEGIET</b>
        </span>
      ),
      img: news8,
      content:
        'Swedish Net ha ganado un acuerdo marco con la agencia gubernamental sueca "Kammarkollegiet". El acuerdo se refiere a la consultoría de sistemas de seguridad e incluye la entrega de análisis de riesgos, planificación e inspección para una serie de actores públicos.'
    },
    {
      title: (
        <span>
          190318 CONTRATO <b>AEROPUERTO DE ÖREBRO</b>
        </span>
      ),
      img: news7,
      content:
        "Swedish Net ha ganado un contrato para el cambio de los Reguladores de Corriente Constante (CCR) en el aeropuerto de Örebro."
    },
    {
      title: (
        <span>
          190315 CONTRATO <b>AEROPUERTO DE LYCKSELE</b>
        </span>
      ),
      img: news2,
      content:
        "Swedish Netha ganado un contrato para el cambio de Localizador en el aeropuerto en Lycksele."
    },
    {
      title: (
        <span>
          190301 CONTRATO <b>AEROPUERTO DE LAS MONTAÑAS ESCANDINAVAS</b>
        </span>
      ),
      img: news5,
      content:
        "Nuestro trabajo en el aeropuerto de Sälen continua, El 70 por ciento del contrato está terminado. Tenemos la responsabilidad total de la ingeniería de los sistemas y la instalación de AGL del aeropuerto, el sistema de suministro de energía eléctrica y la infraestructura para energía y comunicación. Nuestro contrato estará listo para la inspección en agosto. "
    },
    {
      title: (
        <span>
          190228 CONTRATO <b>AEROPUERTO DE SVEG</b>
        </span>
      ),
      img: news4,
      content:
        "Swedish Net ha instalado nuevos GP y DME para el aeropuerto de Sveg."
    },
    {
      title: (
        <span>
          190114 SERVICIOS DE CONSULTORIA{" "}
          <b>SEGURIDAD EN LA PLANIFICACIÓN Y LA INGENIERÍA</b>
        </span>
      ),
      img: news3,
      content:
        "A principios de 2019, continuamos teniendo una gran cantidad de tareas, incluida la planificación y el diseño detallado para actores gubernamentales y privados."
    },
    {
      title: (
        <span>
          181205 CONTRATO <b>AEROPUERTO CIVIL/MILITAR DE RONNEBY </b>
        </span>
      ),
      img: news2,
      content:
        "El aeropuerto civil/miliar de Ronneby ha recibido nuevos mástiles y equipos de iluminación de aproximación para ILS. Swedish Net ganó la adquisición de la Administración de material de defensa sueca a principios de este año y ahora hemos terminado el contrato."
    },
    {
      title: (
        <span>
          181022 <b>GESTIÓN DE PROYECTOS</b>
        </span>
      ),
      img: news1,
      content:
        "Swedish Net tiene varias asignaciones de gestión de proyectos que se ejecutan durante todo el otoño. Todas las tareas incluyen trabajos en instalaciones con altos requisitos de seguridad."
    }
  ];
  return (
    <Fragment>
      <Nav
        lan="es"
        sv="/nyheter/"
        en="/en/news/"
        es="/es/news/"
        canonical="https://www.swedishnet.se/es/news/"
        title="Swedish Net: Noticias"
      />
      <CardListSection img={new_black} style={{ paddingTop: "120px" }}>
        <VerticalText
          style={{
            left: "40%",
            fontSize: "22px",
            paddingTop: "40px"
          }}
        >
          <span>NOTICIAS</span>
        </VerticalText>
        {articles.map((it, index) => (
          <Article key={index} {...it} />
        ))}
      </CardListSection>
      <Footer lan="es" />
    </Fragment>
  );
};
