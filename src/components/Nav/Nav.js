import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import classes from "./Nav.module.css";
import NavContent from "../NavContent/NavContent";

export default ({ lan, dark, sv, en, es, title, canonical, description }) => (
  <Fragment>
    {canonical ? (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
        <html lang={lan} />
        <meta name="description" content={description} />
      </Helmet>
    ) : null}
    <div className={classes.container}>
      <NavContent lan={lan} dark={dark} sv={sv} en={en} es={es}/>
    </div>
  </Fragment>
);
