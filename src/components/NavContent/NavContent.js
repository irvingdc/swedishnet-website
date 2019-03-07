import React, { Component } from "react"
import { Link } from "gatsby"
import classes from "./NavContent.module.css"
import NavDropdown from "../NavDropdown/NavDropdown"
import { logo, menu, close } from "../../images"

class NavContent extends Component {
    
    state = {
        open: false
    }

    urls = {
        en: [
            {
                title: "Technical and Security Services",
                options: [
                    {
                        title: "Protective Security and Planning",
                        url: "/services/protective-security-and-planning"
                    },
                    {
                        title: "Electricity and Security Enginering",
                        url: "/services/electricity-and-security-engineering"
                    },
                    {
                        title: "Project Functions",
                        url: "/services/project-functions"
                    },
                    {
                        title: "Service and Maintenance",
                        url: "/services/service-and-maintenance"
                    },
                ]
            },
            {
                title: "Contracts",
                options: [
                    {
                        title: "Nuclear Power Related Activities",
                        url: "/contracts/nuclear-power-related-activities"
                    },
                    {
                        title: "Defense Related Activities",
                        url: "/contracts/defense-related-activities"
                    },
                    {
                        title: "Airports/Airfield",
                        url: "/contracts/airports-airfield"
                    },
                    {
                        title: "Reliable Power Supply Systems",
                        url: "/contracts/reliable-power-supply-systems"
                    },
                ]
            },
            {
                title: "About us",
                url: "about"
            },
            {
                title: "Contact",
                url: "contact"
            },
            {
                title: "News",
                url: "news"
            },
        ]
    }

    openMenu = () => {
        this.setState({open: true})
    }

    closeMenu = () => {
        this.setState({open: false})
    }

    render(){
        let lan = this.urls[this.props.lan]
        return (
            <div className={ [classes.container, (this.state.open ? classes.open : "")].join(" ") }>
                <Link to="/" className={ classes.img }>
                    <img src={ logo } alt="Logo" title="Logo" className={ classes.logo }/>
                </Link>
                <div className={ classes.menu }>
                    {
                        lan.map((it, index) => it.options 
                            ? <NavDropdown { ...it } key={ index }/> 
                            : <Link activeClassName={ classes.active } to={ it.url } key={ index }>{ it.title }</Link> 
                        )
                    }
                </div>
                <img src={ close } alt="close" className={ classes.close } onClick={ this.closeMenu }/>
                <img src={ menu } alt="close" className={ classes.menuButton } onClick={ this.openMenu }/>
            </div>
        )
    }
}
export default NavContent