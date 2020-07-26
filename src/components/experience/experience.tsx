import React, { FunctionComponent } from "react";
import classes from "./experience.module.scss";
import ExpItem from "./expItem/expItem";

const experiences = [
  {
    name: "Indshine",
    color: "#2980B9",
    sub: "Software Development Intern",
    image: {
      src:
        "https://www.indshine.com/static/indshine-logo-b9e1327356515dde7721b2fb35ed8479.png",
      alt: "indshine logo",
    },
  },
  {
    name: "iAugmentor Labs",
    color: "#16A085",
    sub: "Frontend Development Intern",
    image: {
      src:
        "https://dwshtw0lx674k.cloudfront.net/websiteStaticFiles/images/footer_logo.a97cb5384a63.png",
      alt: "iaugmentor logo",
    },
  },
];

const renderExperiences = React.Children.toArray(
  experiences.map((exp, i) => (
    <ExpItem
      name={exp.name}
      color={exp.color}
      sub={exp.sub}
      image={exp.image}
    />
  ))
);

const Experience: FunctionComponent = () => {
  return (
    <div className={classes.experience} id="experience">
      <div className={classes.container}>
        <h1 className={classes.head}>my experience</h1>
        <div className={classes.grid}>{renderExperiences}</div>
      </div>
    </div>
  );
};

export default Experience;
