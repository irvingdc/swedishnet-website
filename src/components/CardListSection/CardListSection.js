import React from "react";
import classes from "./CardListSection.module.css";
import SectionHeader from "components/SectionHeader/SectionHeader";

export default ({ children, img, style, title }) => (
  <div id="news">
    {title ? <SectionHeader title={title} /> : null}
    <div
      className={classes.container}
      style={{
        background: `url(${img}) center center / cover no-repeat`,
        ...style,
      }}
    >
      {children}
      <span />
    </div>
  </div>
);
