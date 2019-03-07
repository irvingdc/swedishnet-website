import React from "react"
import classes from "./IntroText.module.css"

export default ({ title, subtitle }) =>(
    <div className={ classes.container }>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
    </div>
)