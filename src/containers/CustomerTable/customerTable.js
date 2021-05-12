import React, { useEffect, useMemo, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddLink from "../../components/AddLink";
import ButtonMassRemove from "../../components/ButtonMassRemove";
import SearchInput from "../../components/Input";
import ContentTable from "../../components/ContentTable";
import MenuWrapper from "../../components/MenuWrapper";
import { GET_CUSTOMERS } from "../../graphql/queries";
import {
  DELETE_CUSTOMER,
  DELETE_MASS_CUSTOMERS,
} from "../../graphql/mutations";
import classes from "./customerTable.module.css";

const CustomerTable = () => {
  const [idsArrayState, setIdsArrayState] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const { firstName } = useSelector((state) => state.admin);
  const [getCustomers, { data: customersData }] = useLazyQuery(
    GET_CUSTOMERS,
    {
      fetchPolicy: "no-cache",
    }
  );

  const [removeCustomer] = useMutation(DELETE_CUSTOMER);
  const [removeMassCustomers] = useMutation(DELETE_MASS_CUSTOMERS);

  useEffect(() => {
    getCustomers();
  }, []);

  const handleCustomerRemove = async (id) => {
    await removeCustomer({
      variables: {
        id,
      },
    });
    getCustomers();
  };

  const handleCustomersMassIds = (customerIds) => {
    if (idsArrayState.length !== customerIds.length) {
      setIdsArrayState(customerIds);
    }
  };

  const handleCustomersMassRemoveButton = async () => {
    await removeMassCustomers({
      variables: {
        customerIds: idsArrayState,
      },
    });
    getCustomers();
  };

  const handleSearchInput = (e) => {
    setSearchInputValue(e.target.value);
  };

  const columns = useMemo(
    () => [
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
        <div className={classes.quickActionsLinks}>
          <AddLink add="/add-customer" />
        </div>
        <div className={classes.quickActionsButtons}>
          <ButtonMassRemove
            handleMassRemoveButton={handleCustomersMassRemoveButton}
            idsArray={idsArrayState}
          />
          <SearchInput
            type="text"
            value={searchInputValue}
            onChange={handleSearchInput}
            placeholder="Փնտրել..."
          />
        </div>
        <ContentTable
          page="Հաճախորդների"
          columns={columns}
          data={customersData ? customersData.customers : []}
          handleMassIds={handleCustomersMassIds}
        />
      </div>
    </MenuWrapper>
  );
};

export default CustomerTable;
