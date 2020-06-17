import React, { Fragment } from "react";
import HomeFullScreenImage from "components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "src/images";
import Nav from "components/Nav/Nav";
import WhiteFooter from "components/WhiteFooter/WhiteFooter";
import { f7, new_black } from "src/images";
import { ARTICLES_SV } from "src/constants"
import CardListSection from "components/CardListSection/CardListSection";
import Article from "components/Article/Article";
import "src/main.module.css";

export default () => {
  return (
    <Fragment>
      <Nav
        lan="sv"
        sv="/"
        en="/en"
        es="/es"
        canonical="https://www.swedishnet.se/"
        title="Swedish Net: Hem"
        description="Säkerhet och teknik för samhällsviktiga anläggningar och funktioner"
      />
      <HomeFullScreenImage
        img={globe}
        lineLeft="0%"
        lineWidth="10%"
        title="Säkerhet och teknik för samhällsviktiga anläggningar och funktioner"
      />
      <CardListSection img={new_black} title="NYHETER">
        {ARTICLES_SV.map((it, index) => (
          <Article key={index} {...it} />
        ))}
      </CardListSection>
      <WhiteFooter aaaLogo={f7}/>
    </Fragment>
  );
};
