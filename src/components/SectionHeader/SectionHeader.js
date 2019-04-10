import React from "react"
import classes from "./SectionHeader.module.css"

export default ({ number, title, id }) =>(
    <div className={ classes.container } id={id}>
        <div className={ [classes.content, (!number ? classes.large : "")].join("") }>
            { number ? <span>{ number }</span> : null }
            <h2 className={!number ? classes.large : ""}>{ title }</h2>
        </div>
    </div>
)