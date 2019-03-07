import React from "react"
import classes from "./VerticalText.module.css"

export default ({ children }) =>(
    <div className={ classes.container }>
        { children }
    </div>
)