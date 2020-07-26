import React from "react";
import classes from "./app.module.scss";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.column}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
