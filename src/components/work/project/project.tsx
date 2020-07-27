import React, { FunctionComponent, useState } from "react";
import classes from "./project.module.scss";
import { Fade } from "react-awesome-reveal";

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
    <Fade cascade direction="left">
      <div
        className={classes.gridItem}
        style={{ backgroundColor: props.color }}
        onClick={handleClick}
      >
        {showDescription ? props.description : props.name}
      </div>
    </Fade>
  );
};

export default Project;
