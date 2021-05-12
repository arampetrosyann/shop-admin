import React, { useEffect } from "react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  useRowSelect,
  usePagination,
} from "react-table";
import Checkbox from "../../components/Checkbox";
import classes from "./contentTable.module.css";

const ContentTable = (props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    page,
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

  const dataIds = selectedFlatRows.map(({ original: { id } }) => {
    return id;
  });

  useEffect(() => {
    props.handleMassIds(dataIds);
  }, [dataIds]);

  return (
    <div className={classes.section}>
      <div className={classes.contentBox}>
        <div className={classes.contentBoxTitle}>
          <h3>{props.page} ցուցակ</h3>
        </div>
        <div className={classes.contentBoxContent}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, ind) => (
                <tr key={ind} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, ind) => (
                    <th
                      key={ind}
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
              {page.slice(0, 10).map((row) => {
                prepareRow(row);
                return (
                  <tr key={row.id} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td key={cell.row.id} {...cell.getCellProps()}>
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
              նախորդ
            </button>
            <button
              className={canNextPage ? classes.nextPage : classes.disabled}
              onClick={() => nextPage()}
            >
              հաջորդ
            </button>
            <span>Էջ {pageOptions.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTable;
