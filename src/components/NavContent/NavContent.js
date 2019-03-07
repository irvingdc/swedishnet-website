import React, { Component } from "react"
import { Link } from "gatsby"
import classes from "./NavContent.module.css"
import NavDropdown from "../NavDropdown/NavDropdown"
import { logo, menu } from "../../images"

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
                        url: "1"
                    },
                    {
                        title: "Electricity and Security Enginering",
                        url: "1"
                    },
                    {
                        title: "Project Functions",
                        url: "1"
                    },
                    {
                        title: "Service and Maintenance",
                        url: "1"
                    },
                ]
            },
            {
                title: "Contracts",
                options: [
                    {
                        title: "Nuclear Power Related Activities",
                        url: "1"
                    },
                    {
                        title: "Defense Related Activities",
                        url: "1"
                    },
                    {
                        title: "Airports/Airfield",
                        url: "1"
                    },
                    {
                        title: "Reliable Power Supply Systems",
                        url: "1"
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
            <div className={ classes.container }>
                <Link to="/" className={ classes.img }>
                    <img src={ logo } alt="Logo" title="Logo" className={ [classes.logo, (this.state.open ? classes.open : ""), (this.props.fixedlogo ? classes.small : "")].join(" ")}/>
                </Link>
                <div className={ classes.menu }>
                    {
                        lan.map((it, index) => it.options 
                            ? <NavDropdown { ...it } key={ index }/> 
                            : <Link activeClassName={ classes.active } to={ it.url } key={ index }>{ it.title }</Link> 
                        )
                    }
                </div>
            </div>
        )
    }
}
export default NavContent