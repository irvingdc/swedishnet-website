import React from "react"
import classes from "./ScrollDown.module.css"
import { mouse } from"../../images" 

export default ({ children }) =>(
    <div className={ classes.container } onClick={()=>
        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }>
        <img src={ mouse } alt="mouse"/>
        <span>{children}</span>
    </div>
)