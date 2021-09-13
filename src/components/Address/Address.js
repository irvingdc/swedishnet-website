import React, { Fragment } from "react";
import classes from "./Address.module.css";
import VerticalText from "../VerticalText/VerticalText";

export default ({ lan }) => {
  let content = {
    en: {
      title: (
        <Fragment>
          CONTACT <b>US</b>
        </Fragment>
      ),
      phone: "Phone",
      email: "E-mail",
      fax: "Fax",
      errorReport: "Error report",
      invoice: "Invoice",
      postalAddress: "Postal Address",
      streetAddress: "Street Address",
      office: "Street Address Stockholm office"
    },
    es: {
      title: <Fragment>CONTÁCTANOS</Fragment>,
      phone: "Teléfono",
      email: "Correo",
      fax: "Fax",
      errorReport: "Reporte de Errores",
      invoice: "Facturación",
      postalAddress: "Dirección Postal",
      streetAddress: "Dirección Oficial",
      office: "Oficina de Estocolmo"
    },
    sv: {
      title: (
        <Fragment>
          KONTAKTA <b>OSS</b>
        </Fragment>
      ),
      phone: "Telefon växel",
      email: "E-post info/allmänt",
      fax: "Fax",
      errorReport: "Felanmälan",
      invoice: "Faktura",
      postalAddress: "Adress",
      streetAddress: "Besöksadress huvudkontor",
      office: "Besöksadress Stockholmskontor"
    }
  };

  let {
    title,
    phone,
    email,
    errorReport,
    invoice,
    postalAddress,
    streetAddress,
    office,
    fax
  } = content[lan];

  return (
    <div className={classes.container}>
      <VerticalText
        style={{
          fontSize: "22px",
          paddingTop: "40px"
        }}
      >
        <span
          style={{
            color: "black",
            paddingLeft: "0px"
          }}
        >
          {title}
        </span>
      </VerticalText>
      <p>{phone}: 0582-141 00</p>
      <p>{fax}: 0582-141 50</p>
      <p>
        {email}: <a href="mail:info@swedishnet.se">info@swedishnet.se</a>
      </p>
      <p>
        {errorReport}:{" "}
        <a href="mail:felanmalan@swedishnet.se">felanmalan@swedishnet.se</a>
      </p>
      <p>
        {invoice}:{" "}
        <a href="mail:faktura@swedishnet.se">faktura@swedishnet.se</a>
      </p>

      <h4>{postalAddress}:</h4>
      <p>Swedish Net Air & Defence AB/ Swedish Net Engineering AB</p>
      <p>Gamla Tingshuset</p>
      <p>Östra Storgatan 40</p>
      <p>694 31 Hallsberg.</p>
      {lan !== "sv" ? <p>Sweden</p> : null}

      <h4>{office}:</h4>
      <p>Munkbrogatan 2</p>
      <p>111 22 Stockholm</p>
      {lan !== "sv" ? <p>Sweden</p> : null}
    </div>
  );
};
