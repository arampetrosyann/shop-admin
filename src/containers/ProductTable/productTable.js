import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery, useMutation } from "@apollo/client";
import { PRODUCTS } from "../../graphql/queries";
import { DELETE_PRODUCT } from "../../graphql/mutations";
import MenuWrapper from "../../components/MenuWrapper";
import AddLink from "../../components/AddLink";
import ButtonMassRemove from "../../components/ButtonMassRemove";
import SearchInput from "../../components/Input";
import ContentTable from "../../components/ContentTable";
import classes from "./productTable.module.css";

const ProductTable = () => {
  const [idsArrayState, setIdsArrayState] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const { firstName } = useSelector((state) => state.admin);
  const { data: productData, refetch } = useQuery(PRODUCTS, {
    variables: { limit: 10, page: 1 },
  });
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const handleProductsMassIds = (productIds) => {
    if (idsArrayState.length !== productIds.length) {
      setIdsArrayState(productIds);
    }
  };

  const handleSearchInput = (e) => {
    setSearchInputValue(e.target.value);
  };

  const handleDeleteBtn = useCallback(
    async (id) => {
      await deleteProduct({ variables: { id } });

      refetch();
    },
    [refetch]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Անվանում",
        accessor: "title",
      },
      {
        Header: "Գին",
        accessor: "price",
        Cell: (row) => (
          <div className={classes.price}>{`${row.value} $`}</div>
        ),
      },
      {
        Header: "Ապրանքանիշ",
        accessor: "brand",
      },
      {
        Header: "Նկար",
        accessor: "image",
        Cell: (row) => {
          return (
            <div className={classes.tableImage}>
              <img src={row.value} alt="image" />
            </div>
          );
        },
      },
      {
        Header: "Նկարագրություն",
        accessor: "description",
        Cell: (row) => {
          return <div>{row.value}</div>;
        },
      },
      {
        Header: "",
        accessor: "column6",
        Cell: (row) => {
          const { _id } = row.row.original;

          return (
            <div
              style={{
                fontWeight: 600,
              }}
            >
              <Link
                to={`/product/${_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={classes.edit} />
              </Link>

              <span
                className={classes.remove}
                onClick={() => handleDeleteBtn(_id)}
              />
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
        <h2>Բարի Գալուստ {firstName}</h2>
        <div className={classes.quickActionsLinks}>
          <AddLink add="/add-product" />
        </div>
        <div className={classes.quickActionsButtons}>
          <ButtonMassRemove
            handleMassRemoveButton={() => {}}
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
          page="Ապրանքների"
          columns={columns}
          data={productData ? productData.products.products : []}
          handleMassIds={handleProductsMassIds}
        />
      </div>
    </MenuWrapper>
  );
};

export default ProductTable;
