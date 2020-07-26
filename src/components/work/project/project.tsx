import React, { FunctionComponent } from "react";
import classes from "./project.module.scss";

interface projectProps {
  name: string;
  color: string;
  description: string;
}

const Project: FunctionComponent<projectProps> = (props) => {
  return (
    <div className={classes.gridItem} style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
};

export default Project;
