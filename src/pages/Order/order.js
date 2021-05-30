import React from "react";
import defaultClasses from "./order.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import useOrder from "../../talons/useOrder";
import MenuWrapper from "../../components/MenuWrapper";
import Button from "../../components/Button";
import Table from "./table";
import Select from "../../components/Select";
import getNormalDate from "../../helpers/getNormalDate";

const Order = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const {
    data,
    handleDeleteOrder,
    orderItemsTable,
    status,
    handleOrderStatusChange,
  } = useOrder({
    classes,
  });

  return (
    <MenuWrapper>
      <div className={classes.root}>
        <div className={classes.header}>
          <h1 className={classes.heading}>
            Պատվեր {data ? `#${data.adminOrder.orderNumber}` : "..."}
          </h1>

          <Button
            onClick={handleDeleteOrder}
            classes={{ root: classes.btn }}
          >
            <span className={classes.removeIcon} />
          </Button>
        </div>

        <div className={classes.container}>
          <div className={classes.orderDetails}>
            {data ? (
              <>
                <div>
                  <span className={classes.detailsName}>{"Կոդ:"}</span>
                  {`#${data.adminOrder.orderNumber}`}
                </div>
                <div>
                  <span className={classes.detailsName}>
                    {"հաճախորդ:"}
                  </span>
                  <div className={classes.customer}>
                    <span className={classes.customerFirstName}>
                      Անուն - {data.adminOrder.customer.firstname}
                    </span>
                    <span>
                      Էլ. Հասցե - {data.adminOrder.customer.email}
                    </span>
                  </div>
                </div>
                <div>
                  <span className={classes.detailsName}>{"Գումար:"}</span>
                  {`${data.adminOrder.subTotal} $`}
                </div>
                <div>
                  <span className={classes.detailsName}>{"Առաքում:"}</span>
                  {`${data.adminOrder.shippingTotal} $`}
                </div>
                <div>
                  <span className={classes.detailsName}>
                    {"Ընդհանուր:"}
                  </span>
                  <span className={classes.itemTotal}>
                    {`${data.adminOrder.grandTotal} $`}
                  </span>
                </div>

                <div>
                  <span className={classes.detailsName}>{"Քանակ:"}</span>
                  {data.adminOrder.totalQty}
                </div>
                <div>
                  <span className={classes.detailsName}>
                    {"Ստեղծվել է:  "}
                  </span>
                  {getNormalDate(Number(data.adminOrder.createdAt))}
                </div>
                <div>
                  <span className={classes.detailsName}>
                    {"Կարգավիճակ:"}
                  </span>
                  {
                    <div className={classes.selectBox}>
                      <Select
                        id="orderStatus"
                        label={status}
                        options={[
                          { value: "pending", label: "pending" },
                          { value: "active", label: "active" },
                          { value: "done", label: "done" },
                        ]}
                        onChange={(value) =>
                          handleOrderStatusChange(value)
                        }
                      />
                    </div>
                  }
                </div>
              </>
            ) : null}
          </div>

          <div className={classes.itemsTableContainer}>
            <Table
              title="Ապրանքներ"
              columns={orderItemsTable}
              data={data ? data.adminOrder.items : []}
            />
          </div>
        </div>
      </div>
    </MenuWrapper>
  );
};

export default Order;
