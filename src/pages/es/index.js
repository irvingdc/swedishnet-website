import React, { Fragment } from "react";
import HomeFullScreenImage from "components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "src/images";
import Nav from "components/Nav/Nav";
import WhiteFooter from "components/WhiteFooter/WhiteFooter";
import { f6, new_black } from "src/images";
import { ARTICLES_ES } from "src/constants"
import CardListSection from "components/CardListSection/CardListSection";
import Article from "components/Article/Article";
import "src/main.module.css";

export default () => {
  return (
    <Fragment>
      <Nav
        lan="es"
        sv="/"
        en="/en/"
        es="/es/"
        canonical="https://www.swedishnet.se/es/"
        title="Swedish Net: Inicio"
        description="Seguridad y tecnología para comodidades y funciones vitales de la sociedad"
      />
      <HomeFullScreenImage
        img={globe}
        lineLeft="0%"
        lineWidth="10%"
        title="Seguridad y tecnología para comodidades y funciones vitales de la sociedad"
      />
      <CardListSection img={new_black} title="NOTICIAS">
        {ARTICLES_ES.map((it, index) => (
          <Article key={index} {...it} />
        ))}
      </CardListSection>
      <WhiteFooter aaaLogo={f6}/>
    </Fragment>
  );
};
