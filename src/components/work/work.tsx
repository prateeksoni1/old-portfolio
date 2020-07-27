import React from "react";
import classes from "./work.module.scss";
import Project from "./project/project";

const projects = [
  {
    name: "Matter",
    color: "#2980B9",
    description:
      "A Project Management Web App, with fully customizable roles and permissions.",
  },
  {
    name: "Bloggr",
    color: "#16A085",
    description: "A blogging website to post blogs with a rich text editor",
  },
  {
    name: "Snake",
    color: "#487EB0",
    description: "The Classic Snake Game with Vanilla JS",
  },
  {
    name: "Keep",
    color: "#487EB0",
    description: "A To-Do List Manager with Authentication",
  },
  {
    name: "Drag Jump",
    color: "#1289A7",
    description: "A Flappy Bird like Game for Android made with Unity",
  },
  {
    name: "Line Strike",
    color: "#487EB0",
    description: "A 2d game with Fruit Ninja like controls",
  },
  {
    name: "More",
    color: "#006266",
    description: "More such projects available at my github",
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
