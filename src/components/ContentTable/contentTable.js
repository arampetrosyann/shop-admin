import React from "react";
import {
  useSortBy,
  useTable,
  useRowSelect,
  usePagination,
} from "react-table";
import Layout from "../../components/Layout";
import Checkbox from "../../components/Checkbox";
import classes from "./contentTable.module.css";

const ContentTable = (props) => {
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
      columns: props.columns,
      data: props.data,
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
        <h2>Welcome {props.name}</h2>
        <h4>What du you like to do?</h4>
        <div className={classes.contentBox}>
          <div className={classes.contentBoxTitle}>
            <h3>Content Box</h3>
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

export default ContentTable;
