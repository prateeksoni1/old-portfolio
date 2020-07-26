import React, { FunctionComponent } from "react";
import classes from "./expItem.module.scss";

type expItemProps = {
  name: string;
  sub: string;
  color: string;
  image: {
    src: string;
    alt: string;
  };
};

const ExpItem: FunctionComponent<expItemProps> = (props) => {
  return (
    <div className={classes.gridItem} style={{ backgroundColor: props.color }}>
      <img src={props.image.src} alt={props.image.alt} />
      <div className={classes.head}>
        <div>{props.name}</div>
        <div className={classes.sub}>{props.sub}</div>
      </div>
    </div>
  );
};

export default ExpItem;
