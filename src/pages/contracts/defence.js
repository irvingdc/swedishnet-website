import React, { Fragment } from "react";
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage";
import { device, defence_color } from "../../images";
import IntroText from "../../components/IntroText/IntroText";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css";
import CardListSection from "../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="sv"
      en="/en/contracts/defence/"
      sv="/contracts/defence/"
      canonical="https://www.swedishnet.se/contracts/defence/"
      title="Swedish Net: Entreprenader - Försvar"
      description="Komplexa uppdrag åt försvarsrelaterade projekt."
    />
    <FullScreenImage img={defence_color} noLine>
      <IntroText
        title={
          <span>
            KOMPLEXA UPPDRAG <b> ÅT FÖRSVARSRELATERADE PROJEKT</b>
          </span>
        }
      />
    </FullScreenImage>
    <SectionHeader title="FÖRSVAR" />
    <CardListSection img={device}>
      <CardListItem
        title={
          <span>
            VAD <b>VI GÖR</b>
          </span>
        }
      >
        Swedish Net är en erfaren leverantör inom materielförsörjning till det
        svenska försvaret. Vi har kompetens och certifieringar för att leverera
        dokumentation, systemsäkerhetsarbete och registrering i databaser. Allt
        enligt försvarets standarder och rutiner.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        Swedish Net vann upphandling för att leverera sökutrustning till FMV.
        Sökutrustningen levererades tillsammans med komplett dokumentation
        innefattande bland annat systemsäkerhet, förnödenhetsregistrering,
        materialvård och instruktionsbok för samtliga produkter. Sökutrustning
        används av Försvarsmakten vid sök efter exempelvis vapengömmor,
        avlyssningsutrustning, minering eller gömda personer.
      </CardListItem>
    </CardListSection>
    <Footer lan="sv" />
  </Fragment>
);
