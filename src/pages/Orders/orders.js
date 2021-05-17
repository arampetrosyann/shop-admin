import React from "react";
import defaultClasses from "./orders.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useOrders from "../../talons/useOrders";
import MenuWrapper from "../../components/MenuWrapper";

const Orders = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const {} = useOrders();

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Պատվերներ</h1>
      </div>
    </MenuWrapper>
  );
};

export default Orders;
