import React from "react";
import defaultClasses from "./orders.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useOrders from "../../talons/useOrders";
import MenuWrapper from "../../components/MenuWrapper";
import ContentTable from "../../components/ContentTable";
import ButtonMassRemove from "../../components/ButtonMassRemove";

const Orders = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const {
    data,
    columns,
    handleOrdersMassIds,
    handleMassDeleteOrder,
    idsArray,
  } = useOrders({ classes });

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <h1 className={classes.heading}>Պատվերներ</h1>

        <div className={classes.container}>
          <div className={classes.controlBox}>
            <ButtonMassRemove
              handleMassRemoveButton={handleMassDeleteOrder}
              idsArray={idsArray}
            />

            <div className={classes.totalBox}>
              <p className={classes.total}>
                {data ? `Ընդհանուր - ${data.adminOrders.total}` : "..."}
              </p>
            </div>
          </div>
          <ContentTable
            page="Պատվերներ"
            columns={columns}
            data={data ? data.adminOrders.items : []}
            handleMassIds={handleOrdersMassIds}
          />
        </div>
      </div>
    </MenuWrapper>
  );
};

export default Orders;
