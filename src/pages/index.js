import React, { Fragment } from "react"
import classes from "./stylesheets/index.module.css"
import FullScreenImage from "../components/FullScreenImage/FullScreenImage"
import { globe, camera } from '../images'
import IntroText from "../components/IntroText/IntroText";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import CardListItem from "../components/CardListItem/CardListItem";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css"
import CardListSection from "../components/CardListSection/CardListSection";

export default () =>(
    <Fragment>
        <Nav lan="en"/>
        <FullScreenImage 
            img={ globe }
            lineLeft="0px"
            lineWidth="60px"
        >
            <IntroText
                title="Security and Technology for Vital Societal Facilities and Functions."
                subtitle="Delivered as consultancy services and turnkey contracts"
            />
        </FullScreenImage>
        <SectionHeader
            number="01"
            title="PROTECTIVE SECURITY AND PLANNING"
        />
        <CardListSection img={ camera }>
            <CardListItem title={ <span>WHAT <b>WE DO</b></span> }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardListItem>
            <CardListItem title={ <span>TO <b>WHOM</b></span> }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardListItem>
            <CardListItem title={ <span>CASE</span> }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardListItem>
        </CardListSection>
        <Footer lan="en"/>
    </Fragment>
)