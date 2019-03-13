import React, { Fragment } from "react"
import FullScreenImage from "../../components/FullScreenImage/FullScreenImage"
import { globe, camera } from '../../images'
import IntroText from "../../components/IntroText/IntroText";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "../../main.module.css"

export default () =>(
    <Fragment>
        <Nav lan="sv" sv="/sv" en="/"/>
        <FullScreenImage 
            img={ globe }
            lineLeft="0px"
            lineWidth="80px"
        >
            <IntroText
                title="Säkerhet och teknik för samhällsviktiga anläggningar och funktioner"
                subtitle="Genom konsulttjänster och entreprenader"
            />
        </FullScreenImage>
        <Footer lan="sv"/>
    </Fragment>
)