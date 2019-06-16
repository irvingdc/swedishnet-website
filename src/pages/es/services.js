import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import {
  services_color,
  documents,
  camera,
  helmet,
  techguy
} from "../../images";
import IntroText from "../../components/IntroText/IntroText";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import CardListSection from "../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      es="/es/services/"
      en="/en/services/"
      sv="/teknik-och-sakerhetstjanster/"
      canonical="https://www.swedishnet.se/es/services/"
      title="Swedish Net: Servicios"
      description="Consultoría sobre la protección física y técnica para instalaciones de alta seguridad"
    />
    <FullScreenImage img={services_color} noLine>
      <IntroText
        title={
          <span>
            Consultoría sobre la protección física y técnica para instalaciones
            de alta seguridad
          </span>
        }
      />
    </FullScreenImage>

    <SectionHeader
      number="01"
      title="SEGURIDAD Y PLANEACIÓN"
      id="protective-security-and-planning"
    />
    <CardListSection img={camera}>
      <CardListItem
        title={
          <span>
            LO QUE <b>HACEMOS</b>
          </span>
        }
      >
        Swedish Net conduce estudios preliminares con análisis de amenazas y
        vulnerabilidad, inventarios de protección técnica y física con
        sugerencias en las medidas y presupuestos asignados. Somos asesores
        experimentados en seguridad, y nuestra protección abarca el diseño y
        construcción, por ejemplo, de alarmas, control de acceso, sistemas de
        cámaras conectados a un centro de videovigilancia, cerraduras, puertas,
        cristal y construcción de edificios con diferentes necesidades de
        protección y seguridad.
        <br />
        <br />
        Estamos especializados en documentación técnica y soporte para
        adquisiciones, desarrollo de especificaciones técnicas y guías de
        planeación para la protección física y técnica, y así como para
        regulaciones y procedimientos de seguridad. Disponemos de instalaciones
        de seguridad clasificadas y de una amplia experiencia obtenida del
        manejo de adquisiciones clasificadas.
      </CardListItem>
      <CardListItem
        title={
          <span>
            PARA <b>QUIEN</b>
          </span>
        }
      >
        Agencias gubernamentales, bienes protegidos y otras infraestructuras
        críticas como:
        <br />
        <br />
        - Sistemas judiciales
        <br />
        - Aeropuertos
        <br />
        - Defensa
        <br />
        - Administración pública
        <br />
        - Compañías privadas
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        Nuestros asesores y planeadores han completado más de 200 proyectos
        técnicos que involucran mejoras en las medidas de seguridad sobre
        adquisiciones, inventarios y análisis.
      </CardListItem>
    </CardListSection>

    <SectionHeader
      number="02"
      title="INGENIERÍA ELÉCTRICA Y DE SEGURIDAD"
      id="electrical-and-security-engineering"
    />
    <CardListSection img={documents}>
      <CardListItem
        title={
          <span>
            LO QUE <b>HACEMOS</b>
          </span>
        }
      >
        Swedish Net se concentra, particularmente, en sistemas de seguridad,
        seguridad de inmuebles y sistemas para suministros de energía
        ininterrumpibles.
        <br />
        <br />
        Nuestros ingenieros diseñan la documentación de la instalación de
        sistemas de alarmas, control de accesos y videovigilancia, redes, radio
        y telefonía, comunicación satelital y sistemas eléctricos de alta
        fiabilidad. Permisos de construcción para mejoras en las medidas de
        seguridad también son entregados. Una parte de nuestro equipo de
        ingenieros desarrolla permisos para las áreas de operaciones de
        aeropuertos.
        <br />
        <br />
        Manejamos información clasificada en nuestras instalaciones
        clasificadas.
      </CardListItem>
      <CardListItem
        title={
          <span>
            PARA <b>QUIEN</b>
          </span>
        }
      >
        Agencias gubernamentales, bienes protegidos y otras infraestructuras
        críticas como:
        <br />
        <br />
        -Sistemas judiciales
        <br />
        - Aeropuertos
        <br />
        - Defensa
        <br />
        - Administración pública
        <br />
        - Centros de información
        <br />- Compañías privadas
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        Nuestros asesores y planeadores han completado más de 300 proyectos
        técnicos relacionados con instalaciones de alta seguridad y bienes
        protegidos por actores gubernamentales.
      </CardListItem>
    </CardListSection>

    <SectionHeader
      number="03"
      title="FUNCIONES DE PROYECTO"
      id="the-project-function"
    />
    <CardListSection img={helmet}>
      <CardListItem
        title={
          <span>
            LO QUE <b>HACEMOS</b>
          </span>
        }
      >
        Swedish Net toma responsabilidad total con el cliente sobre la
        funcionalidad de proyectos técnicos. Nuestra organización cumple con los
        altos requisitos de calidad, medio ambiente y entorno de trabajo en cada
        uno de sus proyectos, así como los requerimientos de construcción y
        seguridad operativa.
        <br />
        <br />
        Entre nuestros consultores contamos con gestores, ingenieros e
        instaladores. Tenemos expertos en electricidad, mecatrónica,
        electro-tecnología, automatización, TI y sistemas de energía.
        <br />
        <br />
        Todos nuestros consultores pasan por filtros de seguridad y tienen una
        amplia experiencia trabajando en ambientes altamente sensibles.
      </CardListItem>
      <CardListItem
        title={
          <span>
            PARA <b>QUIEN</b>
          </span>
        }
      >
        Agencias gubernamentales, bienes protegidos y otras infraestructuras
        críticas como:
        <br />
        <br />
        - Sistemas judiciales
        <br />
        - Aeropuertos
        <br />
        - Defensa
        <br />
        - Administración pública
        <br />
        - Centros de información
        <br />- Compañías privadas
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        Swedish Net ha completado diversos proyectos clave para clientes del
        sector privado y público. Junto a nuestros ingenieros e instaladores,
        nuestros gestores han entregado mejoras en las medidas de seguridad para
        plantas nucleares y compañías de seguridad.
      </CardListItem>
    </CardListSection>

    <SectionHeader
      number="04"
      title="SERVICIO Y MANTENIMIENTO"
      id="service-and-maintenance"
    />
    <CardListSection img={techguy}>
      <CardListItem
        title={
          <span>
            LO QUE <b>HACEMOS</b>
          </span>
        }
      >
        Swedish Net tiene un departamento de servicio y mantenimiento. Tenemos
        diversos acuerdos para el mantenimiento de sistemas tecnológicos en el
        sector gubernamental. También, contamos con acuerdos de servicio
        relacionados a nuestros propios contratos.
        <br />
        <br />
        Nosotros, junto con nuestros socios, garantizamos un alto nivel en la
        calidad de nuestro servicio.
      </CardListItem>
      <CardListItem
        title={
          <span>
            PARA <b>QUIEN</b>
          </span>
        }
      >
        Agencias gubernamentales, bienes protegidos y otras infraestructuras
        críticas como:
        <br />
        <br />
        - Defensa
        <br />
        - Aeropuertos
        <br />
        - Plantas nucleares
        <br />- Embajadas
      </CardListItem>
      <CardListItem title={<span>EXPERIENCIA</span>}>
        Swedish Net tiene acuerdos de servicio para embajadas y puntos de
        control de vehículos en las plantas nucleares de Suecia, entre otros.
        Asimismo, tenemos un numero de acuerdos que incluyen mantenimiento y
        desarrollo para garantizar que los sistemas tecnológicos usados por las
        agencias gubernamentales funcionen en su vida útil prevista.
      </CardListItem>
    </CardListSection>

    <Footer lan="es" />
  </Fragment>
);
