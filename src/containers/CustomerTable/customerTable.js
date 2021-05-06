import React, { useEffect, useState, useMemo } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
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

  const [removeCustomers, { data: removeCustomersData }] = useMutation(
    DELETE_CUSTOMER
  );

  console.log(data, 33);

  useEffect(() => {
    getCustomers();
    if (customersData) {
      setData(customersData.customers);
    }
  }, [customersData]);

  const handleCustomerEdit = () => {
    // history.push("/");
  };

  const handleCustomerRemove = (id) => {
    removeCustomers({
      variables: {
        id,
      },
    });
    setData((data) => data.filter((el) => el.id !== id));
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
              <span
                className={classes.edit}
                onClick={handleCustomerEdit}
              ></span>
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
          data={data}
          addProduct="/add-customer"
        />
      </div>
    </MenuWrapper>
  );
};

export default CustomerTable;
