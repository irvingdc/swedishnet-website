import React from "react"
import classes from "./FullScreenImage.module.css"

export default ({ img, children, lineLeft, lineWidth, noLine }) =>(
    <div 
        className={ classes.container }
        style={{
            background: `url(${img}) center center / cover no-repeat` ,
        }}
    >
        <div className={ classes.content }>
            { children }
            <div className={ [classes.bottomLine, (noLine ? classes.noLine : "")].join(" ") }>
                <span style={{ width: lineWidth, left: lineLeft }}></span>
            </div>
        </div>
    </div>
)