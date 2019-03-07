import React from "react"
import classes from "./VerticalText.module.css"

export default ({ children, style }) =>(
    <div className={ classes.container } style={ style }>
        { children }
    </div>
)