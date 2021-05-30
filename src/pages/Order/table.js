import React from "react";
import { useTable, useRowSelect, useSortBy } from "react-table";
import defaultClasses from "./table.module.css";
import mergeClasses from "../../helpers/mergeClasses";

const Table = (props) => {
  const { columns, data, title = "" } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect
  );

  return (
    <div className={classes.container}>
      {title ? (
        <div className={classes.header}>
          <h3>{title}</h3>
        </div>
      ) : null}
      <div className={classes.tableContainer}>
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
            {rows.slice(0, 10).map((row) => {
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
      </div>
    </div>
  );
};

export default Table;
