import React, { Fragment } from "react";
import { globe } from "../../images";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import CardListSection from "../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      sv="/om-oss/"
      es="/es/about/"
      en="/en/about/"
      canonical="https://www.swedishnet.se/es/about/"
      title="Swedish Net: Acerca de"
      description="Swedish Net offers services and contracts for vital societal facilities and functions which have high requirements on security and technology due to potential threats."
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
        title={
          <span>
            ACERCA DE <b>NOSOTROS</b>
          </span>
        }
      >
        <b style={{ color: "#f57a52" }}>
          Swedish Net ofrece servicios y contratos para instalaciones y
          funciones vitales para la sociedad que tienen altos requerimientos de
          seguridad y tecnología debido a amenazas potenciales. Durante 20 años,
          hemos proporcionado soluciones para organismos gubernamentales, bienes
          protegidos e infraestructura crítica. Todos nuestros clientes
          requieren una seguridad avanzada de las instalaciones debido, por
          ejemplo, al terrorismo y otras amenazas antagónicas. Nuestros clientes
          también se enfocan fuertemente en la seguridad operacional debido a su
          responsabilidad en la operación de funciones críticas.
        </b>
        <br />
        <br />
        Swedish Net fue fundada en 1998. Nuestra oficina central está situada en
        el centro logístico de Suecia, Hallsberg. En 2017, también establecimos
        una oficina en Estocolmo. Nuestras instalaciones están clasificadas y
        disponemos de un laboratorio técnico y un taller donde personalizamos
        los armarios eléctricos. Hoy en día contamos con más de 25 consultores
        experimentados en asesoramiento de seguridad, planificación e
        ingeniería, diseño de sistemas, gestión de proyectos, instalación y
        servicio y mantenimiento. Todo nuestro personal pasa por filtros de
        seguridad.
        <br />
        <br />
        Juntos ofrecemos seguridad y tecnología como servicios de consultoría y
        contratos para instalaciones y funciones que son importantes para la
        seguridad de nuestra sociedad.
        <br />
        <br />
      </CardListItem>
      <CardListItem>
        <Fragment>
          Swedish Net forma parte del grupo de Swedish Net, que trabaja con
          actividades relacionadas con la seguridad, los aeropuertos y la
          defensa. El grupo también incluye:
          <br />
          <br />
          <a
            rel="noopener noreferrer"
            href="http://www.swedishnet.mx/"
            target="_blank"
          >
            Swedish Net MX
          </a>
          , que vende productos y sistemas de seguridad en el mercado mexicano.
          <br />
          <br />
          <a
            rel="noopener noreferrer"
            href="https://www.disarmamentsolutions.com/"
            target="_blank"
          >
            Disarmament Solutions
          </a>
          , que desarrollan conceptos integrales para el desarme seguro y
          respetuoso con el medio ambiente de las armas y municiones
          convencionales.
          <br />
          <br />
          El grupo de Swedish Net sigue creciendo en el mercado sueco y ha
          comenzado a establecerse en el mercado internacional.
          <br />
          <br />
        </Fragment>
      </CardListItem>
    </CardListSection>
    <Footer lan="es" />
  </Fragment>
);
