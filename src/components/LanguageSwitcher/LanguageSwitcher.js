import React from "react";
import classes from "./LanguageSwitcher.module.css";
import { Link } from "gatsby";
import { language } from "../../images";

export default ({ sv, en }) => {
    let options = [
        {
            title: "English",
            url: en
        },
        {
            title: "Svenska",
            url: sv
        }
    ]
  return (
    <div className={classes.container}>
      <img src={ language } alt="language"/>
      <div>
        {options.map((it, index) => (
          <Link to={it.url || "/"} key={index}>
            {it.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
