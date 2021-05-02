import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import {
  useSortBy,
  useTable,
  useRowSelect,
  usePagination,
} from "react-table";
import Layout from "../../components/Layout";
import Checkbox from "../../components/Checkbox";
import classes from "./articleContent.module.css";

const ArticleContent = () => {
  const history = useHistory();

  const handleEdit = () => {
    history.push("/");
  };

  const data = useMemo(
    () => [
      {
        id: 0,
        column1: "Lorem, ipsum dolor.",
        column2: 100,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 1,
        column1: "Lorem, ipsum dolor.",
        column2: 200,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 2,
        column1: "Lorem, ipsum dolor.",
        column2: 500,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 3,
        column1: "Lorem, ipsum dolor.",
        column2: 400,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 4,
        column1: "Lorem, ipsum dolor.",
        column2: 400,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 5,
        column1: "Lorem, ipsum dolor.",
        column2: 200,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 6,
        column1: "Lorem, ipsum dolor.",
        column2: 300,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 7,
        column1: "Lorem, ipsum dolor.",
        column2: 900,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 8,
        column1: "Lorem, ipsum dolor.",
        column2: 500,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 9,
        column1: "Lorem, ipsum dolor.",
        column2: 600,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 10,
        column1: "Lorem, ipsum dolor.",
        column2: 700,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
      },
      {
        id: 11,
        column1: "Lorem, ipsum dolor.",
        column2: 800,
        column3: "Lorem, ipsum dolor.",
        column4: "Lorem ipsum.",
        column5: "Lorem ipsum.",
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    page,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <Layout>
      <div className={classes.section}>
        <h2>Welcome John</h2>
        <h4>What du you like to do?</h4>
        <div className={classes.contentBox}>
          <div className={classes.contentBoxTitle}>
            <h3>Content Box</h3>
            <div className={classes.contentBoxForm}>
              <span className={classes.contentBoxTitleTable}>Table</span>
              <span className={classes.contentBoxTitleForms}>Forms</span>
            </div>
          </div>
          <div className={classes.contentBoxContent}>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.slice(0, 10).map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={classes.pagination}>
              <button
                className={
                  canPreviousPage ? classes.previousPage : classes.disabled
                }
                onClick={() => previousPage()}
              >
                {"previous"}
              </button>
              <button
                className={
                  canNextPage ? classes.nextPage : classes.disabled
                }
                onClick={() => nextPage()}
              >
                {"next"}
              </button>
              <span>Pages {pageOptions.length}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleContent;