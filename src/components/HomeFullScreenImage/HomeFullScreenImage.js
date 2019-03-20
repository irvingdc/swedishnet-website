import React from "react";
import classes from "./HomeFullScreenImage.module.css";
import { Link } from "gatsby";

export default ({ img, title, lineLeft, lineWidth, links }) => (
  <div
    className={classes.container}
    style={{
      background: `url(${img}) center center / cover no-repeat`
    }}
  >
    <h1>{title}</h1>
    <div className={classes.list}>
      {links.map((it, index) => (
        <Link to={it.url} key={index}>
          {it.title}
        </Link>
      ))}
    </div>
    <div className={classes.bottomLine}>
      <span style={{ width: lineWidth, left: lineLeft }} />
    </div>
  </div>
);
