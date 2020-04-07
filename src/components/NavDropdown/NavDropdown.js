import React from "react";
import classes from "./NavDropdown.module.css";
import { Link } from "gatsby";

export default ({ title, url, options, onClick }) => (
  <div className={classes.container}>
    <Link to={url} className={classes.title} onClick={onClick}>
      {title}
    </Link>
    <div>
      {options.map((it, index) => (
        <Link to={it.url} key={index} onClick={onClick}>
          - {it.title}
        </Link>
      ))}
    </div>
  </div>
);
