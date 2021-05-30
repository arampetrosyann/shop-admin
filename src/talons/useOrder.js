import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router-dom";
import { ORDER } from "../graphql/queries";
import { CHANGE_ORDER_STATUS, DELETE_ORDER } from "../graphql/mutations";

const useOrder = (props) => {
  const { classes } = props;
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const { data } = useQuery(ORDER, {
    variables: { orderId: id },
    fetchPolicy: "no-cache",
  });
  const [deleteOrder] = useMutation(DELETE_ORDER, {
    variables: { orderId: id },
  });
  const [changeOrderStatus] = useMutation(CHANGE_ORDER_STATUS);

  const handleDeleteOrder = useCallback(async () => {
    await deleteOrder();

    history.replace("/orders");
  }, [history]);

  const handleOrderStatusChange = useCallback(
    async (newStatus) => {
      if (newStatus !== status) {
        await changeOrderStatus({
          variables: {
            orderId: id,
            status: newStatus,
          },
        });
      }

      setStatus(newStatus);
    },
    [id, status]
  );

  const orderItemsTable = useMemo(() => {
    return [
      {
        Header: "Անվանում",
        accessor: "name",
      },
      {
        Header: "Գին",
        accessor: "price",
        Cell: (row) => {
          return <span>{`${row.row.original.price} $`}</span>;
        },
      },
      {
        Header: "Քանակ",
        accessor: "quantity",
      },
      {
        Header: "Ընդհանուր",
        accessor: "total",
        Cell: (row) => {
          return (
            <span className={classes.itemTotal}>
              {`${row.row.original.total} $`}
            </span>
          );
        },
      },
    ];
  }, [status, classes]);

  useEffect(() => {
    if (data) {
      setStatus(data.adminOrder.orderStatus);
    }
  }, [data]);

  return {
    data,
    handleDeleteOrder,
    orderItemsTable,
    status,
    handleOrderStatusChange,
  };
};

export default useOrder;
