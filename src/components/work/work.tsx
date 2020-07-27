import React from "react";
import classes from "./work.module.scss";
import Project from "./project/project";

const projects = [
  {
    name: "Matter",
    color: "#2980B9",
    description: "",
  },
  {
    name: "Bloggr",
    color: "#16A085",
    description: "",
  },
  {
    name: "Keep",
    color: "#487EB0",
    description: "",
  },
  {
    name: "Drag Jump",
    color: "#1289A7",
    description: "",
  },
  {
    name: "Line Strike",
    color: "#487EB0",
    description: "",
  },
  {
    name: "More",
    color: "#006266",
    description: "",
  },
];

const renderProject = () =>
  React.Children.toArray(
    projects.map((project, i) => (
      <Project
        name={project.name}
        color={project.color}
        description={project.description}
      />
    ))
  );

const Work = () => {
  return (
    <div id="work" className={classes.work}>
      <div className={classes.container}>
        <h1 className={classes.head}>some of my personal projects</h1>
        <div className={classes.grid}>{renderProject()}</div>
      </div>
    </div>
  );
};

export default Work;
