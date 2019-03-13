import React, { Fragment } from "react"
import FullScreenImage from "../components/FullScreenImage/FullScreenImage"
import { globe, camera } from '../images'
import IntroText from "../components/IntroText/IntroText";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css"

export default () =>(
    <Fragment>
        <Nav lan="en" sv="/sv" en="/"/>
        <FullScreenImage 
            img={ globe }
            lineLeft="0px"
            lineWidth="80px"
        >
            <IntroText
                title="Security and Technology for Vital Societal Facilities and Functions."
                subtitle="Delivered as consultancy services and turnkey contracts"
            />
        </FullScreenImage>
        <Footer lan="en"/>
    </Fragment>
)