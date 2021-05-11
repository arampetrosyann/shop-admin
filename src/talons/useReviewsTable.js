import React, { useMemo } from "react";

const useReviewsTable = (props) => {
  const data = useMemo(
    () => [
      {
        id: 0,
        column1: "01.01.2021",
        column2: "Janet",
        column3: "Lorem, ipsum dolor.",
        column4: 4,
      },
      {
        id: 1,
        column1: "01.01.2021",
        column2: "Janet",
        column3: "Lorem, ipsum dolor.",
        column4: 4,
      },
      {
        id: 2,
        column1: "01.01.2021",
        column2: "Janet",
        column3: "Lorem, ipsum dolor.",
        column4: 4,
      },
      {
        id: 3,
        column1: "01.01.2021",
        column2: "Janet",
        column3: "Lorem, ipsum dolor.",
        column4: 4,
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
      },
      {
        Header: "Column 3",
        accessor: "column3",
      },
      {
        Header: "Column 4",
        accessor: "column4",
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
        Header: "Column 6",
        accessor: "column6",
        Cell: (row) => (
          <div
            style={{
              color: row.row.values.column2 ? "blue" : "red",
              fontWeight: 600,
            }}
          >
            <span className={props.edit}></span>
            <span className={props.remove}></span>
          </div>
        ),
      },
    ],
    []
  );

  return { data, columns };
};

export default useReviewsTable;
