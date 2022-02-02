import React from "react";
import classes from "./Article.module.css";
import { link, logo } from "../../images";

export default ({ img, title, content, url, align }) => (
  <div className={classes.container}>
    <div className={classes.image}>
      <div
        className={classes.imgContainer}
        style={{
          background: `url(${img || logo}) ${align || "center"} center / ${
            img ? "cover" : "contain"
          } no-repeat`,
        }}
      >
        {url ? (
          <a rel="noopener noreferrer" href={url} target="_blank">
            <span>
              <img src={link} alt="icon" />
            </span>
          </a>
        ) : null}
      </div>
    </div>
    <div className={classes.text}>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  </div>
);
