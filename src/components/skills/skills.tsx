import React, { FunctionComponent } from "react";
import classes from "./skills.module.scss";

const skills = {
  frontend: [
    "html",
    "css",
    "sass/scss",
    "javascript",
    "ecmascript",
    "typescript",
    "jquery",
    "react",
    "redux",
    "formik",
  ],
  backend: ["nodejs", "express", "mongodb", "mysql", "rest"],
};

const Skills: FunctionComponent = () => {
  return (
    <div className={classes.skills}>
      <div className={classes.container}>
        <h1 className={classes.head}>my skills</h1>
        <div className={classes.pillTitle}>Frontend</div>
        <div className={classes.pillContainer}>
          {React.Children.toArray(
            skills.frontend.map((skill) => (
              <span className={classes.pill}>{skill}</span>
            ))
          )}
        </div>
        <div className={classes.pillTitle}>Backend</div>
        <div className={classes.pillContainer}>
          {React.Children.toArray(
            skills.backend.map((skill) => (
              <span className={classes.pill}>{skill}</span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
