import React, { Component } from "react";
import { Link } from "gatsby";
import classes from "./NavContent.module.css";
import NavDropdown from "../NavDropdown/NavDropdown";
import { logo, logo_dark, menu, close } from "../../images";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

class NavContent extends Component {
  state = {
    open: false
  };

  urls = {
    en: [
      {
        title: "Technical and Security Services",
        url: "/services",
        options: [
          {
            title: "Protective Security and Planning",
            url: "/services/#protective-security-and-planning"
          },
          {
            title: "Electrical and Security Enginering",
            url: "/services/#electrical-and-security-engineering"
          },
          {
            title: "The Project Function",
            url: "/services/#the-project-function"
          },
          {
            title: "Service and Maintenance",
            url: "/services/#service-and-maintenance"
          }
        ]
      },
      {
        title: "Contracts",
        url: "/contracts",
        options: [
          {
            title: "Nuclear Power Plants",
            url: "/contracts/nuclear-power-plants"
          },
          {
            title: "Defence",
            url: "/contracts/defence"
          },
          {
            title: "Airports",
            url: "/contracts/airports"
          },
          {
            title: "Electrical Power supply",
            url: "/contracts/electrical-power-supply"
          }
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
      }
    ],
    sv: [
      {
        title: "Teknik- och säkerhetstjänster",
        url: "/sv/services",
        options: [
          {
            title: "Säkerhetsskydd och projektering",
            url: "/sv/services/#protective-security-and-planning"
          },
          {
            title: "El och säkerhetskonstruktion",
            url: "/sv/services/#electrical-and-security-engineering"
          },
          {
            title: "Projektfunktionen",
            url: "/sv/services/#the-project-function"
          },
          {
            title: "Service och underhåll",
            url: "/sv/services/#service-and-maintenance"
          }
        ]
      },
      {
        title: "Entreprenader",
        url: "/sv/contracts",
        options: [
          {
            title: "Kärnkraftverk",
            url: "/sv/contracts/nuclear-power-plants"
          },
          {
            title: "Försvar",
            url: "/sv/contracts/defence"
          },
          {
            title: "Flygplatser",
            url: "/sv/contracts/airports"
          },
          {
            title: "Elkraftförsörjning",
            url: "/sv/contracts/electrical-power-supply"
          }
        ]
      },
      {
        title: "Om oss",
        url: "/sv/about"
      },
      {
        title: "Kontakt",
        url: "/sv/contact"
      },
      {
        title: "Nyheter",
        url: "/sv/news"
      }
    ]
  };

  openMenu = () => {
    this.setState({ open: true });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  home = () => {
    switch(this.props.lan){
      case "en":
        return "/"
      case "sv":
        return "/sv"
      default:
        return "/"
    }
  }

  render() {
    let lan = this.urls[this.props.lan];
    let { dark, en, sv } = this.props;
    return (
      <div
        className={[
          classes.container,
          this.state.open ? classes.open : "",
          dark ? classes.dark : ""
        ].join(" ")}
      >
        <Link to={this.home()} className={classes.img}>
          {dark ? (
            <img
              src={logo_dark}
              alt="Logo"
              title="Logo"
              className={classes.logo}
            />
          ) : (
            <img src={logo} alt="Logo" title="Logo" className={classes.logo} />
          )}
        </Link>
        <div className={classes.menuContainer}>
          <div className={classes.menu}>
            {lan.map((it, index) =>
              it.options ? (
                <NavDropdown {...it} key={index} onClick={this.closeMenu}/>
              ) : (
                <Link activeClassName={classes.active} to={it.url} key={index}>
                  {it.title}
                </Link>
              )
            )}
            <LanguageSwitcher sv={sv} en={en} dark={dark}/>
          </div>
        </div>
        <img
          src={close}
          alt="close"
          className={classes.close}
          onClick={this.closeMenu}
        />
        <img
          src={menu}
          alt="close"
          className={classes.menuButton}
          onClick={this.openMenu}
        />
      </div>
    );
  }
}
export default NavContent;
