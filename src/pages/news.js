import React, { Fragment } from "react";
import VerticalText from "../components/VerticalText/VerticalText";
import CardListSection from "../components/CardListSection/CardListSection";
import Nav from "../components/Nav/Nav";
import Article from "../components/Article/Article";
import { new_black, logo } from "../images";
import "../main.module.css";
import Footer from "../components/Footer/Footer";

export default () => {
  let articles = [
    {
      title: (
        <span>
          <b>LOREM IPSUM</b> DOLOR SIT AMET
        </span>
      ),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.swedishnet.se"
    },
    {
      title: (
        <span>
          <b>LOREM IPSUM</b> DOLOR SIT AMET
        </span>
      ),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.swedishnet.se"
    },
    {
      title: (
        <span>
          <b>LOREM IPSUM</b> DOLOR SIT AMET
        </span>
      ),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://www.swedishnet.se"
    }
  ];
  return (
    <Fragment>
      <Nav lan="en" sv="/sv/news" en="/news"/>
      <CardListSection img={new_black} style={{ paddingTop: "120px" }}>
        <VerticalText
          style={{
            left: "40%",
            fontSize: "22px",
            paddingTop: "40px"
          }}
        >
          <span>NEWS</span>
        </VerticalText>
        {articles.map((it, index) => (
          <Article key={index} {...it} />
        ))}
      </CardListSection>
      <Footer lan="en" />
    </Fragment>
  );
};
