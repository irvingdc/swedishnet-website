import React, { Fragment } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css";
import ContactForm from "../components/ContactForm/ContactForm";

export default () => (
  <Fragment>
    <Nav
      lan="sv"
      dark
      sv="/contact/"
      en="/en/contact/"
      canonical="https://www.swedishnet.se/contact/"
      title="Swedish Net: Kontakt"
      description="Kontakta Oss"
    />
    <ContactForm style={{ paddingTop: "120px" }} lan="sv" />
    <Footer lan="sv" />
  </Fragment>
);
