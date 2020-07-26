import React, { FunctionComponent, useState } from "react";
import classes from "./project.module.scss";

interface projectProps {
  name: string;
  color: string;
  description: string;
}

const Project: FunctionComponent<projectProps> = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className={classes.gridItem}
      style={{ backgroundColor: props.color }}
      onClick={handleClick}
    >
      {showDescription ? props.description : props.name}
    </div>
  );
};

export default Project;
