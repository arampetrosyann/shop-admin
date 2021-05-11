import React from "react";
import classes from "./buttonMassRemove.module.css";

const ButtonMassRemove = (props) => {
  return (
    <button
      //   className={
      //     selectedFlatRows.length > 0
      //       ? classes.removeButton
      //       : classes.disabledRemoveButton
      //   }
      className={classes.removeButton}
      onClick={props.handleCustomersMassRemoveButton}
    >
      <span className={classes.removeAll}></span>
    </button>
  );
};

export default ButtonMassRemove;
