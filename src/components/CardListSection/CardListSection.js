import React from "react"
import classes from "./CardListSection.module.css"

export default ({ children, img, style }) =>(
    <div 
        className={ classes.container }
        style={{
            ...style,
            background: `url(${img}) center center / cover no-repeat` ,
        }}
    >
        { children }
        <span></span>
    </div>
)