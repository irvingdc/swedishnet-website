import React from "react"
import classes from "./Article.module.css"
import { link } from "../../images";

export default ({ img, title, content, url }) =>(
    <div className={ classes.container }>
        <div 
            className={ classes.image }
            style={{
                background: `url(${img}) center center / cover no-repeat` ,
            }}
        >
            <a rel="noopener noreferrer" href={ url } target="_blank">
                <span>
                    <img src={ link } alt="icon"/>
                </span>
            </a>
        </div>
        <div className={ classes.text }>
            <h4>{ title }</h4>
            <p>{ content }</p>
        </div>
    </div>
)