import React from "react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  useRowSelect,
  usePagination,
} from "react-table";
import { Link } from "react-router-dom";
import Checkbox from "../../components/Checkbox";
import classes from "./contentTable.module.css";
import SearchInput from "../SearchInput";

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
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns: props.columns,
      data: props.data,
    },
    useGlobalFilter,
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

  const { globalFilter } = state;

  return (
    <div className={classes.section}>
      <div className={classes.quickActions}>
        <div className={classes.quickActionsButtons}>
          <Link
            to={props.addProduct}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className={classes.addButton}>
              <span className={classes.add}></span>
            </button>
          </Link>
          {/* <Link to={props.addProduct}>
            <button
              className={
                selectedFlatRows.length === rows.length
                  ? classes.removeButton
                  : classes.disabledRemoveButton
              }
            >
              <span className={classes.removeAll}></span>
            </button>
          </Link> */}
        </div>
        <SearchInput
          value={globalFilter}
          onChange={setGlobalFilter}
          placeholder="Search..."
        />
      </div>
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
              className={canNextPage ? classes.nextPage : classes.disabled}
              onClick={() => nextPage()}
            >
              {"next"}
            </button>
            <span>Pages {pageOptions.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTable;
