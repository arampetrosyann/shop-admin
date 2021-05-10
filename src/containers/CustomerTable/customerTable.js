import React, { useEffect, useMemo } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContentTable from "../../components/ContentTable";
import MenuWrapper from "../../components/MenuWrapper";
import { GET_CUSTOMERS } from "../../graphql/queries";
import { DELETE_CUSTOMER } from "../../graphql/mutations";
import classes from "./customerTable.module.css";

const CustomerTable = () => {
  const { firstName } = useSelector((state) => state.admin);
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
        Header: "Անուն",
        accessor: "firstname",
      },
      {
        Header: "Ազգանուն",
        accessor: "lastname",
      },
      {
        Header: "Էլ. հասցե",
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
    <MenuWrapper activeClass={1}>
      <div className={classes.section}>
        <h2>Բարի Գալուստ {firstName}</h2>
        <ContentTable
          page="Հաճախորդների"
          columns={columns}
          data={customersData ? customersData.customers : []}
          add="/add-customer"
        />
      </div>
    </MenuWrapper>
  );
};

export default CustomerTable;
