import React from "react";
import classes from "./WhiteFooter.module.css";
import {
  f3,
  f5,
  logo_dark,
  iso9001,
  iso14001,
  iso45001,
  f8
} from "../../images";

export default ({ aaaLogo }) => {
  let logos = [iso9001, iso14001, iso45001, f3, f5];
  return (
    <div className={classes.container}>
      <div className={classes.logos}>
        <img src={logo_dark} alt="logo" className={classes.mainLogo} />
        <div className={classes.list}>
          {logos.map((it, index) => (
            <img src={it} key={index} alt="logo" />
          ))}
          <img src={aaaLogo} alt="logo" />

          <img src={f8} alt="logo" />
        </div>
      </div>
      <p className={classes.finalSection}>
        ® swedishnet | 
        <a rel="noopenet noreferrer" href="https://www.swedishnet.se">
          www.swedishnet.se
        </a>
      </p>
    </div>
  );
};
