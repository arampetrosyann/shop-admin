import React, { useState } from "react";
import Layout from "../../components/Layout";
import Checkbox from "../../components/Checkbox";
import classes from "./articleContent.module.css";

const itemArray = [
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
    column2: 100,
    column3: "Lorem, ipsum dolor.",
    column4: "Lorem ipsum.",
    column5: "Lorem ipsum.",
  },
  {
    id: 2,
    column1: "Lorem, ipsum dolor.",
    column2: 100,
    column3: "Lorem, ipsum dolor.",
    column4: "Lorem ipsum.",
    column5: "Lorem ipsum.",
  },
  {
    id: 3,
    column1: "Lorem, ipsum dolor.",
    column2: 100,
    column3: "Lorem, ipsum dolor.",
    column4: "Lorem ipsum.",
    column5: "Lorem ipsum.",
  },
];

const ArticleContent = () => {
  const [checked, setChecked] = useState([]);

  const handleChecked = (id) => {
    const result = checked.includes(id)
      ? checked.filter((x) => x !== id)
      : [...checked, id];
    setChecked(result);
  };

  const checkAll = () => {};
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
            <table>
              <thead>
                <tr>
                  <th>
                    <Checkbox
                      classes={{ checkbox: classes.contentCheckbox }}
                      checked={checked}
                      onChange={checkAll}
                    />
                  </th>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  <th>Column 4</th>
                  <th>Column 5</th>
                </tr>
              </thead>
              <tbody>
                {itemArray.map((el, idx) => {
                  return (
                    <tr key={idx}>
                      <td>
                        <Checkbox
                          classes={{ checkbox: classes.contentCheckbox }}
                          checked={checked.includes(el.id)}
                          onChange={() => handleChecked(el.id)}
                        />
                      </td>
                      <td>{el.column1}</td>
                      <td>{el.column2}</td>
                      <td>{el.column3}</td>
                      <td>{el.column4}</td>
                      <td>{el.column5}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleContent;
