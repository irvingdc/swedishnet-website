import React, { Fragment } from "react";
import HomeFullScreenImage from "components/HomeFullScreenImage/HomeFullScreenImage";
import { globe } from "src/images";
import Nav from "components/Nav/Nav";
import WhiteFooter from "components/WhiteFooter/WhiteFooter";
import { f6, new_black } from "src/images";
import { ARTICLES_EN } from "src/constants"
import CardListSection from "components/CardListSection/CardListSection";
import Article from "components/Article/Article";
import "src/main.module.css";

export default () => {
  return (
    <Fragment>
      <Nav
        lan="en"
        sv="/"
        en="/en/"
        es="/es/"
        canonical="https://www.swedishnet.se/en/"
        title="Swedish Net: Home"
        description="Security and Technology for Vital Societal Facilities and Functions"
      />
      <HomeFullScreenImage
        img={globe}
        lineLeft="0%"
        lineWidth="10%"
        title="Security and Technology for Vital Societal Facilities and Functions"
      />
      <CardListSection img={new_black} title="NEWS">
        {ARTICLES_EN.map((it, index) => (
          <Article key={index} {...it} />
        ))}
      </CardListSection>
      <WhiteFooter aaaLogo={f6} />
    </Fragment>
  );
};
