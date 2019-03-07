import React from "react"
import classes from "./NavDropdown.module.css"
import { Link } from "gatsby";

export default ({ title, options }) =>(
    <div className={ classes.container }>
        <h3>{ title }</h3>
        <div>
            {
                options.map((it, index) => <Link to={ it.url } key={ index }>{ it.title }</Link>)
            }
        </div>
    </div>
)