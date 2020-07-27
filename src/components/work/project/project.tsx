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

  return (
    <Fade cascade direction="left">
      <div
        className={classes.gridItem}
        style={{
          backgroundColor: props.color,
          textTransform: showDescription ? "none" : "uppercase",
          fontWeight: showDescription ? 400 : 900,
        }}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        {showDescription ? props.description : props.name}
      </div>
    </Fade>
  );
};

export default Project;
