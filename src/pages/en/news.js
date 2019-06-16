import React, { Fragment } from "react";
import VerticalText from "../../components/VerticalText/VerticalText";
import CardListSection from "../../components/CardListSection/CardListSection";
import Nav from "../../components/Nav/Nav";
import Article from "../../components/Article/Article";
import {
  new_black,
  news1,
  news2,
  news3,
  news4,
  news5,
  news7
} from "../../images";
import "../../main.module.css";
import Footer from "../../components/Footer/Footer";

export default () => {
  let articles = [
    {
      title: (
        <span>
          190318 CONTRACT <b>ÖREBRO AIRPORT</b>
        </span>
      ),
      img: news7,
      content:
        "Swedish Net has won a procurement for changing of Constant Current Regulators (CCR) at Örebro Airport."
    },
    {
      title: (
        <span>
          190315 CONTRACT <b>LYCKSELE AIRPORT</b>
        </span>
      ),
      img: news2,
      content:
        "Swedish Net has won a procurement for change of Localizer at the ariport in Lycksele."
    },
    {
      title: (
        <span>
          190301 CONTRACT <b>SCANDINAVIAN MOUNTAINS AIRPORT</b>
        </span>
      ),
      img: news5,
      content:
        "Our work at the airport in Sälen continues, 70 percent of the contract is finished. We have full responsibility for engineering of systems and installation of the airport’s AGL, electrical power supply system and infrastructure for power and communication. Our contract is to be ready for inspection in August. "
    },
    {
      title: (
        <span>
          190228 CONTRACT <b>AIRPORT SVEG</b>
        </span>
      ),
      img: news4,
      content:
        "Swedish Net has installed a new GP and DME for the airport in Sveg."
    },
    {
      title: (
        <span>
          190114 CONSULTANCY SERVICES <b>SECURITY PLANNING AND ENGINEERING</b>
        </span>
      ),
      img: news3,
      content:
        "At the beginning of 2019, we continue to have a large number of assignments including planning and detailed design for governmental and private actors."
    },
    {
      title: (
        <span>
          181205 CONTRACT <b>RONNEBY CIVILIAN/MILITARY AIRPORT </b>
        </span>
      ),
      img: news2,
      content:
        "Ronneby civilian/military has recevied new approach lighting masts and equipment for ILS. Swedish Net won the Swedish Defence Materiel Administration’s procurement earlier this year and now we have finished the contract."
    },
    {
      title: (
        <span>
          181022 CONSULTANCY SERVICES <b>PROJECT MANAGEMENT </b>
        </span>
      ),
      img: news1,
      content:
        "Swedish Net has several project management assignments that run during the whole fall. All assignments includes work on facilities with high security requirements."
    }
  ];
  return (
    <Fragment>
      <Nav
        lan="en"
        sv="/nyheter/"
        en="/en/news/"
        es="/es/news/"
        canonical="https://www.swedishnet.se/en/news/"
        title="Swedish Net: News"
      />
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
