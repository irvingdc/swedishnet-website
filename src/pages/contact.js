import React, { Fragment } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css";
import ContactForm from "../components/ContactForm/ContactForm";

export default () => (
  <Fragment>
    <Nav lan="en" dark sv="/sv/contact" en="/contact" />
    <ContactForm style={{ paddingTop: "120px" }} lan="en"/>
    <Footer lan="en" />
  </Fragment>
);
