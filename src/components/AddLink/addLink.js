import React from "react";
import { Link } from "react-router-dom";
import classes from "./addLink.module.css";

const AddLink = (props) => {
  return (
    <Link
      to={props.add}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <button className={classes.addButton}>
        <span className={classes.add}></span>
      </button>
    </Link>
  );
};

export default AddLink;
