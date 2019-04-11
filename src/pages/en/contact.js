import React, { Fragment } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default () => (
  <Fragment>
    <Nav
      lan="en"
      dark
      sv="/kontakt/"
      en="/en/contact/"
      canonical="https://www.swedishnet.se/en/contact/"
      title="Swedish Net: Contact"
      description="Contact Us."
    />
    <ContactForm style={{ paddingTop: "120px" }} lan="en" />
    <Footer lan="en" />
  </Fragment>
);
