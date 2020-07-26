import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={require("../../assets/logo.png")} alt="logo" />
        </div>

        <div className={classes.navItem}>
          <a href="#work">my work</a>
        </div>
        <div className={classes.navItem}>
          <div className={classes.contact}>contact</div>

          <div className={classes.links}>
            <a
              href="https://www.linkedin.com/in/prateeksoni47/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icon} icon={faLinkedin} />
            </a>
            <a
              href="https://www.github.com/proforty7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icon} icon={faGithub} />
            </a>
            <a
              href="https://www.instagram.com/pro__47/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/prateek.soni.731135"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icon} icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
