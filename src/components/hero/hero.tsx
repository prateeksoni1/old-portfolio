import React from "react";
import classes from "./hero.module.scss";
import Typist from "react-typist";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.darken}>
        <div className={classes.heroText}>
          <Typist>
            <span className={classes.hello}>Hello!</span> <br />
            <br />
            <span className={classes.main}>I'm a full stack web developer</span>
          </Typist>
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
