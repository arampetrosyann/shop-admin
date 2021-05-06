import React, { useEffect, useState, useMemo } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import ContentTable from "../../components/ContentTable";
import MenuWrapper from "../../components/MenuWrapper";
import { GET_CUSTOMERS } from "../../graphql/queries";
import { DELETE_CUSTOMER } from "../../graphql/mutations";
import classes from "./customerTable.module.css";

const CustomerTable = () => {
  const [getCustomers, { data: customersData }] = useLazyQuery(
    GET_CUSTOMERS,
    {
      fetchPolicy: "no-cache",
    }
  );

  const [removeCustomers] = useMutation(DELETE_CUSTOMER);

  useEffect(() => {
    getCustomers();
  }, []);

  const handleCustomerRemove = async (id) => {
    await removeCustomers({
      variables: {
        id,
      },
    });

    getCustomers();
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
          return (
            <div>
              <Link
                to={`/customer/${row.row.original.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={classes.edit}></span>
              </Link>
              <span
                className={classes.remove}
                onClick={() => handleCustomerRemove(row.row.original.id)}
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
          data={customersData ? customersData.customers : []}
          addProduct="/add-customer"
        />
      </div>
    </MenuWrapper>
  );
};

export default CustomerTable;
