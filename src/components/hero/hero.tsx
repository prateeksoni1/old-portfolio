import React from "react";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.darken}>
        <div className={classes.heroText}>
          <h2>Hello!</h2>
          <h1>I'm a full stack web developer</h1>
          <div className={classes.buttonContainer}>
            <a href="#work" className={classes.primary}>
              My work
            </a>
            <a href="#about">About me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
