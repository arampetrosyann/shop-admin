import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../../graphql/queries";
import MenuWrapper from "../../components/MenuWrapper";
import ContentTable from "../../components/ContentTable";
import image1 from "../../assets/images/best-gift.jpg";
import image2 from "../../assets/images/book-author.jpg";
import image3 from "../../assets/images/coffee-cup.jpg";
import classes from "./productTable.module.css";

const ProductTable = () => {
  const { firstName } = useSelector((state) => state.admin);
  const history = useHistory();

  const { data: productData } = useQuery(PRODUCTS);

  console.log(productData, 88);

  const handleEdit = () => {
    history.push("/");
  };

  const data = useMemo(() => [
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
  ]);

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
        Cell: (row) => (
          <div
            style={{
              color: row.row.values.column2 ? "blue" : "red",
              fontWeight: 600,
            }}
          >
            <span className={classes.edit} onClick={handleEdit}></span>
            <span className={classes.remove}></span>
          </div>
        ),
      },
    ],
    []
  );
  return (
    <MenuWrapper activeClass={0}>
      <div className={classes.section}>
        <h2>Բարի Գալուստ {firstName}</h2>
        <ContentTable
          page="Ապրանքների"
          columns={columns}
          data={data}
          add="/add-product"
        />
      </div>
    </MenuWrapper>
  );
};

export default ProductTable;
