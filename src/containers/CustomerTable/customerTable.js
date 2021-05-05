import React, { useEffect, useState, useMemo } from "react";
import { useLazyQuery } from "@apollo/client";
import ContentTable from "../../components/ContentTable";
import MenuWrapper from "../../components/MenuWrapper";
import { GET_CUSTOMERS } from "../../graphql/queries";
import { DELETE_CUSTOMER } from "../../graphql/mutations";
import classes from "./customerTable.module.css";

const CustomerTable = () => {
  const [data, setData] = useState([]);
  const [getCustomers, { data: customersData }] = useLazyQuery(
    GET_CUSTOMERS
  );

  const [removeCustomers, { data: removeCustomersData }] = useLazyQuery(
    DELETE_CUSTOMER
  );

  useEffect(() => {
    getCustomers();
    if (customersData) {
      setData(customersData.customers);
    }
  }, [customersData]);

  const handleCustomerEdit = () => {
    // history.push("/");
    console.log(99);
  };

  const handleCustomerRemove = () => {
    // removeCustomers();
    console.log(88);
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
        Cell: (row) => {
          console.log(row, 88);
          return (
            <div
              onClick={handleCustomerRemove}
              style={{
                color: row.row.values.column2 ? "blue" : "red",
                fontWeight: 600,
              }}
            >
              <span
                className={classes.edit}
                onClick={handleCustomerEdit}
              ></span>
              <span
                className={classes.remove}
                onClick={handleCustomerRemove}
              ></span>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <MenuWrapper>
      <div className={classes.section}>
        <h2>Welcome John</h2>
        <h4>What du you like to do?</h4>
        <ContentTable
          columns={columns}
          data={data}
          addProduct="/add-product"
        />
      </div>
    </MenuWrapper>
  );
};

export default CustomerTable;
