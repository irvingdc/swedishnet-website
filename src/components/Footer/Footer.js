import React from "react"
import classes from "./Footer.module.css"
import NavContent from "../NavContent/NavContent"

export default ({ lan }) =>{
    const socialLinks = [

    ]
    return (
        <div className={ classes.container }>
            <div className={ classes.navOptions}>
                <NavContent lan={ lan }/>
            </div>
            <div className={ classes.social }>
                {
                    socialLinks.map((it,index) => (
                        <a rel="noopener noreferrer" href={ it.href } target="_blank" key={ index }>
                            <img alt="social" src={ it.icon }/>
                        </a>
                    ))
                }
            </div>
            <p className={ classes.finalSection }>
            ® swedishnet | <a rel="noopener noreferrer" href="https://www.swedishnet.se">www.swedishnet.se</a> 
            </p>
        </div>
    )
}
    