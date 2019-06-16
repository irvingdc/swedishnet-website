import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default () => (
  <Fragment>
    <Nav
      lan="es"
      dark
      sv="/kontakt/"
      en="/en/contact/"
      es="/es/contact/"
      canonical="https://www.swedishnet.se/es/contact/"
      title="Swedish Net: Contacto"
      description="Contáctanos."
    />
    <ContactForm style={{ paddingTop: "120px" }} lan="es" />
    <Footer lan="es" />
  </Fragment>
);
