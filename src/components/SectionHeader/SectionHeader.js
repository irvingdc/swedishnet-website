import React from "react"
import classes from "./SectionHeader.module.css"

export default ({ number, title, id }) =>(
    <div className={ classes.container } id={id}>
        <div className={ classes.content }>
            <span>{ number }</span>
            <h2>{ title }</h2>
        </div>
    </div>
)