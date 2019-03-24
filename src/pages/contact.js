import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css";
import ContactForm from "../components/ContactForm/ContactForm";

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Swedish Net: Kontakt</title>
      <link rel="canonical" href="https://www.swedishnet.se/contact" />
      <html lang="sv" />
    </Helmet>
    <Nav lan="sv" dark sv="/contact" en="/en/contact" />
    <ContactForm style={{ paddingTop: "120px" }} lan="sv" />
    <Footer lan="sv" />
  </Fragment>
);
