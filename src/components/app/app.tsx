import React from "react";
import classes from "./app.module.scss";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import Work from "../work/work";

const App = () => {
  return (
    <div className={classes.app}>
      <Navbar />
      <Hero />
      <div className={classes.column}>
        <Work />
      </div>
    </div>
  );
};

export default App;
