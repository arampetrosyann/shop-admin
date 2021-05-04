import React, { useEffect, useState, useMemo } from "react";
import { useLazyQuery } from "@apollo/client";
import ContentTable from "../../components/ContentTable";
import { GET_CUSTOMERS } from "../../graphql/queries";
// import { useSelector, useDispatch } from "react-redux";
// import { getCustomers } from "../../store/customers/action";
import classes from "./customerTable.module.css";

const CustomerTable = () => {
  //   const dispatch = useDispatch();
  //   const { getCustomer } = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [getCustomers, { data: customersData }] = useLazyQuery(
    GET_CUSTOMERS
  );

  useEffect(() => {
    getCustomers();
    if (customersData) {
      setData(customersData.customers);
    }
  }, [customersData]);

  const handleCustomerEdit = () => {
    history.push("/");
  };

  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "checkbox",
      },
      {
        Header: "Firstname",
        accessor: "firstname",
      },
      {
        Header: "Lastname",
        accessor: "lastname",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "",
        accessor: "column6",
        Cell: (row) => (
          <div
            style={{
              color: row.row.values.column2 ? "blue" : "red",
              fontWeight: 600,
            }}
          >
            <span
              className={classes.edit}
              onClick={handleCustomerEdit}
            ></span>
            <span className={classes.remove}></span>
          </div>
        ),
      },
    ],
    []
  );

  return <ContentTable name="John" columns={columns} data={data} />;
};

export default CustomerTable;
