import React, { Component } from "react";
import { Link } from "gatsby";
import classes from "./NavContent.module.css";
import NavDropdown from "../NavDropdown/NavDropdown";
import { logo, logo_dark, menu, close } from "../../images";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

class NavContent extends Component {
  state = {
    open: false,
  };

  urls = {
    en: [
      {
        title: "Technical and Security Services",
        url: "/en/services",
        options: [
          {
            title: "Protective Security and Planning",
            url: "/en/services/#protective-security-and-planning",
          },
          {
            title: "Electrical and Security Enginering",
            url: "/en/services/#electrical-and-security-engineering",
          },
          {
            title: "The Project Function",
            url: "/en/services/#the-project-function",
          },
          {
            title: "Service and Maintenance",
            url: "/en/services/#service-and-maintenance",
          },
        ],
      },
      {
        title: "Airports",
        url: "/en/contracts/airports/",
      },
      {
        title: "Defence",
        url: "/en/contracts/defence/",
      },
      {
        title: "About us",
        url: "/en/about/",
        className: classes.marginTop,
      },
      {
        title: "Career",
        url: "/en/career/",
        className: classes.marginTop,
      },
      {
        title: "Contact",
        url: "/en/contact/",
      },
      {
        title: "News",
        url: "/en/#news",
      },
    ],
    es: [
      {
        title: "Servicios técnicos y de seguridad",
        url: "/es/services",
        options: [
          {
            title: "Seguridad y planeación",
            url: "/es/services/#protective-security-and-planning",
          },
          {
            title: "Ingeniería eléctrica y de seguridad",
            url: "/es/services/#electrical-and-security-engineering",
          },
          {
            title: "Funciones de proyecto",
            url: "/es/services/#the-project-function",
          },
          {
            title: "Servicio y Mantenimiento",
            url: "/es/services/#service-and-maintenance",
          },
        ],
      },
      {
        title: "Aeropuertos",
        url: "/es/contracts/airports/",
      },
      {
        title: "Defensa",
        url: "/es/contracts/defence/",
      },
      {
        title: "Acerca De",
        url: "/es/about/",
        className: classes.marginTop,
      },
      {
        title: "Carrera",
        url: "/es/carrera/",
        className: classes.marginTop,
      },
      {
        title: "Contacto",
        url: "/es/contact/",
      },
      {
        title: "Noticias",
        url: "/es/#noticias",
      },
    ],
    sv: [
      {
        title: "Teknik- och säkerhetstjänster",
        url: "/teknik-och-sakerhetstjanster",
        options: [
          {
            title: "Säkerhetsskydd och projektering",
            url:
              "/teknik-och-sakerhetstjanster/#sakerhetsskydd-och-projektering",
          },
          {
            title: "El- och säkerhetskonstruktion",
            url: "/teknik-och-sakerhetstjanster/#el-och-sakerhetskonstruktion",
          },
          {
            title: "Projektfunktionen",
            url: "/teknik-och-sakerhetstjanster/#projektfunktionen",
          },
          {
            title: "Service och underhåll",
            url: "/teknik-och-sakerhetstjanster/#service-och-underhall",
          },
        ],
      },
      {
        title: "Flygplatser",
        url: "/entreprenader/flygplatser/",
      },
      {
        title: "Försvar",
        url: "/entreprenader/forsvar/",
      },
      {
        title: "Om oss",
        url: "/om-oss/",
        className: classes.marginTop,
      },
      {
        title: "Karriär",
        url: "/jobb/",
        className: classes.marginTop,
        options: [
          {
            title: "Teknisk kravställare",
            url: "/teknisk-kravstallare",
          },
        ],
      },
      {
        title: "Kontakt",
        url: "/kontakt/",
      },
      {
        title: "Nyheter",
        url: "/#nyheter",
      },
    ],
  };

  openMenu = () => {
    this.setState({ open: true });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  home = () => {
    switch (this.props.lan) {
      case "en":
        return "/en/";
      case "sv":
        return "/";
      case "es":
        return "/es/";
      default:
        return "/";
    }
  };

  render() {
    let lan = this.urls[this.props.lan];
    let { dark, en, sv, es } = this.props;
    return (
      <div
        className={[
          classes.container,
          this.state.open ? classes.open : "",
          dark ? classes.dark : "",
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
                <NavDropdown {...it} key={index} onClick={this.closeMenu} />
              ) : (
                <Link
                  activeClassName={classes.active}
                  to={it.url}
                  key={index}
                  className={it.className}
                >
                  {it.title}
                </Link>
              )
            )}
            <LanguageSwitcher sv={sv} en={en} es={es} dark={dark} />
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
