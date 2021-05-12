import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../graphql/queries";
import MenuWrapper from "../../components/MenuWrapper";
import AddLink from "../../components/AddLink";
import ButtonMassRemove from "../../components/ButtonMassRemove";
import SearchInput from "../../components/Input";
import ContentTable from "../../components/ContentTable";
import image1 from "../../assets/images/best-gift.jpg";
import image2 from "../../assets/images/book-author.jpg";
import image3 from "../../assets/images/coffee-cup.jpg";
import classes from "./productTable.module.css";

const ProductTable = () => {
  const [idsArrayState, setIdsArrayState] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const { firstName } = useSelector((state) => state.admin);

  const { data: productData } = useQuery(PRODUCTS);

  const handleProductsMassIds = (productIds) => {
    if (idsArrayState.length !== productIds.length) {
      setIdsArrayState(productIds);
    }
  };

  const handleProductsMassRemoveButton = async () => {
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

  const data = useMemo(
    () => [
      {
        id: 0,
        column1: "Lorem, ipsum dolor.",
        column2: 100,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image1,
      },
      {
        id: 1,
        column1: "Lorem, ipsum dolor.",
        column2: 200,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image2,
      },
      {
        id: 2,
        column1: "Lorem, ipsum dolor.",
        column2: 500,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image3,
      },
      {
        id: 3,
        column1: "Lorem, ipsum dolor.",
        column2: 400,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image3,
      },
      {
        id: 4,
        column1: "Lorem, ipsum dolor.",
        column2: 400,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image2,
      },
      {
        id: 5,
        column1: "Lorem, ipsum dolor.",
        column2: 200,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image1,
      },
      {
        id: 6,
        column1: "Lorem, ipsum dolor.",
        column2: 300,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image1,
      },
      {
        id: 7,
        column1: "Lorem, ipsum dolor.",
        column2: 900,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image2,
      },
      {
        id: 8,
        column1: "Lorem, ipsum dolor.",
        column2: 500,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image3,
      },
      {
        id: 9,
        column1: "Lorem, ipsum dolor.",
        column2: 600,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image3,
      },
      {
        id: 10,
        column1: "Lorem, ipsum dolor.",
        column2: 700,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image2,
      },
      {
        id: 11,
        column1: "Lorem, ipsum dolor.",
        column2: 800,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: image1,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "checkbox",
      },
      {
        Header: "Column 1",
        accessor: "column1",
      },
      {
        Header: "Column 2",
        accessor: "column2",
        Cell: (row) => (
          <div
            style={{
              color: row.row.values.column2 ? "blue" : "red",
              fontWeight: 600,
            }}
          >
            ${row.value}
          </div>
        ),
      },
      {
        Header: "Column 3",
        accessor: "column3",
      },
      {
        Header: "Column 4",
        accessor: "column4",
      },
      {
        Header: "Column 5",
        accessor: "column5",
        Cell: (row) => (
          <div className={classes.tableImage}>
            <img src={row.value} alt="" />
          </div>
        ),
      },
      {
        Header: "Column 6",
        accessor: "column6",
        Cell: (row) => {
          return (
            <div>
              <Link
                to={`/product/${row.row.original.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className={classes.edit}></span>
              </Link>
              <span
                className={classes.remove}
                onClick={() => handleProductRemove(row.row.original.id)}
              ></span>
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <MenuWrapper activeClass={0}>
      <div className={classes.section}>
        <h2>Բարի Գալուստ {firstName}</h2>
        <div className={classes.quickActionsLinks}>
          <AddLink add="/add-product" />
        </div>
        <div className={classes.quickActionsButtons}>
          <ButtonMassRemove
            handleMassRemoveButton={handleProductsMassRemoveButton}
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
          data={data}
          handleMassIds={handleProductsMassIds}
        />
      </div>
    </MenuWrapper>
  );
};

export default ProductTable;
