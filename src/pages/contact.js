import React, { Fragment } from "react"
import FullScreenImage from "../components/FullScreenImage/FullScreenImage"
import { contact, camera } from '../images'
import IntroText from "../components/IntroText/IntroText";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../main.module.css"
import ContactForm from "../components/ContactForm/ContactForm";

export default () =>(
    <Fragment>
        <Nav lan="en"/>
        <FullScreenImage 
            img={ contact }
            lineLeft="60%"
            lineWidth="20%"
        >
            <IntroText
                title={ <span>Reliable electrical power supply systems <br/><b>for critical infrastructure</b></span> }
            />
        </FullScreenImage>
        <ContactForm/>
        <Footer lan="en"/>
    </Fragment>
)