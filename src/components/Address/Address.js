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
      email: "Email",
      fax: "Fax",
      errorReport: "Error report",
      invoice: "Invoice",
      postalAddress: "Postal Address",
      streetAddress: "Street Address",
      office: "Street address Stockholm office"
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
      postalAddress: "Postadress",
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
        {errorReport}:
        <a href="mail:felanmalan@swedishnet.se">felanmalan@swedishnet.se</a>
      </p>
      <p>
        {invoice}:<a href="mail:faktura@swedishnet.se">faktura@swedishnet.se</a>
      </p>

      <h4>{postalAddress}:</h4>
      <p>Swedish Net Communication AB</p>
      <p>Kyrkofallet 234</p>
      <p>694 91 Hallsber</p>
      <p>Sweden</p>

      <h4>{streetAddress}:</h4>
      <p>Gamla Tingshuset</p>
      <p>Östra Storgatan 40</p>
      <p>694 31 Hallsber</p>
      <p>Sweden</p>

      <h4>{office}</h4>
      <p>iOFFICE</p>
      <p>Kungsgatan 60, 1st floor</p>
      <p>111 22 Stockholm</p>
      <p>Sweden</p>
    </div>
  );
};
