import React from "react"
import classes from "./Address.module.css"
import VerticalText from "../VerticalText/VerticalText"

export default () =>(
    <div className={ classes.container }>
        <VerticalText style={{
                fontSize: "22px",
                paddingTop: "40px",
            }}>
            <span style={{ 
                color: "black",
                paddingLeft: "0px"
            }}>
                CONTACT <b>US</b>
            </span>
        </VerticalText>
        <p>Phone head office: +46 582-141-00</p>
        <p>Phone Stockholm: +46 8-34-83-00</p>
        <p>Fax: +46 582-141-50</p>
        <p>Email info/general: info@swedishnet.se</p>
        <p>Error report: felanmalan@swedishnet.se</p>

        <h4>POSTAL ADDRESS:</h4>
        <p>Swedish Net Communication A</p>
        <p>Kyrkofallet 234</p>
        <p>SE-694 91 Hallsber</p>
        <p>Sweden</p>

        <h4>VISITING ADDRESS HEAD OFFICE</h4>
        <p>The Old Courthouse at</p>
        <p>Östra Storgatan 40</p>
        <p>SE-694 31 Hallsber</p>
        <p>Sweden</p>

        <h4>WORKSHOP</h4>
        <p>Västra Storgatan 33</p>
        <p>SE-694 30 Hallsber</p>
        <p>Sweden</p>

        <h4>VISITING ADDRESS STOCKHOLM OFFICE</h4>
        <p>Waterfront Building</p>
        <p>Klarabergsvladukten 63</p>
        <p>SE-111 64 Stockholm</p>
        <p>Sweden</p>

    </div>
)