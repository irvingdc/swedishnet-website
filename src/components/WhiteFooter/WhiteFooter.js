import React from "react";
import classes from "./WhiteFooter.module.css";
import { f1, f2, f3, f4, f5, logo_dark } from "../../images";

export default () => {
  let logos = [f1, f2, f4, f3, f5];
  return (
    <div className={classes.container}>
      <div className={classes.logos}>
        <img src={logo_dark} alt="logo" className={classes.mainLogo} />
        <div className={classes.list}>
          {logos.map((it, index) => (
            <img src={it} key={index} alt="logo" />
          ))}
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
