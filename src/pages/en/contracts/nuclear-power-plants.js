import React, { Fragment } from "react";
import FullScreenImage from "../../../components/FullScreenImage/FullScreenImage";
import { nuclear_color, street } from "../../../images";
import IntroText from "../../../components/IntroText/IntroText";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import CardListItem from "../../../components/CardListItem/CardListItem";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import "../../../main.module.css";
import CardListSection from "../../../components/CardListSection/CardListSection";

export default () => (
  <Fragment>
    <Nav
      lan="en"
      en="/en/contracts/nuclear-power-plants/"
      sv="/contracts/nuclear-power-plants/"
      canonical="https://www.swedishnet.se/en/contracts/nuclear-power-plants/"
      title="Swedish Net: Contracts - Nuclear Power Plants"
      description="Security enhancing measures on nuclear power plants."
    />
    <FullScreenImage img={nuclear_color} noLine>
      <IntroText
        title={
          <span>
            Security enhancing measures on nuclear <b>power plants</b>
          </span>
        }
      />
    </FullScreenImage>
    <SectionHeader title="NUCLEAR POWER PLANTS" />
    <CardListSection img={street}>
      <CardListItem
        title={
          <span>
            WHAT <b>WE DO</b>
          </span>
        }
      >
        Swedish Net delivers contracts within security enhancement measures with
        a focus on physical and technical protection for nuclear power related
        activities. We can deliver system design, engineering, ground works,
        construction and installation as a functional contract in cooperation
        with a nuclear power plant’s own organisation.
      </CardListItem>
      <CardListItem title={<span>CASE</span>}>
        As the general contractor together with Forsmarks Kraftgrupp AB and
        subcontractors, Swedish Net built a checkpoint for vehicular traffic at
        Forsmark nuclear power plant. The checkpoint consists of six lanes for
        traffic, each 350 m in length. Control stations and traffic islands
        separate the lanes and boom gates control the traffic flow. The contract
        also included housing for security personnel.
        <br />
        <br />
        The project started with a in-depth analysis of needs, system design,
        budget and thereafter development of construction documents. The
        following implementation phase included everything from ground works to
        buildings. The checkpoint also consists of multiple security systems
        such as emergency power, security management systems and radio
        communication. Both wireless and wired control systems were installed
        for the gates and barriers.
        <br />
        <br />
        We have also delivered a similar contract to Oskarshamn nuclear power
        plant.
      </CardListItem>
    </CardListSection>
    <Footer lan="en" />
  </Fragment>
);
