import React, { Fragment } from "react"
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage"
import { factory, airport } from '../../images'
import IntroText from "../../components/IntroText/IntroText";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CardListItem from "../../components/CardListItem/CardListItem";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"
import CardListSection from "../../components/CardListSection/CardListSection";

export default () =>(
    <Fragment>
        <Nav lan="en"/>
        <FullScreenImage 
            img={ factory }
            lineLeft="80px"
            lineWidth="80px"
        >
            <IntroText
                title={ <span>Security enhancing measures on nuclear <b>power plants</b></span> }
            />
        </FullScreenImage>
        <SectionHeader
            number="03"
            title="AIRPORTS/AIRFIELD"
        />
        <CardListSection img={ airport }>
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