import React, { Fragment } from "react"
import FullScreenImage from "../components/FullScreenImage/FullScreenImage"
import { globe, soldier } from '../images'
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
            img={ soldier }
            lineLeft="50%"
            lineWidth="100px"
        >
            <IntroText
                title={ <span>Complex assignments <br/><b>for defense related projects</b></span> }
            />
        </FullScreenImage>
        <SectionHeader
            number="00"
            title="ABOUT"
        />
        <CardListSection img={ globe }>
            <CardListItem 
                inverted
                title={ <span>ABOUT <b>US</b></span> }
                extraContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</b>
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardListItem>
        </CardListSection>
        <Footer lan="en"/>
    </Fragment>
)