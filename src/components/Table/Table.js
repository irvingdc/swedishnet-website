import React, { useState } from "react";
import classes from "./Table.module.less";

let ArrowUp = () => <span className={classes.ArrowUp}></span>;
let ArrowDown = () => <span className={classes.ArrowDown}></span>;

export default ({ dataSource, columns }) => {
  var [sorter, setSorter] = useState(null);
  var [order, setOrder] = useState(true);

  let sort = (data) => {
    console.log("sorter", sorter);
    console.log("order", order);
    return sorter
      ? dataSource.sort((a, b) => {
          if (order) {
            return a[sorter] > b[sorter] ? 1 : -1;
          } else {
            return a[sorter] > b[sorter] ? -1 : 1;
          }
        })
      : dataSource;
  };

  let switchSort = (dataIndex) => {
    setSorter(dataIndex);
    setOrder(!order);
  };

  let renderArrow = (dataIndex) => {
    if (dataIndex === sorter) {
      return order ? <ArrowUp /> : <ArrowDown />;
    } else return null;
  };

  return (
    <div className={classes.container}>
      <table>
        <thead>
          <tr>
            {columns.map((it, key) => (
              <th key={key} onClick={() => switchSort(it.dataIndex)}>
                {it.title}
                {renderArrow(it.dataIndex)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sort(dataSource).map((row, key) => (
            <tr key={key}>
              {columns.map((col, key) => (
                <td key={key}>
                  {col.render
                    ? col.render(row[col.dataIndex], row)
                    : row[col.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
