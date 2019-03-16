import React from "react"
import classes from "./IntroText.module.css"

export default ({ title, subtitle, dark }) =>(
    <div className={ [classes.container, (dark ? classes.dark : "")].join(" ") }>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
    </div>
)