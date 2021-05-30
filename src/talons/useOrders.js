import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ORDERS } from "../graphql/queries";
import { DELETE_ORDER, DELETE_MASS_ORDERS } from "../graphql/mutations";

const useOrders = (props) => {
  const { classes } = props;
  const [idsArray, setIdsArray] = useState([]);
  const { data, refetch } = useQuery(ORDERS, { fetchPolicy: "no-cache" });
  const [deleteOrder] = useMutation(DELETE_ORDER);
  const [deleteMassOrders] = useMutation(DELETE_MASS_ORDERS);

  const handleDeleteOrder = useCallback(
    async (id) => {
      await deleteOrder({
        variables: {
          orderId: id,
        },
      });

      refetch();
    },
    [refetch]
  );

  const handleMassDeleteOrder = useCallback(
    async (ids) => {
      await deleteMassOrders({
        variables: {
          orderIds: ids,
        },
      });

      refetch();
    },
    [refetch]
  );

  const handleOrdersMassIds = useCallback(
    (ids) => {
      if (idsArray.length !== ids.length) {
        setIdsArray(ids);
      }
    },
    [idsArray, setIdsArray]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Կոդ",
        accessor: "orderNumber",
        Cell: (row) => {
          const { orderNumber } = row.row.original;

          return <span>{`#${orderNumber}`}</span>;
        },
      },
      {
        Header: "հաճախորդ",
        accessor: "email",
        Cell: (row) => {
          const { email, firstname } = row.row.original.customer;

          return (
            <div className={classes.customer}>
              <span className={classes.firstName}>{firstname}</span>
              <span>{email}</span>
            </div>
          );
        },
      },
      {
        Header: "Գումար",
        accessor: "grandTotal",
      },
      {
        Header: "Քանակ",
        accessor: "totalQty",
      },
      {
        Header: "Կարգավիճակ",
        accessor: "orderStatus",
      },
      {
        Header: "",
        accessor: "column6",
        Cell: (row) => {
          return (
            <div>
              <span
                className={classes.remove}
                onClick={() => handleDeleteOrder(row.row.original.id)}
              />
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "column7",
        Cell: (row) => {
          return (
            <div>
              <Link
                to={`/order/${row.row.original.id}`}
                className={classes.viewLink}
              >
                View
              </Link>
            </div>
          );
        },
      },
    ],
    [classes]
  );

  return {
    data,
    refetch,
    columns,
    handleDeleteOrder,
    handleMassDeleteOrder,
    handleOrdersMassIds,
    idsArray,
  };
};

export default useOrders;
