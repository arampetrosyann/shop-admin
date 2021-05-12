import React from "react";
import classes from "./buttonMassRemove.module.css";

const ButtonMassRemove = (props) => {
  return (
    <button
      className={
        props.idsArray.length > 0
          ? classes.removeButton
          : classes.disabledRemoveButton
      }
      onClick={props.handleMassRemoveButton}
    >
      <span className={classes.removeAll}></span>
    </button>
  );
};

export default ButtonMassRemove;
