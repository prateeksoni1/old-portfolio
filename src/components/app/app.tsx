import React from "react";
import classes from "./app.module.scss";
import Hero from "../hero/hero";

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.column}>
        <Hero />
      </div>
    </div>
  );
};

export default App;
