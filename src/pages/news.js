import React, { Fragment } from "react"
import VerticalText from "../components/VerticalText/VerticalText"
import CardListSection from "../components/CardListSection/CardListSection"
import IntroText from "../components/IntroText/IntroText"
import FullScreenImage from "../components/FullScreenImage/FullScreenImage"
import Nav from "../components/Nav/Nav"
import Article from "../components/Article/Article"
import { news, plane, new_black } from "../images"
import Footer from "../components/Footer/Footer";

export default () =>{
    let articles = [
        {
            title: <span><b>LOREM IPSUM</b> DOLOR SIT AMET</span>,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: news,
            url: "https://www.swedishnet.se"
        },
        {
            title: <span><b>LOREM IPSUM</b> DOLOR SIT AMET</span>,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: news,
            url: "https://www.swedishnet.se"
        },
        {
            title: <span><b>LOREM IPSUM</b> DOLOR SIT AMET</span>,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            img: news,
            url: "https://www.swedishnet.se"
        },
    ]
    return (
        <Fragment>
            <Nav lan="en"/>
            <FullScreenImage 
                img={ plane }
                lineLeft="40%"
                lineWidth="20%"
            >
                <IntroText
                    title="Security and Technology for Vital Societal Facilities and Functions."
                    subtitle="Delivered as consultancy services and turnkey contracts"
                />
            </FullScreenImage>
            <CardListSection img={ new_black }>
                <VerticalText style={{
                    left: "40%",
                    fontSize: "22px",
                    paddingTop: "40px",
                }}>
                    <span>NEWS</span>
                </VerticalText>
                {
                    articles.map((it,index) => (
                        <Article key={ index } { ...it }/>
                    ))
                }
            </CardListSection>
            <Footer lan="en"/>
        </Fragment>
    )
    
}