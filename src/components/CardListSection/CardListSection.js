import React from "react";
import classes from "./CardListSection.module.css";

export default ({ children, img, style }) => (
  <div
    className={classes.container}
    style={{
      background: `url(${img}) center center / cover no-repeat`,
      ...style
    }}
  >
    {children}
    <span></span>
  </div>
);
