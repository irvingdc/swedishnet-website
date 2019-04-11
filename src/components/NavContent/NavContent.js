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
        url: "/en/services",
        options: [
          {
            title: "Protective Security and Planning",
            url: "/en/services/#protective-security-and-planning"
          },
          {
            title: "Electrical and Security Enginering",
            url: "/en/services/#electrical-and-security-engineering"
          },
          {
            title: "The Project Function",
            url: "/en/services/#the-project-function"
          },
          {
            title: "Service and Maintenance",
            url: "/en/services/#service-and-maintenance"
          }
        ]
      },
      {
        title: "Contracts",
        url: "/en/contracts/",
        options: [
          {
            title: "Nuclear Power Plants",
            url: "/en/contracts/nuclear-power-plants/"
          },
          {
            title: "Defence",
            url: "/en/contracts/defence/"
          },
          {
            title: "Airports",
            url: "/en/contracts/airports/"
          },
          {
            title: "Electrical Power Supply",
            url: "/en/contracts/electrical-power-supply/"
          }
        ]
      },
      {
        title: "About us",
        url: "/en/about/"
      },
      {
        title: "Contact",
        url: "/en/contact/"
      },
      {
        title: "News",
        url: "/en/news/"
      }
    ],
    sv: [
      {
        title: "Teknik- och säkerhetstjänster",
        url: "/teknik-och-sakerhetstjanster",
        options: [
          {
            title: "Säkerhetsskydd och projektering",
            url: "/teknik-och-sakerhetstjanster/#sakerhetsskydd-och-projektering"
          },
          {
            title: "El- och säkerhetskonstruktion",
            url: "/teknik-och-sakerhetstjanster/#el-och-sakerhetskonstruktion"
          },
          {
            title: "Projektfunktionen",
            url: "/teknik-och-sakerhetstjanster/#projektfunktionen"
          },
          {
            title: "Service och underhåll",
            url: "/teknik-och-sakerhetstjanster/#service-och-underhall"
          }
        ]
      },
      {
        title: "Entreprenader",
        url: "/entreprenader/",
        options: [
          {
            title: "Kärnkraftverk",
            url: "/entreprenader/karnkraftverk/"
          },
          {
            title: "Försvar",
            url: "/entreprenader/forsvar/"
          },
          {
            title: "Flygplatser",
            url: "/entreprenader/flygplatser/"
          },
          {
            title: "Elkraftförsörjning",
            url: "/entreprenader/elkraftforsorjning/"
          }
        ]
      },
      {
        title: "Om oss",
        url: "/om-oss/"
      },
      {
        title: "Kontakt",
        url: "/kontakt/"
      },
      {
        title: "Nyheter",
        url: "/nyheter/"
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
        return "/en/"
      case "sv":
        return "/"
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
