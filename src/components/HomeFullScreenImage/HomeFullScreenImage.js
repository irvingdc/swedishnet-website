import React from "react";
import classes from "./HomeFullScreenImage.module.css";

export default ({ img, title }) => (
  <div
    className={classes.container}
    style={{
      background: `url(${img}) center center / contain no-repeat`,
      backgroundColor: "black"
    }}
  >
    <h1>{title}</h1>
  </div>
);
