import React from "react"
import classes from "./Nav.module.css"
import NavContent from "../NavContent/NavContent";

export default ({ lan }) =>(
    <div className={ classes.container }>
        <NavContent lan={ lan }/>
    </div>
)