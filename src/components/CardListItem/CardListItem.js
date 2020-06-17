import React, { Fragment } from "react";
import classes from "./CardListItem.module.css";
import VerticalText from "../VerticalText/VerticalText";

export default ({ title, head, children, inverted, extraContent, content }) => (
  <Fragment>
    <div className={classes.container}>
      <div className={classes.content}>
        <VerticalText>{title}</VerticalText>
        <div
          className={[classes.text, inverted ? classes.inverted : ""].join(" ")}
        >
          <h1>{head}</h1>
          <p>{children}</p>
          {content}
        </div>
      </div>
    </div>
    {extraContent ? (
      <div className={classes.extra}>
        <p>{extraContent}</p>
      </div>
    ) : null}
  </Fragment>
);
