import React from "react"
import classes from "./Nav.module.css"
import NavContent from "../NavContent/NavContent";

export default ({ lan, dark, sv, en }) =>(
    <div className={ classes.container }>
        <NavContent lan={ lan } dark={dark} sv={sv} en={en}/>
    </div>
)